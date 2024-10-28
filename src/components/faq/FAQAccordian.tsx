"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { FAQItemProps } from "./FAQItem";

export const FaqAccordion = ({ items }: { items: FAQItemProps[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div key={index} className="bg-gray-100 rounded-lg p-4 shadow-sm">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 font-bold text-lg">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-black font-semibold">{item.question}</h3>
            </div>
            <span className="text-gray-500">
              {activeIndex === index ? <FaMinus /> : <FaPlus />}
            </span>
          </div>
          {activeIndex === index && (
            <div className="mt-2 text-gray-600">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export const mockData: Record<
  "openingCeremony" | "hackathon" | "workshops" | "demo",
  FAQItemProps[]
> = {
  openingCeremony: [
    { question: "When is the Opening Ceremony?", answer: "Insert answer here" },
    {
      question: "Where is the Opening Ceremony?",
      answer: "Insert answer here",
    },
  ],
  hackathon: [
    { question: "When is the Hackathon?", answer: "Insert answer here" },
    { question: "Where is the Hackathon?", answer: "Insert answer here" },
  ],
  workshops: [
    { question: "When is the Workshop?", answer: "Insert answer here" },
    { question: "Where is the Workshop?", answer: "Insert answer here" },
  ],
  demo: [
    { question: "When is the Demo?", answer: "Insert answer here" },
    { question: "Where is the Demo?", answer: "Insert answer here" },
  ],
};

export default FaqAccordion;
