import React from 'react';
import aboutuspic from '../images/aboutuspic.png';
import { Link } from 'react-router-dom';

function HomeAboutUS() {
  return (
    <div className="sm:flex items-center max-w-screen-xl mx-auto px-2 py-3">
      <div className="sm:w-1/2 p-10">
        <div className="image object-center text-center">
          <img src={aboutuspic} alt="about-us-pic" className="w-full h-auto object-cover" />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">About us</span>
          <h2 className="my-4 font-bold text-3xl sm:text-4xl">
            Discover <span className="text-indigo-600">Your Dream Home</span>
          </h2>
          <p className="text-gray-700 mb-4">
            At [Your Company Name], we are committed to helping you find the perfect property that fits your needs and lifestyle. With a deep understanding of the local real estate market, our team of experts offers personalized services to guide you through every step of the buying or renting process.
            <br /><br />
            Whether you’re looking for a cozy apartment, a luxurious home, or a commercial property, we have a wide range of options to meet your preferences. Our mission is to make your real estate journey smooth and enjoyable, providing you with the best deals and exceptional service.
            <br /><br />
            Explore our listings, connect with our knowledgeable agents, and find out how we can assist you in making your real estate dreams a reality.
          </p>
          <Link
  to="/about-us" // Update this path to the route you want to navigate to
  className="inline-block mt-4 px-6 py-2 text-white bg-indigo-600 hover:bg-indigo-700 rounded-full text-sm font-medium transition-transform transform hover:scale-105"
>
  Read More
</Link>

        </div>
      </div>
    </div>
  );
}

export default HomeAboutUS;
