import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Dropdown } from 'flowbite-react';
import logo from "../../assets/Navbar image/logo.png";
import { useCookies } from 'react-cookie';
import { FaUserCircle } from "react-icons/fa";

const CusomNav = () => {
  const [cookies, , removeCookie] = useCookies(['token']);
  const [userName, setUserName] = useState('');
  const [membershipType, setMembershipType] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    if (cookies.token) {
      const tokenUserId = cookies.token;
      setUserId(tokenUserId);
      fetchUserDetails(tokenUserId);
      fetchMembershipType(tokenUserId);
    }
  }, [cookies.token]);

  const fetchUserDetails = async (userId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/auth/user/details/?user_id=${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${cookies.token}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }
      const userData = await response.json();
      setUserName(userData.username);
    } catch (error) {
      console.error('Error fetching user details:', error.message);
    }
  };

  const fetchMembershipType = async (userId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/auth/user/details/?user_id=${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${cookies.token}`
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch membership details');
      }
      const membershipData = await response.json();
      setMembershipType(membershipData.membership.type);
    } catch (error) {
      console.error('Error fetching membership details:', error.message);
    }
  };

  const handleLogout = () => {
    removeCookie('token', { path: '/' });
    window.location.href = '/';
  };

  const isLoggedIn = !!cookies.token;

  return (
    <Navbar className="bg-white fixed z-10 w-full pb-2 border-b border-gray-200">
      <Navbar.Brand>
        <Link to="/">
          <img src={logo} alt="logo" className="h-12 w-auto py-2" />
        </Link>
      </Navbar.Brand>

      <div className="flex md:order-2 gap-2 items-center">
        {isLoggedIn ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <>
                <FaUserCircle size={30} className="text-gray-700" />
                <span className="ml-2 text-gray-700"> Hi {userName}! </span>
              </>
            }
          >
            <Dropdown.Item>
              <Link to="/settings">Settings</Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            {membershipType !== 'Customer' && (
              <>
                <Dropdown.Item>
                  <Link to="/addProperty">Add Property</Link>
                </Dropdown.Item>
                <Dropdown.Divider />
              </>
            )}
            {membershipType === 'Admin' && (
              <>
                <Dropdown.Item>
                  <Link to="/admin">Admin Panel</Link>
                </Dropdown.Item>
                <Dropdown.Divider />
              </>
            )}
            <Dropdown.Item>
              <Link to="/myDetails">My Details</Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>
              Sign out
            </Dropdown.Item>
          </Dropdown>
        ) : (
          <>
            <button className="px-4 py-2 text-white bg-green-700 rounded-full hover:bg-green-500">
              <Link to="/SignUp">Sign Up</Link>
            </button>
            <button className="px-4 py-2 text-white bg-green-700 rounded-full hover:bg-green-500">
              <Link to="/Login">Log in</Link>
            </button>
          </>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="rounded-lg">
        <Navbar.Link className="text-white bg-green-700 rounded-full hover:bg-green-500">
          <Link to="/" className="block px-4 py-2">Home</Link>
        </Navbar.Link>
        <Navbar.Link className="text-white bg-green-700 rounded-full hover:bg-green-500">
          <Link to="/about-us" className="block px-4 py-2">About Us</Link>
        </Navbar.Link>
        <Navbar.Link className="text-white bg-green-700 rounded-full hover:bg-green-500">
          <Link to="/contact" className="block px-4 py-2">Contact</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CusomNav;
