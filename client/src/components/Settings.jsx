// src/components/Settings.js
import React from 'react';
import Sidebar from './Sidebar';

const Settings = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-semibold mb-6">Settings</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">General Settings</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="siteTitle" className="block text-sm font-medium text-gray-700">Site Title</label>
              <input
                type="text"
                id="siteTitle"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="Enter site title"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Admin Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="Enter admin email"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Save Changes
            </button>
          </form>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Change Password</label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                placeholder="Enter new password"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Update Password
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Settings;
