import { useState } from 'react';
import { CgCloseO } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleSubMenu = () => setIsSubMenuOpen(!isSubMenuOpen);

  return (
    <div className="flex">
      <button
        onClick={toggleSidebar}
        className="p-3 m-2 bg-blue-900 text-white rounded-md focus:outline-none"
      >
        {isOpen ? <IoCloseCircle /> : <GiHamburgerMenu />}
      </button>

      <aside
        className={`fixed top-0 left-0 w-64 h-screen bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}
      >
        <div className="p-4">
        <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <CgCloseO
              onClick={toggleSidebar}
              className="w-6 h-6 cursor-pointer hover:text-red-500"
            />
          </div>         
          <ul className="mt-4">
            <li className="p-2 hover:bg-gray-700 rounded-md cursor-pointer">Home</li>
            <li className="p-2 hover:bg-gray-700 rounded-md cursor-pointer">Profile</li>
            <li>
              <button
                onClick={toggleSubMenu}
                className="flex justify-between w-full p-2 hover:bg-gray-700 rounded-md"
              >
                E-commerce
                <span>{isSubMenuOpen ? '▲' : '▼'}</span>
              </button>
              <ul className={`pl-6 mt-2 ${isSubMenuOpen ? 'block' : 'hidden'}`}>
                <li className="p-2 hover:bg-gray-700 rounded-md cursor-pointer">Products</li>
                <li className="p-2 hover:bg-gray-700 rounded-md cursor-pointer">Orders</li>
                <li className="p-2 hover:bg-gray-700 rounded-md cursor-pointer">Invoices</li>
              </ul>
            </li>
            <li className="p-2 hover:bg-gray-700 rounded-md cursor-pointer">Settings</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
