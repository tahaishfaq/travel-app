"use client";
import React from "react";
import {
  FaHotel,
  FaStar,
  FaArrowLeft,
  FaArrowRight,
  FaGoogle,
} from "react-icons/fa";
import { MdOutlineKingBed } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";

const packages = [
  {
    id: 1,
    name: "Cocogiri Island Resort Maldives",
    rating: 4.5,
    hotelType: "Hotel",
    reviews: "4.5/5",
    amenities: "Water Villa, Beach Bungalow, Split Stay",
    sizes: ["15,000 Sq Ft", "16,000 Sq Ft", "15,000 Sq Ft"],
    includes: [
      "Accommodation",
      "Speed Boat Transfer",
      "Green Tax",
      "24x7 Online Support",
    ],
    price: "₹173,363",
    image:
      "https://images.pexels.com/photos/3601420/pexels-photo-3601420.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with your image URL
  },
  {
    id: 2,
    name: "Cocogiri Island Resort Maldives",
    rating: 4.5,
    hotelType: "Hotel",
    reviews: "4.5/5",
    amenities: "Water Villa, Beach Bungalow, Split Stay",
    sizes: ["15,000 Sq Ft", "16,000 Sq Ft", "15,000 Sq Ft"],
    includes: [
      "Accommodation",
      "Speed Boat Transfer",
      "Green Tax",
      "24x7 Online Support",
    ],
    price: "₹173,363",
    image:
      "https://images.pexels.com/photos/1483053/pexels-photo-1483053.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with your image URL
  },
  {
    id: 3,
    name: "Cocogiri Island Resort Maldives",
    rating: 4.5,
    hotelType: "Hotel",
    reviews: "4.5/5",
    amenities: "Water Villa, Beach Bungalow, Split Stay",
    sizes: ["15,000 Sq Ft", "16,000 Sq Ft", "15,000 Sq Ft"],
    includes: [
      "Accommodation",
      "Speed Boat Transfer",
      "Green Tax",
      "24x7 Online Support",
    ],
    price: "₹173,363",
    image:
      "https://images.pexels.com/photos/9482132/pexels-photo-9482132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Replace with your image URL
  }
];

export default function MyTrips() {
  return (
    <section className="max-w-7xl mx-auto py-32">
      <div className="text-[#0A0A0A] space-y-2.5">
        <h2 className="text-3xl font-bold text-[32px]">Your Trips</h2>
        <p className="text-[#0A0A0A] text-[16px]">
          Handpicked Getaways for Every Traveler
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6 pt-16">
        <div className="col-span-3 space-y-6">
          {/* Price Filter */}
          <div className="space-y-4">
            <h3 className="text-2xl font-medium">Trip Status</h3>
            <div className="space-y-2.5">
              {[
                "Upcoming",
                "Completed",
                "Ongoing",
              ].map((price, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-5 h-5 appearance-none border border-[#ff3132] rounded-sm checked:bg-[#ff3132] checked:border-[#ff3132] focus:ring-1 focus:ring-[#ff3132]"
                  />
                  <span className="text-[#4D525F] text-[16px]">{price}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-9">
          <div className="space-y-4">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="flex bg-white border border-[#FF507A] p-[10px] rounded-lg border-opacity-25"
              >
                <div className="max-w-[388px]">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="px-4 flex-1 space-y-2">
                  <h3 className="text-2xl font-medium">{pkg.name}</h3>
                  <div className="flex items-center space-x-2.5 text-gray-600 text-sm">
                    <span className="flex items-center gap-x-2.5 font-medium">
                      {pkg.rating}
                      <FaStar className="text-[#4D525F]" />
                      {pkg.hotelType}
                    </span>
                    <span className="flex items-center gap-x-2.5 font-medium">
                      <FaGoogle className="text-[#4D525F]" />
                      {pkg.reviews}
                    </span>
                    <span className="flex items-center gap-x-1 font-medium">
                      <MdOutlineKingBed className="text-[#4D525F]" />
                      {pkg.amenities}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-[#1E1E1E] px-10 py-2 rounded-full bg-[#31C48D] bg-opacity-40 flex items-center gap-x-1.5">
                      <img
                        src="/icons/Square Meters.png"
                        alt="icon"
                        className="w-5 h-5"
                      />{" "}
                      15,000 Sq Ft
                    </span>
                    <span className="text-xs text-[#1E1E1E] px-5 py-2 rounded-full bg-[#F5E9FE] flex items-center gap-x-1.5">
                      <img
                        src="/icons/Square Meters.png"
                        alt="icon"
                        className="w-5 h-5"
                      />{" "}
                      15,000 Sq Ft
                    </span>
                    <span className="text-xs text-[#1E1E1E] px-10 py-2 rounded-full bg-[#FFD4B9]  flex items-center gap-x-1.5">
                      <img
                        src="/icons/Square Meters.png"
                        alt="icon"
                        className="w-5 h-5"
                      />{" "}
                      15,000 Sq Ft
                    </span>
                    <span className="text-xs text-[#1E1E1E] px-5 py-2 rounded-full bg-[#E3EEFF]  flex items-center gap-x-1.5">
                      <img
                        src="/icons/Square Meters.png"
                        alt="icon"
                        className="w-5 h-5"
                      />{" "}
                      15,000 Sq Ft
                    </span>
                  </div>

                  <div className="space-y-1.5 pt-1">
                    <h5 className="text-xs text-[#4D525F]">INCLUDES:</h5> 
                    <p className="text-[14px] text-[#4D525F] font-medium">
                    {pkg.includes.join(", ")}
                    </p>
                  </div>

                  <div className="flex justify-end gap-x-2.5 items-center pt-2 border-t border-[#E8EAF8]">
                    <p className="text-[18px] font-bold text-[#21242C]">{pkg.price}</p><span>/ couple</span>
                    <button className="bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white text-lg font-semibold px-6 py-2 rounded-lg">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Buttons */}
            {/* <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg">
              <FaArrowLeft />
            </button>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full shadow-lg">
              <FaArrowRight />
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
