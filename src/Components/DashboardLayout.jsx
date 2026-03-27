import React, { useState } from "react"; // useState import kiya
import Sidebar from "./Sidebar";
import Header from "./Header";

const DashboardLayout = ({ children }) => {
  // Sidebar ke liye State
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Toggle Function
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar ko state aur toggle function pass kiya */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Dynamic Margin: Agar sidebar open hai toh ml-64 (256px), else ml-20 (80px) */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-20"}`}
      >
        <Header />

        <main className="flex-1 p-8 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
