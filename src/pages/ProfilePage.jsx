import React from "react";

const ProfilePage = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
      <p className="text-gray-500">View and update your profile information.</p>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-indigo-500 flex items-center justify-center text-white text-2xl font-bold">
            J
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Jawad Ahmad</h2>
            <p className="text-gray-500">Pro Plan</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <label className="w-32 text-gray-700 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="flex justify-end">
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
