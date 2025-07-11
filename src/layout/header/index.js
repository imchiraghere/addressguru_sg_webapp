"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { API_URL } from "@/services/constants";
import axios from "axios";
import Link from "next/link";
import UserLogin from "@/components/UserLogin/UserLogin";

const Header = ({ data }) => {
  console.log("CITY DATATB ::", data);

  const [open, setOpen] = useState(false); // animation state
  const [showSidebar, setShowSidebar] = useState(false); // mounting control
  const [showLogin, setShowLogin] = useState(false);
  const sidebarRef = useRef(null);
  const pathname = usePathname();

  const logos = [
    { title: "to let", img: "/assets/toLet.png", link: "/listings/to-let" },
    { title: "jobs", img: "/assets/jobs.png", link: "/jobs-listings" },
    {
      title: "marketplace",
      img: "/assets/marketPlace.png",
      link: "/listings/marketplace",
    },
  ];

  const searchRef = useRef(null);

  useEffect(() => {
    if (pathname !== "/") return;

    let ctx;
    const initGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const el = searchRef.current;

        gsap.set(el, {
          position: "absolute",
          top: "195px",
          scale: 1,
          border: "none",
          zIndex: 1,
          borderRadius: "0px",
        });

        gsap.to(el, {
          scrollTrigger: {
            trigger: document.body,
            start: "top+=1 top",
            toggleActions: "play none none reverse",
          },
          top: "9px",
          left: "240px",
          scale: 0.8,
          border: "2px solid #E5E7EB",
          zIndex: 50,
          borderRadius: "9999px",
          duration: 0.2,
          ease: "power2.out",
          position: "absolute",
          xPercent: 0,
        });
      }, searchRef); // limit scope to just this element
    };

    initGSAP();

    return () => {
      if (ctx) ctx.revert(); // cleanup GSAP
    };
  }, [pathname]);

  const handleOpenSidebar = () => {
    setShowSidebar(true);
    setTimeout(() => setOpen(true), 10); // enable animation
  };
  const handleCloseSidebar = () => {
    setOpen(false);
    setTimeout(() => setShowSidebar(false), 30); // unmount after animation
  };

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        handleCloseSidebar();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [pathname]);

  return (
    <div
      className={`h-[70px] ${
        pathname === "/"
          ? " 2xl:left-[7.5%] 2xl:right-[7.5%] 2xl:w-[85%]  "
          : "2xl:left-[10%] 2xl:right-[10%] 2xl:w-[80%]  "
      } z-50 bg-white w-full flex items-center relative justify-between px-7 shadow-md`}
    >
      {/* Sidebar with Slide Effect */}
      {showSidebar && (
        <div
          ref={sidebarRef}
          className={`absolute left-0 top-[70px] z-10 transition-transform duration-600 ease-in-out transform ${
            open ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <Sidebar onClose={handleCloseSidebar} />
        </div>
      )}

      {/* Left Section */}
      <div className="flex items-center gap-15">
        <Image
          onClick={handleOpenSidebar}
          src="/assets/navLogo.png"
          alt="nav logo"
          height={500}
          width={500}
          className="h-[16px] cursor-pointer w-[23.33px]"
        />
        <Image
          src="/assets/logopng 1.png"
          alt="nav logo"
          height={500}
          width={500}
          className="h-[40px] w-[150px]"
        />
      </div>

      {/* Search Bar */}
      {pathname === "/" ? (
        <div
          ref={searchRef}
          className="absolute 2xl:left-[170px] min-xl:left-[170px] top-[195px] z-50 transition-all duration-300"
        >
          <SearchBar data={data} />
        </div>
      ) : (
        <div className="absolute left-[220px] max-xl:mr-5 2xl:left-[200px]  top-[9px]  min-[1600px]:scale-75  z-50 border-2 border-gray-200 rounded-full scale-70">
          <SearchBar data={data} />
        </div>
      )}

      {/* Right Section */}
      <div className="flex items-center gap-10">
        <div className="flex gap-5 max-md:hidden">
          {logos.map((item, index) => (
            <Link
              href={item?.link}
              key={index}
              className="flex items-center text-xs w-12 flex-col gap-1"
            >
              <Image
                src={item.img}
                alt={item.title}
                height={100}
                width={100}
                className="h-[20px] w-[25px]"
              />
              <p className="capitalize font-semibold text-[#4B4B4B]">
                {item.title}
              </p>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5 font-bold">
          <button className="border-2 max-md:hidden border-[#EE7630] text-[#EE7630] px-3 py-1.5 rounded-lg capitalize">
            post free ads +
          </button>
          <button
            onClick={() => setShowLogin(true)}
            className="uppercase px-4 py-2 cursor-pointer bg-[#0040FF] text-white rounded-xl"
          >
            login
          </button>
        </div>
      </div>

      {showLogin && <UserLogin setShowLogin={setShowLogin} />}
    </div>
  );
};

// export default Header;

export default Header;
