"use client";
import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#14213D] text-white relative mt-12">
        <div className="absolute inset-x-0 -top-12">
      <div className="bg-[#FCA311] rounded-[10px] px-10 py-8 mx-auto max-w-7xl flex items-center justify-between">
        <div className="">
          <h2 className="text-[24px] font-medium">
            Still Confused? Need help with anything contact us.
          </h2>
          <p className="text-xs">
            Our dedicated customer support team is available 24/7 to assist you
            with any inquiries, booking changes, or travel-related questions.
          </p>
        </div>
        <button className="bg-white text-[#FF3131] text-sm px-[20px] py-2.5 rounded-[3px] font-medium">
          Contact Us
        </button>
      </div>
      </div>

      <div className="max-w-7xl mx-auto py-48 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 items-start">
          <div className="space-y-2">
            <div className="flex items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-2xl font-bold">
                👜 Logo
              </span>
            </div>
            <p className="text-sm">
              "Discover the World with Lorem - Your Passport to Unforgettable
              Journeys!"
            </p>
          </div>

          <div className="space-y-4 pl-10">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-gray-400 cursor-pointer">About Us</li>
              <li className="hover:text-gray-400 cursor-pointer">FAQs</li>
              <li className="hover:text-gray-400 cursor-pointer">Contact Us</li>
              <li className="hover:text-gray-400 cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-gray-400 cursor-pointer">Blogs</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Popular Destinations</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-gray-400 cursor-pointer">Himachal</li>
              <li className="hover:text-gray-400 cursor-pointer">
                Uttarakhand
              </li>
              <li className="hover:text-gray-400 cursor-pointer">Kashmir</li>
              <li className="hover:text-gray-400 cursor-pointer">Kerala</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact Info</h3>
            <div className="space-y-1">
              <p className="text-sm">+91 95994 91709</p>
              <p className="text-sm">sales@tolearntotravel</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-medium">Follow us</h3>
              <div className="flex space-x-4">
                <a href="#" className="p-3 bg-white text-black rounded-full">
                  <FaFacebookF />
                </a>
                <a href="#" className="p-3 bg-white text-black rounded-full">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
