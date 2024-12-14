"use client"

import React, { useState } from "react";
import { IPanels } from "./types";

interface PanelItemProps extends IPanels {
  speakerImages?: string[]; // Optional speaker images for toggling
}

const PanelItem: React.FC<PanelItemProps> = ({
  date,
  time,
  topic,
  description,
  speakerImages = [],
  imageAlt = "Panel Image",
}) => {
  // State to track the current speaker image displayed
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to cycle through speaker images
  const toggleImage = () => {
    if (speakerImages.length > 1) {
      const nextIndex = (currentImageIndex + 1) % speakerImages.length;
      setCurrentImageIndex(nextIndex);
    }
  };

  return (
    <div
      style={{ borderRadius: 50 }}
      className="flex items-center bg-white shadow-[10px_8px_0px_0px_rgba(0,_0,_0)] relative overflow-hidden mb-10 max-w-[90%] lg:max-w-[70%] mx-auto"
    >
      {/* Left-side image */}
      <div style={{ borderRadius: 50 }} className="w-40 overflow-hidden">
        <img
          style={{ height: "100%", padding: 0, marginRight: 20 }}
          src={speakerImages[currentImageIndex]}
          alt={imageAlt}
          className="object-cover w-full h-full cursor-pointer" // Added cursor pointer for click interaction
          onClick={toggleImage} // Clicking the image will switch it
        />
      </div>

      {/* Panel topic and description */}
      <div className="flex-1">
        {/* Panel Topic */}
        <p className="text-gray-900 font-semibold text-xl m-4">{topic}</p>

        {/* Panel Description */}
        <p className="text-gray-700 font-semibold m-4">{description}</p>

        {/* Date and Time */}
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

export default PanelItem;