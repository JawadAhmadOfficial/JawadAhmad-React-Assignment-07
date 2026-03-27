import React from "react";

// Destructuring props: title, value, icon, color (for border accent), and children
const DashboardCard = ({ title, value, icon, color, children }) => {
  // Color mapping for the left border accent
  const borderColor =
    {
      blue: "border-l-blue-500",
      red: "border-l-red-500",
      green: "border-l-green-500",
      orange: "border-l-orange-500",
    }[color] || "border-l-gray-500";

  return (
    <div
      className={`
      bg-white p-6 rounded-xl shadow-sm 
      border-l-4 
      ${borderColor} 
      hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full
    `}
    >
      {/* Top Section: Title and Icon */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
            {title}
          </p>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">{value}</h2>
        </div>
        {/* Icon Container */}
        <div className={`p-3 rounded-full bg-${color}-100 text-2xl`}>
          {icon}
        </div>
      </div>

      {/* Children Section (Footer area) */}
      {children && (
        <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-600">
          {children}
        </div>
      )}
    </div>
  );
};

export default DashboardCard;
