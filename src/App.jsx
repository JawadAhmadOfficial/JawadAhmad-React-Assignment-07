import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./Components/Sidebar";
import DashboardLayout from "./Components/DashboardLayout";

import DashboardPage from "./Pages/DashboardPage";
import ProjectsPage from "./Pages/ProjectsPage";
import AnalyticsPage from "./Pages/AnalyticsPage";
import SettingsPage from "./Pages/SettingsPage";
import ProfilePage from "./Pages/ProfilePage";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-20"
        } p-6`}
      >
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </DashboardLayout>
      </div>
    </div>
  );
};

export default App;
