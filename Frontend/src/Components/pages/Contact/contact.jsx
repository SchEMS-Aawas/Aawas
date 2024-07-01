import React from 'react';

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4 mt-9">Contact Aawas.com</h2>
          <p className="text-gray-700 mb-4">
            Are you looking for any kind of help and assistance? Send us a message or give us a call. We are here to provide you with more information and deal with your queries.
          </p>
          <p className="text-gray-700 mb-4">
            Talk to our customer representative to inquire about the process of selling / buying properties on Aawas.com.
          </p>
          <div className="mb-4">
            <span className="font-bold">Call us:</span> <a href="tel:9815029324" className="text-blue-500">9815029324</a> | 
            <span className="font-bold"> Whatsapp:</span> <a href="https://wa.me/9815029324" className="text-blue-500">9815029324</a>
          </div>
          <div className="mb-4">
            <span className="font-bold">Email us:</span> <a href="mailto:acharyas186@gmail.com" className="text-blue-500">Send Email</a>
          </div>
          <div>
            <span className="font-bold">Address:</span>
            <p>Aawas Real Estate Pvt. Ltd.</p>
            <p>Balkumari, Lalitpur Nepal</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 mt-9">Send a Message</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="fullName">Full Name</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullName" type="text" placeholder="Full Name"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email [Privacy Protected]"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="number">Number</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="number" type="text" placeholder="Number [Privacy Protected]"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Your Message</label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your Message"></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
