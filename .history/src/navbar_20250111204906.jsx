import { IoColorPalette } from "react-icons/io5";
import { HiOutlineTranslate } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";

const Navbar = ({ toggleSidebar, isSidebarOpen, toggleTheme }) => {
  return (
    <navD className="fixed h-12 top-0 left-0 w-full  text-secondary dark:text-secondary-dark bg-dark bg-[var(--sidebar-bg)] shadow-md flex items-center justify-between px-4 py-2 z-10 transition-all">
      <button
        className="text-blue-500 text-2xl focus:outline-none"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? <IoCloseCircle /> : <FaBars />}
      </button>
      <div className="text-lg font-bold text-gray-700 dark:text-gray-200">
        Navbar
      </div>
      <div className="flex items-center space-x-6">
        <button
          className="flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-500"
          onClick={toggleTheme}
        >
          <IoColorPalette className="mr-2" />
          <span>Theme</span>
        </button>
        <button className="flex items-center text-gray-700 dark:text-gray-200 hover:text-blue-500">
          <HiOutlineTranslate className="mr-2" />
          <span>Translate</span>
        </button>
      </div>
    </navD>
  );
};

export default Navbar;
