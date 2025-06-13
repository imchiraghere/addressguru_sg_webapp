import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaStar,
  FaCheckCircle,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
// import { MessageCircleMore } from "lucide-react"; // or use another icon

const BusinessCard = () => {
  const [numberShown, setNumberShown] = useState(false);

  const item = {
    business_name: "DSOM - Graphic Designing course Dehradun",
    photo: "/dsom-graphic.jpg", // your uploaded image path
    business_address: "29, Tagore Villa Above Bank of Baroda, Connaught",
    distance: "9 km",
    rating: "4.7",
    reviews: "150 Reviews",
    tags: ["Photoshop", "Illustrator", "Corel Draw"],
    ad_description:
      "DSOM provides the comprehensive program for Graphic Designing that covers the fundamental concepts and techniques.",
    personals: [{ ph_number: "9999999999" }],
    views: "1145 views",
  };

  return (
    <div className=" w-[95%] h-[65%]  rounded-md p-3 py-5  flex gap-4 shadow-lg bg-white">
      {/* Left Image */}
      <div className="min-w-[190px] h-[190px] rounded-md overflow-hidden border">
        <Image
          src={item?.photo || "/assets/No-Image-Placeholder.svg.png"}
          alt="course poster"
          width={500}
          height={500}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Center Content */}
      <div className="flex flex-col justify-between flex-grow space-y-2">
        {/* Title */}
        <h2 className="text-lg font-semibold ">{item?.business_name}</h2>

        {/* Address */}
        <div className="text-xs text-gray-600 flex items-center gap-1">
          <FaMapMarkerAlt className="text-gray-500" />
          <span className="truncate">{item?.business_address}</span> •{" "}
          <span>{item?.distance || "9 km"}</span>
        </div>

        {/* Ratings & Badges */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-green-600 text-white px-1.5 py-0.5 rounded text-sm">
            <span>{item?.rating || "4.7"}</span>
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.0107229 6.1024C0.129607 6.1024 0.248025 6.1024 0.36691 6.1024C2.3637 6.10517 4.36049 6.10701 6.35775 6.11345C6.45985 6.11391 6.49994 6.07709 6.52885 5.98872C6.81324 5.10965 7.0995 4.23104 7.38668 3.35289C7.70371 2.38362 8.02213 1.4148 8.33962 0.445979C8.38578 0.305603 8.43053 0.165228 8.48461 0C8.51352 0.0423427 8.53217 0.0602922 8.53916 0.0819238C8.89302 1.16028 9.24687 2.23864 9.59886 3.31746C9.88792 4.20297 10.176 5.08894 10.4614 5.9763C10.4949 6.08031 10.5471 6.11437 10.659 6.11391C12.722 6.10747 14.785 6.10563 16.848 6.10333C16.896 6.10333 16.9441 6.10793 17 6.13738C16.8802 6.22437 16.7608 6.31228 16.6401 6.39834C15.247 7.39293 13.8535 8.38661 12.46 9.3812C12.2493 9.5317 12.0409 9.68496 11.8292 9.83408C11.7737 9.8732 11.7584 9.9091 11.7812 9.97768C12.2134 11.2765 12.6428 12.5762 13.0731 13.8755C13.2983 14.5557 13.5248 15.236 13.7505 15.9162C13.757 15.936 13.7566 15.9586 13.7617 16C13.7169 15.9738 13.6866 15.9595 13.6605 15.9402C11.9798 14.7302 10.2991 13.5202 8.61982 12.3074C8.53357 12.2453 8.47762 12.2333 8.38018 12.3038C7.00952 13.2965 5.63465 14.2833 4.26072 15.2724C3.95675 15.4914 3.65371 15.7123 3.35021 15.9319C3.3199 15.954 3.2868 15.9728 3.23086 15.9807C3.26722 15.8638 3.30219 15.7464 3.34042 15.6304C3.80383 14.229 4.26772 12.8271 4.7316 11.4256C4.88964 10.9488 5.04489 10.4711 5.20714 9.99563C5.23464 9.91508 5.22345 9.87412 5.15352 9.82442C4.09568 9.07191 3.04018 8.31619 1.98374 7.56139C1.3674 7.12139 0.751069 6.68185 0.134736 6.2414C0.0885805 6.20826 0.0447565 6.17236 0 6.13784C0.00372971 6.12588 0.00745939 6.11391 0.0107229 6.1024Z"
                fill="white"
              />
              <mask
                id="mask0_173_20911"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="17"
                height="16"
              >
                <path
                  d="M0.0107229 6.1024C0.129607 6.1024 0.248025 6.1024 0.36691 6.1024C2.3637 6.10517 4.36049 6.10701 6.35775 6.11345C6.45985 6.11391 6.49994 6.07709 6.52885 5.98872C6.81324 5.10965 7.0995 4.23104 7.38668 3.35289C7.70371 2.38362 8.02213 1.4148 8.33962 0.445979C8.38578 0.305603 8.43053 0.165228 8.48461 0C8.51352 0.0423427 8.53217 0.0602922 8.53916 0.0819238C8.89302 1.16028 9.24687 2.23864 9.59886 3.31746C9.88792 4.20297 10.176 5.08894 10.4614 5.9763C10.4949 6.08031 10.5471 6.11437 10.659 6.11391C12.722 6.10747 14.785 6.10563 16.848 6.10333C16.896 6.10333 16.9441 6.10793 17 6.13738C16.8802 6.22437 16.7608 6.31228 16.6401 6.39834C15.247 7.39293 13.8535 8.38661 12.46 9.3812C12.2493 9.5317 12.0409 9.68496 11.8292 9.83408C11.7737 9.8732 11.7584 9.9091 11.7812 9.97768C12.2134 11.2765 12.6428 12.5762 13.0731 13.8755C13.2983 14.5557 13.5248 15.236 13.7505 15.9162C13.757 15.936 13.7566 15.9586 13.7617 16C13.7169 15.9738 13.6866 15.9595 13.6605 15.9402C11.9798 14.7302 10.2991 13.5202 8.61982 12.3074C8.53357 12.2453 8.47762 12.2333 8.38018 12.3038C7.00952 13.2965 5.63465 14.2833 4.26072 15.2724C3.95675 15.4914 3.65371 15.7123 3.35021 15.9319C3.3199 15.954 3.2868 15.9728 3.23086 15.9807C3.26722 15.8638 3.30219 15.7464 3.34042 15.6304C3.80383 14.229 4.26772 12.8271 4.7316 11.4256C4.88964 10.9488 5.04489 10.4711 5.20714 9.99563C5.23464 9.91508 5.22345 9.87412 5.15352 9.82442C4.09568 9.07191 3.04018 8.31619 1.98374 7.56139C1.3674 7.12139 0.751069 6.68185 0.134736 6.2414C0.0885805 6.20826 0.0447565 6.17236 0 6.13784C0.00372971 6.12588 0.00745939 6.11391 0.0107229 6.1024Z"
                  fill="#FFBB00"
                />
              </mask>
              <g mask="url(#mask0_173_20911)">
                <path d="M18 13L4 1L1.5 0L-7 9L6.5 25L18 13Z" fill="#FFBB00" />
              </g>
            </svg>
          </div>
          <p className="text-sm text-gray-500">
            {item?.reviews || "150 Reviews"}
          </p>
          <span className="flex items-center text-orange-500 gap-1 text-sm font-medium">
            <FaCheckCircle /> AG Verified
          </span>
        </div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap text-xs font-medium">
          {item?.tags?.map((tag, idx) => (
            <span key={idx} className="bg-gray-200 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-xs ">{item?.ad_description}</p>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-1">
          <button
            onClick={() => setNumberShown(true)}
            className="flex items-center gap-2 text-white bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded text-sm"
          >
            <FaPhoneAlt />
            {numberShown ? item?.personals?.[0]?.ph_number : "SHOW NUMBER"}
          </button>

          <button className="flex items-center gap-2 text-white bg-[#337ab7] hover:bg-[#2a65a0] px-3 py-1 rounded text-sm">
            {/* <MessageCircleMore className="text-xs" /> */}
            ENQUIRE NOW
          </button>

          <button className="bg-green-500 hover:bg-green-600 p-2 rounded text-white text-sm">
            <BsWhatsapp />
          </button>
        </div>
      </div>

      {/* Right Side Views */}
      <div className="text-xs text-gray-500 whitespace-nowrap">
        <div className="flex items-center gap-1">
          <FaUser /> {item?.views || "1145 views"}
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
