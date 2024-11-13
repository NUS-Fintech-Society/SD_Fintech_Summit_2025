// ProblemStatement.tsx
import React from 'react';
import DoubleCapsuleBanner from '../ui/home/DoubleCapsuleBanner';

const ProblemStatement: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 my-4">
      {/* Banner With Title */}
      <DoubleCapsuleBanner title="Problem Statements" />

      {/* Problem Statement Boxes */}
      <div className="flex flex-col items-center justify-center space-y-3 w-full mt-12">
        <div className="bg-[#D9D9D9] w-full sm:w-10/12 lg:w-9/12 h-28 rounded-md"></div>
        <div className="bg-[#D9D9D9] w-full sm:w-10/12 lg:w-9/12 h-28 rounded-md"></div>
        <div className="bg-[#D9D9D9] w-full sm:w-10/12 lg:w-9/12 h-28 rounded-md"></div>
      </div>
    </div>
  );
};

export default ProblemStatement;