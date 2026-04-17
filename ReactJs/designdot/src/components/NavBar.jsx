import React, { useState } from 'react'

const NavBar = () => {
    const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* LOGO */}
        <h1 className="font-bold text-lg">
          <img
            src="/logoImage.png"
            alt="building"
            className="w-full h-10 object-cover rounded-xl"
          />
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex space-x-6 text-sm">
          <li>Home</li>
          <li>Services</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          {/* BUTTON (hidden on very small if needed) */}
          <button className="hidden md:block bg-blue-900 text-white px-4 py-1 rounded text-sm">
            Get Started
          </button>

          {/* HAMBURGER */}
          <button className="md:hidden text-xl" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col space-y-3 text-sm">
            <li>Home</li>
            <li>Services</li>
            <li>Resources</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <button className="mt-4 w-full bg-blue-900 text-white py-2 rounded">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavBar
