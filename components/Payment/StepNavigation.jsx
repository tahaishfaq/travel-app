import { usePayment } from "@/context/PaymentContex";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const StepNavigation = () => {
  const { step } = usePayment();
  return (
    <div className="flex justify-end items-center w-full gap-x-6">
      <div className="flex items-center gap-1">
        <div className="bg-gradient-to-r from-[#FF3131] to-[#FF914D] p-0.5 rounded-full">
          <FaCheckCircle className="w-[15px] h-[15px] text-white" />
        </div>
        <span className="text-[16px] font-medium text-transparent bg-gradient-to-r from-[#FF3131] to-[#FF914D] bg-clip-text">
          Trip Overview
        </span>
      </div>

      <div className="flex items-center gap-1">
        <div
          className={`p-0.5 rounded-full ${
            step >= 2
              ? "bg-gradient-to-r from-[#FF3131] to-[#FF914D]"
              : "bg-gray-400"
          }`}
        >
          <FaCheckCircle className="w-[15px] h-[15px] text-white" />
        </div>
        <span
          className={`text-[16px] font-medium bg-clip-text ${
            step >= 2
              ? "text-transparent bg-gradient-to-r from-[#FF3131] to-[#FF914D]"
              : "text-gray-400"
          }`}
        >
          Review Pricing
        </span>
      </div>

      <div className="flex items-center gap-1">
        <div
          className={`p-0.5 rounded-full ${
            step >= 3
              ? "bg-gradient-to-r from-[#FF3131] to-[#FF914D]"
              : "bg-gray-400"
          }`}
        >
          <FaCheckCircle className="w-[15px] h-[15px] text-white" />
        </div>
        <span
          className={`text-[16px] font-medium bg-clip-text ${
            step >= 3
              ? "text-transparent bg-gradient-to-r from-[#FF3131] to-[#FF914D]"
              : "text-gray-400"
          }`}
        >
          Make Payment
        </span>
      </div>
    </div>
  );
};

export default StepNavigation;
