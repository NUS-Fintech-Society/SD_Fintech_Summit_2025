import React, { ReactNode } from "react";

type CircleCapsuleBannerProps = {
  title: string;
};

const CircleCapsuleBanner: React.FC<CircleCapsuleBannerProps> = ({ title }) => {
  return (
    <div className="flex justify-end items-center h-18 w-full p-8 relative overflow-visible">
      <div className="absolute left-0 h-full overflow-hidden z-5">
        <div className="flex space-x-0 h-full items-center">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className={`w-16 h-full bg-[#0091B0] rounded-full ${
                index >= 4 ? "hidden md:flex" : ""
              }`}
            ></div>
          ))}
        </div>
      </div>

      <div
        className="absolute right-0 w-[61%] h-full bg-[#E45036] rounded-l-full z-10"
        style={{ marginLeft: "-20px" }}
      ></div>

      <div
        className="absolute right-0 w-[40%] h-full bg-[#FFF0C5] rounded-l-full z-20 flex items-center justify-center"
        style={{ top: "14px" }}
      >
        <span className="text-blue-900 text-xl md:text-3xl text-center font-bold">
          {title}
        </span>
      </div>
    </div>
  );
};

export default CircleCapsuleBanner;
