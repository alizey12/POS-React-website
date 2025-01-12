import React, { useState, useEffect } from "react";
import { FaBars, FaEnvelope, FaComments, FaUser, FaChevronDown, FaSun, FaMoon } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { FaHome, FaUserCheck } from "react-icons/fa";

const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md flex items-center justify-between px-4 py-2 z-10">
      <button
        className="text-blue-500 text-2xl focus:outline-none"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? <IoCloseCircle /> : <FaBars />} 
      </button>
      <div className="text-lg font-bold text-gray-700 dark:text-white">Material Design for Bootstrap</div>
      <div className="hidden lg:flex items-center space-x-6">
        <button className="flex items-center text-gray-700 dark:text-white hover:text-blue-500">
          <FaEnvelope className="mr-2" />
          <span>Contact</span>
        </button>
        <button className="flex items-center text-gray-700 dark:text-white hover:text-blue-500">
          <FaComments className="mr-2" />
          <span>Support</span>
        </button>
        <button className="flex items-center text-gray-700 dark:text-white hover:text-blue-500">
          <FaUser className="mr-2" />
          <span>Account</span>
        </button>
        <button
          className="text-2xl text-gray-700 dark:text-white hover:text-blue-500"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};
