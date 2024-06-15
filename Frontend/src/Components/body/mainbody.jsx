import React from 'react';
import FeaturedProperties from './MainBody page/FeaturedProperties';
import LatestProperty from './MainBody page/LatestProperty';
import { FaSearch, FaFilter } from "react-icons/fa";
import News from './MainBody page/News';

const Mainbody = () => {
    return (
      <div>
        <div className="bg-blue-500 flex items-center justify-center py-12 md:py-16">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-semibold md:font-bold text-white mb-4">Welcome Home.</h1>
            <h3 className="text-md md:text-xl mt-2 text-white mb-6">
              Explore, Buy, Sell & Research<br />
              Homes, Land Plots, Apartments and Rentals in Nepal.
            </h3>
            <div className="flex items-center mt-4 w-full px-2">
              <input
                type="text"
                placeholder="Aawas Search..."
                className="p-2 rounded-l-lg border-t border-b border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 w-[80%] md:w-96"
              />
              <button className="px-4 py-2 bg-red-500 text-white rounded-r-lg focus:outline-none hover:bg-red-600 flex items-center">
                <FaSearch className="text-white mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>
        <FeaturedProperties />
        < LatestProperty />
        < News/>
      </div>
    );
  }
  
  export default Mainbody;
  