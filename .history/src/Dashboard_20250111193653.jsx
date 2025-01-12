import React, { useState, useEffect } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import "./App.css";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check saved theme on load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.setAttribute("data-theme", savedTheme);
    setIsDarkMode(savedTheme === "dark");
  }, []);

  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Toggle Dark/Light Mode
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        <Navbar
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
          toggleTheme={toggleTheme}
        />

        <main className="p-4 mt-16">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <p className="mt-4 text-black dark:text-secondary-dark">
            1. Fixed sidebar, hidden on small devices.
          </p>
          <p className="text-secondary dark:text-secondary-dark">
            2. Fixed Navbar.
          </p>
          <div className="h-[2000px] mt-8 bg-primary-light dark:bg-primary-dark"></div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
