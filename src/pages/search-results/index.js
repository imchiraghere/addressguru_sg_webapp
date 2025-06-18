import BreadCrumbs from "@/components/BreadCrumbs";
import BusinessCard from "@/components/BusinessListingComponents/BusinessCard";
import DiscoverCard from "@/components/BusinessListingComponents/DiscoverCard";
import FilterBar from "@/components/BusinessListingComponents/FilterBar";
import RecentCustomerReviewCard from "@/components/BusinessListingComponents/RecentCustomerReviewCard";
import RightBusinessCard from "@/components/BusinessListingComponents/RightBusinessCard";
import React from "react";

const reviews = [
  {
    title: "Brigadier Defence Academy",
    rating: 4.7,
    image: "/assets/BusinessListingPng/review.png",
    review:
      "Yes we have all necessary infrastructure, facilities, equipments provided by the college. Well furnished benches & projector facility available in classrooms. Free wifi and free Gym facilities available. All the things are well maintained and clean campus maintained. Academics: Very close teachers, super teaching quality, nice education.",
  },
  {
    title: "Captain Defence Institute",
    rating: 4.5,
    image: "/assets/BusinessListingPng/review.png",
    review:
      "The institute provides excellent guidance for NDA and other defence exams. Clean campus, helpful staff, and very experienced faculty members. The library and sports facilities are top-notch. Study material is updated regularly.",
  },
  {
    title: "Major Kalshi Classes",
    rating: 4.8,
    image: "/assets/BusinessListingPng/review.png",
    review:
      "One of the most reputed academies in the city. The teachers are extremely helpful and focus on individual performance. Hostel facilities are also good. Offers medical and physical test preparation along with academic sessions.",
  },
];

const SearchResults = () => {
  return (
    <div className=" h-auto mb-10 flex flex-col items-center w-full justify-center   bg-[#F8F7F7] ">
      <div className="flex flex-col w-[85%] bg-white px-5">
        {/* starting headings */}
        <BreadCrumbs />
          <h1 className="font-bold text-xl"> Top Coaching Institutes in Dehradun</h1>

        {/* filter bar section */}
        <div className="my-4">
          <FilterBar />
        </div>

        {/* business cards and data */}

        <div className="flex  w-full">
          {/* left card sections */}
          <div className="flex flex-col my-4 gap-2 w-full ">
            <BusinessCard />
            <BusinessCard />
            <BusinessCard />
            <BusinessCard />
            <BusinessCard />
            <DiscoverCard helpful={false} />
            <BusinessCard />
            <BusinessCard />
            <DiscoverCard helpful={true} />
          </div>

          {/* right section */}
          <div className="mt-4">
            <RightBusinessCard />
          </div>
        </div>

        <div className=" h-70 w-full space-y-2 my-5">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-xl font-semibold">Recent Customer Reviews</h1>
            <button className="text-[#6D6D6D] border rounded-sm text-sm px-3 py-1 font-[500]">
              View More
            </button>
          </div>
          <div className=" py-2 pl-4 flex justify-between  w-full ">
            {reviews.map((item, index) => {
              return <RecentCustomerReviewCard key={index} data={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
