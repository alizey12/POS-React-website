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
    <divdark
      className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-dark bg-[var(--sidebar-bg)] h-screen fixed top-12 left-0 text-secondary dark:text-secondary-dark flex flex-col transition-all duration-300 ease-in-out z-20`}
    >
      <div className="p-4 flex justify-center">
        <img
          src="https://mdbootstrap.com/img/logo/mdb-transparent.png"
          alt="Logo"
          className={`w-32 transition-all ${isSidebarOpen ? 'block' : 'hidden'}`}
        />
      </div>
      <ul className="mt-6">
        <li className="p-4 hover:bg-accent cursor-pointer flex items-center gap-3">
          <FaHome className="text-xl" />
          {isSidebarOpen && <span>Dashboards</span>}
        </li>
        <li
          className="p-4 hover:bg-accent cursor-pointer flex items-center justify-between gap-3"
          onClick={() => toggleSubmenu('instruction')}
        >
          <div className="flex items-center gap-3">
            <MdOutlineSecurity className="text-xl" />
            {isSidebarOpen && <span>Roles & Permissions</span>}
          </div>
          {isSidebarOpen && <FaChevronDown />}
        </li>
        {submenuOpen['instruction'] && isSidebarOpen && (
          <ul className="pl-8">
            <li className="p-2 hover:bg-accent">Getting Started</li>
            <li className="p-2 hover:bg-accent">Tutorials</li>
          </ul>
        )}
        <li className="p-4 hover:bg-accent cursor-pointer flex items-center gap-3">
          <FaUserCheck className="text-xl" />
          {isSidebarOpen && <span>Users</span>}
        </li>
        <li
          className="p-4 hover:bg-accent cursor-pointer flex items-center justify-between gap-3"
          onClick={() => toggleSubmenu('contact')}
        >
          <div className="flex items-center gap-3">
            <IoCall className="text-xl" />
            {isSidebarOpen && <span>Contact</span>}
          </div>
          {isSidebarOpen && <FaChevronDown />}
        </li>
        {submenuOpen['contact'] && isSidebarOpen && (
          <ul className="pl-8">
            <li className="p-2 hover:bg-accent">Email</li>
            <li className="p-2 hover:bg-accent">Phone</li>
          </ul>
        )}
      </ul>
    </divdark>
  );
};

export default Sidebar;
