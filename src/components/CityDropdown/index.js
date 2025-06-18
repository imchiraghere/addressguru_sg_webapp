import { useState, useEffect, useRef } from "react";

export default function CityDropdown({ data }) {
  const [selectedCity, setSelectedCity] = useState("Singapore");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <span
        className="text-[#FF6E04] font-bold flex gap-2 items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{selectedCity}</p>
        <svg
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          } relative top-0.5`}
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

      {isOpen && (
        <div className="absolute mt-2 bg-white shadow-md border rounded w-50 border-orange-600 top-8 max-h-[200px] overflow-y-auto z-50">
          {data.map((city, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedCity(city);
                setIsOpen(false);
              }}
              className={`px-4 py-2 cursor-pointer font-[500] hover:bg-orange-100 ${
                selectedCity === city ? "bg-orange-50 font-semibold" : ""
              }`}
            >
              {city}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
