import React from "react";

// Icons
const icons = {
  Dashboard: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
      />
    </svg>
  ),
  Projects: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
      />
    </svg>
  ),
  Analytics: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  ),
  Settings: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  ),
  Profile: (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </svg>
  ),
};

// Props: isOpen (state) aur toggleSidebar (function)
const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navItems = [
    { name: "Dashboard", href: "#", active: true },
    { name: "Projects", href: "#", active: false },
    { name: "Analytics", href: "#", active: false },
    { name: "Settings", href: "#", active: false },
    { name: "Profile", href: "#", active: false },
  ];

  return (
    <aside
      className={`fixed left-0 top-0 h-screen bg-slate-900 text-white flex flex-col transition-all duration-300 
      ${isOpen ? "w-64" : "w-20"}`} // Agar open hai toh 256px, else 80px
    >
      {/* Logo Section */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-slate-800">
        {/* Agar close hai toh sirf icon dikhao, else text */}
        {isOpen ? (
          <span className="text-xl font-bold text-white tracking-tight">
            DashBoard Pro
          </span>
        ) : (
          <span className="text-xl font-bold text-white mx-auto">D</span>
        )}

        {/* Close/Open Button (Hamburger/Arrow) */}
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-lg hover:bg-slate-800 transition-colors"
        >
          {/* Arrow icon change logic */}
          {isOpen ? (
            <svg
              className="w-4 h-4 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-3 py-6 space-y-2">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative
              ${
                item.active
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
          >
            {/* Icon */}
            <span
              className={`flex-shrink-0 ${item.active ? "text-white" : "text-slate-500 group-hover:text-indigo-400"}`}
            >
              {icons[item.name]}
            </span>

            {/* Text (Sirf dikhayi dega jab isOpen true ho) */}
            <span
              className={`font-medium text-sm whitespace-nowrap transition-all duration-300 
               ${isOpen ? "opacity-100" : "opacity-0 hidden"}`}
            >
              {item.name}
            </span>

            {/* Tooltip for closed state (Optional but nice UX) */}
            {!isOpen && (
              <div className="absolute left-full ml-6 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                {item.name}
              </div>
            )}
          </a>
        ))}
      </nav>

      {/* Bottom User Section */}
      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-xs font-bold flex-shrink-0">
            J
          </div>
          {/* Text hide/show logic */}
          <div
            className={`flex flex-col overflow-hidden transition-all duration-300 ${isOpen ? "opacity-100" : "opacity-0 hidden"}`}
          >
            <span className="text-sm font-medium text-white">Jawad Ahmad</span>
            <span className="text-xs text-slate-500">Pro Plan</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
