import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserDetails = () => {
  const [cookies] = useCookies(['token']);
  const [userDetails, setUserDetails] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    membership: '',
    gender: ''
  });
  const [memberships, setMemberships] = useState([]);
  const [genders, setGenders] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.token) {
      const tokenUserId = cookies.token; // Assuming token directly contains the user ID
      fetchUserDetails(tokenUserId);
    }
    fetchMemberships();
    fetchGenders();
  }, [cookies.token]);

  const fetchUserDetails = async (userId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/auth/user/details/?user_id=${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${cookies.token}` // Add authorization header if required
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch user details');
      }
      const userData = await response.json();
      setUserDetails({
        ...userData,
        membership: userData.membership.id,
        gender: userData.gender.id
      });
    } catch (error) {
      console.error('Error fetching user details:', error.message);
    }
  };

  const fetchMemberships = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/get/membership/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch memberships');
      }
      const data = await response.json();
      setMemberships(data);
    } catch (error) {
      console.error('Error fetching memberships:', error.message);
    }
  };

  const fetchGenders = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/auth/get/gender/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch genders');
      }
      const data = await response.json();
      setGenders(data);
    } catch (error) {
      console.error('Error fetching genders:', error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = cookies.token; // Assuming token directly contains the user ID

    const payload = {
      user_id: userId,
      username: userDetails.username,
      email: userDetails.email,
      phoneNumber: userDetails.phoneNumber,
      membership: userDetails.membership,
      gender: userDetails.gender
    };

    if (window.confirm('Do you want to update details?')) {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/auth/user/update/${userId}/`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${cookies.token}` // Add authorization header if required
          },
          body: JSON.stringify(payload)
        });
        if (!response.ok) {
          throw new Error('Failed to update user details');
        }
        const updatedUserData = await response.json();
        setUserDetails({
          ...updatedUserData,
          membership: updatedUserData.membership.id,
          gender: updatedUserData.gender.id
        });
        setIsEditing(false);
        toast.success('User details updated successfully!');
        navigate('/');
      } catch (error) {
        console.error('Error updating user details:', error.message);
        toast.error('Failed to update user details');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <ToastContainer />
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">User Details</h2>
        {isEditing ? (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-1">Username</label>
              <input
                type="text"
                name="username"
                value={userDetails.username}
                onChange={handleChange}
                className="border rounded p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
                className="border rounded p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-1">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={userDetails.phoneNumber}
                onChange={handleChange}
                className="border rounded p-2 w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-1">Membership</label>
              <select
                name="membership"
                value={userDetails.membership}
                onChange={handleChange}
                className="border rounded p-2 w-full"
              >
                {memberships.map((membership) => (
                  <option key={membership.id} value={membership.id}>
                    {membership.type}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-1">Gender</label>
              <select
                name="gender"
                value={userDetails.gender}
                onChange={handleChange}
                className="border rounded p-2 w-full"
              >
                {genders.map((gender) => (
                  <option key={gender.id} value={gender.id}>
                    {gender.type}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        ) : (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-1">Username</label>
              <p className="border rounded p-2 bg-gray-50">{userDetails.username}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-1">Email</label>
              <p className="border rounded p-2 bg-gray-50">{userDetails.email}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-1">Phone Number</label>
              <p className="border rounded p-2 bg-gray-50">{userDetails.phoneNumber}</p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-1">Membership</label>
              <p className="border rounded p-2 bg-gray-50">
                {memberships.find((m) => m.id === userDetails.membership)?.type}
              </p>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-1">Gender</label>
              <p className="border rounded p-2 bg-gray-50">
                {genders.find((g) => g.id === userDetails.gender)?.type}
              </p>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700"
              >
                Update Details
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
