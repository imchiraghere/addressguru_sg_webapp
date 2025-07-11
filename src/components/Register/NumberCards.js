import React from "react";
import Image from "next/image";
const NumberCards = ({img,color,number,text}) => {
  return (
    <div style={{backgroundColor: color}} className="  rounded-xl p-1 min-w-30  ">
      <div className="h-full w-full border border-white border-dashed rounded-xl flex flex-col items-center py-1 px-3">
         <Image src={`/assets/register/${img}.svg`} alt="verified business" height={500} width={500} className="h-8 w-8" />
          <p className="font-bold text-xl">{number}+ </p>
          <p className="text-nowrap text-[11px] font-semibold">{text}</p>
      </div>
    </div>
  );
};

export default NumberCards;
