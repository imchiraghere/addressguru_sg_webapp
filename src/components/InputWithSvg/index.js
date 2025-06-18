import React from 'react';

const InputWithSvg = ({ icon, placeholder }) => {
  return (
    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden bg-white w-full max-w-md">
      <div className="flex items-center justify-center px-4  text-gray-400">
        {icon}
      </div>

      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 px-4 py-1.5  focus:outline-none border-l-2 border-gray-200 bg-white text-[#323232]"
      />

   
    </div>
  );
};

export default InputWithSvg;
