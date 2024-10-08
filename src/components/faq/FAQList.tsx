import React from 'react';
import FAQItem from './FAQItem';

interface FAQListProps {
  faqs: { question: string; answer: string }[];
}

const FAQList: React.FC<FAQListProps> = ({ faqs }) => {
  return (
    <div className="mb-8">
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQList;