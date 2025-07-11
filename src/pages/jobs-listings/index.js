import BreadCrumbs from "@/components/BreadCrumbs";
import DiscoverCard from "@/components/BusinessListingComponents/DiscoverCard";
import Filters from "@/components/Jobs/Filters";
import JobCard from "@/components/Jobs/JobCard";
import Image from "next/image";
import React from "react";

const JobsListings = () => {
  return (
    <div className="flex flex-col items-center w-full h-full justify-center   bg-[#F8F7F7] ">
      <div className=" w-[80%]  pb-10 bg-white pl-3 ">
        <BreadCrumbs />
        <h1 className="capitalize font-semibold text-2xl">
          {" "}
          top jobs in dehradun{" "}
        </h1>

        {/* main section */}
        <div className="flex justify-between w-full pr-3  mt-5">
          {/* filter section */}
          <div className=" w-[19%] sticky self-start top-20 ">
            <Filters />
          </div>

          {/* main card section */}
          <div className=" w-[55%]  flex flex-col gap-2">
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <DiscoverCard helpful={false} layout={"col"} />
            <JobCard />
            <JobCard />
            <DiscoverCard helpful={true} layout={"col"} />
          </div>

          {/* adds section */}
          {/* add1  */}
          <div className="flex flex-col gap-2 w-[24%] sticky self-start top-20   ">
            <div className="w-full h-70 relative">
              <div className="absolute top-4 left-4 flex flex-col gap-1">
                <span className="flex items-center  font-[500] gap-1 text-lg ">
                  Looking for{" "}
                  <h2 className="text-xl font-semibold">Candidates</h2>
                </span>
                <button className="text-[#FF6E04] bg-white py-1.5 w-40 text-[13px] font-bold rounded-sm ">
                  {" "}
                  POST FREE JOB
                </button>
              </div>

              <Image
                src="/assets/job/jobsad1.png"
                alt="looking for jobs"
                height={500}
                width={500}
                className="h-full w-full "
              />
            </div>
            {/* add2 */}
            <div className="w-full h-70 relative">
              <div className="absolute bottom-4 right-2 flex flex-col ">
                <span className="flex items-center relative left-4 font-[500] gap-1 ">
                  Looking for <h2 className="text-lg font-semibold">Jobs</h2>
                </span>
                <button className="text-[#FF6E04] bg-white py-1.5 px-2 text-xs font-bold rounded-sm ">
                  {" "}
                  CREATE YOUR PROFILE
                </button>
              </div>

              <Image
                src="/assets/job/jobsad2.png"
                alt="looking for jobs"
                height={500}
                width={500}
                className="h-full w-full "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsListings;
