import React from 'react';
import DoubleCapsuleBanner from '../ui/home/DoubleCapsuleBanner';

const ProblemStatement: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 my-4">
      <DoubleCapsuleBanner title="Problem Statements" />
      <div className="flex flex-col items-center justify-center space-y-3 w-full mt-12">
        {/* Stylish box for problem statements */}
        <div className="bg-[#D9D9D9] w-full sm:w-10/12 lg:w-9/12 min-h-28 rounded-md p-4 text-lg leading-relaxed text-[#0B2858] shadow-md flex items-center space-x-6">
          <img
            src="/sponsors/Northern Trust.png" 
            alt="Northern Trust Logo"
            className="w-36 h-36 object-contain" // Significantly increased size
          />
          <div>
            <strong>How can AI and machine learning be applied to enhance compliance and risk management for financial institutions leveraging blockchain?</strong><br /><br />
            With the integration of blockchain in financial services, compliance and risk management processes need a fresh approach. Traditional models may not suffice, and AI-driven compliance solutions can help automate and streamline risk assessments while remaining in line with regulations.
          </div>
        </div>
        <div className="bg-[#D9D9D9] w-full sm:w-10/12 lg:w-9/12 min-h-28 rounded-md p-4 text-lg leading-relaxed text-[#0B2858] shadow-md flex items-center space-x-6">
          <img
            src="/sponsors/Ripple.png" 
            alt="Ripple Logo"
            className="w-36 h-36 object-contain" // Significantly increased size
          />
          <div>
            <strong>Develop fintech applications leveraging XRPL and its new EVM Sidechain to minimize traditional costs associated with such ventures. These applications may encompass areas like insurance, wealth management, cross-border payments, lending, and more.</strong><br /><br />
            Additionally, explore solutions in emerging fields such as regulatory technology (RegTech), digital identity, sustainable finance, and risk management. XRPL’s efficiency and the EVM Sidechain’s programmability offer a powerful combination to deliver innovative, scalable, and cost-effective fintech solutions.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatement;