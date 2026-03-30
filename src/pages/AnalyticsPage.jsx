import React from "react";

const AnalyticsPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
      <p className="text-gray-500">View detailed analytics and reports.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Visitors</h2>
          <p className="text-2xl font-bold mt-2">8,124</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Sales</h2>
          <p className="text-2xl font-bold mt-2">$12,450</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">
            Conversion Rate
          </h2>
          <p className="text-2xl font-bold mt-2">4.8%</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
