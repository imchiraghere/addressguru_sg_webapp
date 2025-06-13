import { useState } from "react";
import { FaUser, FaPhone } from "react-icons/fa";

export default function RightBusinessCard() {
  const [mode, setMode] = useState("online");

  return (
    <div className="w-xs bg-orange-50 p-6 rounded-xl shadow-lg ">
      <h2 className="text-sm font-bold text-gray-800 mb-1">
        Explore the Top <span className="text-orange-500">Coaching Centers</span>
      </h2>
      <p className="text-[10px] mb-4">
        You&apos;ll receive the contact details instantly, at no cost
      </p>

      <p className="text-xs font-semibold text-gray-700 mb-2">
        Tell us the type of Coaching Institutes you need?
      </p>

      <div className="flex space-x-4 mb-4">
        <button
          className={`flex-1 py-2 rounded-full border text-sm font-medium ${
            mode === "online"
              ? "bg-orange-500 text-white"
              : "bg-white text-gray-700"
          }`}
          onClick={() => setMode("online")}
        >
          ONLINE
        </button>
        <button
          className={`flex-1 py-2 rounded-full border text-sm font-medium ${
            mode === "offline"
              ? "bg-orange-500 text-white"
              : "bg-white text-gray-700"
          }`}
          onClick={() => setMode("offline")}
        >
          OFFLINE
        </button>
      </div>

      <div className="mb-3 flex items-center border rounded-lg px-3 py-2 bg-white">
        <FaUser className="text-gray-400 mr-2" />
        <input
          type="text"
          value="ABHAY"
          readOnly
          className="w-full outline-none text-sm bg-transparent"
        />
      </div>

      <div className="mb-5 flex items-center border rounded-lg px-3 py-2 bg-white">
        <FaPhone className="text-gray-400 mr-2" />
        <input
          type="tel"
          value="+91-7983356237"
          readOnly
          className="w-full outline-none text-sm bg-transparent"
        />
      </div>

      <button className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition">
        UNLOCK TOP DEALS
      </button>
    </div>
  );
}
