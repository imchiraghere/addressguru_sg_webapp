import BreadCrumbs from "@/components/BreadCrumbs";
import DiscoverCard from "@/components/BusinessListingComponents/DiscoverCard";
import Filters from "@/components/MarketplaceAndToLet/Filter";
import RecentListingCard from "@/components/RecentListingCard";
import React from "react";
import { useRouter } from "next/router";

const Marketplace = () => {
  const router = useRouter();
  const slug = router?.query?.slug;

  return (
    <div className="flex flex-col items-center w-full  justify-center   bg-[#F8F7F7] ">
      <div className=" w-[80%]  pb-10 bg-white pl-3 ">
        <BreadCrumbs />
        <h1 className="capitalize font-semibold text-2xl">
          {" "}
          top {slug} in Singapore
        </h1>
        <div className="flex gap-1 mt-2 relative min-h-screen">
          {/* filter section */}
          <div className=" mt-2 h-auto sticky self-start top-20 w-[20%]">
            <Filters />
          </div>
          <div className=" h-auto w-[80%]  justify-center flex-wrap">
            {/* main flex section */}
            <div className=" flex  md:gap-3 2xl:gap-4  flex-wrap p-2 ">
              <RecentListingCard
                img={slug === "to-let" ? 1 : 1}
                width={"23.7%"}
              />
              <RecentListingCard
                img={slug === "to-let" ? 5 : 2}
                width={"23.7%"}
              />
              <RecentListingCard
                img={slug === "to-let" ? 3 : 1}
                width={"23.7%"}
              />
              <RecentListingCard
                img={slug === "to-let" ? 4 : 2}
                width={"23.7%"}
              />
              {slug === "to-let" && (
                <div className="h-[275px] w-[23.7%] rounded-lg 2xl:h-[350px] bg-[#DAECFD] flex items-center justify-center">
                  <div>
                    <p className="text-md font-[500]">
                      Looking For <strong>Buyer</strong>
                    </p>
                    <button className="bg-[#FF6E04] rounded-sm text-white font-semibold text-sm px-2 py-1">
                      Post Your Ads Today
                    </button>
                  </div>
                </div>
              )}
              <RecentListingCard
                img={slug === "to-let" ? 4 : 2}
                width={"23.7%"}
              />
              <RecentListingCard
                img={slug === "to-let" ? 3 : 1}
                width={"23.7%"}
              />
              <RecentListingCard
                img={slug === "to-let" ? 5 : 2}
                width={"23.7%"}
              />
              {/* div of best deals */}
              {slug === "marketplace" && (
                <div className="h-[275px] w-[23.7%] rounded-lg 2xl:h-[350px] bg-[#DAECFD] flex items-center justify-center">
                  <div>
                    <p className="text-md font-[500]">
                      Looking For <strong>Buyer</strong>
                    </p>
                    <button className="bg-[#FF6E04] rounded-sm text-white font-semibold text-sm px-2 py-1">
                      Post Your Ads Today
                    </button>
                  </div>
                </div>
              )}

              <DiscoverCard helpful={false} layout={"row"} />

              <RecentListingCard
                img={slug === "to-let" ? 1 : 1}
                width={"23.7%"}
              />
              <RecentListingCard
                img={slug === "to-let" ? 5 : 2}
                width={"23.7%"}
              />
              <RecentListingCard
                img={slug === "to-let" ? 3 : 1}
                width={"23.7%"}
              />
              <RecentListingCard
                img={slug === "to-let" ? 4 : 2}
                width={"23.7%"}
              />
              <DiscoverCard helpful={true} layout={"row"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
