import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaMapMarkerAlt } from "react-icons/fa";

const PropertyDetails = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const [property, setProperty] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/featuredproperty/detail/${id}/`)
      .then(response => {
        setProperty(response.data);
      })
      .catch(error => {
        console.error('Error fetching Property details', error);
      });
  }, [id]); // Make sure to include id in dependency array to fetch data when id changes

  if (!property) {
    return <div>Loading...</div>;
  }

  const propertyImage = property.images && property.images.length > 0
    ? ("https://res.cloudinary.com/aawas/" + property.images[0].image)
    : 'default_image_url';

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side: Property Image */}
        <div className="lg:w-1/2 mt-10 lg:mr-4 mb-4 lg:mb-0">
          <div className="relative">
            <img src={propertyImage} alt={property.title} className="w-full h-64 lg:h-auto object-cover" />
            <div className="absolute top-0 left-0 bg-red-600 text-white text-1xl font-semibold px-2 py-1">
              {property.status.type}
            </div>
          </div>
        </div>

        {/* Right Side: Property Details */}
        <div className="lg:w-1/2 mt-10">
          <div className="border rounded-lg overflow-hidden shadow-lg p-4">
            <h3 className="text-3xl font-semibold mb-4">{property.title}    {property.status.type}</h3>
            {/* <h3 className="text-3xl font-semibold mb-4 flex-shrink-0">{property.status.type}</h3> */}

            
            <table className="w-full">
              <tbody>
                <tr>
                  <td className="font-semibold">Price:</td>
                  <td className="text-red-500 font-bold">Rs. {property.price}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Location:</td>
                  <td className="text-gray-500">{property.location}</td>
                </tr>
                <tr>
                  <td className="font-semibold">Details:</td>
                  <td>{property.details}</td>
                </tr>
                <hr className='mb-6 mt-4' />
                <tr>
                  <td className="font-semibold">Added By:</td>
                </tr>
                <tr>
                  <td className="font-semibold">Email:</td>
                  <td>{property.added_by.email}</td>
                </tr>
                <tr>
                <td className="font-semibold">Phone Number:</td>
                <td>{property.added_by.phoneNumber}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
