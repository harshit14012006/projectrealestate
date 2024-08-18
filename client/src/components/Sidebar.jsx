import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFileAlt, faCog, faSignOutAlt, faTimes, faTh } from '@fortawesome/free-solid-svg-icons'; // Import faBars and faTimes

function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <aside className={`fixed inset-y-0 left-0 bg-gray-800 text-white w-64 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 md:relative md:translate-x-0`}>
                <div className="p-4 relative">
                    {/* Close Button for Mobile */}
                    <button 
                        className="absolute top-4 right-4 md:hidden text-white text-3xl"
                        onClick={() => setSidebarOpen(false)}
                    >
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <h1 className="text-2xl font-bold mb-6">Real Estate Admin</h1>
                    <nav>
                        <ul>
                            <li className="mb-4">
                                <Link to="/admin-home" className="flex items-center text-white hover:text-gray-400">
                                    <FontAwesomeIcon icon={faHome} className="mr-3 text-xl" />
                                    Home
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/properties-management" className="flex items-center text-white hover:text-gray-400">
                                    <FontAwesomeIcon icon={faFileAlt} className="mr-3 text-xl" />
                                    Properties
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/settings" className="flex items-center text-white hover:text-gray-400">
                                    <FontAwesomeIcon icon={faCog} className="mr-3 text-xl" />
                                    Settings
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link to="/login" className="flex items-center text-white hover:text-gray-400">
                                    <FontAwesomeIcon icon={faSignOutAlt} className="mr-3 text-xl" />
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
            <div className="flex-1">
                {/* Toggle Button for Mobile */}
                <button
                    className="md:hidden fixed top-4 left-4 z-50 text-white text-3xl"
                    onClick={() => setSidebarOpen(!sidebarOpen)} // Toggle the sidebar state
                >
                    <FontAwesomeIcon icon={sidebarOpen ? faTimes : faTh} />
                </button>
                {/* Add main content here */}
            </div>
        </div>
    );
}

export default Sidebar;
