import React from 'react'

const FormFields = ({ formData, handleChange }) => {
    return (
      <>
        <div className="mb-5 flex flex-wrap -mx-2">
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <label htmlFor="fname" className="block text-sm font-bold text-gray-700">First Name</label>
            <input type="text" id="fname" name="fname" value={formData.fname} onChange={handleChange} required className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <label htmlFor="mname" className="block text-sm font-bold text-gray-700">Middle Name</label>
            <input type="text" id="mname" name="mname" value={formData.mname} onChange={handleChange} className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="w-full md:w-1/3 px-2">
            <label htmlFor="lname" className="block text-sm font-bold text-gray-700">Last Name</label>
            <input type="text" id="lname" name="lname" value={formData.lname} onChange={handleChange} required className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
        </div>
        <div className="mb-5 flex flex-wrap -mx-2">
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <label htmlFor="dob" className="block text-sm font-bold text-gray-700">Date of Birth:</label>
            <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <label htmlFor="phoneNumber" className="block text-sm font-bold text-gray-700">Phone Number</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="w-full md:w-1/3 px-2">
            <label htmlFor="citizenship" className="block text-sm font-bold text-gray-700">Citizenship</label>
            <input type="text" id="citizenship" name="citizenship" value={formData.citizenship} onChange={handleChange} required className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
        </div>
        <div className="mb-5 flex flex-wrap -mx-2">
          <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
            <label htmlFor="gender" className="block text-sm font-bold text-gray-700">Gender</label>
            <select name="gender" id="gender" value={formData.gender} onChange={handleChange} className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Other</option>
            </select>
          </div>
          <div className="w-full md:w-1/3 px-2">
            <label htmlFor="membership" className="block text-sm font-bold text-gray-700">Membership</label>
            <select name="membership" id="membership" value={formData.membership} onChange={handleChange} className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="A">Agent</option>
              <option value="L">Landlord</option>
              <option value="C">Customer</option>
            </select>
          </div>
        </div>
        <div className="mb-5">
          <label htmlFor="address" className="block text-sm font-bold text-gray-700">Address:</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
        </div>
        <div className="mb-5 flex flex-wrap -mx-2">
          <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
            <label htmlFor="password" className="block text-sm font-bold text-gray-700">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div className="w-full md:w-1/2 px-2">
            <label htmlFor="confirmPassword" className="block text-sm font-bold text-gray-700">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
        </div>
      </>
    );
  };

export default FormFields
