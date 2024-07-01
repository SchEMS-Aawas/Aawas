import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Dropdown } from 'flowbite-react';
import logo from "../../assets/Navbar image/logo.png";
import { useCookies } from 'react-cookie';
import { FaUserCircle } from "react-icons/fa";

const CusomNav = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const handleLogout = () => {
    // Remove the token from cookies
    removeCookie('token', { path: '/' });
    // Optionally, redirect to home or login page
    window.location.href = '/';
  };
  const isLoggedIn = !!cookies.token;

  const addproperty = () =>{
    window.location.href = '/AddProperty';
  }

  return (
    <Navbar className="bg-white fixed z-10 w-full pb-2 border-b border-gray-200  ">
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
            label={<FaUserCircle size={30} className="text-gray-700" />}
          >
            {/* <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">name@flowbite.com</span>
            </Dropdown.Header> */}
            <Dropdown.Item>
              <Link to="/settings">Settings</Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <Link to="/addProperty">Add Property</Link>
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
        {/* <Navbar.Link className="text-white bg-green-700 rounded-full hover:bg-green-500">
          <Link to="/sell" className="block px-4 py-2">Sell</Link>
        </Navbar.Link>
        <Navbar.Link className="text-white bg-green-700 rounded-full hover:bg-green-500">
          <Link to="/rent" className="block px-4 py-2">Rent</Link>
        </Navbar.Link> */}
        <Navbar.Link className="text-white bg-green-700 rounded-full hover:bg-green-500">
          <Link to="/contact" className="block px-4 py-2">Contact</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CusomNav;
