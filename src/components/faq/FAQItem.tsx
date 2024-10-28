import React from "react";

export interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-semibold text-gray-800">{question}</h3>
      <p className="text-gray-600">{answer}</p>
    </div>
  );
};

export default FAQItem;
