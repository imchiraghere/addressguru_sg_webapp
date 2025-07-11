"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const OTPPopup = ({setPop}) => {
  const otpLength = 6;
  const [otp, setOtp] = useState(Array(otpLength).fill(""));
  const inputRefs = useRef([]);
  const [timer, setTimer] = useState(60);
  const [resendAvailable, setResendAvailable] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setResendAvailable(true);
    }
  }, [timer]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otpLength - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResend = () => {
    setOtp(Array(otpLength).fill(""));
    setTimer(60);
    setResendAvailable(false);
    // Trigger resend API logic here
  };

  const handleSubmit = () => {
    const code = otp.join("");
    if (code.length === otpLength) {
      console.log("Submitted OTP:", code);
      // Call OTP verification API here
    } else {
      alert("Please enter the complete OTP.");
    }
  };

  return (
    <div className="inset-0 h-full w-full fixed z-50 bg-gradient-to-r from-white/20 to-orange-300/90 backdrop-blur-[2px] flex items-center justify-center">
      <div className="w-full max-w-[400px] 2xl:scale-105 bg-white text-center p-5 rounded-4xl pb-15 shadow-xl ">
        <button onClick={()=>{setPop(false)}} className="text-orange-500 cursor-pointer mb-4 text-xs hover:underline text-start relative w-full">
          ← Back to Register
        </button>

        <div className="flex justify-center mb-4">
          <Image src="/assets/register/otp.svg" alt="otp image" height={500} width={500} className="h-20 w-20 mt-2" />
        </div>

        <h2 className="text-xl font-bold mb-2">OTP Verification</h2>
        <p className="text-gray-600 mb-4">
          Enter OTP Code sent to <br />
          <span className="font-semibold text-black">+91-7983356237</span>
        </p>

        <div className="flex justify-center gap-3 mb-4">
          {otp.map((value, index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              maxLength={1}
              className="w-12 h-12 border rounded-md text-center text-lg font-semibold focus:outline-none focus:ring-2 ring-orange-500"
              value={value}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </div>

        <div className="text-gray-400 text-sm mb-2">
          {timer > 0 ? `00:${timer.toString().padStart(2, "0")} sec` : ""}
        </div>

        <p className="text-sm text-gray-600 mb-6 flex flex-col font-semibold items-center">
         {"  Didn`t receive OTP Code? "}
          <button
            className={`font-[500] ${
              resendAvailable
                ? "text-orange-500 hover:underline"
                : "text-gray-400 cursor-not-allowed"
            }`}
            onClick={resendAvailable ? handleResend : undefined}
            disabled={!resendAvailable}
          >
            Resend Code
          </button>
        </p>

        <button
          onClick={handleSubmit}
          className="bg-orange-500 hover:bg-orange-600 cursor-pointer text-white font-bold py-2 px-6 w-xs rounded-lg mx-auto"
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default OTPPopup;
