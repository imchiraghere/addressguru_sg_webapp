import { REGISTER_STEPS } from "@/services/constants";
import React from "react";
import Image from "next/image";

const HowDoesItWork = () => {
  return (
    <div className="bg-white shadow-lg rounded-md border border-gray-100  h-[450px] w-[70%] flex flex-col gap-10 items-center text-center  pt-15">
      {/* heading section */}
      <div>
        <h3 className="text-3xl font-semibold">How does Address Guru work?</h3>
        <p className="text-sm font-[500]">
          List Your Business for FREE - Just 3 Easy Steps!
        </p>
      </div>
      {/* steps section */}
      <div>
        <div className="flex mt-10 px-3">
          {REGISTER_STEPS.map((item, index) => {
            return (
              <React.Fragment>
                <div
                  key={index}
                  className="flex flex-col gap-2 max-w-55 items-center text-center"
                >
                  <Image
                    src={item?.icon}
                    alt={item?.title}
                    height={500}
                    width={500}
                    className="w-20"
                  />
                  <h4 className="font-semibold text-[#323232]">
                    {item?.title}
                  </h4>
                  <p className="text-sm">{item?.text}</p>
                </div>
                {/* Render arrow if not last item */}
                {index !== REGISTER_STEPS.length - 1 && (
                  <svg
                    width="30"
                    height="15"
                    viewBox="0 0 30 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="  mt-8"
                  >
                    <path
                      d="M29 7.5H1"
                      stroke="#FF6E04"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24 1.5L29 7.5L24 13.5"
                      stroke="#FF6E04"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HowDoesItWork;
