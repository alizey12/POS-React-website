import { FaChevronDown, FaHome, FaUserCheck } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { useState } from "react";

const Sidebar = ({ isSidebarOpen }) => {
  const [submenuOpen, setSubmenuOpen] = useState({});

  const toggleSubmenu = (item) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
    <div
      className={`w-64 bg-teal-800 h-screen fixed top-10 left-0 text-white flex flex-col transition duration-300 ease-in-out ${
        isSidebarOpen ? "" : "-translate-x-full"
      } z-20`}
    >
      {/* Logo */}
      <div className="p-4">
        <img
          src="https://mdbootstrap.com/img/logo/mdb-transparent.png"
          alt="Logo"
          className="w-32 mx-auto"
        />
      </div>

      {/* Links */}
      <ul className="mt-6">
        <li className="p-4 hover:bg-blue-600 cursor-pointer flex items-center gap-3">
          <FaHome /> <span>Dashboards</span>
        </li>
        <li
          className="p-4 hover:bg-blue-600 cursor-pointer flex items-center justify-between gap-3"
          onClick={() => toggleSubmenu('instruction')}
        >
          <div className="flex items-center gap-3">
            <MdOutlineSecurity /> <span>Roles & Permissions</span>
          </div>
          <FaChevronDown />
        </li>
        {submenuOpen['instruction'] && (
          <ul className="pl-8">
            <li className="p-2 hover:bg-blue-500">Getting Started</li>
            <li className="p-2 hover:bg-blue-500">Tutorials</li>
          </ul>
        )}
        <li className="p-4 hover:bg-blue-600 cursor-pointer flex items-center gap-3">
          <FaUserCheck /> <span>Users</span>
        </li>
        <li
          className="p-4 hover:bg-blue-600 cursor-pointer flex items-center justify-between gap-3"
          onClick={() => toggleSubmenu('contact')}
        >
          <div className="flex items-center gap-3">
            <IoCall /> <span>Contact</span>
          </div>
          <FaChevronDown />
        </li>
        {submenuOpen['contact'] && (
          <ul className="pl-8">
            <li className="p-2 hover:bg-blue-500">Email</li>
            <li className="p-2 hover:bg-blue-500">Phone</li>
          </ul>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;