import { IoColorPalette } from "react-icons/io5";
import { HiOutlineTranslate } from "react-icons/hi";
import { MdNotificationsActive } from "react-icons/md"
import { FaBars } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import "./App.css";
const Navbar = ({ toggleSidebar, isSidebarOpen, isDarkMode, toggleTheme }) => {
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
          <MdNotificationsActive className="mr-2" />
          <div id="toast-undo" class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
    <div class="text-sm font-normal">
       Conversation archived.
    </div>
    <div class="flex items-center ms-auto space-x-2 rtl:space-x-reverse">
        <a class="text-sm font-medium text-blue-600 p-1.5 hover:bg-blue-100 rounded-lg dark:text-blue-500 dark:hover:bg-gray-700" href="#">Undo</a>
        <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-undo" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
        </svg>
    </button>
    </div>
</div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

