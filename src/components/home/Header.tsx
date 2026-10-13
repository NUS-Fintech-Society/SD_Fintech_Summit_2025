"use client";

import React from "react";
import Image from "next/image";
import Countdown from "./Countdown";

const Header: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center lg:flex-row lg:items-center lg:justify-center max-w-[90vw] lg:max-w-[70vw] mx-auto p-4 gap-4 mb-8">
      {/* Image Container */}
      <div className="w-full h-full lg:w-[45%] flex justify-center items-end lg:justify-start lg:mb-0">
        <Image
          src="/HomeLogoFull.png"
          alt="Fintech Summit Logo"
          width={700}
          height={700}
          className="w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-full h-full"
        />
      </div>

      <div className="w-full  text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-semibold text-[#D9DFA1] drop-shadow-md">
          NUS FINTECH
        </h1>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-semibold text-[#D9DFA1] mt-2">
          SUMMIT
          <span
            className="ml-1 sm:ml-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl italic text-[#D9DFA1] leading-none"
            style={{
              fontFamily: "Instrument Sans, sans-serif",
              fontWeight: 400,
              letterSpacing: "-1px",
              textShadow: `
        0px 0px 3px #D9DFA1,
        0px 0px 8px #D9DFA1
      `,
            }}
          >
            2026
          </span>
        </h1>

        <div className="border-t border-[#D9DFA1] my-2 w-full"></div>

        <Countdown />

        <p className="text-md md:text-lg font-semibold text-[#BBC49A] text-center mb-8">
          5th - 9th January 2026 @ National University of Singapore
        </p>
      </div>
    </div>
  );
};

export default Header;
