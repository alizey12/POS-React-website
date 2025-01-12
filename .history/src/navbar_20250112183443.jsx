import { IoColorPalette } from "react-icons/io5";
import { HiOutlineTranslate } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import "./App.css";
const Navbar = ({ toggleSidebar, isSidebarOpen,isDarkMode , toggleTheme }) => {
  return (
    <nav className="fixed h-12 top-0 left-0 w-full shadow-md flex items-center justify-between px-4 py-2 z-10 transition-all">
     <button
  className="text-blue-500 text-2xl focus:outline-none"
  onClick={() => {
    toggleSidebar();
    toggleTheme();
  }}
  aria-label="Toggle Sidebar and Theme"
>
  {isSidebarOpen ? <IoCloseCircle /> : <FaBars />}
</button>

      <div className="text-lg font-bold text-gray-700 dark:text-white">
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
        <button className="flex items-center text-gray-700 dark:text-white hover:text-gr-500">
          <HiOutlineTranslate className="mr-2" />
          <span>Translate</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
