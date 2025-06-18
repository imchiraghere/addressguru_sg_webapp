import Banner1 from "@/components/Banner1";
import BannerLast from "@/components/BannerLast";
import Customers from "@/components/Customers";
import PopularCategory from "@/components/PopularCategory";
import PopularServices from "@/components/PopularServices";
import RecentBusinessCard from "@/components/RecentBusinessCard";
import RecentJobCard from "@/components/RecentJobCard";
import RecentListingCard from "@/components/RecentListingCard";
import SearchBar from "@/components/SearchBar";
import { API_URL } from "@/services/constants";
import axios from "axios";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" h-auto mb-10 flex flex-col items-center w-full justify-center   bg-[#F8F7F7] ">
      <Banner1 />
      <div className="flex flex-col w-[85%] bg-white">
        {/* first banner  */}
        <div className="flex-col px-2
         text-xl font-semibold">
          <h1 className="text-center w-full my-6  text-[#212121] ">
            Popular Categories
          </h1>

      

          {/* popular categories with icons  */}

          <PopularCategory />
          <div className="relative bottom-2 px-2">
            <PopularCategory />
          </div>

          {/* popular services section */}

          <h1 className=" my-6  text-[#212121]   pl-5">Popular Services</h1>
          <div className="mb-20">
            <PopularServices />
          </div>

          {/* recent Business section */}

          <div className="flex justify-between w-full pr-7 px-4 ">
            Recent Business
            <button className="border border-gray-200 rounded-sm text-sm px-3 py-1  text-zinc-800">
              View More
            </button>
          </div>
          <div className="flex gap-3 pr-5 px-4">
            <RecentBusinessCard />
            <RecentBusinessCard />
            <RecentBusinessCard />
            <RecentBusinessCard />
            <RecentBusinessCard />
            <RecentBusinessCard />
          </div>

          {/* recent Listing section */}

          <div className="flex justify-between w-full pr-7 mt-16 mb-5 px-4">
            Recent Listings
            <button className="border border-gray-200 rounded-sm text-sm px-3 py-1  text-zinc-800">
              View More
            </button>
          </div>

          <div className="flex gap-3 pr-5 px-4">
            <RecentListingCard img={1} />
            <RecentListingCard img={2} />
            <RecentListingCard img={1} />
            <RecentListingCard img={2} />
            <RecentListingCard img={1} />
            <RecentListingCard img={2} />
          </div>

          {/* recent job section */}

          <div className="flex justify-between w-full pr-7 px-4 mt-16 ">
            Recent Jobs
            <button className="border border-gray-200 rounded-sm text-sm px-3 py-1  text-zinc-800">
              View More
            </button>
          </div>

          <div className="flex gap-3 px-4 pr-5">
            <RecentJobCard img={1} />
            <RecentJobCard img={2} />
            <RecentJobCard img={1} />
            <RecentJobCard img={2} />
            <RecentJobCard img={1} />
            <RecentJobCard img={2} />
          </div>
        </div>
        {/* customer section */}

        <Customers />
        <BannerLast />
      </div>
    </div>
  );
}


export async function getServerSideProps() {
  try {
    const res = await axios.get(`${API_URL}/api/cities`);
    return {
      props: {
        cities: res.data, // Pass the fetched cities as props
      },
    };
  } catch (error) {
    console.error("SSR error:", error);
    return {
      props: {
        cities: [],
      },
    };
  }
}