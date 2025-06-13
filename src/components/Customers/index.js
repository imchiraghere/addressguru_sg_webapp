'use client';

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Ashiwini Rajput",
    star: 4,
    text:
      "Best website for business promotion. We can promote our video, photo, google map and about our self also & best best part is there's no ad's in our land page. Best classified website for business.",
  },
  {
    name: "Rohit Sharma",
    star: 5,
    text:
      "I love how smooth the experience is. No ads and easy promotion tools helped me grow my business reach significantly.",
  },
  {
    name: "Sneha Kapoor",
    star: 4,
    text:
      "Perfect place to showcase your services. The ad-free experience makes it stand out from others. Highly recommended!",
  },
  {
    name: "Arjun Mehta",
    star: 5,
    text:
      "It's one of the cleanest classified platforms I've used. Promoting photos, videos, and maps without hassle is amazing.",
  },
];

const Customers = () => {
  return (
    <div className="bg-[#FFFBF8] h-[400px] w-full my-10 relative flex flex-col items-center gap-5 justify-center">
      {/* Design Images */}
      <Image
        src="/assets/Png/customer-img/left-design.png"
        alt="design"
        height={500}
        width={500}
        className="absolute h-28 w-48 top-0 left-0"
      />
      <Image
        src="/assets/Png/customer-img/left-dots.png"
        alt="dots"
        height={500}
        width={500}
        className="absolute h-4 w-15 bottom-15 left-10"
      />
      <Image
        src="/assets/Png/customer-img/circle.png"
        alt="circle"
        height={500}
        width={500}
        className="absolute h-5 w-5 bottom-5 right-20"
      />
      <Image
        src="/assets/Png/customer-img/right-dots.png"
        alt="dots"
        height={500}
        width={500}
        className="absolute h-16 w-5 top-10 right-20"
      />

      {/* Heading */}
      <h1 className="text-[#FF6E04] font-bold text-[2.5rem] w-full text-center capitalize">
        Customers say about our services
      </h1>

      {/* Testimonial Section */}
      <div className="w-[980px] h-52 flex p-3 bottom-2 relative">
        {/* Static Image */}
        <div className="w-[25%] px-7 relative">
          <Image
            src="/assets/Png/customer-img/girl.png"
            alt="customer"
            height={1000}
            width={1000}
            className="absolute h-48 w-52 object-contain left-0"
          />
        </div>

        {/* Swiper Section */}
        <div className="w-[75%] relative right-5 top-1 ">
          <div className="bg-[#323232] w-full h-full rounded-2xl text-center text-white flex flex-col items-center gap-2 px-10 capitalize relative overflow-hidden">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 2500 }}
              loop
              pagination={{
                el: ".custom-dots",
                clickable: true,
              }}
              className="w-full h-full"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center gap-2 h-full justify-center">
                    <p className="text-sm leading-relaxed">{item.text}</p>
                    <h3 className="font-semibold text-lg mt-2">{item.name}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Dots inside black box - bottom right */}
            <div className=" absolute right-6 bottom-3 max-w-17  bg-[#C8C8C84D]/30 p-2 rounded-full  ">

            <div className="custom-dots flex gap-2 rounded-full z-50">

            </div>
   
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
