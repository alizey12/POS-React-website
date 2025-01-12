
import { IoColorPalette } from "react-icons/io5";
import { HiOutlineTranslate } from "react-icons/hi";

import { FaBars, FaEnvelope , FaComments, FaUser } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";


const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md flex items-center justify-between px-4 py-2 z-10">
      <button
        className="text-blue-500 text-2xl focus:outline-none"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? <IoCloseCircle /> : <FaBars />} 
      </button>
      <div className="text-lg font-bold text-gray-700">Material Design for Bootstrap</div>
      <div className="hidden lg:flex items-center space-x-6">
        <button className="flex items-center text-gray-700 hover:text-blue-500">
          <HiOutlineTranslate className="mr-2" />
          <span>Contact</span>
        </button>
        <button className="flex items-center text-gray-700 hover:text-blue-500">
          <IoColorPalette className="mr-2" />
          <span>Theme</span>
        </button>
      

        <button className="flex items-center text-gray-700 hover:text-blue-500">
          <FaUser className="mr-2" />
          <span>Account</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;