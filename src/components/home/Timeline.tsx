import React from 'react';

const Timeline: React.FC = () => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-yellow-300 mb-2">Timeline:</h2>
      <div className="flex flex-col items-center space-y-4">
        <div className="p-2 bg-white rounded-lg shadow-md text-black">[Timeline Item 1]</div>
        <div className="p-2 bg-white rounded-lg shadow-md text-black">[Timeline Item 2]</div>
      </div>
    </div>
  );
};

export default Timeline;