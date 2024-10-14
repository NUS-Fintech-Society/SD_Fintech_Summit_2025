// import React from 'react';

// const ProblemStatement: React.FC = () => {
//   return (
//     <div className="mb-8">
//       <h2 className="text-xl font-semibold text-yellow-300 mb-2">Problem Statement:</h2>
//       <div className="p-4 bg-white rounded-lg shadow-md text-black">[This is the problem Statement]</div>
//     </div>
//   );
// };

// export default ProblemStatement;

import React from 'react';

const ProblemStatement = () => {
  return (
    <div className="flex items-start p-4 justify-center rounded-lg">
      <div className="flex flex-col mr-4 text-[#D9DFA1]">
        <span className="text-2xl font-semibold leading-none">PROBLEM</span>
        <span className="text-xl font-semibold leading-none">STATEMENT</span>
      </div>
      <div className="bg-[#D9D9D9] w-5/12 h-28 rounded-md"></div>
    </div>
  );
};

export default ProblemStatement;
