import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const Properties = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("available");
  const [image, setImage] = useState(null);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [currentProperty, setCurrentProperty] = useState(null);
  const [formVisible, setFormVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("location", location);
    formData.append("price", price);
    formData.append("status", status);
    if (image) formData.append("image", image);

    try {
      if (editMode && currentProperty) {
        // Update property
        await axios.put(
          `http://localhost:8080/api/properties/${currentProperty._id}`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        alert("Property updated successfully");
      } else {
        // Add new property
        await axios.post("http://localhost:8080/api/properties", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Property added successfully");
      }

      handleCancel(); // Reset form and hide it
      fetchProperties(); // Refresh the property list
    } catch (error) {
      console.error("Error saving property:", error);
      alert("An error occurred while saving the property.");
    }
  };

  const fetchProperties = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/properties/:id");
      setProperties(response.data);
    } catch (error) {
      setError("Failed to fetch properties.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (property) => {
    setTitle(property.title);
    setLocation(property.location);
    setPrice(property.price);
    setStatus(property.status);
    setCurrentProperty(property);
    setEditMode(true);
    setFormVisible(true);
  };

  const handleRemove = async (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      try {
        await axios.delete(`http://localhost:8080/api/properties/${id}`);
        alert("Property removed successfully");
        fetchProperties(); // Refresh the property list
      } catch (error) {
        console.error("Error removing property:", error);
        alert("An error occurred while removing the property.");
      }
    }
  };

  const handleCancel = () => {
    setTitle("");
    setLocation("");
    setPrice("");
    setStatus("available");
    setImage(null);
    setEditMode(false);
    setCurrentProperty(null);
    setFormVisible(false); // Hide the form
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  if (loading)
    return <p className="text-center text-gray-500">Loading properties...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar className="w-64 bg-gray-800 text-white" />

      <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
        <button
          onClick={() => {
            setFormVisible(true);
            setEditMode(false);
            setCurrentProperty(null);
          }}
          className="bg-green-500 text-white p-2 rounded mb-4 hover:bg-green-600"
        >
          Add New Property
        </button>

        {formVisible && (
          <>
            <h2 className="text-xl font-bold mb-4">
              {editMode ? "Edit Property Details" : "Add New Property"}
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row md:space-x-4">
                <input
                  type="text"
                  placeholder="Property Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="border p-2 w-full md:w-1/2"
                  required
                />
                <input
                  type="text"
                  placeholder="Property Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="border p-2 w-full md:w-1/2"
                  required
                />
              </div>
              <div className="flex flex-col md:flex-row md:space-x-4">
                <input
                  type="number"
                  placeholder="Price ($)"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="border p-2 w-full md:w-1/2"
                  required
                />
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="border p-2 w-full md:w-1/2"
                  required
                >
                  <option value="available">Available</option>
                  <option value="sold">Sold</option>
                </select>
              </div>
              <input
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                className="border p-2 w-full"
              />
              <div className="flex flex-col md:flex-row md:space-x-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 flex-1 md:flex-initial"
                >
                  {editMode ? "Update Property" : "Add Property"}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600 flex-1 md:flex-initial mt-2 md:mt-0"
                >
                  Cancel
                </button>
              </div>
            </form>
          </>
        )}

        <h2 className="text-xl font-bold mt-8 mb-4">Property Listings</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price ($)
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {properties.map((property, index) => (
                <tr key={property._id}>
                  <td className="px-4 py-2 text-sm font-medium text-gray-900">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-500">
                    {property.title}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-500">
                    {property.location}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-500">
                    {property.price
                      ? `$${property.price.toLocaleString()}`
                      : "N/A"}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-500">
                    {property.status}
                  </td>
                  <td className="px-4 py-2 text-sm text-gray-500">
                    <div className="flex flex-col md:flex-row md:space-x-2 items-center">
                      <button
                        onClick={() => handleEdit(property)}
                        className="flex items-center justify-center text-yellow-400 hover:text-yellow-600 text-xs md:text-sm p-2 rounded transition-colors duration-150 ease-in-out"
                        aria-label="Edit"
                      >
                        <FontAwesomeIcon icon={faEdit} className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleRemove(property._id)}
                        className="flex items-center justify-center text-red-500 hover:text-red-600 text-xs md:text-sm p-2 rounded transition-colors duration-150 ease-in-out"
                        aria-label="Delete"
                      >
                        <FontAwesomeIcon icon={faTrash} className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Properties;
