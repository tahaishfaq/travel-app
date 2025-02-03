"use client";

import Link from "next/link";
import DropdownMenu from "./DropdownMenu";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-0 lg:px-0 md:px-2">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-2xl font-bold">
              👜 Logo
            </span>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex space-x-8">
            <DropdownMenu
              title="Domestic Trips"
              items={[
                { label: "Mountains", href: "#" },
                { label: "Beaches", href: "#" },
                { label: "Desert Safari", href: "#" },
              ]}
              className="text-[#000929] text-[14px] hover:text-orange-500 font-gloria"
            />
            <DropdownMenu
              title="International Trips"
              items={[
                { label: "Europe Tour", href: "#" },
                { label: "Asia Tour", href: "#" },
                { label: "America Tour", href: "#" },
              ]}
              className="text-[#000929] text-[14px] hover:text-orange-500 font-gloria"
            />
            <DropdownMenu
              title="Fixed Departures"
              items={[
                { label: "Winter Specials", href: "#" },
                { label: "Summer Break", href: "#" },
              ]}
              className="text-[#000929] text-[14px] hover:text-orange-500 font-gloria"
            />
            <Link
              href="#"
              className="text-gray-700 text-[14px] hover:text-orange-500 font-gloria"
            >
              Speciality Tours
            </Link>
          </div>

          {/* Login & Sign Up */}
          <div className="flex space-x-4">
            <button className="px-[24px] py-[12px] border-2 border-[#E0DEF7] rounded-lg text-[#000929] hover:bg-gray-100">
              Login
            </button>
            <button className="px-[24px] py-[12px] text-white rounded-lg bg-gradient-to-r from-[#FF3131] to-[#FF914D]">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
