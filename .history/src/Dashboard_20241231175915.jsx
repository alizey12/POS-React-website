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
    <div className="flex flex-col ">
      <Navbar />
    <div className="flex ">
    <Sidebar />
    </div>
    </div>
    
  </>
  );
};

export default Dashboard;
