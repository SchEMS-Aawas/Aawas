import React from 'react';
import Slider from "react-slick";
import {  FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../../assets/body img/LatestPropertiesImages/2.jpg";
import Image2 from "../../../assets/body img/LatestPropertiesImages/3.jpg";
import Image3 from "../../../assets/body img/LatestPropertiesImages/4.jpg";
import Image4 from "../../../assets/body img/LatestPropertiesImages/5.jpg";
import Image5 from "../../../assets/body img/LatestPropertiesImages/6.jpg";
import Image6 from "../../../assets/body img/LatestPropertiesImages/7.jpg";
import Image7 from "../../../assets/body img/LatestPropertiesImages/8.jpg";
import Image8 from "../../../assets/body img/LatestPropertiesImages/9.jpg";


const properties = [
    {
      id: 1,
      status: 'For Rent',
      image: Image1,
      title: 'Luxurious Villa with Pool in Maharajgunj, Chundevi',
      price: '250000',
      location: 'Maharajgunj',
      link: '/property/1'
    },
    {
      id: 2,
      status: 'For Sale',
      image: Image2,
      title: 'Prime Commercial Land in Jorpati, Gokarna',
      price: '5000000',
      location: 'Jorpati',
      link: '/property/2'
    },
    {
      id: 3,
      status: 'For Rent',
      image: Image3,
      title: 'Modern Apartment with Mountain View in Tokha',
      price: '780000',
      location: 'Tokha',
      link: '/property/3'
    },
    {
      id: 4,
      status: 'For Rent',
      image: Image4,
      title: 'Charming Bungalow in Budhanilkantha',
      price: '12150000',
      location: 'Budhanilkantha',
      link: '/property/4'
    },
    {
      id: 5,
      status: 'For Sale',
      image: Image5,
      title: 'Luxurious Villa in the Heart of Kathmandu',
      price: '95000000',
      location: 'Lazimpat',
      link: '/property/5'
    },
    {
      id: 6,
      status: 'For Rent',
      image: Image6,
      title: 'Modern Apartment with City Views',
      price: '50000',
      location: 'Thamel',
      link: '/property/6'
    },
    {
      id: 7,
      status: 'For Sale',
      image: Image7,
      title: 'Spacious Land for Sale in Peaceful Area',
      price: '4000000',
      location: 'Bhaisepati',
      link: '/property/7'
    },
    {
      id: 8,
      status: 'For Rent',
      image: Image8,
      title: 'Cozy Cottage for Rent near the Hills',
      price: '60000',
      location: 'Nagarkot',
      link: '/property/8'
    }
  ];


  const PropertyCard = ({ property }) => {
    return (
      <div className="border rounded-lg overflow-hidden shadow-lg flex flex-col">
      <div className="relative">
        <img src={property.image} alt={property.title} className="w-full h-48 object-cover"/>
        <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-semibold px-2 py-1">
          {property.status}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <p className="text-red-500 font-bold">Rs. {property.price}</p>
        <div className="flex items-center text-gray-500 text-sm mt-2">
          <FaMapMarkerAlt className="mr-1" /> {property.location}
          <FaHeart className="ml-auto text-red-500" />
        </div>
      </div>
    </div>
    );
  };
  

const LatestProperty = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold mb-6">Latest Properties</h2>
      <Slider {...settings}>
        {properties.map(property => (
          <div key={property.id} className="p-2">
            <PropertyCard property={property} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LatestProperty
