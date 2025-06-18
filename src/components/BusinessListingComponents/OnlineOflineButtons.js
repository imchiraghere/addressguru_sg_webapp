import React, { useState } from "react";

const OnlineOflineButtons = () => {
    const [mode, setMode] = useState("online");
  return (
    <div className="flex space-x-5 items-center text-sm  ">
      <label className="flex items-center cursor-pointer space-x-2">
        <input
          type="radio"
          name="mode"
          value="online"
          checked={mode === "online"}
          onChange={() => setMode("online")}
          className="sr-only"
        />
        <span
          className={`w-5 h-5 flex items-center justify-center rounded-full border-2 ${
            mode === "online"
              ? "bg-orange-500 border-orange-500"
              : "border-orange-500"
          }`}
        >
          {mode === "online" && (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          )}
        </span>
        <span className="font-medium text-black">ONLINE</span>
      </label>

      <label className="flex items-center cursor-pointer space-x-2">
        <input
          type="radio"
          name="mode"
          value="offline"
          checked={mode === "offline"}
          onChange={() => setMode("offline")}
          className="sr-only"
        />
        <span
          className={`w-5 h-5 flex items-center justify-center rounded-full border-2 ${
            mode === "offline"
              ? "bg-orange-500 border-orange-500"
              : "border-orange-500"
          }`}
        >
          {mode === "offline" && (
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
          )}
        </span>
        <span className="font-medium text-black">OFFLINE</span>
      </label>
    </div>
  );
};

export default OnlineOflineButtons;
