import React from 'react';
import Sidebar from './Sidebar.jsx';
import menavatar from '../images/menavatar.jpeg';

function Homesidebar() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
<main className="flex-1 p-6 sm:ml-64 md:ml-0 bg-gray-100"> {/* Added background color for main content */}
  <div className="bg-white p-8 rounded-lg shadow-lg">
    <h2 className="text-3xl font-bold mb-6">User Profile</h2>
    <div className="flex flex-col md:flex-row md:space-x-8">
      {/* User Information */}
      <div className="flex-1 mb-8 md:mb-0">
        <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
        <p className="text-lg mb-2"><strong>Name:</strong> John Doe</p>
        <p className="text-lg mb-2"><strong>Email:</strong> johndoe@example.com</p>
        <p className="text-lg mb-2"><strong>Phone:</strong> +123 456 7890</p>
        <p className="text-lg"><strong>Address:</strong> 456 Elm St, Springfield</p>
      </div>
      {/* Profile Picture */}
      <div className="flex justify-center md:justify-start items-center">
        <img 
          src={menavatar} 
          alt="Profile" 
          className="w-48 h-48 rounded-full border-4 border-gray-300 shadow-lg"
        />
      </div>
    </div>
  </div>
</main>

    </div>
  );
}

export default Homesidebar;
