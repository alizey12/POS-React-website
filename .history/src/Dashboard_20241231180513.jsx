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

    <
  </>
  );
};

export default Dashboard;
