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
    <div className="flex h-screen flex-col ">
      <Navbar />
    <div className="flex flex-1">
    <Sidebar />
    </div>
    </div>
    
  </>
  );
};

export default Dashboard;
