import React from 'react'
import Image from "next/image";

const RecentBusinessCard = () => {
  return (
  <div className="xl:w-47 min-2xl:w-xs bg-white rounded-lg mt-5 shadow-md  flex flex-col items-center ">
      {/* Logo */}
      <div className="w-full flex justify-center border-b text-gray-200">
        <Image
          src="/assets/Png/recentBusiness/businessImg1.png" // Replace with your actual image path in public folder
          alt="TaxiGEO Logo"
          width={500}
          height={500}
          className='h-20 w-25 p-1'
        />
      </div>

      {/* Title */}
      <div className="w-full px-3 py-1">
        <h3 className="font-semibold text-[13px]">
          Taxi Geo Service Taxi Geo Service
        </h3>
      </div>

      {/* Service Icon and Label */}
      <div className="flex items-center relative right-3 bottom-1 ">
        <Image
          src="/assets/Png/recentBusiness/taxiIcon.png" // Replace with your actual icon path
          alt="Taxi Icon"
          width={500}
          height={500}
          className='relative h-10 w-15 right-4 '
        />
        <span className="text-[10px] whitespace-nowrap text-gray-700 right-5 relative">Taxi Service</span>
      </div>

      {/* Date */}
      <p className="text-[8px] relative left-12 text-gray-500 pb-3">1 Month Ago</p>
    </div>
  );
}

export default RecentBusinessCard