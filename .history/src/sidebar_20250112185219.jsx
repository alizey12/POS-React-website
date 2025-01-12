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
      className={`${
        isSidebarOpen ? "w-64" : "w-20"
      } sidebar h-screen fixed top-12 left-0 flex flex-col transition-all duration-300 ease-in-out z-20`}
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
        {/* Other menu items */}
      </ul>
    </div>
  );
};

export default Sidebar;
