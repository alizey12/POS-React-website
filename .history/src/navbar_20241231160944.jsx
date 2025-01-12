<div className="flex flex-col flex-1">
{/* Menu Bar */}
<div className="flex justify-between items-center bg-white shadow-md px-4 py-2">
  <button
    onClick={toggleSidebar}
    className="text-black bg-gray-200 px-2 py-1 rounded-md hover:bg-gray-300 focus:outline-none"
  >
    ☰
  </button>
  <h1 className="text-xl font-bold text-gray-700">Dashboard</h1>
  <div className="flex items-center space-x-4">
    <span className="text-gray-700">Admin</span>
    <img
      src="https://via.placeholder.com/40"
      alt="Profile"
      className="w-10 h-10 rounded-full"
    />
  </div>
</div>