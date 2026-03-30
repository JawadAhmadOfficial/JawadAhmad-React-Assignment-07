import React from "react";

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
      <p className="text-gray-500">Manage your account settings.</p>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <label className="w-32 text-gray-700 font-medium">Username</label>
          <input
            type="text"
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your username"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <label className="w-32 text-gray-700 font-medium">Email</label>
          <input
            type="email"
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex justify-end">
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
