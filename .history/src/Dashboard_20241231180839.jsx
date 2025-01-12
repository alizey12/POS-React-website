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
<div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        
        <div
          className={`transition-all duration-300 ${
            isSidebarOpen ? "w-48" : "w-16"
          } bg-gray-200`}
        >
          <Sidebar sideBarOpen={isSidebarOpen} />
        </div>

        <div className="flex-1 p-4">
          <button
            onClick={toggleSidebar}
            className=" bg-slate-400 text-white px-2 py-1 rounded mb-4 font-semibold"
            aria-expanded={sideBarOpen}
            aria-controls="sidebar"
          >
            {sideBarOpen ? ">" : "<"}
          </button>
          <div>
            <h1 className="font-extrabold text-lg">Dashboard</h1>
          </div>
        </div>
      </div>
    </div>
    </>
  )
};

export default Dashboard;
