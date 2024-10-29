"use client";
import React, { useState } from "react";

export interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className={"p-4 rounded-lg shadow-md mb-4 bg-[#dbe6fd]"}>
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="flex items-center">
          <span className="text-xl font-bold text-gray-500 mr-4">01</span>
          <h3
            className={`text-lg font-semibold ${
              isOpen ? "text-black" : "text-gray-800"
            }`}
          >
            {question}
          </h3>
        </div>
        <span
          className={`w-8 h-8 flex items-center justify-center rounded-full ${
            isOpen ? "bg-black" : "bg-white"
          } shadow`}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          )}
        </span>
      </div>
      {isOpen && <p className="text-gray-600 mt-4 italic">{answer}</p>}
    </div>
  );
};

export default FAQItem;
