import React from "react";
import DashboardCard from "../Components/DashboardCard";

const DashboardPage = () => {
  const stats = [
    { title: "Total Users", value: "1,204", trend: "+12%" },
    { title: "Total Projects", value: "56", trend: "+4%" },
    { title: "Revenue", value: "$3,200", trend: "+8%" },
    { title: "Active Sessions", value: "345", trend: "-2%" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        Dashboard Overview
      </h1>
      <p className="text-gray-500 mb-6">
        Welcome back! Here's what's happening today.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <DashboardCard key={index} title={stat.title} value={stat.value}>
            <div className="flex items-center justify-between">
              <span
                className={`${
                  stat.trend.startsWith("+") ? "text-green-500" : "text-red-500"
                } font-medium flex items-center gap-1`}
              >
                {stat.trend}
              </span>
              <span className="text-gray-400">vs last month</span>
            </div>
          </DashboardCard>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Recent Activity
        </h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
                {item}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800">
                  New user registered successfully
                </p>
                <p className="text-xs text-gray-400">2 hours ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
