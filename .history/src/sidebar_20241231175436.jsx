import { FaFacebook, FaPinterest, FaGooglePlusG, FaTwitter } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-500 h-screen fixed top-0 left-0 flex flex-col text-white shadow-lg">
      {/* Logo */}
      <div className="p-6 flex justify-center">
        <img
          src="https://mdbootstrap.com/img/logo/mdb-transparent.png"
          alt="Logo"
          className="w-32"
        />
      </div>

      {/* Social Icons */}
      <div className="flex justify-around p-4 border-b border-blue-400">
        <FaFacebook className="text-2xl cursor-pointer hover:text-blue-300" />
        <FaPinterest className="text-2xl cursor-pointer hover:text-blue-300" />
        <FaGooglePlusG className="text-2xl cursor-pointer hover:text-blue-300" />
        <FaTwitter className="text-2xl cursor-pointer hover:text-blue-300" />
      </div>

      {/* Links */}
      <ul className="mt-6 space-y-2">
        <li className="p-4 hover:bg-blue-600 cursor-pointer transition duration-300 rounded-md mx-2">
          Submit Blog
        </li>
        <li className="p-4 hover:bg-blue-600 cursor-pointer transition duration-300 rounded-md mx-2">
          Instruction
        </li>
        <li className="p-4 hover:bg-blue-600 cursor-pointer transition duration-300 rounded-md mx-2">
          About
        </li>
        <li className="p-4 hover:bg-blue-600 cursor-pointer transition duration-300 rounded-md mx-2">
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
