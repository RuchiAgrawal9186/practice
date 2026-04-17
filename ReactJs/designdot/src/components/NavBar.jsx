import React from 'react'

const NavBar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="font-bold text-lg">LOGO</h1>

        <ul className="hidden md:flex space-x-6 text-sm">
          <li>Home</li>
          <li>Services</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <button className="bg-blue-900 text-white px-4 py-1 rounded text-sm">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default NavBar
