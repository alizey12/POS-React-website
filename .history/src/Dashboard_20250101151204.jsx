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
    <nav className="fixed top-0 left-0 w-full bg-primary dark:bg-primary-dark shadow-md flex items-center justify-between px-4 py-2 z-10">
      <button
        className="text-primary dark:text-secondary text-2xl focus:outline-none"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? <IoCloseCircle /> : <FaBars />} 
      </button>
      <div className="text-lg font-bold text-secondary dark:text-secondary-dark">Material Design for Bootstrap</div>
      <div className="hidden lg:flex items-center space-x-6">
        <button className="flex items-center text-secondary dark:text-secondary-dark hover:text-accent">
          <FaEnvelope className="mr-2" />
          <span>Contact</span>
        </button>
        <button className="flex items-center text-secondary dark:text-secondary-dark hover:text-accent">
          <FaComments className="mr-2" />
          <span>Support</span>
        </button>
        <button className="flex items-center text-secondary dark:text-secondary-dark hover:text-accent">
          <FaUser className="mr-2" />
          <span>Account</span>
        </button>
        <button
          className="text-2xl text-secondary dark:text-secondary-dark hover:text-accent"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
};
