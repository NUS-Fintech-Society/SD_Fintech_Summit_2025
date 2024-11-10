// Prizes.tsx
import React from 'react';
import DoubleCapsuleBanner from '../ui/home/DoubleCapsuleBanner';

const prizes = [
  { place: '2nd', amount: '$2,000' },
  { place: '1st', amount: '$4,000' },
  { place: '3rd', amount: '$1,000' },
];

const Prizes: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 my-8">
      {/* Section Title */}
      <DoubleCapsuleBanner title="Prizes" />

      {/* Prizes Container */}
      <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-2xl mt-8 space-y-0 sm:space-y-0 sm:space-x-4">
        {prizes.map((prize, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center text-center rounded-lg px-6 py-8 shadow-lg ${
              prize.place === '1st' ? 'order-first sm:order-none h-40 sm:h-48 mb-6 sm:mb-0' : 'h-40'
            } w-full sm:w-1/3 bg-gradient-to-b from-[#0C2859] to-[#0C2859]`}
          >
            {/* Place Label */}
            <div className="absolute -top-5 bg-gradient-to-r from-[#FFA200] to-[#FFA200] text-[#0C2859] text-lg font-semibold px-4 py-2 rounded-full shadow-md">
              {prize.place}
            </div>

            {/* Prize Amount */}
            <div className="text-[#FFA200] text-3xl font-bold mt-6">
              {prize.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Prizes;