// FilterItem.jsx
import { FiChevronDown } from "react-icons/fi";

const FilterItem = ({ label, icon, hasDropdown }) => {
  return (
    <div className="flex items-center gap-1 px-3 py-2 cursor-pointer  rounded text-sm bg-white font-semibold">
      {icon && <span className="text-orange-500">{icon}</span>}
      <span>{label}</span>
      {hasDropdown && <FiChevronDown className="text-xl" />}
    </div>
  );
};

export default FilterItem;
