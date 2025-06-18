import BreadCrumbs from "@/components/BreadCrumbs";
import React from "react";
import Image from "next/image";
import TitleAndLogo from "@/components/SeeDetails/TitleAndLogo";
import SliderCard from "@/components/SeeDetails/SliderCard";
import QuickInformation from "@/components/SeeDetails/QuickInformation";
import GetMoreInfo from "@/components/SeeDetails/GetMoreInfo";
import UserInformation from "@/components/SeeDetails/UserInformation";
import RecentCustomerReviewCard from "@/components/BusinessListingComponents/RecentCustomerReviewCard";

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

const facilitiesList = [
  "Laundry Service",
  "Internet Access",
  "Parking Available",
  "Wedding services",
  "Restaurant",
  "Parking",
];

const payment = ["cash", "others"];

const SeeDetails = () => {
  return (
    <div className=" h-auto mb-10 flex flex-col items-center w-full justify-center p  bg-[#F8F7F7] ">
      <div className="flex flex-col w-[85%] bg-white px-5  ">
        {/* breadCrumbs section */}
        <BreadCrumbs />
        {/* image and title and button section */}
        <TitleAndLogo />
        {/* main section  */}
        <div className="flex w-full justify-between my-3">
          {/* left section */}
          <div className="w-[64.5%] ">
            <div className="">
              <SliderCard />
            </div>
            {/* about and text section */}
            <div className="mt-5 pl-2">
              <h2 className="font-semibold uppercase text-xl">About Us</h2>
              <p className="text-[13.5px] w-full mt-2  font-[500]">
                Hotel details In a commercial area, this unassuming hotel
                catering to Indian nationals only is a 6-min walk from Mata Wala
                Bagh reserve, 2 km from Dehradun railway station and 7 km from
                Tapkeshwar Temple. The airy, straightforward rooms feature
                colorful accent walls and flat-screen TVs. Breakfast is
                available for a surcharge. Other amenities include an unfussy
                restaurant, parking and event space. This property has a
                generator. Closest Landmarks * Dehradun Station 1 km Dehradun
                Clock Tower 2.3 km Indian Military Academy 5.5 km Mussoorie Mall
                Road 17.1 km Camel's Back Road 17.3 km Rajaji National Park 18.1
                km Kempty Falls 19.8 km Restaurants & Markets * Shiva Sanitary
                Store Market 1.4 km Babli Butola Market 1.8 km Arpeet Traders -
                Kanika Handloom Market 1.9 km Doon Darbar Restaurant 3 km
                Eddie's Patisserie Restaurant 3.1 km Tunday Kababi Restaurant
                3.3 km Closest Airports * Dehradun Airport 20.1 km
              </p>
            </div>

            {/* facilities */}

            <div className="max-w-4xl  mt-5 pl-2">
              <h2 className="text-xl font-semibold">FACILITIES</h2>
              <p className="text-sm mt-2  mb-4">
                HOTEL CALISTA provides the following facilities:
              </p>
              <div className="flex flex-col  flex-wrap h-30 gap-4">
                {facilitiesList.map((facility, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="10" fill="#FFE9D9" />
                      <path
                        d="M17.1515 5.32281C16.6874 4.89226 15.9337 4.89253 15.469 5.32281L7.8968 12.3386L4.53129 9.22053C4.06656 8.78998 3.31326 8.78998 2.84854 9.22053C2.38382 9.65109 2.38382 10.349 2.84854 10.7796L7.05526 14.677C7.28747 14.8922 7.59196 15 7.89648 15C8.201 15 8.50579 14.8924 8.738 14.677L17.1515 6.88182C17.6162 6.45156 17.6162 5.75334 17.1515 5.32281Z"
                        fill="#FF6E04"
                      />
                    </svg>

                    <span className=" text-[15px] font-semibold">
                      {facility}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* payment modes */}
            <div className="max-w-4xl  mt-5 pl-2">
              <h2 className="text-xl font-semibold uppercase">Payment Modes</h2>
              <p className="text-sm mt-2  mb-4">
                HOTEL CALISTA provides the following mayment modes:
              </p>
              <div className="flex flex-col  flex-wrap h-5 gap-4">
                {payment.map((payment, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10" cy="10" r="10" fill="#FFE9D9" />
                      <path
                        d="M17.1515 5.32281C16.6874 4.89226 15.9337 4.89253 15.469 5.32281L7.8968 12.3386L4.53129 9.22053C4.06656 8.78998 3.31326 8.78998 2.84854 9.22053C2.38382 9.65109 2.38382 10.349 2.84854 10.7796L7.05526 14.677C7.28747 14.8922 7.59196 15 7.89648 15C8.201 15 8.50579 14.8924 8.738 14.677L17.1515 6.88182C17.6162 6.45156 17.6162 5.75334 17.1515 5.32281Z"
                        fill="#FF6E04"
                      />
                    </svg>

                    <span className=" text-[15px] font-semibold">
                      {payment}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* overview */}

            <div className="max-w-4xl  mt-10 pl-2">
              <h2 className="text-xl font-semibold uppercase">
                Overview - HOTEL CALISTA
              </h2>
              <div className="text-[13px] font-[500] flex flex-col gap-5 mt-2 max-w-xl">
                <p>
                  HOTEL CALISTA at 59, Saharanpur Road, Opp Square Deal Filling
                  Station, Patel Nagar, Patel Nagar, Dehradun, Uttarakhand
                  248001 is a Hotel in Dehradun. Their facilities are :- Laundry
                  Service, Internet Access, Parking Available, Wedding services,
                  Restaurant, Parking, their acceptable payment mode is Cash &
                  Other
                </p>

                <p>Scroll to the top for more details of HOTEL CALISTA</p>

                <p>
                  Don't forget to tell, you found HOTEL CALISTA on{" "}
                  <strong className="text-[#FF6E04]">Address Guru</strong>
                </p>
              </div>
            </div>
          </div>
          {/* right section */}

          <div className="w-[34%]  h-auto mb-10 flex flex-col gap-5 ">
            <QuickInformation />
            <div className="w-full h-[30rem] mb-7">
              <GetMoreInfo />
            </div>
            <UserInformation />
          </div>
        </div>

        {/* reviews section */}

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
        {/* rest is footer  */}
      </div>
    </div>
  );
};

export default SeeDetails;
