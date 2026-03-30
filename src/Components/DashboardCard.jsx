import React from "react";

const DashboardCard = ({ title, value, children }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="mt-2 text-2xl font-semibold text-gray-900">{value}</p>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default DashboardCard;
