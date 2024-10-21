"use client";

import React from "react";
import Image from "next/image";
import Countdown from "./Countdown";

const Header: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center lg:flex-row lg:items-center lg:justify-center max-w-[90vw] lg:max-w-[70vw] mx-auto p-4 gap-4 mb-8">
      {/* Image Container */}
      <div className="w-full lg:w-[45%] flex justify-center lg:justify-start mb-6 lg:mb-0">
        <Image
          src="/HomeLogo.png"
          alt="Fintech Summit Logo"
          width={600}
          height={600}
          className="w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-full h-auto"
        />
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-[55%] text-center lg:text-left">
        <h1 className="text-6xl md:text-7xl lg:text-7xl text-center font-semibold text-[#D9DFA1] drop-shadow-md">
          NUS FINTECH
        </h1>
        <h1 className="text-6xl md:text-7xl lg:text-7xl text-center font-semibold text-[#D9DFA1] mt-2">
          SUMMIT
          <span
            className="ml-2 text-6xl md:text-7xl lg:text-7xl italic text-[#D9DFA1] leading-none"
            style={{
              fontFamily: "Instrument Sans, sans-serif",
              fontWeight: 400,
              letterSpacing: "-2px",
              textShadow: `
                0px 0px 3px #D9DFA1,
                0px 0px 8px #D9DFA1
              `,
            }}
          >
            2025
          </span>
        </h1>

        <div className="border-t border-[#D9DFA1] my-2 w-full"></div>
        
        <Countdown />

        <div className="bg-[#D9D9D9] opacity-20 text-center text-white text-md md:text-xl font-semibold py-2 px-4 rounded-md mb-4">
          Theme: PLACEHOLDER FOR THEME
        </div>

        <p className="text-md md:text-lg font-semibold text-[#BBC49A] text-center mb-8">
          6th Jan - 17th Jan @ National University of Singapore
        </p>
      </div>
    </div>
  );
};

export default Header;
