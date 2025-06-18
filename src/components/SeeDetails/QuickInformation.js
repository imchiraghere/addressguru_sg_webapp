import React from "react";

const QuickInformation = () => {
  return (
    <div class=" w-full  rounded-t-lg ">
      <div class="bg-[#323232] text-white text-center rounded-t-lg py-2 font-semibold">
        Quick Information
      </div>
      <div class="bg-[#EEEEEE] p-4 text-sm border-b">
        <p>
          <span class="font-medium text-[#5B5B5B]">Category :</span>{" "}
          <span class="font-bold">Hotel</span>
        </p>
        <p>
          <span class="font-medium text-[#5B5B5B] ">Starting Price :</span> 
          <span class="font-bold"> <span>&#x20B9;</span> 1200</span>
        </p>
        <p>
          <span class="font-medium text-[#5B5B5B]">Posted At :</span>{" "}
          <span class="font-bold">12 Jun 2019</span>
        </p>
        <p class="text-right text-xs  mt-2 text-[#5B5B5B]">
          Ad Id : <span class="text-black">R1074662</span>
        </p>
      </div>
      <div class="flex justify-between items-center bg-white  p-3 border border-t-0 border-gray-200 rounded-b-lg">
        <button class="bg-white border border-[#EEEEEE] text-[#838383] px-2 py-1 text-sm rounded">
          Visit Website
        </button>
        <button class="border  text-[#E06C5E] px-2 py-1 text-sm rounded">
          Report
        </button>
        <button
          class="bg-[#EEEEEE] text-[#838383]  px-2 py-1 text-sm rounded cursor-not-allowed"
          disabled
        >
          Claim this Business
        </button>
      </div>
    </div>
  );
};

export default QuickInformation;
