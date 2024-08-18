import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserShield, faDollarSign, faList } from '@fortawesome/free-solid-svg-icons';

function HomeChooseUs() {
  return (
    <section className="text-gray-700 body-font py-12 bg-gray-100">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-gray-900">Why Choose Us?</h1>
        <p className="text-gray-600 mt-4">Discover why we're the top choice for your real estate needs.</p>
      </div>
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap text-center justify-center">
          {/* Expertise */}
          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-105">
              <div className="flex justify-center mb-3">
                <FontAwesomeIcon icon={faHome} className="text-4xl text-gray-900" />
              </div>
              <h2 className="title-font font-semibold text-2xl text-gray-900">Expertise in Real Estate</h2>
              <p className="text-gray-600 mt-2">Benefit from our years of experience and deep market knowledge.</p>
            </div>
          </div>

          {/* Personalized Service */}
          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-105">
              <div className="flex justify-center mb-3">
                <FontAwesomeIcon icon={faUserShield} className="text-4xl text-gray-900" />
              </div>
              <h2 className="title-font font-semibold text-2xl text-gray-900">Personalized Service</h2>
              <p className="text-gray-600 mt-2">Receive tailored property recommendations and expert guidance throughout your journey.</p>
            </div>
          </div>

          {/* Competitive Pricing */}
          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-105">
              <div className="flex justify-center mb-3">
                <FontAwesomeIcon icon={faDollarSign} className="text-4xl text-gray-900" />
              </div>
              <h2 className="title-font font-semibold text-2xl text-gray-900">Competitive Pricing</h2>
              <p className="text-gray-600 mt-2">Explore a wide range of properties at competitive prices that fit your budget.</p>
            </div>
          </div>

          {/* Comprehensive Listings */}
          <div className="p-4 md:w-1/4 sm:w-1/2">
            <div className="px-4 py-6 transform transition duration-500 hover:scale-105">
              <div className="flex justify-center mb-3">
                <FontAwesomeIcon icon={faList} className="text-4xl text-gray-900" />
              </div>
              <h2 className="title-font font-semibold text-2xl text-gray-900">Comprehensive Listings</h2>
              <p className="text-gray-600 mt-2">Access a diverse selection of properties, from cozy apartments to luxurious homes.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default HomeChooseUs;
