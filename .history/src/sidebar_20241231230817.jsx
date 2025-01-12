
const Sidebar = () => {
  return (
    <div
      className={`w-64 bg-teal-800 h-screen fixed top-10 left-0 text-white flex flex-col transition duration-300 ease-in-out ${
        isSidebarOpen ? "" : "-translate-x-full"
      }`}
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
        <li className="p-4 hover:bg-blue-600 cursor-pointer">Submit Blog</li>
        <li className="p-4 hover:bg-blue-600 cursor-pointer">Instruction</li>
        <li className="p-4 hover:bg-blue-600 cursor-pointer">About</li>
        <li className="p-4 hover:bg-blue-600 cursor-pointer">Contact</li>
      </ul>
    </div>
  );
};
export def