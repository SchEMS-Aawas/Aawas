import React from 'react';
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
    return (
        <div className="flex border rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-1/3">
                <img src={property.image} alt={property.title} className="w-full h-full object-cover"/>
                <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-semibold px-2 py-1">
                    {property.status}
                </div>
            </div>
            <div className="w-2/3 p-4 flex flex-col justify-between">
                <div>
                    <h3 className="text-lg font-semibold">{property.title}</h3>
                    <p className="text-gray-500 mb-4">from {property.location}</p>
                    <div className="flex justify-between mb-4">
                        <div>
                            <p className="text-gray-500 text-1xl uppercase font-bold">Price</p>
                            <p className="text-red-500 font-bold">Rs. {property.price}</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-1xl uppercase font-bold">Property Category</p>
                            <p className="text-gray-800">Property</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-1xl uppercase font-bold">Property Type</p>
                            <p className="text-gray-800">Individual House</p>
                        </div>
                    </div>
                    <div className="flex justify-start mb-4">
                        <div>
                            <p className="text-gray-500 text-1xl uppercase font-bold">Purpose</p>
                            <p className="text-gray-800">Rent</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <FaHeart className="text-red-500" />
                    <button className="px-4 py-2 text-white bg-green-700 rounded-full hover:bg-green-500"> Details</button>
                    {/* <Link to={property.link} className="px-4 py-2 text-white bg-red-600 rounded-full hover:bg-red-500">
                        Details
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
