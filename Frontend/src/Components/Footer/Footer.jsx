import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from "../../assets/Navbar image/logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-start gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="Aawas Real Estate" className="h-14 mb-4" />
            <p>Aawas Real Estate is a company that <br/>helps you find your dream home.</p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-800"><BsFacebook size={24} /></a>
              <a href="#" className="text-gray-800"><BsTwitter size={24} /></a>
              <a href="#" className="text-gray-800"><BsInstagram size={24} /></a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul>
              <li><Link to="/about-us" className="hover:underline">About Us</Link></li>
              <li><Link to="/careers" className="hover:underline">Careers</Link></li>
              <li><Link to="/why-aawas" className="hover:underline">Why Aawas?</Link></li>
              <li><Link to="/terms-and-conditions" className="hover:underline">Terms & Conditions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Our services</h3>
            <ul>
              <li><a href="#" className="hover:underline">Buy</a></li>
              <li><a href="#" className="hover:underline">Sale</a></li>
              <li><a href="#" className="hover:underline">Rent</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Home</h3>
            <ul>
              <li><Link to="/find-agent" className="hover:underline">Find Agent</Link></li>
              <li><Link to="/requirement-form" className="hover:underline">Requirement Form</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul>
              <li className="flex items-center"><FaPhoneAlt className="mr-2" /><a href="tel:+9779815029324" className="hover:underline">+977 9815029324</a></li>
              <li className="flex items-center"><IoMdMail className="mr-2" /><a href="mailto:acharyas186@gmail.com" className="hover:underline">acharyas186@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-500 mt-10 pt-4 text-center">
          <p>&copy; 2024. AAWAS PROPERTY PVT. LTD. ALL RIGHTS RESERVED.</p>
          <p>Developed by <a href="#" className="text-red-500 hover:underline">Aawas Tech Pvt. Ltd. - A product of Aawas Group</a></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
