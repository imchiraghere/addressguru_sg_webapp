import React from "react";

const IconKeyValue = ({label,value,icon,bg}) => {
  return (
    <div className="flex items-center space-x-2 text-xs ">
      {icon && (
        <span className="text-gray-500">
          {icon}
        </span>
      )}
      <span>
        {label && <span className="font-medium text-gray-500">{label}</span>} :
        {value && <span className={`font-[500] ${bg && "bg-gray-100 p-1 rounded-sm ml-1"}`}>  {value}</span>}
      </span>
    </div>
  );
};

export default IconKeyValue;
