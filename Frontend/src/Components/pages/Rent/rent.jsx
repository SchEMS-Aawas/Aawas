import React, { useState } from 'react';
import { Pagination } from 'flowbite-react';
import PropertyCard from './Data/PropertyCard';
import properties from './Data/Properties';

const Rent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 4;

  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

  const onPageChange = (page) => setCurrentPage(page);
  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold mb-6">Properties</h2>
      <div className="grid grid-cols-1 gap-6">
        {currentProperties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <div className="flex overflow-x-auto sm:justify-center mt-6">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(properties.length / propertiesPerPage)}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </div>
  );
};

export default Rent;
