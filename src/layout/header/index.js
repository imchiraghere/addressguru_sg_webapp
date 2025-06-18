"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import { usePathname } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { API_URL } from "@/services/constants";
import axios from "axios";
import UserLogin from "@/components/UserLogin/UserLogin";

const Header = ({data}) => {
  
console.log("cities data",data)

  const [open, setOpen] = useState(false); // animation state
  const [showSidebar, setShowSidebar] = useState(false); // mounting control
  const [showLogin, setShowLogin] = useState(false)
  const sidebarRef = useRef(null);
  const pathname = usePathname();

  const logos = [
    { title: "to let", img: "/assets/toLet.png" },
    { title: "jobs", img: "/assets/jobs.png" },
    { title: "marketplace", img: "/assets/marketPlace.png" },
  ];

  const searchRef = useRef(null);

  useEffect(() => {
    if (pathname !== "/") return;

    const initGSAP = async () => {
      const gsap = (await import("gsap")).default;
      const ScrollTrigger = (await import("gsap/ScrollTrigger")).default;
      gsap.registerPlugin(ScrollTrigger);

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
    };

    initGSAP();

    return () => {
      if (pathname === "/") {
        import("gsap/ScrollTrigger").then((mod) => {
          mod.ScrollTrigger?.kill?.();
        });
      }
    };
  }, [pathname]);

  const handleOpenSidebar = () => {
    setShowSidebar(true);
    setTimeout(() => setOpen(true), 10); // enable animation
  };
  const handleCloseSidebar = () => {
    setOpen(false);
    setTimeout(() => setShowSidebar(false), 300); // unmount after animation
  };

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        handleCloseSidebar();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);




  return (
    <div className="h-[70px] z-50 bg-white w-full flex items-center relative justify-between px-7 shadow-md">
      {/* Sidebar with Slide Effect */}
      {showSidebar && (
        <div
          ref={sidebarRef}
          className={`absolute left-0 top-[70px] z-50 transition-transform duration-300 ease-in-out transform ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Sidebar />
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
          className="absolute 2xl:left-[320px] min-xl:left-[170px] top-[195px] z-50 transition-all duration-300"
        >
          <SearchBar data={data} />
        </div>
      ) : (
        <div className="absolute left-[240px] 2xl:left-[280px] top-[9px]  z-50 border-2 border-gray-200 rounded-full scale-80">
          <SearchBar data={data} />
        </div>
      )}

      {/* Right Section */}
      <div className="flex items-center gap-10">
        <div className="flex gap-5 max-md:hidden">
          {logos.map((item, index) => (
            <div
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
            </div>
          ))}
        </div>

        <div className="flex items-center gap-5 font-bold">
          <button className="border-2 max-md:hidden border-[#EE7630] text-[#EE7630] px-3 py-1.5 rounded-lg capitalize">
            post free ads +
          </button>
          <button onClick={()=>setShowLogin(true)} className="uppercase px-4 py-2 cursor-pointer bg-[#0040FF] text-white rounded-xl">
            login
          </button>
        </div>
      </div>
   

      {
        showLogin && <UserLogin setShowLogin={setShowLogin} />

      }
    </div>
  );
};

// export default Header;





export default Header;
