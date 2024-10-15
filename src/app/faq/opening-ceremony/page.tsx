import FAQList from '@/components/faq/FAQList';
import React from 'react';

const faqs = [
  { question: 'When is the hackathon held?', answer: 'Ans: 29 June 2025' },
  { question: 'When is the hackathon held?', answer: 'Ans: 29 June 2025' },
  // Add more FAQs as needed
];

const openCeremonyFAQ: React.FC = () => {
  return (
    <div className="bg-custom-background min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center text-white mb-8">Opening Ceremony FAQ</h1>
        <FAQList faqs={faqs} />
      </div>
    </div>
  );
};

export default openCeremonyFAQ;