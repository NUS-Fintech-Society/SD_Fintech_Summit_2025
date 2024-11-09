// Bounty.tsx
"use client";

import React, { useState } from 'react';
import CircleCapsuleBanner from '../ui/home/CircleCapsuleBanner';

interface Challenge {
  title: string;
  description: string;
}

const challenges: Challenge[] = [
  { title: 'Placeholder', description: 'Description' },
  { title: 'Placeholder', description: 'Description' },
  { title: 'Placeholder', description: 'Description' },
  { title: 'Placeholder', description: 'Description' },
  { title: 'Placeholder', description: 'Description' },
];

const Bounty: React.FC = () => {
  const [openChallenge, setOpenChallenge] = useState<number | null>(null);

  const toggleChallenge = (index: number) => {
    setOpenChallenge(openChallenge === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 mt-4 mb-4">
      <CircleCapsuleBanner title="Bounty" />
      <div className="bg-[#0B2858] text-[#FFA200] rounded-lg p-6 w-full max-w-md mx-auto shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#FFA200]">Bounties</h2>

        <div className="w-full space-y-2">
          {challenges.map((challenge, index) => (
            <div key={index} className="border border-[#FFA200] rounded-lg">
              <div
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-[#0D3A6B]"
                onClick={() => toggleChallenge(index)}
              >
                <span className="text-lg font-semibold text-[#FFA200]">{challenge.title}</span>
                <span className="text-xl font-bold text-[#FFA200]">{openChallenge === index ? '-' : '+'}</span>
              </div>

              {openChallenge === index && (
                <div className="p-4 border-t border-[#FFA200] bg-[#0D3A6B]">
                  <p className="text-[#FFA200]">{challenge.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bounty;