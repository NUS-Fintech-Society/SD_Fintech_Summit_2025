// DownloadButton.tsx
import React from "react";

const DownloadButton: React.FC = () => {
  return (
    <div className="flex justify-center mt-8">
      <a
        href="/dummy.pdf" // Replace with the correct path to your PDF file
        download="Participants Guide"
        className="text-blue-900 font-bold text-lg px-6 py-3 bg-gray-300 rounded-full hover:bg-gray-400 transition-colors duration-200"
        style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
      >
        Participants Brochure
      </a>
    </div>
  );
};

export default DownloadButton;