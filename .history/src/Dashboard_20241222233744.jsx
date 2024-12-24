const Navbar = ({ toggleSidebar }) => {
    return (
      <nav className="bg-fuchsia-900 text-white flex justify-between items-center px-6 py-4 shadow-md">
        <button
          onClick={toggleSidebar}
          className="text-3xl focus:outline-none"
          aria-label="Toggle Sidebar"
        >
          ☰
        </button>
        <h1 className="text-2xl font-semibold">E-Commerce Dashboard</h1>
        <div>
          <button className="bg-fuchsia-700 px-4 py-2 rounded-lg">Logout</button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  
