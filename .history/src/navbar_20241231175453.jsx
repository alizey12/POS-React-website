import { FiMenu } from "react-icons/fi";
import { FaEnvelope, FaComments, FaUser } from "react-icons/fa";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md flex items-center justify-between px-4 py-3 z-10">
      {/* Menu Icon for Sidebar */}
      <button
        onClick={toggleSidebar}
        className="text-gray-700 text-2xl hover:text-blue-500 focus:outline-none"
        aria-label="Toggle Sidebar"
      >
        <FiMenu />
      </button>

      {/* Breadcrumb */}
      <div className="text-lg font-bold text-gray-700">
        Material Design for Bootstrap
      </div>

      {/* Links */}
      <div className="flex items-center space-x-6">
        <button className="flex items-center text-gray-700 hover:text-blue-500 focus:outline-none">
          <FaEnvelope className="mr-2" />
          <span>Contact</span>
        </button>
        <button className="flex items-center text-gray-700 hover:text-blue-500 focus:outline-none">
          <FaComments className="mr-2" />
          <span>Support</span>
        </button>
        <button className="flex items-center text-gray-700 hover:text-blue-500 focus:outline-none">
          <FaUser className="mr-2" />
          <span>Account</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
