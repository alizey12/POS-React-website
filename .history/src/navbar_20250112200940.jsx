import { IoColorPalette } from "react-icons/io5";
import { HiOutlineTranslate } from "react-icons/hi";
import { MdNotificationsActive } from "react-icons/md"
import { FaBars } from "react-icons/fa";
import { IoCloseCircle } from "react-icons/io5";
import "./App.css";
const Navbar = ({ toggleSidebar, isSidebarOpen, isDarkMode, toggleTheme }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

  } 
  return (
    <nav className="navbar fixed h-12 top-0 left-0 w-full shadow-md flex items-center justify-between px-4 py-2 z-10 transition-all">
      <button
        className="text-blue-500 text-2xl focus:outline-none"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? <IoCloseCircle /> : <FaBars />}
      </button>

      <div className="text-lg hover:text-teal-600 font-bold">
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
        <button className="flex items-center hover:text-teal-500">
          <HiOutlineTranslate className="mr-2" />
          
        </button>
        <button className="flex items-center hover:text-teal-500">
          <MdNotificationsActive className="mr-2" />
          <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
<li className="relative">
              <button
                onClick={toggleDropdown}
                id="dropdownNavbarLink"
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
             
                
              </button>

              {isDropdownOpen && (
                <div
                  id="dropdownNavbar"
                  className="z-10 absolute font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownNavbarLink"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    </ul>
        </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

