
export const FilterItem = ({
  label,
  icon,
  hasDropdown,
  dropdownItems = [],
  isOpen,
  index,
  setOpenIndex,
}) => {
  const toggleDropdown = () => {
    if (hasDropdown) {
      setOpenIndex(isOpen ? null : index); // toggle current
    }
  };

  return (
    <div className="relative ">
      <div
        onClick={toggleDropdown}
        className="flex items-center whitespace-nowrap gap-1 px-2 py-1.5 cursor-pointer rounded text-xs bg-white font-semibold"
      >
        {icon && <span className="text-orange-500">{icon}</span>}
        <span>{label}</span>
        {hasDropdown && (
          <svg
            className={`relative top-[1px] transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            width="11"
            height="7"
            viewBox="0 0 11 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.69199 6.10485C5.36025 6.46029 4.82233 6.46029 4.49059 6.10485L0.242958 1.55382C-0.0887985 1.19836 -0.0887985 0.622054 0.242958 0.266591C0.574723 -0.0888635 1.11261 -0.0888635 1.44437 0.266591L5.09129 4.17403L8.73822 0.266591C9.06996 -0.0888635 9.60788 -0.0888635 9.93962 0.266591C10.2714 0.622054 10.2714 1.19836 9.93962 1.55382L5.69199 6.10485Z"
              fill="black"
            />
          </svg>
        )}
      </div>

      {hasDropdown && isOpen && dropdownItems.length > 0 && (
        <div className="absolute top-5 z-10 mt-1 w-40 pt-3 bg-white shadow-md rounded text-xs ">
          {dropdownItems.map((item, idx) => (
            <div
              key={idx}
              className="px-3 py-2  hover:bg-orange-100 mx-[0.5px] rounded-sm  font-semibold cursor-pointer"
              onClick={() => {
                item.onClick?.();
                setOpenIndex(null); // close dropdown after selection
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
