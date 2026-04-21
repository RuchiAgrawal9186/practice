import React, { useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import { IconMenu2 } from "@tabler/icons-react";
import { IconX } from "@tabler/icons-react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    // <nav className="bg-white shadow-sm">
    //   <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
    //     {/* LOGO */}
    //     <h1 className="font-bold text-lg">
    //       <img
    //         src="/logoImage.png"
    //         alt="building"
    //         className="w-full h-10 object-cover rounded-xl"
    //       />
    //     </h1>

    //     {/* DESKTOP MENU */}
    //     <ul className="hidden md:flex space-x-6 text-sm">
    //       <li>Home</li>
    //       <li>Services</li>
    //       <li>Resources</li>
    //       <li>About</li>
    //       <li>Contact</li>
    //     </ul>

    //     {/* RIGHT SIDE */}
    //     <div className="flex items-center gap-3">
    //       {/* BUTTON (hidden on very small if needed) */}
    //       <button className="hidden md:block bg-blue-900 text-white px-4 py-1 rounded text-sm">
    //         Get Started
    //       </button>

    //       {/* HAMBURGER */}
    //       <button className="md:hidden text-xl" onClick={() => setOpen(!open)}>
    //         ☰
    //       </button>
    //     </div>
    //   </div>

    //   {/* MOBILE MENU */}
    //   {open && (
    //     <div className="md:hidden px-4 pb-4">
    //       <ul className="flex flex-col space-y-3 text-sm">
    //         <li>Home</li>
    //         <li>Services</li>
    //         <li>Resources</li>
    //         <li>About</li>
    //         <li>Contact</li>
    //       </ul>

    //       <button className="mt-4 w-full bg-blue-900 text-white py-2 rounded">
    //         Get Started
    //       </button>
    //     </div>
    //   )}
    // </nav>
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-8xl mx-auto px-4 h-[70px] flex items-center justify-between">
        {/* LEFT LOGO */}
        <div className="flex items-center -left-5">
          <img
            src="/logoImage.png"
            alt="logo"
            className="h-17 w-auto object-contain"
          />
        </div>

        {/* RIGHT SIDE (DESKTOP) */}
        <div className="hidden lg:flex items-center gap-20">
          {/* MENU */}
          <ul className="flex items-center gap-8 uppercase font-bold text-[13px] leading-none tracking-normal text-gray-800">
            <li className="cursor-pointer">Who We Serve</li>
            <li className="cursor-pointer">Solutions</li>
            <li className="cursor-pointer">Resources</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Contact Us</li>
          </ul>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-6 text-sm font-semibold text-gray-800">
            <IconSearch stroke={2} className="cursor-pointer" />

            <div className="flex items-center gap-1 cursor-pointer">
              IND <span className="text-[10px]">▼</span>
            </div>

            <div className="flex items-center gap-1 cursor-pointer">
              ENGLISH <span className="text-[10px]">▼</span>
            </div>
          </div>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <IconX stroke={2} /> : <IconMenu2 stroke={2} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden px-6 pb-4 bg-[#ffffff] border-t">
          <ul className="flex flex-col gap-4 text-sm font-medium text-gray-800 uppercase">
            <li onClick={() => setOpen(false)}>Who We Serve</li>
            <li onClick={() => setOpen(false)}>Solutions</li>
            <li onClick={() => setOpen(false)}>Resources</li>
            <li onClick={() => setOpen(false)}>About Us</li>
            <li onClick={() => setOpen(false)}>Contact Us</li>
          </ul>

          <div className="mt-4 flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-2">
              <IconSearch stroke={2} />
              Search
            </div>
            <div>IND ▼</div>
            <div>ENGLISH ▼</div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
