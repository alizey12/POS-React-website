import Navbar from '../src/navbar'
import Sidebar from '../src/sidebar'
import { useState } from "react"

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        {/* Page Content */}
        <main className="p-4 mt-16 flex flex-col flex-col-reverse">
          <h2 className="text-2xl font-bold">Advanced Double Navigation</h2>
          <p className="mt-4 text-gray-600">
            1. Fixed side menu, hidden on small devices.
          </p>
          <p className="text-gray-600">2. Fixed Navbar.</p>
          <div className="h-[2000px] mt-8 bg-gray-100"></div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
