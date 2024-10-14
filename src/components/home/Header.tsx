"use client";

import React from "react";
import Image from "next/image";
import Countdown from "./Countdown";

const Header: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row w-[90vw] md:w-[50vw] mx-auto items-center justify-between md:gap-4 mb-8 p-8 rounded-lg">
      <div className="flex-shrink-0 mb-6 md:mb-0">
        <Image
          src="/HomeLogo.png"
          alt="Fintech Summit Logo"
          width={420} 
          height={420} 
        />
      </div>
      <div className="flex flex-col justify-center text-left">
        <div className="relative">
          <h1 className="text-7xl drop-shadow-md font-semibold text-[#D9DFA1]">
            NUS FINTECH
          </h1>

          <h1 className="text-7xl drop-shadow-md font-semibold text-[#D9DFA1]">
            SUMMIT
            <span
              className="text-7xl italic text-[#D9DFA1] leading-none inline-block ml-2"
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

        <div className="bg-[#D9D9D9] opacity-20 text-center text-white text-xl font-semibold py-2 px-4 rounded-md mb-4">
          Theme: PLACEHOLDER FOR THEME
        </div>

        <p className="text-lg font-semibold text-center text-[#BBC49A] mb-8">
          6th Jan - 17th Jan @ National University of Singapore
        </p>
      </div>
    </div>
  );
};

export default Header;
