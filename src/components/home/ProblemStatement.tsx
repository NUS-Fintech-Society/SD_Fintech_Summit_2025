import React from "react";
import DoubleCapsuleBanner from "../ui/home/DoubleCapsuleBanner";

const ProblemStatement: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 my-4">
      <DoubleCapsuleBanner title="Problem Statement" />
      <div className="flex flex-col items-center justify-center space-y-3 w-full mt-12"> 
        {/* Stylish box for problem statements */} 
        {/* <div className="bg-[#D9D9D9] w-full sm:w-10/12 lg:w-9/12 min-h-28 rounded-md p-4 text-lg leading-relaxed text-[#0B2858] shadow-md flex flex-col lg:flex-row items-center lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
          <img
            src="/sponsors/Northern Trust.png"
            alt="Northern Trust Logo"
            className="w-36 h-36 object-contain" // Significantly increased size
          />
          <div>
            <p className="font-bold text-justify">
              How can AI and machine learning be applied to enhance compliance
              and risk management for financial institutions leveraging
              blockchain?
            </p>
            <br />
            <p className="text-justify">
              With the integration of blockchain in financial services,
              compliance and risk management processes need a fresh approach.
              Traditional models may not suffice, and AI-driven compliance
              solutions can help automate and streamline risk assessments while
              remaining in line with regulations.
            </p>
          </div>
        </div> */}
        <div className="bg-[#D9D9D9] w-full sm:w-10/12 lg:w-9/12 min-h-28 rounded-md p-4 text-lg leading-relaxed text-[#0B2858] shadow-md flex flex-col lg:flex-row items-center lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
          <img
            src="/sponsors/Ripple.png"
            alt="Ripple Logo"
            className="w-36 h-36 object-contain" // Significantly increased size
          />
          <div>
            <p className="font-bold text-justify">
              Build a Minimum Viable Product (MVP) that leverages the XRP Ledger's (XRPL) core features to solve a real-world problem. Seeking innovative solutions with a variety of use-cases.
            </p>
            <br />
            <p className="text-justify">
              If you don't know where to start, explore applications around Payments, Real-World Asset (RWA) tokenization, RLUSD integration and Decentralized identity (DID). A successful project will solve a real-world financial problem using XRPL. 
              Features could include DID-integrated fintech identity flows, RLUSD-based apps,
              SDKs for other developers to easily integrate XRPL features (e.g. RLUSD, escrows, DIDs) into their app
              and Payment apps, Microfinance, and Real-World Asset (RWA) Tokenization.
            </p>
          </div>
        </div>
        {/* <div className="bg-[#D9D9D9] w-full sm:w-10/12 lg:w-9/12 min-h-28 rounded-md p-4 text-lg leading-relaxed text-[#0B2858] shadow-md flex items-center justify-center text-center">
          To be released on 7th Jan.
        </div> */}
      </div>
    </div>
  );
};

export default ProblemStatement;
