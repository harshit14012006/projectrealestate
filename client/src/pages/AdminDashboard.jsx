import React from 'react';
import Sidebar from '../components/Sidebar';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  // Data for the charts
  const barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Properties Added',
        data: [30, 45, 35, 50, 60, 40],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: ['2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Property Prices Over Years',
        data: [300000, 320000, 310000, 340000],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  const pieChartData = {
    labels: ['Sold', 'Available', 'Under Offer'],
    datasets: [
      {
        label: 'Property Status',
        data: [60, 150, 40],
        backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Content Area */}
      <main className="flex-1 p-6 overflow-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Widget 1: Total Properties */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Total Properties</h2>
            <p className="text-4xl font-extrabold text-blue-600">320</p>
            <p className="text-gray-500 mt-2">Total number of properties listed in the system.</p>
          </div>

          {/* Widget 2: Active Listings */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Active Listings</h2>
            <p className="text-4xl font-extrabold text-green-600">150</p>
            <p className="text-gray-500 mt-2">Currently active properties available for viewing.</p>
          </div>

          {/* Widget 3: New Users */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">New Users</h2>
            <p className="text-4xl font-extrabold text-yellow-600">1</p>
            <p className="text-gray-500 mt-2">New users registered in the system this month.</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {/* Bar Chart: Properties Added */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Properties Added Over Months</h3>
            <Bar data={barChartData} options={{ responsive: true }} />
          </div>

          {/* Line Chart: Property Prices */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Property Prices Over Years</h3>
            <Line data={lineChartData} options={{ responsive: true }} />
          </div>

          {/* Pie Chart: Property Status */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Property Status Distribution</h3>
            <Pie data={pieChartData} options={{ responsive: true }} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
