import { useState, useEffect } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [notification, setNotification] = useState({
    message: "",
    type: "info",
    isVisible: false,
  });

  // Check saved theme on load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.setAttribute("data-theme", savedTheme);
    setIsDarkMode(savedTheme === "dark");
  }, []);

  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    showNotification(
      `Sidebar is now ${!isSidebarOpen ? "open" : "closed"}`,
      "info"
    );
  };

  // Toggle Dark/Light Mode
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
    showNotification(
      `Switched to ${newTheme.charAt(0).toUpperCase() + newTheme.slice(1)} Mode`,
      "success"
    );
  };

  // Show Notification
  const showNotification = (message, type) => {
    setNotification({ message, type, isVisible: true });

    // Auto-hide notification after 3 seconds
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, isVisible: false }));
    }, 3000);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        <Navbar
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
          toggleTheme={toggleTheme}
          isDarkMode={isDarkMode}
          message={notification.message}
          type={notification.type}
          isVisible={notification.isVisible}
          onClose={() =>
            setNotification((prev) => ({ ...prev, isVisible: false }))
          }
        />

        <main className="p-4">
          <h2 className="text-2xl mt-16 font-bold">Dashboard</h2>
          <p className={`mt-4`}>1. Fixed sidebar, hidden on small devices.</p>
          <p>2. Fixed Navbar.</p>
          <div className="h-[2000px] mt-8 bg-primary-light dark:bg-primary-dark"></div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
