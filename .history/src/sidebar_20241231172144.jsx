

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-500 h-screen fixed top-0 left-0 flex flex-col text-white">
      {/* Logo */}
      <div className="p-4 flex justify-center">
       
      </div>

      {/* Social Icons */}
    

      {/* Links */}
      <ul className="mt-4">
        <li className="p-4 hover:bg-blue-600 cursor-pointer">Submit Blog</li>
        <li className="p-4 hover:bg-blue-600 cursor-pointer">Instruction</li>
        <li className="p-4 hover:bg-blue-600 cursor-pointer">About</li>
        <li className="p-4 hover:bg-blue-600 cursor-pointer">Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;
