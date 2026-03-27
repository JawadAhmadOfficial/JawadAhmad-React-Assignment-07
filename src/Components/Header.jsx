import React from "react";

// 1. Image ko import karein
// Dhyan dein: Agar aapki image src folder ke bahar hai toh path change karein
import userImage from "../assets/Jawad Ahmad - Copy.jpg";

const Header = () => {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 sticky top-0 z-10 shadow-sm">
      {/* Search Bar (Left Side) */}
      <div className="flex items-center">
        <div className="relative">
          <input
            type="text"
            placeholder="Search anything..."
            className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          />
          <svg
            className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* User Profile (Right Side) */}
      <div className="flex items-center gap-4">
        {/* Notification Bell */}
        <button className="p-2 rounded-full hover:bg-gray-100 relative">
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="h-8 w-px bg-gray-200"></div> {/* Divider */}
        <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg p-1 pr-3 transition">
          {/* 2. Yahan imported image use karein */}
          <img
            src={userImage}
            alt="Jawad Ahmad"
            className="w-8 h-8 rounded-full object-cover"
          />

          <div className="hidden md:block">
            <p className="text-sm font-medium text-gray-700">Jawad Ahmad</p>
            <p className="text-xs text-gray-400 text-right">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
