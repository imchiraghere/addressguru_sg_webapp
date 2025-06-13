import React from "react";
import Image from "next/image";

const CardS = ({data}) => {
  return (
    <>
    <div className=" 2xl:w-[15rem] relative xl:w-50  flex flex-col gap-1.5  text-xs font-semibold text-[#4B4B4B]">

      <Image
        src={`/assets/Png/popularService/${data?.imgSrc}`}
        alt="cardImage"
        height={500}
        width={500}
        className=" rounded-md w-50 2xl:w-60"
        />
      <p className="pl-2">{data?.title}</p>
    </div>

     
        </>
  );
};

export default CardS;
