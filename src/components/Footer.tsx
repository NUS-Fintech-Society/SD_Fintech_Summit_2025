// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#014780] text-white py-4">
      <div className="w-full mx-auto px-4 flex flex-col lg:flex-row justify-center lg:justify-between items-center space-y-4 lg:space-y-0">
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 flex-1">
          <a href="https://www.linkedin.com/company/nus-fintech-society" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-6 hover:opacity-60" />
          </a>
          <a href="https://www.instagram.com/nusfintech" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src="/icons/instagram.svg" alt="Instagram" className="h-7 hover:opacity-60" />
          </a>
          <a href="https://www.facebook.com/NUSfintech" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <img src="/icons/facebook.svg" alt="Facebook" className="h-7 hover:opacity-60" />
          </a>
          <a href="https://www.youtube.com/@nusfintechsociety" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <img src="/icons/youtube.svg" alt="YouTube" className="h-7 hover:opacity-60" />
          </a>
          <a href="https://t.me/nusfintechpublic" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <img src="/icons/telegram.svg" alt="Telegram" className="h-6 hover:opacity-60" />
          </a>
        </div>

        {/* Divider */}
        <div className="hidden lg:block border-l border-white h-8 mx-4"></div>

        {/* Copyright Text */}
        <div className="text-lg text-center flex-1">
          &copy; 2024 NUS FinTech Society
        </div>

        {/* Divider */}
        <div className="hidden lg:block border-l border-white h-8 mx-4"></div>

        {/* Rights Reserved Text */}
        <div className="text-lg text-center flex-1">
          All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
