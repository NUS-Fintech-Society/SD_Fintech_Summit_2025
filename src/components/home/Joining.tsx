"use client";

import React from 'react';
import CircleCapsuleBanner from '../ui/home/CircleCapsuleBanner';

const Joining: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 mt-4 mb-4">
      <CircleCapsuleBanner title="Joining the Hackathon" />
      <div className="bg-[#0B2858] text-[#FFA200] w-full sm:w-10/12 lg:w-9/12 min-h-28 rounded-md p-4 text-lg leading-relaxed text-[#0B2858] shadow-md">
        <p className="text-justify text-[#FFA200] mb-4">
          Teams will first register for the hackathon. Successful teams will pass on to the finals on 9 January 2026. The BGA bounty is an add-on prize for finalist teams. If your project best meets the criteria of the bounty, you can win the bounty on top of the prize from the main problem statement.
        </p>
        <p className="text-justify text-[#FFA200] mb-4">
          To participate, you may form teams of 3-5 members. Register by firstly filling up the <a href="https://docs.google.com/forms/d/e/1FAIpQLSebdk8QY2Yud2X0QPlPVHq3soGeGMprGCNAceTLfevUz632dw/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="underline">Registration Form</a>. Additionally, you are required to create a devpost account at <a href="https://devpost.com" target="_blank" rel="noopener noreferrer" className="underline">devpost.com</a>. Kindly ensure that your account is created with the same email in the registration form for verification purposes.
        </p>
        <p className="text-justify text-[#FFA200] mb-4">
          After creating a devpost account, they may visit the <a href="https://nus-fintech-summit-2026.devpost.com/" target="_blank" rel="noopener noreferrer" className="underline">hackathon devpost site</a> where there will be an option to join the hackathon. For more details and general help, participants may refer to the <a href="https://help.devpost.com/hc/en-us/categories/360001298552-Hackathon-Participants" target="_blank" rel="noopener noreferrer" className="underline">devpost help centre</a> for hackathon participants.
        </p>
        <p className="text-justify text-[#FFA200] mb-4">
          Shortlisted teams will present their prototypes to our sponsor judges on 9th January. 
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-10 justify-center items-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSebdk8QY2Yud2X0QPlPVHq3soGeGMprGCNAceTLfevUz632dw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-[#FFA200] text-[#0B2858] font-semibold rounded-lg hover:bg-[#cc8400]"
          >
            Registration Form
          </a>
          <a
            href="https://nus-fintech-summit-2026.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-[#FFA200] text-[#0B2858] font-semibold rounded-lg hover:bg-[#cc8400]"
          >
            DevPost
          </a>
          <a
            href="https://t.me/+g5OAhvqbFC1mYzg1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-[#FFA200] text-[#0B2858] font-semibold rounded-lg hover:bg-[#cc8400]"
          >
            Telegram Channel
          </a>
        </div>
      </div>
    </div>
  );
};

export default Joining;