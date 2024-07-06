import React, { useState, useEffect } from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  const navigate = useNavigate();
  const propertyImage = property.images && property.images.length > 0
    ? ("https://res.cloudinary.com/aawas/" + property.images[0].image)
    : 'default_image_url'; 
    

  const handleClick = () => {
    navigate(`/property/${property.id}`); // Navigate to PropertyDetail page with property id
  };

  return (
    <div 
      className="border rounded-lg overflow-hidden shadow-lg flex flex-col mx-2 mb-4 cursor-pointer transform transition-transform hover:scale-105"
      onClick={handleClick}
    >
      <div className="relative">
        <img src={propertyImage} alt={property.title} className="w-full h-56 object-cover"/>
        <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-semibold px-2 py-1">
          {property.status.type}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <p className="text-red-500 font-bold">Rs. {property.price}</p>
        <div className="flex items-center text-gray-500 text-sm mt-2">
          <FaMapMarkerAlt className="mr-1" /> {property.location}
        </div>
      </div>
    </div>
  );
};

const FeaturedProperties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/featuredproperty/list/')
      .then(response => {
        setProperties(response.data);
      })
      .catch(error => {
        console.error('Error fetching Properties', error);
      });
  }, []);

  const renderPropertyBoxes = () => {
    return properties.map((property, index) => (
      <div key={property.id} className={`property-box-${index}`}>
        <PropertyCard property={property} />
      </div>
    ));
  }

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold mb-6">Properties</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {renderPropertyBoxes()}
      </div>
    </div>
  );
};

export default FeaturedProperties;
