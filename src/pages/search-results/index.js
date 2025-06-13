import BusinessCard from "@/components/BusinessListingComponents/BusinessCard";
import FilterBar from "@/components/BusinessListingComponents/FilterBar";
import RightBusinessCard from "@/components/BusinessListingComponents/RightBusinessCard";
import React from "react";

const SearchResults = () => {
  return (
    <div className=" h-auto mb-10 flex flex-col items-center w-full justify-center   bg-[#F8F7F7] ">
      <div className="flex flex-col w-[85%] bg-white px-5">
        {/* starting headings */}
        <p className="text-xs py-3">
          Dehradun{" > "}coaching institute {" > "}{" "}
          <strong>166+ Business Listings</strong>
        </p>
        <h1 className="font-bold text-xl">
          Top Coaching Institutes in Dehradun
        </h1>

        {/* filter bar section */}
        <div className="my-4">
          <FilterBar />
        </div>

        {/* business cards and data */}

        <div className="flex  w-full">
          {/* left card sections */}
          <div className="flex flex-col my-2 gap-5 w-full ">
            <BusinessCard />
            <BusinessCard />
            <BusinessCard />
            <BusinessCard />
            <BusinessCard />
          </div>

          {/* right section */}
          <div>
            <RightBusinessCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
