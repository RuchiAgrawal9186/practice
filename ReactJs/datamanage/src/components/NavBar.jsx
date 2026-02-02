import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="sticky top-0 z-50 bg-indigo-900 text-white">
        <div className="flex items-center justify-between px-6 h-12">
          {/* Left: Logo */}
          <div className="flex items-center gap-2 font-semibold">
            <div className="w-6 h-6 bg-white text-indigo-900 flex items-center justify-center rounded text-xs font-bold">
              ID
            </div>
            <span>IndiaDataHub</span>
          </div>

          {/* Center: Search */}
          <div className="hidden md:block w-1/3">
            <input
              type="text"
              placeholder="Search indicators, datasets..."
              className="w-full px-3 py-1 rounded text-black text-sm focus:outline-none bg-amber-50"
            />
          </div>

          {/* Right: Menu */}
          <div className="flex items-center gap-6 text-sm">
            <span className="cursor-pointer hover:underline">Database</span>
            <span className="cursor-pointer hover:underline">Calendar</span>
            <span className="cursor-pointer hover:underline">Help</span>

            {/* Profile */}
            <div className="w-7 h-7 rounded-full bg-white text-indigo-900 flex items-center justify-center font-bold">
              ID
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
