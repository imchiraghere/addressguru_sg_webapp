import React from "react";
import Image from "next/image";
import GetMoreInfo from "@/components/SeeDetails/GetMoreInfo";
import Form from "@/components/ContactUs/Form";
import QueryCard from "@/components/ContactUs/QueryCard";

const ContactUs = () => {
  return (
    <div className="h-full w-full flex flex-col items-center ">
      <div className="h-full relative w-full 2xl:w-[80%]">
        <Image
          src="/assets/contact/main-img.png"
          alt="phone image"
          height={1000}
          width={1000}
          className="h-[39rem] w-full"
        />

        {/* contact section */}
        <div className="flex justify-around w-4xl absolute top-5  items-center left-20  uppercase ">
          {/* contact from */}
          <div className="">
            <span className="flex gap-2 font-semibold text-xl items-center">
              <h1>contact us</h1>
              <span className="w-30 h-[3px] bg-orange-400"> </span>
            </span>

            <div className="w-[31rem] h-full mt-5 ">
              <Form />
            </div>
          </div>

          {/* or section */}
          <div className=" flex flex-col items-center gap-3 text-sm">
            <span className="h-30 w-[2px] bg-white"></span>
            OR
            <span className="h-30 w-[2px] bg-white"></span>
          </div>

          {/* small info cards section */}
          <div className="h-full w-auto space-y-20 ">
            <QueryCard img={'map'} title={'Give your Feedback'} email={'contact@addressguru.in'} address={'Help us improve!'} />
            <QueryCard img={'message'} title={'Service & Support'} email={'Support Center'} address={'29, Tagore Villa, Dehradun'}  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
