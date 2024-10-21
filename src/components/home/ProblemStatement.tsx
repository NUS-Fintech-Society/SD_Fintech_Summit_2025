import React from 'react';

const ProblemStatement = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start p-4 justify-center rounded-lg">
      <div className="flex flex-row sm:flex-col text-center sm:text-left mb-4 sm:mr-4 text-[#D9DFA1]">
        <span className="text-2xl font-semibold leading-none mr-2 sm:mr-0">PROBLEM</span>
        <span className="text-2xl font-semibold leading-none">STATEMENT</span>
      </div>
      
      <div className="bg-[#D9D9D9] w-full sm:w-5/12 h-28 rounded-md"></div>
    </div>
  );
};

export default ProblemStatement;
