// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B2858] text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center md:justify-between space-y-4 md:space-y-0">
        {/* Social Media Icons */}
        <div className="flex space-x-4 text-xl">
          social media icons
        </div>

        {/* Divider */}
        <div className="hidden md:block border-l border-gray-400 h-6"></div>

        {/* Copyright Text */}
        <div className="text-sm text-center md:text-left">
          &copy; 2024 NUS FinTech Society
        </div>

        {/* Divider */}
        <div className="hidden md:block border-l border-gray-400 h-6"></div>

        {/* Rights Reserved Text */}
        <div className="text-sm text-center md:text-left">
          All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;