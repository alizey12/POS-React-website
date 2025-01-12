

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'ml-64' : 'ml-20'
        }`}
      >
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        <main className="p-4 mt-16">
          <h2 className="text-2xl font-bold">Advanced Double Navigation</h2>
          <p className="mt-4 text-secondary dark:text-secondary-dark">1. Fixed side menu, hidden on small devices.</p>
          <p className="text-secondary dark:text-secondary-dark">2. Fixed Navbar.</p>
          <div className="h-[2000px] mt-8 bg-primary-light dark:bg-primary-dark"></div>
        </main>
      </div>
    </div>
  );
};
export default Dashboard;
