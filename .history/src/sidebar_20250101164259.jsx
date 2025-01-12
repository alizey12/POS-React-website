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
      className={`sidebar ${
        isSidebarOpen ? "w-64" : "w-20"
      } fixed top-12 left-0 h-screen flex flex-col transition-all duration-300 ease-in-out z-20`}
    >
      <div className="p-4 flex justify-center">
        <img
          src="https://mdbootstrap.com/img/logo/mdb-transparent.png"
          alt="Logo"
          className={`w-32 transition-all ${isSidebarOpen ? "block" : "hidden"}`}
        />
      </div>

      <ul className="mt-6">
        <li className="p-4 hover:bg-accent cursor-pointer flex items-center gap-3">
          <FaHome className="text-xl" />
          {isSidebarOpen && <span>Dashboards</span>}
        </li>
        <li
          className="p-4 hover:bg-accent cursor-pointer flex items-center justify-between gap-3"
          onClick={() => toggleSubmenu("instruction")}
        >
          <div className="flex items-center gap-3">
            <MdOutlineSecurity className="text-xl" />
            {isSidebarOpen && <span>Roles & Permissions</span>}
          </div>
          {isSidebarOpen && <FaChevronDown />}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
