import React, { useState } from "react";
import Typewriter from "typewriter-effect";

const SearchBar = () => {
  const placeholders = [
    "What are you looking for?",
    "Search for banquet halls",
    "Search for jobs",
    "Search for real estate",
  ];

  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const showTypewriter = !isFocused && inputValue === "";

  return (
    <div className="w-[570px] h-[50px] rounded-full relative bg-white flex items-center px-5 shadow-md overflow-hidden">
      {/* City Section */}
      <span className="text-[#FF6E04] font-bold flex gap-3">
        <p>Dehradun</p>
        <svg
          className="relative top-2.5"
          width="14"
          height="7"
          viewBox="0 0 14 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.98343 6.68574C7.54169 7.05908 6.8254 7.05908 6.38366 6.68574L0.727562 1.90552C0.2858 1.53215 0.2858 0.926819 0.727562 0.553454C1.16934 0.180099 1.88558 0.180099 2.32735 0.553454L7.18354 4.65768L12.0397 0.553454C12.4815 0.180099 13.1978 0.180099 13.6395 0.553454C14.0813 0.926819 14.0813 1.53215 13.6395 1.90552L7.98343 6.68574Z"
            fill="#FF6E04"
          />
        </svg>
      </span>

      <span className="h-full bg-gray-200 w-0.5 mx-4"></span>

      {/* Search Field */}
      <div className="relative flex-1">
        {/* Typing Animation Placeholder */}
        {showTypewriter && (
          <div className="absolute top-1/2 -translate-y-1/2 left-0 text-gray-500 font-semibold pointer-events-none select-none">
            <Typewriter
              options={{
                strings: placeholders,
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 10,
                pauseFor: 2000,
              }}
            />
          </div>
        )}

        {/* Actual Input Field */}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="w-full h-full bg-transparent outline-none text-gray-800 font-semibold"
          placeholder={isFocused ? "" : ""}
        />
      </div>

      {/* Right Side: mic & search icon */}
      <div className="flex items-center absolute right-1">
        <svg
          className="relative right-1.5"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Mic icon paths */}
        </svg>

        <svg
          className="relative right-1"
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="0" y="0" width="38" height="38" rx="19" fill="#FF6E04" />
          <path
            d="M28 28L23.75 23.7425M26.105 18.0526C26.105 20.1883 25.2566 22.2365 23.7465 23.7467C22.2363 25.2569 20.1881 26.1053 18.0524 26.1053C15.9167 26.1053 13.8685 25.2569 12.3583 23.7467C10.8482 22.2365 10 20.1883 10 18.0526C10 15.9169 10.8482 13.8687 12.3583 12.3586C13.8685 10.8484 15.9167 10 18.0524 10C20.1881 10 22.2363 10.8484 23.7465 12.3586C25.2566 13.8687 26.105 15.9169 26.105 18.0526Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default SearchBar;
