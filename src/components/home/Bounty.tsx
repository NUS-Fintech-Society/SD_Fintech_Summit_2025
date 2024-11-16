// Bounty.tsx
"use client";

import React, { useState } from 'react';
import CircleCapsuleBanner from '../ui/home/CircleCapsuleBanner';

interface Challenge {
  title: string;
  description: string;
}

const challenges: Challenge[] = [
  { title: 'Security and Transparency', description: 'Enhance transparency, traceability, and security in business operations using blockchain.' },
  { title: 'Life and Health', description: 'Promote healthy living through blockchain for secure medical records and pharmaceutical traceability.' },
  { title: 'Sustainable Development', description: 'Support clean energy, carbon tracking, and sustainable supply chains using blockchain.' },
  { title: 'Global Education Development', description: 'Facilitate quality education with blockchain for credential verification and resource sharing.' },
  { title: 'Reducing Inequality', description: 'Reduce resource disparity using blockchain for financial inclusion and transparent social welfare.' },
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
        <h2 className="text-2xl font-bold mb-4 text-center text-[#FFA200]">BGA Track</h2>
        <p className="text-center text-[#FFA200] mb-4">
          Projects aligning with the UN's 17 Sustainable Development Goals are eligible for the BGA Track.
        </p>

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