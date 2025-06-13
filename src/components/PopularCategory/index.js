import Image from "next/image";
import React from "react";

const categories = [
  { title: "Cafe & Restaurants", img: "cate1.png", bg: "#FFEFE7" },
  { title: "Coaching Institute", img: "cate2.png", bg: "#E4F9F4" },
  { title: "Colleges", img: "cate3.png", bg: "#F1F0F6" },
  { title: "Home Services", img: "cate4.png", bg: "#F9F1E7" },
  { title: "Hospital", img: "cate5.png", bg: "#E9F2FF" },
  { title: "Hostel", img: "cate6.png", bg: "#FFF4D9" },
  { title: "Hotel", img: "cate7.png", bg: "#FAF1FF" },
  { title: "School", img: "cate8.png", bg: "#FFE9E9" },
  { title: "Taxi Service", img: "cate9.png", bg: "#F6FFEA" },
];

const PopularCategory = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-4 p-4 w-full ">
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex flex-col items-center h-23 w-25  justify-center rounded-xl   shadow hover:shadow-md transition"
          style={{ backgroundColor: category.bg }}
        >
          <Image
            height={500}
            width={500}
            src={`/assets/Png/popularCategory/${category?.img}`}
            alt={category.title}
            className="object-contain h-10  w-12 mb-1"
          />
          <p className="text-[11px] text-center w-20 font-semibold">
            {category.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PopularCategory;
