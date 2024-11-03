// ProblemStatement.tsx
import React from 'react';
import SectionTitle from './SectionTitle';

const ProblemStatement: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 my-4">
      {/* Section Title */}
      <SectionTitle title="Problem Statements" />

      {/* Problem Statement Boxes */}
      <div className="flex flex-col space-y-3 w-full sm:w-8/12">
        <div className="bg-[#D9D9D9] w-full h-20 rounded-md"></div>
        <div className="bg-[#D9D9D9] w-full h-20 rounded-md"></div>
        <div className="bg-[#D9D9D9] w-full h-20 rounded-md"></div>
      </div>
    </div>
  );
};

export default ProblemStatement;