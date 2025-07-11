import React from "react";
import Image from "next/image";

const CardD = ({ data }) => {
  return (
    <div
      className=" rounded-md shadow-lg min:w-50 h-3xl min-[1600]:w-[440px] 2xl:w-[240px] "
    >
      <div
        style={{ backgroundColor: data?.color }}
        className={`  
         rounded-t-md text-white flex flex-col items-center py-3  w-auto`}
      >
        <h4 className="font-semibold text-sm">{data?.title}</h4>
        <p className="text-xs mt-1">{data?.desc}</p>
        <div className="mt-2">
          <Image
            src={`/assets/Png/popularService/${data?.img}`}
            alt="Budget Hotel"
            width={500}
            height={500}
            className="rounded-md w-50 h-45 relative top-3 "
          />
        </div>
      </div>
      
      <div
      style={{ backgroundColor: data?.color }}
       className={` h-12   rounded-b-xl text-xs text-center z-10  `}>
        <button className="bg-white mt-3 px-3 py-1 opacity-100 z-20 font-semibold rounded-md cursor-pointer hover:bg-gray-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CardD;
