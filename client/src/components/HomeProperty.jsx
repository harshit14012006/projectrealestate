import React, { useState } from 'react';
import homepropertypic1 from '../images/homepropertypic1.jpeg';
import homepropertypic2 from '../images/homepropertypic2.jpeg';
import homepropertypic3 from '../images/homepropertypic3.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faMapMarkerAlt, faBed, faBath, faCar } from '@fortawesome/free-solid-svg-icons';

const properties = [
  { id: 1, title: 'Modern Apartment', location: 'Sirsa', price: '22,000/month', image: homepropertypic1, beds: 3, baths: 1, parking: '1' },
  { id: 2, title: 'Cozy Cottage', location: 'Hisaar', price: '11,500/month', image: homepropertypic2, beds: 3, baths: 2, parking: '2' },
  { id: 3, title: 'Spacious House', location: 'Chandigarh', price: '23,000/month', image: homepropertypic3, beds: 4, baths: 3, parking: '3' },
  // Add more properties here
];

const HomeProperty = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [selectedProperty, setSelectedProperty] = useState(null);

  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (locationFilter === '' || property.location.toLowerCase() === locationFilter.toLowerCase()) &&
    (priceFilter === '' || property.price === priceFilter)
  );

  const handleLocationSelect = (location) => {
    setLocationFilter(location);
  };

  const handlePriceSelect = (price) => {
    setPriceFilter(price);
  };

  const handleReadMoreClick = (property) => {
    setSelectedProperty(property);
  };

  const handleCloseDetails = () => {
    setSelectedProperty(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-gray-900">Discover Your Dream Property</h1>
        <p className="text-gray-600 mt-2 text-lg">Browse through our selection of premium properties to find your ideal home.</p>
        <div className="border-t border-gray-300 mt-4 mx-auto w-1/4"></div>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 space-y-4 sm:space-y-0 sm:space-x-4 pl-4">
          {/* Search Bar */}
          <div className="relative bg-white min-w-sm max-w-2xl flex items-center border py-2 px-2 rounded-2xl shadow-lg focus-within:border-gray-300">
            <input
              type="text"
              placeholder="Search by keyword"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-6 py-2 w-full rounded-md outline-none bg-white"
            />
            <button className="ml-2 px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-transform transform flex items-center">
              <span className="text-sm font-semibold">Search</span>
            </button>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            {/* Location Filter */}
            <div className="relative">
              <details className="group">
                <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                  <span className="flex gap-2 items-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="w-6 h-6 text-gray-600" />
                    <span>{locationFilter || 'All Locations'}</span>
                  </span>
                  <svg className="w-5 h-5 text-gray-600 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </summary>
                <article className="px-4 pb-4">
                  <ul className="flex flex-col gap-4 pl-2 mt-4">
                    <li onClick={() => handleLocationSelect('New York')} className="cursor-pointer hover:text-indigo-600">New York</li>
                    <li onClick={() => handleLocationSelect('California')} className="cursor-pointer hover:text-indigo-600">California</li>
                    <li onClick={() => handleLocationSelect('Texas')} className="cursor-pointer hover:text-indigo-600">Texas</li>
                    <li onClick={() => handleLocationSelect('')} className="cursor-pointer hover:text-indigo-600">All Locations</li>
                  </ul>
                </article>
              </details>
            </div>

            {/* Price Filter */}
            <div className="relative">
              <details className="group">
                <summary className="flex items-center justify-between gap-2 p-2 font-medium marker:content-none hover:cursor-pointer">
                  <span className="flex gap-2 items-center">
                    <FontAwesomeIcon icon={faDollarSign} className="w-6 h-6 text-gray-600" />
                    <span>{priceFilter || 'All Prices'}</span>
                  </span>
                  <svg className="w-5 h-5 text-gray-600 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </summary>
                <article className="px-4 pb-4">
                  <ul className="flex flex-col gap-4 pl-2 mt-4">
                    <li onClick={() => handlePriceSelect('$1,500/month')} className="cursor-pointer hover:text-indigo-600">$1,500/month</li>
                    <li onClick={() => handlePriceSelect('$2,000/month')} className="cursor-pointer hover:text-indigo-600">$2,000/month</li>
                    <li onClick={() => handlePriceSelect('$3,000/month')} className="cursor-pointer hover:text-indigo-600">$3,000/month</li>
                    <li onClick={() => handlePriceSelect('')} className="cursor-pointer hover:text-indigo-600">All Prices</li>
                  </ul>
                </article>
              </details>
            </div>
          </div>
        </div>
      </div>

      {/* Properties List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProperties.map(property => (
          <div key={property.id} className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl">
            {/* Image Section */}
            <div className="relative">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-0 right-0 p-4">
                <span className="bg-indigo-600 text-white text-xs px-2 py-1 rounded-md">{property.price}</span>
              </div>
            </div>
            {/* Content Section */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
              <p className="text-gray-600 mb-2">{property.location}</p>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <FontAwesomeIcon icon={faBed} className="w-5 h-5 mr-1" />
                  {property.beds} Beds
                </div>
                <div className="flex items-center text-gray-600">
                  <FontAwesomeIcon icon={faBath} className="w-5 h-5 mr-1" />
                  {property.baths} Baths
                </div>
                <div className="flex items-center text-gray-600">
                  <FontAwesomeIcon icon={faCar} className="w-5 h-5 mr-1" />
                  {property.parking} Parking
                </div>
              </div>
              <button
                onClick={() => handleReadMoreClick(property)}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Property Details Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-transform transform scale-90 sm:scale-100">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-lg w-full transition-all duration-300">
            <button
              onClick={handleCloseDetails}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M1.146 1.146a.5.5 0 0 1 .708 0L8 6.293l6.146-6.146a.5.5 0 0 1 .708.708L8.707 7l6.147 6.146a.5.5 0 0 1-.708.708L8 7.707 1.854 13.854a.5.5 0 0 1-.708-.708L7.293 8 1.146 1.854a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">{selectedProperty.title}</h2>
              <img
                src={selectedProperty.image}
                alt={selectedProperty.title}
                className="w-full h-64 object-cover mb-4"
              />
              <p className="text-gray-600 mb-4">{selectedProperty.location}</p>
              <p className="text-gray-600 mb-4">{selectedProperty.price}</p>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <FontAwesomeIcon icon={faBed} className="w-5 h-5 mr-1" />
                  {selectedProperty.beds} Beds
                </div>
                <div className="flex items-center text-gray-600">
                  <FontAwesomeIcon icon={faBath} className="w-5 h-5 mr-1" />
                  {selectedProperty.baths} Baths
                </div>
                <div className="flex items-center text-gray-600">
                  <FontAwesomeIcon icon={faCar} className="w-5 h-5 mr-1" />
                  {selectedProperty.parking} Parking
                </div>
              </div>
              <button
                onClick={handleCloseDetails}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeProperty;
