import React, { ReactNode } from "react";

type DoubleCapsuleBannerProps = {
  title: string;
};

const DoubleCapsuleBanner: React.FC<DoubleCapsuleBannerProps> = ({
  title,
}) => {
  return (
    <div className="flex justify-end items-center h-18 w-full p-8 relative overflow-visible">
      <div className="absolute left-0 w-[63%] h-full bg-[#FFA200] rounded-r-full z-5"></div>
      <div
        className="absolute right-0 w-[39%] h-full bg-[#FDCF03] rounded-l-full z-10"
        style={{ marginLeft: "-10px" }}
      ></div>
      <div
        className="absolute left-0 w-[50%] h-full bg-[#FFF0C5] rounded-r-full z-20 flex items-center justify-center"
        style={{ top: "14px" }} 
      >
        <span className="text-blue-900 text-xl md:text-3xl text-center font-bold">
          {title}
        </span>
      </div>
    </div>
  );
};

export default DoubleCapsuleBanner;
