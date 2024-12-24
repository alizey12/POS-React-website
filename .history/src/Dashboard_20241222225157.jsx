

const Dashboard = () => {
  return (
    <div>
      import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-64 h-full bg-gray-800 text-white flex flex-col">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Sidebar Menu</h1>
      </div>
      <ul className="flex flex-col space-y-2">
        <li className="p-4 hover:bg-gray-700 cursor-pointer">
          <span onClick={toggleSubMenu}>Menu Item 1</span>
          {isOpen && (
            <ul className="pl-4">
              <li className="p-2 hover:bg-gray-600 cursor-pointer">Submenu Item 1</li>
              <li className="p-2 hover:bg-gray-600 cursor-pointer">Submenu Item 2</li>
            </ul>
          )}
        </li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Menu Item 2</li>
        <li className="p-4 hover:bg-gray-700 cursor-pointer">Menu Item 3</li>
      </ul>
    </div>
  );
};

export default Sidebar;

    </div>
  )
}

export default Dashboard
