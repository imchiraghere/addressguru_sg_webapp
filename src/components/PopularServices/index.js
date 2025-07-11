import React from "react";
import CardB from "../CardB";
import CardS from "../CardS";
// import CardD from "../CardD";
import dynamic from "next/dynamic";

// const CardD = dynamic(() => import("../CardD"), { ssr: false });

// OR with SSR (default behavior)
const CardD = dynamic(() => import("../CardD"));

const data = [
  {
    title: "Domestic Help Services",
    imgSrc: "small1.png",
  },
  {
    title: "Packers and Movers",
    imgSrc: "small2.png",
  },
  {
    title: "Pest Control Service",
    imgSrc: "small3.png",
  },
  {
    title: "AC Service",
    imgSrc: "small4.png",
  },
  {
    title: "Repair & Service",
    imgSrc: "small5.png",
  },
  {
    title: "Carpenter",
    imgSrc: "small6.png",
  },
];
const data2 = [
  {
    title: "Budget Hotel",
    desc: "Quick Quotes",
    img: "dets1.png",
    color: "#6D5D89",
  },
  {
    title: "Real State",
    desc: "Finest Agent",
    img: "dets2.png",
    color: "#E06C5E",
  },
  {
    title: "Doctor",
    desc: "Book an Appointment",
    img: "dets3.png",
    color: "#00B5A1",
  },
  {
    title: "Women Beauty",
    desc: "Parlour Service",
    img: "dets4.png",
    color: "#89573D",
  },
  {
    title: "Car Rental",
    desc: "Best Dealers",
    img: "dets5.png",
    color: "#0876FE",
  },
];
const PopularServices = () => {
  return (
    <>
      <div className="w-full  pl-4">
        <div className="flex justify-between 2xl:gap-7 h-auto">
          <div>
            <CardB />
          </div>
          <div className="flex flex-col 2xl:gap-5 xl:gap-5  2xl:pt-2  w-[63%]  relative left-2 min-2xl:pr-10">
            {/* First Row */}
            <div className="grid grid-cols-3 2xl:gap-10">
              {data.slice(0, 3).map((item, index) => (
                <CardS key={index} data={item} />
              ))}
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-3 2xl:gap-10 ">
              {data.slice(3, 6).map((item, index) => (
                <CardS key={index + 3} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className=" py-8">
        <div className=" w-full pl-4 flex pr-10  justify-between    ">
          {data2.map((item, index) => (
            <CardD key={index} data={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularServices;
