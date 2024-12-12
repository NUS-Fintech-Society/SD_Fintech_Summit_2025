"use client";

import React from 'react';
import CircleCapsuleBanner from '../ui/home/CircleCapsuleBanner';

const Joining: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 mt-4 mb-4">
      <CircleCapsuleBanner title="Joining the Hackathon" />
      <div className="bg-[#0B2858] text-[#FFA200] rounded-lg p-6 w-full max-w-xl mx-auto shadow-lg">
        <p className="text-center text-[#FFA200] mb-4">
          Teams will register under one of the two problem statement tracks. Successful teams will pass on to the prototyping stage and then the finals. The BGA bounty is an add-on prize for finalist teams. If your project best meets the criteria of the bounty, you can win the bounty on top of the prize from the main problem statement.
        </p>
        <p className="text-center text-[#FFA200] mb-4">
          To participate, you may form teams of 1-5 members. Register by firstly filling up the <a href="https://docs.google.com/forms/d/e/1FAIpQLSeIfq9bn5cTPOfEACMvv3Ubd2ZCK7u0_nIi1wUuqRqQtGVy-w/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="underline">Registration Form</a>. Additionally, you are required to create a devpost account at <a href="https://devpost.com" target="_blank" rel="noopener noreferrer" className="underline">devpost.com</a>. Kindly ensure that your account is created with the same email in the registration form for verification purposes.
        </p>
        <p className="text-center text-[#FFA200] mb-4">
          After creating a devpost account, they may visit the <a href="https://nus-fintech-summit-2025.devpost.com/" target="_blank" rel="noopener noreferrer" className="underline">hackathon devpost site</a> where there will be an option to join the hackathon. For more details and general help, participants may refer to the <a href="https://help.devpost.com/hc/en-us/categories/360001298552-Hackathon-Participants" target="_blank" rel="noopener noreferrer" className="underline">devpost help centre</a> for hackathon participants.
        </p>
        <p>
          5 finalists per problem statement will be chosen and they will present their prototypes to our sponsor judges on 17th January. 
        </p>
      </div>
    </div>
  );
};

export default Joining;