"use client";

import React, { useState } from 'react';
import CircleCapsuleBanner from '../ui/home/CircleCapsuleBanner';

interface Challenge {
  title: string;
  description: string;
}

const challenges: Challenge[] = [
  { title: 'Security and Transparency', description: 'Enhance the transparency, traceability, and security of business operations using blockchain technology.' },
  { title: 'Life and Health', description: 'Promote healthy living for everyone using blockchain technology.' },
  { title: 'Sustainable Development', description: 'Promote sustainable development, including the use of clean energy, addressing environmental issues, and achieving economic sustainable growth.' },
  { title: 'Global Education Development', description: 'Promote inclusive and equitable quality education, ensuring lifelong learning opportunities for all.' },
  { title: 'Reducing Inequality', description: 'Reduce disparities in resource distribution within and among countries, addressing issues of inequality in the traditional world.' },
];

const Bounty: React.FC = () => {
  const [openChallenge, setOpenChallenge] = useState<number | null>(null);

  const toggleChallenge = (index: number) => {
    setOpenChallenge(openChallenge === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 mt-4 mb-4">
      <CircleCapsuleBanner title="Bounty" />
      <div className="bg-[#0B2858] text-[#FFA200] w-full sm:w-10/12 lg:w-9/12 min-h-28 rounded-md p-4 text-lg leading-relaxed text-[#0B2858] shadow-md">
          <div className="flex flex-col lg:flex-row items-center lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
          <img
            src="/sponsors/BlockchainGoodWhite.png" 
            alt="Blockchain for Good Logo"
            className="w-36 h-36 object-contain" // Significantly increased size
          />
          <div>
          <h2 className="text-2xl font-bold mb-4 text-center lg:text-left text-[#FFA200]">BGA Track</h2>
            <p className="text-justify text-[#FFA200] mb-4">
          Projects that meet the UN's 17 Sustainable Development Goals can be considered to meet the requirements of this track. The BGA Track is designed to find and reward innovative projects that utilise blockchain technology to solve critical global problems, and the following are some of the representative project categories that meet the requirements of the BGA Track, but are not limited to just that:
        </p>
          </div>
        </div>



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

       {/* Sign-up Link Section */}
       <div className="mt-6 text-center">
          <p className="text-[#FFA200] mb-4 text-lg">
            To be considered for the track, sign up using this link:
          </p>
          <a
            href="https://moledao.io/#/event/ad279f66-6cd8-47a6-9082-4ba9e40c3fa3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-[#FFA200] text-[#0B2858] font-semibold rounded-lg hover:bg-[#cc8400]"
          >
            Sign Up Here
          </a>
        </div>

        {/* Button for more info */}
        <div className="mt-6 text-center">
          <a
            href="https://docs.google.com/document/d/1GI_Ku9lhANsJ43DnesVp2xxaZ5hXf-NzshEiVlw3feI/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-[#FFA200] text-[#0B2858] font-semibold rounded-lg hover:bg-[#cc8400]"
          >
            Click here for more
          </a>
        </div>
      </div>
      </div>
  );
};

export default Bounty;