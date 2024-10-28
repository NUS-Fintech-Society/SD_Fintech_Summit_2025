import React from 'react';
import Image from 'next/image';

interface AboutSectionProps {
  title: string;
  imageURL: string;
  content: string;
  children?: React.ReactNode;
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, imageURL, content, children }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4 flex flex-col md:flex-row items-center justify-center relative">
      <div className="md:w-1/3 max-w-full mb-4 md:mb-0 md:mr-6 text-gray-700 flex items-center">
        <Image
          src={imageURL}
          alt={title}
          className="rounded-lg object-cover"
          width={400}
          height={350}
        />
      </div>

      <div className="md:w-2/3 w-full flex flex-col justify-between text-left">
        <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: content }} />
      </div>

      <div
        className="absolute left-1/2 transform -translate-x-1/2 flex justify-center"
        style={{ bottom: '-30px' }}
      >
        <div className="px-4 py-2 text-white rounded-lg whitespace-nowrap">
          {children}
        </div>
      </div>


    </div>
  );
};

export default AboutSection;
