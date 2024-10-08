import React from 'react';

interface AboutSectionProps {
  title: string;
  content?: string;
  children?: React.ReactNode;
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, content, children }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h2 className="text-2xl font-bold text-center text-yellow-300 mb-4">{title}</h2>
      {content ? <p className="text-center text-gray-700">{content}</p> : null}
      {children}
    </div>
  );
};

export default AboutSection;