import React from "react";

const Accordian = () => {
  return (
    <div class="mx-auto min-h-[600px] max-w-screen-lg">
      <div class="  overflow-hidden rounded-lg border border-indigo-200  h-80 overflow-y-scroll shadow-sm p-4">
        <details class="group" open>
          <summary class="flex cursor-pointer list-none items-center bg-[#FFFAF6] border border-gray-200  justify-between p-4 rounded-lg text-lg font-medium text-black ">
            Is it possible to live on Mars?
            <div class="text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="block h-5 w-5 transition-all duration-300 group-open:rotate-180"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </summary>
          <div class=" p-4 ">
            While it's not currently possible, scientists and space agencies are
            working on technologies to make human habitation on Mars a reality
            in the future. Significant challenges like radiation protection,
            sustainable food and water supplies, and creating a breathable
            atmosphere need to be overcome.
          </div>
        </details>
      </div>
    </div>
  );
};

export default Accordian;
