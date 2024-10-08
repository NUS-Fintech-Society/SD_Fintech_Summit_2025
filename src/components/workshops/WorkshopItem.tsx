import React from 'react';

interface WorkshopItemProps {
  date: string;
  time: string;
  imageAlt?: string;
}

const WorkshopItem: React.FC<WorkshopItemProps> = ({ date, time, imageAlt = 'Workshop Image' }) => {
  return (
    <div className="flex items-center bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="w-16 h-16 bg-gray-200 flex items-center justify-center rounded-lg mr-4">
        {/* Placeholder for an image */}
        <span className="text-gray-500">{imageAlt}</span>
      </div>
      <div className="flex-1">
        <p className="text-gray-700">Date: {date}</p>
        <p className="text-gray-700">Time: {time}</p>
      </div>
    </div>
  );
};

export default WorkshopItem;