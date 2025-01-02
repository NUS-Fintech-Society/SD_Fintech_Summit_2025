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
  title,
  company,
  secondImageSrc,
  registrationLink,
  speakers,
  disabled = false, // Default to false
}) => {
  const [currentImage, setCurrentImage] = useState(imageSrc);

  const toggleImage = () => {
    if (secondImageSrc) {
      setCurrentImage(currentImage === imageSrc ? secondImageSrc : imageSrc);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-3 w-full mt-12">
      <div className="bg-white w-full sm:w-10/12 lg:w-9/12 min-h-28 rounded-md p-4 text-lg leading-relaxed text-[#0B2858] shadow-md flex flex-col lg:flex-row items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-6">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <div className="flex lg:mr-4 lg:ml-2 flex-row lg:flex-col">
            <img
              src={currentImage}
              alt={imageAlt}
              className="w-36 h-36 object-contain"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2 text-center lg:text-left">
              {title}
            </h3>
            <strong>{company}</strong>
            <br />
            <br />
            <p>{description}</p>
            <br />
            <p className="text-gray-700 font-bold mb-2 sm:mb-0">Date: {date}</p>
            <p className="text-gray-700 font-bold">Time: {time}</p>
            {speakers && (
              <div className="mt-4">
                <h4 className="text-lg font-semibold mb-2">Speakers:</h4>
                <ul className="list-disc pl-5 text-gray-700">
                  {speakers.map((speaker, index) => (
                    <li key={index}>{speaker}</li>
                  ))}
                </ul>
              </div>
            )}
            {disabled ? (
              <button
                style={{
                  width: 200,
                  height: 60,
                  backgroundColor: "#888", // Grey background for disabled
                  color: "white",
                  fontWeight: "600",
                  borderRadius: "9999px",
                  padding: "8px 16px",
                  marginTop: "20px",
                  marginBottom: "20px",
                  cursor: "not-allowed", // Change cursor to indicate disabled
                }}
                disabled
              >
                CLOSED
              </button>
            ) : (
              registrationLink && (
                <a
                  href={registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    style={{
                      width: 200,
                      height: 60,
                      backgroundColor: "#4470ba",
                      color: "white",
                      fontWeight: "600",
                      borderRadius: "9999px",
                      padding: "8px 16px",
                      marginTop: "20px",
                      marginBottom: "20px",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#365a96")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#4470ba")
                    }
                  >
                    REGISTER
                  </button>
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopItem;