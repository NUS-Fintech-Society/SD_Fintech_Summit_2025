// Prizes.tsx
import React from 'react';
import DoubleCapsuleBanner from '../ui/home/DoubleCapsuleBanner';

const Prizes: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 my-4">
    {/* Banner With Title */}
    <DoubleCapsuleBanner title="Prizes" />
  </div>
  );
};

export default Prizes;