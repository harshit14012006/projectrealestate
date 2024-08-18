import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import navbarlogo from '../images/navbarlogo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`transition-all duration-300 ${isSticky ? 'sticky top-0 z-50 bg-gradient-to-r from-blue-800 to-blue-600 shadow-md' : 'bg-gradient-to-r from-blue-800 to-blue-600'}`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <FontAwesomeIcon
                icon={isOpen ? faTimes : faBarsStaggered}
                className="h-6 w-6"
              />
            </button>
          </div>

          {/* Navbar Logo */}
          <div className="flex items-center justify-center w-full sm:justify-start sm:w-auto">
            <Link aria-current="page" to="/">
              <img src={navbarlogo} alt="Real Estate Logo" className="w-24 h-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:space-x-6 sm:ml-auto">
            <div className="flex space-x-4">
              <Link className="px-3 py-2 text-sm font-medium transition-transform transform hover:scale-105 text-white hover:underline hover:text-yellow-300" aria-current="page" to="/">Home</Link>
              <Link className="px-3 py-2 text-sm font-medium transition-transform transform hover:scale-105 text-white hover:underline hover:text-yellow-300" to="/about-us">About Us</Link>
              <Link className="px-3 py-2 text-sm font-medium transition-transform transform hover:scale-105 text-white hover:underline hover:text-yellow-300" to="/properties">Properties</Link>
              <Link className="px-3 py-2 text-sm font-medium transition-transform transform hover:scale-105 text-white hover:underline hover:text-yellow-300" to="/contact-us">Contact Us</Link>
            </div>
            <div className="flex space-x-4">
              <Link className="px-3 py-2 text-sm font-medium transition-transform transform hover:scale-105 text-white hover:underline hover:text-yellow-300" to="/login">Login</Link>
              <Link className="px-3 py-2 text-sm font-medium transition-transform transform hover:scale-105 text-white hover:underline hover:text-yellow-300" to="/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="flex flex-col items-center space-y-1 px-2 pb-3 pt-2 bg-gradient-to-r from-blue-800 to-blue-600">
          <Link className="block px-3 py-2 text-base font-medium transition-transform transform hover:scale-105 text-white hover:underline hover:text-yellow-300" aria-current="page" to="/">Home</Link>
          <Link className="block px-3 py-2 text-base font-medium transition-transform transform hover:scale-105 text-white hover:underline hover:text-yellow-300" to="/about-us">About Us</Link>
          <Link className="block px-3 py-2 text-base font-medium transition-transform transform hover:scale-105 text-white hover:underline hover:text-yellow-300" to="/properties">Properties</Link>
          <Link className="block px-3 py-2 text-base font-medium transition-transform transform hover:scale-105 text-white hover:underline hover:text-yellow-300" to="/contact-us">Contact Us</Link>
          <Link className="block px-3 py-2 text-base font-medium transition-transform transform hover:scale-105 text-white hover:underline hover:text-yellow-300" to="/login">Login</Link>
          <Link className="block px-3 py-2 text-base font-medium transition-transform transform hover:scale-105 text-white hover:underline hover:text-yellow-300" to="/signup">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
