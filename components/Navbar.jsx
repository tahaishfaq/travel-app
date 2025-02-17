"use client";

import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-0 lg:px-0 md:px-2">
        <div className="flex justify-between items-center h-20">

          <Link href="/" className="flex items-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-2xl font-bold">
              👜 Logo
            </span>
          </Link>


          <div className="hidden sm:flex space-x-8">
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


          <div className="sm:flex hidden space-x-4">
            <button className="px-[24px] py-[12px] border-2 border-[#E0DEF7] rounded-lg text-[#000929] hover:bg-gray-100">
              Login
            </button>
            <button className="px-[24px] py-[12px] text-white rounded-lg bg-gradient-to-r from-[#FF3131] to-[#FF914D]">
              Sign up
            </button>
          </div>

          <div className="flex sm:hidden items-center gap-2">
            <button className="px-4 py-2 border-2 border-[#E0DEF7] rounded-lg text-[#000929] hover:bg-gray-100 text-sm">
              Login
            </button>
            <button className="px-4 py-2 text-white rounded-lg bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-sm">
              Sign up
            </button>
            <button
              className="p-2 rounded-md text-gray-700 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>



        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-start p-2">
            {["Domestic Trips", "International Trips", "Fixed Departures"].map(
              (title) => (
                <div key={title} className="w-full">
                  <button
                    onClick={() => toggleDropdown(title)}
                    className="w-full text-left flex justify-between items-center px-4 py-2 text-gray-700 hover:text-orange-500"
                  >
                    {title}
                    {openDropdown === title ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {openDropdown === title && (
                    <div className="pl-6 py-2 space-y-2">
                      <Link href="#" className="block text-gray-600 hover:text-orange-500">
                        Option 1
                      </Link>
                      <Link href="#" className="block text-gray-600 hover:text-orange-500">
                        Option 2
                      </Link>
                      <Link href="#" className="block text-gray-600 hover:text-orange-500">
                        Option 3
                      </Link>
                    </div>
                  )}
                </div>
              )
            )}
            <Link
              href="#"
              className="w-full px-4 py-2 text-gray-700 hover:text-orange-500 text-left"
            >
              Speciality Tours
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
