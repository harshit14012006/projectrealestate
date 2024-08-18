import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Quick Links */}
          <div className="p-5 md:w-1/4 border-b md:border-b-0 md:border-r">
            <div className="text-sm uppercase text-indigo-600 font-bold mb-4">Quick Links</div>
            <ul>
              <li className="my-2">
                <Link className="hover:text-indigo-600" to="/">Home</Link>
              </li>
              <li className="my-2">
                <Link className="hover:text-indigo-600" to="/about-us">About Us</Link>
              </li>
              <li className="my-2">
                <Link className="hover:text-indigo-600" to="/properties">Properties</Link>
              </li>
              <li className="my-2">
                <Link className="hover:text-indigo-600" to="/contact-us">Contact Us</Link>
              </li>
              <li className="my-2">
                <Link className="hover:text-indigo-600" to="/login">Login</Link>
              </li>
              <li className="my-2">
                <Link className="hover:text-indigo-600" to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
          {/* About Us */}
          <div className="p-5 md:w-1/2 border-b md:border-b-0 md:border-r text-center md:text-left">
            <h3 className="font-bold text-xl text-indigo-600 mb-4">Real Estate Co.</h3>
            <p className="text-gray-500 text-sm mb-10">
              Your trusted partner in finding the perfect home. From luxury estates to cozy apartments, we have a diverse range of properties to meet your needs. Contact us today to learn more about our services and find your dream home.
            </p>
          </div>
          {/* Contact Us */}
          <div className="p-5 md:w-1/4">
            <div className="text-sm uppercase text-indigo-600 font-bold mb-4">Contact Us</div>
            <ul>
              <li className="my-2">
                <a className="hover:text-indigo-600" href="/" target="_blank" rel="noopener noreferrer">123 Main Street,  Sirsa, Haryana, India</a>
              </li>
              <li className="my-2">
                <a className="hover:text-indigo-600" href="mailto:realestate@gmail.com">realestate@gmail.com</a>
              </li>
              <li className="my-2">
                <a className="hover:text-indigo-600" href="tel:98964*****">+91 98964-*****</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Social Media Links */}
        <div className="flex justify-center md:justify-between mt-8 border-t pt-4 text-gray-800">
          <div className="flex space-x-4">
            <Link to="https://www.twitter.com" className="w-6 h-6" target="_blank" rel="noopener noreferrer">
              <svg className="fill-current text-gray-500 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24">
                <path d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168 -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676 0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411 -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166 0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929 -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379 0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009 -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049 -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838 1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0 -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0 6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298 0.771,-0.67 1.054,-1.093Z"></path>
              </svg>
            </Link>
            <Link to="https://www.facebook.com" className="w-6 h-6" target="_blank" rel="noopener noreferrer">
              <svg className="fill-current text-gray-500 hover:text-indigo-600" width="100%" height="100%" viewBox="0 0 24 24">
                <path d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627 5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422 0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784 -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"></path>
              </svg>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;