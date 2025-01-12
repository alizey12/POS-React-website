import Navbar from '../src/navbar'
import Sidebar from '../src/sidebar'
import { useState } from "react"

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} />
     
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        {/* Page Content */}
        <main className="p-4 mt-16 flex flex-col ">
          <h2 className="text-2xl font-bold">Advanced Double Navigation</h2>
          <p className="mt-4 text-gray-600">
            1. Fixed side menu, hidden on small devices.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad vero commodi iusto alias optio ipsum molestiae quidem dolor architecto eum vel, ducimus perferendis tenetur similique voluptas nisi exercitationem eaque sunt harum? Distinctio adipisci nemo iste libero magnam veniam harum qui minus aliquid. Labore unde est nisi delectus sunt maiores optio sequi magnam id! Sequi similique vitae doloremque repellendus reiciendis ipsa doloribus quis corrupti esse atque!
          </p>
          <p className="text-gray-600">2. Fixed Navbar.</p>
          <div className="h-[2000px] mt-8 bg-gray-100"></div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
