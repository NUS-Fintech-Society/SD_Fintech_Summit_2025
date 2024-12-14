"use client";

import React, { useState } from "react";
import { IWorkShop } from "./types";

interface WorkshopItemProps extends IWorkShop {
  secondImageSrc?: string;
  registrationLink?: string; // Link for registration
}

const WorkshopItem: React.FC<WorkshopItemProps> = ({
  date,
  time,
  imageSrc = "https://via.placeholder.com/150",
  description = "Insert brief description here",
  imageAlt = "Workshop Image",
  secondImageSrc, 
  registrationLink, // Registration link
}) => {
  // State to track which image is displayed
  const [currentImage, setCurrentImage] = useState(imageSrc);

  // Function to switch between the two images
  const toggleImage = () => {
    if (secondImageSrc) {
      setCurrentImage(currentImage === imageSrc ? secondImageSrc : imageSrc);
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
          src={currentImage}
          alt={imageAlt}
          className="object-cover w-full h-full cursor-pointer" 
          onClick={toggleImage} 
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
        {/* Register Button with more space */}
        {registrationLink && (
          <a href={registrationLink} target="_blank" rel="noopener noreferrer">
            <button
              style={{
                width: 200,
                height: 60,
                backgroundColor: "#4470ba",
                color: "white",
                fontWeight: "600",
                borderRadius: "9999px",
                padding: "8px 16px",
                marginTop: "20px",  // Added margin-top to add space above the button
                marginBottom: "20px", // Added margin-bottom to add space below the button
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#365a96")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4470ba")}
            >
              REGISTER
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default WorkshopItem;