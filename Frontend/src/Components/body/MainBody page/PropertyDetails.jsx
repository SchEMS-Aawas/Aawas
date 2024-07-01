import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PropertyDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/featuredproperty/${id}/`)
      .then(response => {
        setProperty(response.data);
      })
      .catch(error => {
        console.error('Error fetching property details:', error);
      });
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  const propertyImage = property.images && property.images.length > 0
    ? ("https://res.cloudinary.com/aawas/" + property.images[0].image)
    : 'default_image_url'; 

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="border rounded-lg overflow-hidden shadow-lg flex flex-col mx-2 mb-4">
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
          <div className="mt-4">
            <p>{property.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
