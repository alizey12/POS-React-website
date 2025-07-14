import { IoColorPalette } from "react-icons/io5";
import { HiOutlineTranslate } from "react-icons/hi";
import { MdNotificationsActive } from "react-icons/md"
import { FaBars } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import "./App.css";
const Navbar = ({ toggleSidebar, message, type = "info", isVisible, onClose  isSidebarOpen, isDarkMode, toggleTheme }) => {
 
    if (!isVisible) return null;
  
    const getTypeStyles = () => {
      switch (type) {
        case "success":
          return "bg-green-500 text-white";
        case "error":
          return "bg-red-500 text-white";
        case "warning":
          return "bg-yellow-500 text-black";
        default:
          return "bg-blue-500 text-white";
      }
    };
  


  return (
    <nav className="navbar fixed h-12 top-0 left-0 w-full shadow-md flex items-center justify-between px-4 py-2 z-10 transition-all">
      <button
        className="text-blue-500 text-2xl focus:outline-none"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? <IoCloseCircle /> : <FaBars />}
      </button>

      <div className="text-lg hover:text-teal-600 font-bold">
        Navbar
      </div>
      <div className="flex items-center space-x-6">
        <button
          className="flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-500"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          {isDarkMode ? "🌙" : "☀️"}
        </button>
        <button className="flex items-center hover:text-teal-500">
          <HiOutlineTranslate className="mr-2" />
          
        </button>
        <button className="flex items-center hover:text-teal-500">
        <span>{message}</span>
          <MdNotificationsActive className="mr-2" />
          
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

