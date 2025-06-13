import React from "react";
import Image from "next/image";

const RecentJobCard = ({img}) => {
  return (
    <div className="w-[11.5rem] min-2xl:w-xs bg-white rounded-md shadow-xl overflow-hidden">
      {/* Logo Image */}
      <div className="w-full h-[100px] relative">
        <div className="absolute inset-0 rounded-md overflow-hidden">
          <Image
            src={`/assets/Png/recentJob/${img}.png`}
            alt="Company Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      {/* Card Content */}
      <div className="px-3 py-2 space-y-1">
        <p className="text-[11px] font-bold text-black leading-tight">
          Urgent Hiring for Counselor
        </p>
        <div className="flex justify-between text-[11px] text-gray-700 font-medium">
          <span>Full Time</span>
          <span>5-15k/monthly</span>
        </div>
        <p className="text-[9px] text-gray-700 font-semibold">Adxventure LLP</p>
        <p className="text-[9px] text-gray-500 leading-tight">
          214, Balawala, Dehradun, 248001
        </p>
        <p className="text-[8px] text-gray-700 mt-1 py-1 text-end">TODAY</p>
      </div>
    </div>
  );
};

export default RecentJobCard;
