"use client"

import React, { useState } from "react";
import { IPanels } from "./types";

interface PanelItemProps extends IPanels {
  speakerImages?: string[]; // Optional speaker images for toggling
}

const PanelItem: React.FC<PanelItemProps> = ({
  date,
  time,
  venue,
  topic,
  description,
  moderators,
  speakers,
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
      <div
        style={{ borderRadius: 50 }}
        className="w-32 overflow-hidden flex flex-col sm:w-32 lg:w-40"
      >
        {speakerImages.map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`${imageAlt} ${index + 1}`}
            className="object-cover w-full
              h-16 sm:h-24 lg:h-40
              rounded-lg
              mb-1 sm:mb-2"
          />
        ))}
      </div>

      {/* Panel topic and description */}
      <div className="flex-1">
        {/* Panel Topic */}
        <p className="text-gray-900 font-semibold text-xl m-4">{topic}</p>

        {/* Panel Description */}
        <p className="text-gray-700 font-semibold m-4">{description}</p>

        {/* Moderators */}
        {moderators && moderators.length > 0 && (
          <>
            <p className="text-gray-900 font-bold m-4">Moderator(s):</p>

            {moderators.map((moderator, index) => (
              <p key={index} className="text-gray-700 font-semibold m-4">
                {moderator}
              </p>
            ))}
          </>
        )}
        
        {/* Speakers */}
        {speakers && speakers.length > 0 && (
          <>
            <p className="text-gray-900 font-bold m-4">Speaker(s):</p>

            {speakers.map((speaker, index) => (
              <p key={index} className="text-gray-700 font-semibold m-4">
                {speaker}
              </p>
            ))}
          </>
        )}
        
        {/* Date and Time and Venue*/}
        <div
          style={{ borderRadius: 50 }}
          className="m-4 flex flex-row sm:flex-row justify-between items-center mt-2 bg-gray-100 p-4"
        >
          <div>
            <p className="text-gray-700 font-bold mb-2 sm:mb-0">Date: {date}</p>
            <p className="text-gray-700 font-bold">Time: {time}</p>
          </div>
          <div className="ml-4">
            <p className="text-gray-700 font-bold">Venue: {venue}</p>
          </div>
          
        </div>
        

      </div>
    </div>
  );
};

export default PanelItem;
