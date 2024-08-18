import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch, FaDollarSign, FaMapMarkerAlt, FaTag } from "react-icons/fa";

const Property = () => {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/properties"
        );
        setProperties(response.data);
        setFilteredProperties(response.data); // Initially, show all properties
      } catch (err) {
        setError("Unable to load properties at this time.");
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  useEffect(() => {
    let updatedProperties = properties;

    // Apply filter based on status or location
    if (selectedFilter === "Sold" || selectedFilter === "Available") {
      updatedProperties = updatedProperties.filter(
        (property) => property.status === selectedFilter
      );
    } else if (selectedFilter === "Place") {
      updatedProperties = updatedProperties.filter(
        (property) => property.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply search filter based on title
    if (searchTerm && selectedFilter !== "Place") {
      updatedProperties = updatedProperties.filter((property) =>
        property.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProperties(updatedProperties);
  }, [selectedFilter, searchTerm, properties]);

  if (loading)
    return (
      <p className="text-center text-gray-600">
        Loading properties, please wait...
      </p>
    );
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">
        Explore Our Properties
      </h1>

      {/* Filter Tabs */}
      <div className="mb-6">
        <div className="flex space-x-4 justify-center">
          {["all", "Sold", "Available", "Place"].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`py-2 px-4 rounded-md text-sm font-medium ${
                selectedFilter === filter
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-700 border border-gray-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Search Input */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder={`Search properties by ${selectedFilter === "Place" ? "location" : "title"}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 pl-10 border border-gray-300 rounded-md shadow-sm"
          />
          <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <div
              key={property.id}
              className="bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={`http://localhost:8080/uploads/${property.image}`}
                alt={property.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />

              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                {property.title}
              </h2>
              <p className="text-gray-600 flex items-center">
                <FaMapMarkerAlt className="mr-2" /> {property.location}
              </p>
              <p className="text-gray-900 font-bold mt-2 flex items-center">
                <FaDollarSign className="mr-2" /> {property.price}
              </p>
              <p className="text-gray-600 mt-2 flex items-center">
                <FaTag className="mr-2" /> {property.status}
              </p>
              <p className="text-gray-600 mt-2">{property.description}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">
            No properties match your search criteria.
          </p>
        )}
      </div>
    </div>
  );
};

export default Property;
