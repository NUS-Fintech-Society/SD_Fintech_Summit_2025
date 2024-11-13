import React from "react";
import { IWorkShop } from "./types";

interface WorkshopItemProps extends IWorkShop {}

const WorkshopItem: React.FC<WorkshopItemProps> = ({
  date,
  time,
  imageSrc = "https://via.placeholder.com/150",
  description = "Insert brief description here",
  imageAlt = "Workshop Image",
}) => {
  return (
    <div
      style={{ borderRadius: 50 }}
      className="flex items-center bg-white shadow-[10px_8px_0px_0px_rgba(0,_0,_0)] relative overflow-hidden mb-10 max-w-[90%] lg:max-w-[70%] mx-auto"
    >
      {/* Left-side image */}
      <div style={{ borderRadius: 50 }} className="w-40 overflow-hidden">
        <img
          style={{ height: "100%", padding: 0, marginRight: 20 }}
          src={imageSrc}
          alt={imageAlt}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Description and Date/Time */}
      <div className="flex-1">
        <p className="text-gray-900 font-semibold m-4">{description}</p>
        <div
          style={{ borderRadius: 50 }}
          className="m-4 flex flex-col sm:flex-row justify-between items-center mt-2 bg-gray-100 p-4"
        >
          <p className="text-gray-700 font-bold mb-2 sm:mb-0">Date: {date}</p>
          <p className="text-gray-700 font-bold">Time: {time}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkshopItem;