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
    <div className="flex items-center bg-white rounded-lg shadow-[13px_13px_0px_1px_rgba(0,_0,_0)] relative overflow-hidden mb-10 max-w-[90%] lg:max-w-[70%] mx-auto">
      {/* Left-side image */}
      <div className="w-40 rounded-lg overflow-hidden">
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
        <div className="m-4 flex justify-between items-center mt-2 bg-gray-100 p-4 rounded-lg">
          <p className="text-gray-700 font-bold">Date: {date}</p>
          <p className="text-gray-700 font-bold">Time: {time}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkshopItem;
