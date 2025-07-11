import Image from "next/image";
import React, { useState } from "react";
import OnlineOflineButtons from "./OnlineOflineButtons";
import NameNumberCard from "./NameNumberCard";

const DiscoverCard = ({ helpful, layout }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {!helpful && (
        <div
          className={`h-auto  ${
            layout === "col"
              ? "flex flex-col gap-2 py-8  "
              : "flex gap-7 items-center py-7  text-sm"
          }   w-[99%] bg-[#DAECFD]  rounded-lg relative`}
        >
          {/* title section */}
          <div
            className={`font-semibold pl-5 2xl:pl-20 ${
              layout === "col" ? "  pl-20 " : ""
            }     `}
          >
            <span className=" text-[17px] flex items-center gap-2 ">
              Discover the Best{" "}
              <p className="text-[#FF6E04]">Coaching Institute</p>
            </span>
            <p className="text-sm font-[500]">
              {" "}
              Get free access to contact details instantly.
            </p>
          </div>

          {/* button section  */}
          <div
            className={`w-sm ${
              layout === "col" ? "  ml-20  " : ""
            }     bg-white h-26 rounded-md  px-5 py-3 relative space-y-1`}
          >
            {/* first text */}
            <p className="text-[13px] font-semibold">
              Select Your Preferred Tutorial Type?
            </p>
            {/* online ofline  */}
            <div className="scale-80  absolute left-0 ">
              <OnlineOflineButtons />
            </div>

            {/* last buttons section */}

            <div className="flex  absolute w-full bottom-0 right-12 ">
              <div className="scale-65">
                <NameNumberCard layout={"row"} />
              </div>
              <button className="text-[10px] font-semibold text-white h-6 relative right-14 top-2 capitalize whitespace-nowrap bg-[#FF6E04] px-3 rounded-sm">
                send enquiry
              </button>
            </div>
          </div>

          {/* bottom image part */}
          <div
            className={`absolute min-w-full bottom-2  h-10 2xl:bottom-5  ${ layout === "col" ? "bottom-[-7px] 2xl:bottom-[1px]" : " "} rounded-xl `}
          >
            <Image
              src="/assets/BusinessListingPng/border-discover-card.png"
              href="Border"
              height={1000}
              width={1000}
              className="w-full"
            />
          </div>
        </div>
      )}

      {helpful && (
        <div className=" py-15 flex justify-around  w-[99%] items-center   bg-[#DAECFD] rounded-lg relative">
          <div
            className={` ${
              layout === "col" ? "flex flex-col gap-2 ml-10" : "flex gap-10 pl-10"
            } w-full absolute left-7`}
          >
            <h1 className="font-semibold">Were our search results helpful?</h1>
            <div className="flex gap-5">
              <button
                onClick={() => setClicked(false)}
                className={`px-3 py-2 rounded-md text-xs cursor-pointer font-semibold ${
                  clicked === true
                    ? "bg-white border border-[#FF6E04] text-[#FF6E04]"
                    : "text-white bg-[#FF6E04]"
                } `}
              >
                Yes
              </button>
              <button
                onClick={() => setClicked(true)}
                className={`py-2 px-3 rounded-md text-xs font-semibold cursor-pointer ${
                  clicked === false
                    ? "bg-white border border-[#FF6E04] text-[#FF6E04]"
                    : "text-white bg-[#FF6E04]"
                } `}
              >
                No
              </button>
            </div>
          </div>

          <div>
            <Image
              src="/assets/BusinessListingPng/tower.png"
              alt="tower"
              height={500}
              width={500}
              className="h-[85%] w-fit absolute bottom-3 right-35"
            />
            <Image
              src="/assets/BusinessListingPng/ques-mark.png"
              alt="tower"
              height={500}
              width={500}
              className="h-[85%] w-fit absolute bottom-3 right-10"
            />
          </div>

          {/* bottom image part */}
          <div className={`absolute min-w-full bottom-2  h-10 2xl:bottom-5 ${ layout === "col" ? "bottom-[-7px] 2xl:bottom-[1px]" : " "}  rounded-xl `}>
            <Image
              src="/assets/BusinessListingPng/border-discover-card.png"
              href="Border"
              height={1000}
              width={1000}
              className="w-full"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DiscoverCard;
