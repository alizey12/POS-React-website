import React, { useState } from "react";
import { IoColorPalette, IoCloseCircle } from "react-icons/io5";
import { HiOutlineTranslate } from "react-icons/hi";
import { MdNotificationsActive } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import "./App.css";

const Navbar = ({ toggleSidebar, isSidebarOpen, isDarkMode, toggleTheme }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar fixed h-12 top-0 left-0 w-full shadow-md flex items-center justify-between px-4 py-2 z-10 transition-all">
      {/* Sidebar Toggle Button */}
      <button
        className="text-blue-500 text-2xl focus:outline-none"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? <IoCloseCircle /> : <FaBars />}
      </button>

      {/* Navbar Title */}
      <div className="text-lg hover:text-teal-600 font-bold">Navbar</div>

      {/* Right-side Icons */}
      <div className="flex items-center space-x-6">
        {/* Theme Toggle */}
        <button
          className="flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-500"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>

        {/* Translate Icon */}
        <button className="flex items-center hover:text-teal-500">
          <HiOutlineTranslate className="mr-2" />
        </button>

        {/* Notifications Dropdown */}
        <div className="relative">
          <button
            className="flex items-center hover:text-teal-500"
            onClick={toggleDropdown}
            aria-label="Notifications"
          >
            <MdNotificationsActive className="mr-2" />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div
              className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-700 rounded-lg shadow-lg z-10"
              onClick={() => setIsDropdownOpen(false)} // Close dropdown on selection
            >
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-400">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Dashboard
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
