// import { useState } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';

const Dashboard = () => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  return (
    <div className="h-screen w-full flex overflow-hidden">
      {/* Sidebar Section */}
      <div
        className={`bg-fuchsia-800 transition-all duration-300 ${
          // isSidebarOpen ? 
          'w-64'  
        }`}
      >
        <Sidebar />
      </div>

      {/* Main Content Section */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-6">
          <h1 className="text-4xl font-bold text-fuchsia-800">Dashboard</h1>
          <p className="mt-4 text-gray-600">Welcome to the e-commerce admin panel!</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
