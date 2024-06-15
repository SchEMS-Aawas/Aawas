import React from 'react';
import logo from "../../assets/Navbar image/logo.png";
import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="w-full bg-gray-700 shadow-md">
      <div className="container mx-auto p-4 flex items-center justify-between">
        {/* Left part */}
        <div className="flex items-center">
          {/* Logo part */}
          <div className="mr-4">
            <a href="#">
              <img src={logo} alt="logo" className="h-14 w-auto" />
            </a>
          </div>
        </div>
        {/* Navigation links */}
        <div className="flex-1 flex justify-center">
          <div className="flex gap-5  rounded-full p-2  bg-gray-400">
    
          <Tabs aria-label="Default tabs" style="default" className="rounded-full bg-neutral-400 ">
              <Tabs.Item
                active
                title="Home"
                className="px-2 sm:px-4 py-2 text-gray-700 bg-gray-200 rounded-full mx-1 sm:mx-2"
              >
                {/* <Link to="/">Home</Link> */}
              </Tabs.Item>
              {/* <Tabs.Item
                title="Buy"
                className="px-2 sm:px-4 py-2 text-gray-700 bg-gray-200 rounded-full mx-1 sm:mx-2"
              >
                <Link to="/buy">Buy</Link>
              </Tabs.Item> */}
              <Tabs.Item
                title="Sell"
                className="px-2 sm:px-4 py-2 text-gray-700 bg-gray-200 rounded-full mx-1 sm:mx-2 "
              >
                {/* <Link to="/sell">Sell</Link> */}
              </Tabs.Item>
              <Tabs.Item
                title="Contact Us"
                className="px-2 sm:px-4 py-2 text-gray-700 bg-gray-200 rounded-full mx-1 sm:mx-2"
              >
                {/* <Link to="/contact">Contact Us</Link> */}
              </Tabs.Item>
              <Tabs.Item
                title="Find Agent"
                className="px-2 sm:px-4 py-2 text-gray-700 bg-gray-200 rounded-full mx-1 sm:mx-2 "
              >
                {/* <Link to="/find-agent">Find Agent</Link> */}
              </Tabs.Item>
            </Tabs>

            
          </div> 
        </div>
        {/* Right part */}
        <div className="flex items-center space-x-4">
          {/* for search box */}
          {/* <div className="relative hidden sm:block">
            <input type="text" placeholder="search" className=" w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary" />
            <FaSearch className="text-gray-500 absolute top-1/2 transform -translate-y-1/2 right-4"/>
          </div> */}
          <button className="px-4 py-2 text-white bg-green-700 rounded-full hover:bg-green-500">
            Sign Up
          </button>
          <button className="px-4 py-2 text-white bg-green-700 rounded-full hover:bg-green-500">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
