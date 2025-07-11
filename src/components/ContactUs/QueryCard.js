import React from "react";
import Image from "next/image";

const QueryCard = ({img,title,email,address}) => {
  return (
    <div className=" h-30 w-60 border-dashed border-1 relative border-orange-500 rounded-lg text-xs flex flex-col justify-center items-center ">
        <span className="absolute top-[-20px] left-4">
            <Image src={`/assets/contact/${img}.svg`} alt="message image" height={500} width={500} className="h-7 w-7 bg-white/70 "  />
        </span>
      <div className="flex flex-col gap-1 font-[500]">
        <p className="">{title}</p>
        <b>{email}</b>
        <p className="text-[10px]">{address}</p>
      </div>
    </div>
  );
};

export default QueryCard;
