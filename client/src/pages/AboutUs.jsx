import React from 'react';
import aboutuspic from '../images/aboutuspic.png';
function AboutUs() {
  return (
    <div>
      <div className="bg-white">
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
        </div>
      </div>
    </div>

        <section className="text-center py-4 px-4">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Our mission is to help you find your dream home with exceptional service, integrity, and market expertise.
          </p>
          <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
            <div className="transition transform hover:scale-110">
              <h3 className="text-xl font-bold">15+</h3>
              <p className="text-gray-700">Years of Experience</p>
            </div>
            <div className="transition transform hover:scale-110">
              <h3 className="text-xl font-bold">500+</h3>
              <p className="text-gray-700">Properties Sold</p>
            </div>
          </div>
        </section>

        <section className="bg-blue-500 text-white py-12 px-4">
          <h2 className="text-2xl font-bold text-center">Our Vision</h2>
          <p className="mt-4 text-center max-w-2xl mx-auto">
            To be the leading real estate agency known for our customer-centric approach and unparalleled knowledge of the property market.
          </p>
        </section>

        <section className="text-center py-12 px-4">
          <h2 className="text-2xl font-bold">Our Real Estate Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div className="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
              <h3 className="text-xl font-bold">Residential Sales</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
              <h3 className="text-xl font-bold">Commercial Leasing</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
              <h3 className="text-xl font-bold">Property Management</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-blue-100 hover:bg-blue-200 transition-colors">
              <h3 className="text-xl font-bold">Real Estate Investment</h3>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-12 px-4">
          <h2 className="text-2xl font-bold text-center">Cutting-Edge Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
            <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold">Advanced Property Search</h3>
              <p className="text-gray-700 mt-2">Find your perfect home with our state-of-the-art search tools.</p>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold">Virtual Tours</h3>
              <p className="text-gray-700 mt-2">Experience properties through interactive virtual tours from anywhere.</p>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold">Market Analytics</h3>
              <p className="text-gray-700 mt-2">Get insights into market trends and property values.</p>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-white hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold">Client Portal</h3>
              <p className="text-gray-700 mt-2">Manage your property search and transactions through our secure client portal.</p>
            </div>
          </div>
        </section>

        <section className="bg-blue-500 text-white text-center py-12 px-4">
          <h2 className="text-2xl font-bold">Client Testimonials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
            <div className="p-4 shadow-lg rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors">
              <p>"The team was exceptional in helping us find our dream home. Highly recommend!"</p>
              <h3 className="mt-4 font-bold">- Client A</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors">
              <p>"Professional service and great communication throughout the process."</p>
              <h3 className="mt-4 font-bold">- Client B</h3>
            </div>
            <div className="p-4 shadow-lg rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors">
              <p>"They made the home buying process smooth and stress-free. Thank you!"</p>
              <h3 className="mt-4 font-bold">- Client C</h3>
            </div>
          </div>
        </section>

        <section className="text-center py-12 px-4 w-full">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <div className="mt-8">
            <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90">
              <h3 className="text-xl font-bold">How can I schedule a property viewing?</h3>
              <p className="mt-2 text-gray-700">You can schedule a viewing by contacting us through our website or calling our office.</p>
            </div>
            <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
              <h3 className="text-xl font-bold">What is your process for buying a home?</h3>
              <p className="mt-2 text-gray-700">Our process includes consultation, property search, viewings, offer negotiation, and closing.</p>
            </div>
            <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
              <h3 className="text-xl font-bold">Do you provide mortgage assistance?</h3>
              <p className="mt-2 text-gray-700">Yes, we work with mortgage brokers to help you find the best financing options.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
