import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import Image from "next/image";

const menuLinks = [
  "About Us",
  "Contact Us",
  "Become A Partner",
  "Posting Rules",
  "Marketplace",
];

const quickLinks = [
  "Post Ad",
  "Our Plans",
  "Infringement Policy",
  "Privacy Policy",
  "Click Here To Open The App",
];

const Foot1 = () => {
  return (
    <div className=" flex pl-20 justify-between  w-full ">
      {/* first section */}
      <div className=" w-xs flex-col flex  text-center ">
        {/* Logo */}
        <div className=" mb-4 border w-50 p-2 border-dashed rounded-xl border-[#FF6E04]">
          <Image
            src="/assets/logopng 1.png"
            alt="Address Guru Logo"
            width={500}
            height={500}
            className=" bg-white shadow-lg py-3 px-4 w-full rounded-xl "
          />
        </div>

        {/* Description */}
        <p className="text-[11px] text-gray-900 font-semibold w-xs text-start mb-6">
          Address Guru is an online local business directory that provides
          information about your daily needs just one click away. We get your
          business listed on it and help you grow online by reaching everyone
          who searches for you online.
        </p>

        {/* Social Icons */}
        <div className="flex  gap-2   relative bottom-3 text-xl">
          <Image
            src="/assets/Png/footer/linkedin.png"
            alt="facebook"
            height={100}
            width={100}
            className="h-7 w-7"
          />
          <Image
            src="/assets/Png/footer/insta.png"
            alt="facebook"
            height={100}
            width={100}
            className="h-7 w-7"
          />
          <Image
            src="/assets/Png/footer/fb.png"
            alt="facebook"
            height={100}
            width={100}
            className="h-7 w-7"
          />
          <Image
            src="/assets/Png/footer/twiter.png"
            alt="facebook"
            height={100}
            width={100}
            className="h-7 w-7"
          />
          <Image
            src="/assets/Png/footer/youtube.png"
            alt="facebook"
            height={100}
            width={100}
            className="h-7 w-7"
          />
        </div>
      </div>

 

           {/* Menu Section */}
        <div className="mt-5">
          <h1 className="font-bold mb-2 text-base">MENU</h1>
          <ul className="space-y-1">
            {menuLinks.map((item, index) => (
              <li key={index} className="hover:underline text-sm font-semibold cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

           {/* Quick Links Section */}
        <div className="mt-5">
          <h1 className="font-bold mb-2 text-base">QUICK LINKS</h1>
          <ul className="space-y-1">
            {quickLinks.map((item, index) => (
              <li key={index} className="hover:underline cursor-pointer text-sm font-semibold">
                {item}
              </li>
            ))}
          </ul>
        </div>

      {/* third section */}

      <div className=" mt-4 ">
        <h1 className="uppercase font-bold "> Download our app here.. </h1>

           <div className="flex flex-col px-2 gap-4  h-13 my-5 w-sm relative">
                <Image
                  src="/assets/Png/last-banner/play-store.png"
                  alt="design"
                  height={1000}
                  width={1000}
                  className="w-40 h-12  "
                />
        
                <Image
                  src="/assets/Png/last-banner/app-store.png"
                  alt="design"
                  height={1000}
                  width={1000}
                  className="w-40 h-12 "
                />
              </div>


      </div>


    </div>
  );
};

export default Foot1;
