import React from "react";
import Image from "next/image";

const Title = ({ icon, text }) => {
  return (
    <div className="flex gap-2 items-center  mt-10 mb-3 ">
        {/* icon section */}
      <div className="h-7 w-6">
         <Image src={`/assets/about-us/${icon}.svg`} alt={text} height={500} width={500} />

      </div>
      {/* title section */}
      <h3 className="font-semibold text-lg ">
     {text}
      </h3>

      {/* line  */}
      <span className="bg-[#FF6E04] h-[3px] w-25">

      </span>

    </div>
  );
};

export default Title;
