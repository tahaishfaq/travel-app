import React, { useState } from "react";

const Pricing = () => {
  const [selected, setSelected] = useState(0);

  const pricingPlans = [
    {
      id: 0,
      title: "Value",
      price: "₹29,094",
      benefits: ["Stay at Danakha Villa Ubud", "Stay at Danakha Villa Ubud"],
    },
    {
      id: 1,
      title: "Value",
      price: "₹29,094",
      benefits: ["Stay at Danakha Villa Ubud", "Stay at Danakha Villa Ubud"],
    },
    {
      id: 2,
      title: "Value",
      price: "₹29,094",
      benefits: ["Stay at Danakha Villa Ubud", "Stay at Danakha Villa Ubud"],
    },
  ];

  return (
    <div className="mx-auto max-w-7xl py-20">
      <h2 className="text-3xl font-bold">Choose Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-8 pt-10">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="relative rounded-lg flex items-center cursor-pointer transition border-l border-r border-dashed border-[#FF3131] bg-white ticket-card"
            onClick={() => setSelected(index)}
          >
            {/* Left Section - Selection and Label */}
            <div className="relative flex flex-col items-center justify-center gap-1.5 border-y border-dashed border-[#FF3131] h-[170px] py-8 px-6">
              <div
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  selected === index
                    ? "border-[#09B367] bg-[#09B367]"
                    : "border-gray-300"
                }`}
              >
                {selected === index && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12l4 4L19 7" />
                  </svg>
                )}
              </div>
              <p className="font-medium text-[#21242C] text-sm">{plan.title}</p>
            </div>

            {/* Middle Section - Pricing */}
            <div className="relative flex-1 bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white flex flex-col justify-center items-center gap-y-1.5 h-[170px] py-8 px-6">
              <p className="text-sm font-medium bg-white text-black px-6 py-1.5 rounded-full inline-block">
                Starts From
              </p>
              <p className="font-bold text-[#000000] text-3xl">
                {plan.price}
              </p>
            </div>

            {/* Right Section - Benefits */}
            <div className="flex-1 border-y border-dashed border-[#FF3131] h-[170px] py-8 px-6 gap-y-1.5 flex flex-col justify-center items-center">
              <h4 className="font-normal text-2xl text-[#0A0A0A]">What Do you get?</h4>
              <ul className="text-[#0A0A0A] text-sm list-disc list-inside">
                {plan.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
