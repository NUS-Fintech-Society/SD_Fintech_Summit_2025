"use client";

import React from "react";
import Image from "next/image";
import Countdown from "./Countdown";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row w-[90vw] lg:w-[70vw] mx-auto items-center justify-between gap-4 mb-8 p-4 rounded-lg">
      {/* Adjust the image container */}
      <div className="flex-shrink-0 w-full lg:w-[45%] mb-6 lg:mb-0">
        <Image
          src="/HomeLogoFull.png"
          alt="Fintech Summit Logo"
          width={600} // Adjust image width for larger screens
          height={600} // Adjust image height for larger screens
          className="w-full h-auto" // Ensure it stays responsive
        />
      </div>
      <div className="flex flex-col justify-center text-left w-full lg:w-[55%]">
        <div className="relative">
          <h1 className="text-4xl md:text-6xl lg:text-7xl drop-shadow-md font-semibold text-[#D9DFA1] text-center lg:text-left">
            NUS FINTECH
          </h1>

          {/* Use flex to keep "SUMMIT" and "2025" on the same line */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl drop-shadow-md font-semibold text-[#D9DFA1] flex items-center justify-center lg:justify-start">
            SUMMIT
            <span
              className="text-4xl md:text-6xl lg:text-7xl italic text-[#D9DFA1] leading-none inline-block ml-2"
              style={{
                fontFamily: "Instrument Sans, sans-serif",
                fontWeight: 400,
                letterSpacing: "-2px",
                textShadow: `
                  0px 0px 3px #D9DFA1, /* Soft glow */
                  0px 0px 8px #D9DFA1  /* Reduced outer glow */
                `,
              }}
            >
              2025
            </span>
          </h1>
        </div>

        <div className="border-t border-[#D9DFA1] my-2 w-full"></div>
        <Countdown />

        <div className="bg-[#D9D9D9] opacity-20 text-center text-white text-md md:text-xl font-semibold py-2 px-4 rounded-md mb-4">
          Theme: PLACEHOLDER FOR THEME
        </div>

        <p className="text-md md:text-lg font-semibold text-center text-[#BBC49A] mb-8">
          6th Jan - 17th Jan @ National University of Singapore
        </p>
      </div>
    </div>
  );
};

export default Header;
