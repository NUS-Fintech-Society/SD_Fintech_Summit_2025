"use client";

import React, { useState, useEffect } from "react";

const Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    isVisible && (
      <div className="bg-[#FFA200] text-[#0B2858] w-full p-4 flex justify-between items-center text-lg font-semibold shadow-md">
        <div className="flex items-center gap-4">
          <p>🚀 Hackathon registration has opened!</p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSebdk8QY2Yud2X0QPlPVHq3soGeGMprGCNAceTLfevUz632dw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0B2858] text-white px-4 py-2 rounded-lg hover:bg-[#072047] transition duration-200"
          >
            Sign Up Now
          </a>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-[#0B2858] hover:text-[#cc8400] transition duration-200"
          aria-label="Close banner"
        >
          ✖
        </button>
      </div>
    )
  );
}

export default Banner;