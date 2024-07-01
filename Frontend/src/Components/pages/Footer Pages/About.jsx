import React from 'react'
import IMG from '../../../assets/About/house.jpg';
import Houseicon from '../../../assets/About/house.png';
import LandIcon from '../../../assets/About/land.png';

const About = () => {
  return (
    <div className='mx-4 md:mx-12 lg:mx-24 xl:mx-48 '>
    {/* Upper part */}
    <div className='flex flex-wrap  '>
      <div className=' md:w-auto mr-0 md:mr-12 mb-8 md:mb-0 mt-24'>
        <img src={IMG} alt="house" className='w-full md:w-96 h-full' />
      </div>
      <div className='flex flex-col'>
        <div className='text-2xl md:text-3xl font-bold mb-4'>About RealState.com</div>
        <div className='font-semibold text-xl md:text-2xl mt-14'>
          REAL ESTATE MARKETPLACE FOR ALL
        </div>
        <div className='mt-7'>
          <p className="max-w-xl text-justify">
            At .com, we specialize in guiding you to your perfect real estate property within your desired location in Nepal. Our platform simplifies the search for houses, lands, apartments, flats, and office spaces. You can find contact information along with email or messaging options for every property listed by individual owners, agents, or agencies.
          </p>
          <p className='max-w-xl mt-3'>
            We also help you to sell your property fast. Our personalized property promotion techniques are tailored to enhance the visibility of your real estate property to serious buyers. We use different kinds of marketing techniques to promote your property for better visibility and conversion among thousands of property seekers every day.
          </p>
        </div>
      </div>
    </div>
    <hr className='mt-16' />
    {/* Content */}
    <div className='flex flex-wrap justify-center'>
      <div className='flex flex-col justify-center items-center w-full md:w-60 mt-12 mx-4 md:mx-8'>
        <div className='flex justify-center items-center'>
          <img src={Houseicon} alt="fav" className='h-16' />
        </div>
        <div className='text-lg font-semibold mt-9'>
          HOUSES & APARTMENTS
        </div>
        <div>
          <p className='text-justify mb-7 mt-4'>
            Our platform showcases the most recent listings of houses & apartments for sale listed by owners, agents & agencies.
          </p>
          <p className='text-justify'>
            List your house or apartment on Realestateinnov.com and extend the visibility of your property and get calls or message by serious buyers every day.
          </p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center w-full md:w-80 mt-12 mx-4 md:mx-8'>
        <div className='flex justify-center items-center'>
          <img src={LandIcon} alt="fav" className='h-16' />
        </div>
        <div className='text-lg font-semibold mt-9'>
          LANDS & PLOTTINGS
        </div>
        <div>
          <p className='text-justify mb-7 mt-4'>
            Are you looking for plotted land or house to buy in any major cities of Nepal like Kathmandu, Lalitpur, or Bhaktapur?
          </p>
          <p className='text-justify'>
            Realestateinnov.com has thousands of listings of different types of land pieces exclusively available for you. You can also sell your land on this platform.
          </p>
        </div>
      </div>
      <div className='flex flex-col justify-center items-center w-full md:w-80 mt-12 mx-4 md:mx-8'>
        <div className='flex justify-center items-center'>
          <img src={LandIcon} alt="fav" className='h-16' />
        </div>
        <div className='text-lg font-semibold mt-9'>
          RENTAL PROPERTIES
        </div>
        <div>
          <p className='text-justify mb-7 mt-4'>
            We host 100s of listings of properties on rent in Nepal. Explore recent listings of houses, apartments, lands, flats, or office space for rent.
          </p>
          <p className='text-justify'>
            If you are planning to rent out your real estate property you can simply use our platform to list your rentals online. There are 100s of people looking for different rentals every day.
          </p>
        </div>
      </div>
    </div>
    <hr className='mt-5 mb-3' />
    <div></div>
  </div>

  )
}

export default About
