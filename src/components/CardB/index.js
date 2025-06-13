import React from "react";
import Image from "next/image";

const CardB = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(126.95deg, #1B2134 5.32%, #50629A 104.28%)",
      }}
      className="lg:w-[410px] lg:h-[340px] 2xl:w-[500px] 2xl:h-[400px]  rounded-lg text-white relative "
    >
      <div className="flex flex-col max-w-50 relative top-10 left-7 gap-3">
        <h1 className="2xl:text-3xl xl:font-medium">Looking for?</h1>
        <h1 className="2xl:text-3xl font-semibold mb-1">Housekeeping services?</h1>

        <button className="bg-white px-3 2xl:text-xl  lg:text-sm lg:w-40 text-md py-1 rounded-xs text-black font-semibold xl:w-50">
          GET BEST DEALS
        </button>
      </div>

      <Image
        src="/assets/Png/popularService/bigImg.png"
        alt="bannerimg"
        height={500}
        width={500}
        className="absolute left-52 2xl:left-65 bottom-0 w-[260px] 2xl:w-[300px] h-full  "
      />
    </div>
  );
};

export default CardB;
