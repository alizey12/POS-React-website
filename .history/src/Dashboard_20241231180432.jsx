import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
  <>
  <div className="flex h-screen">
  {/* Sidebar */}
  <Sidebar />

  {/* Main Content Area */}
  <div className="flex-1 flex flex-col">
    {/* Navbar */}
    <Navbar />

    {/* Main Content */}
    <div className="flex-1 p-4 mt-16 bg-gray-100">
      <h2 className="text-2xl font-bold">Advanced Double Navigation</h2>
      <p className="mt-4 text-gray-600">
        1. Fixed side menu, hidden on small devices.
      </p>
      <p className="text-gray-600">2. Fixed Navbar.</p>
      <div className="h-[2000px] mt-8 bg-gray-200"></div>
    </div>
  </div>
</div>

    
  </>
  );
};

export default Dashboard;
