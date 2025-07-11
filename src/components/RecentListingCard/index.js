import React from "react";
import Image from "next/image";

const RecentListingCard = ({img,width}) => {
  return (
    <div style={{width: width}} className={`xl:h-[275px] 2xl:h-[350px] bg-white rounded-lg shadow-xl relative  overflow-hidden`}>
      {/* House Image */}
      <div className="w-full h-[175px] 2xl:h-[220px] overflow-hidden relative bottom-3 ">
        <Image
          src={`/assets/Png/recentListing/${img}.png`} 
          alt="Duplex House"
          layout="fill"
          objectFit="cover"
         className=" absolute "
        />
      </div>

      {/* Card Content */}
      <div className="px-3 pb-2 space-y-1 2xl:space-y-2 relative bottom-2">
        <p className="text-sm  2xl:text-md font-bold text-black">₹ 49,00,000</p>
        <p className="text-[11px] 2xl:text-sm font-semibold text-gray-800">Duplex House</p>
        <p className="text-[9px] 2xl:text-xs text-gray-700 ">3 BHK - 3 Bathroom - 1300 sqft</p>
        <p className="text-[9px] 2xl:text-xs text-gray-500">
          214, Balawala, Dehradun, 248001
        </p>
        <p className="text-[8px] 2xl:text-[10px] text-gray-700 mt-2 text-end">TODAY</p>
      </div>
    </div>
  );
};

export default RecentListingCard;
