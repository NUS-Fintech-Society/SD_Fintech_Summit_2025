import React from 'react';
import AboutSection from '@/components/about/AboutSection';
import AboutButton from '@/components/about/AboutButton';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-blue-900 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center text-white mb-8">ABOUT US</h1>

        <AboutSection title="FINTECH SUMMIT" content="Information about the summit goes here." />

        <AboutSection title="FINTECH SOCIETY">
          <div className="flex justify-center items-center">
            {/* Replace with an actual image if available */}
          </div>
          <div className="flex justify-center">
            <AboutButton />
          </div>
        </AboutSection>
      </div>
    </div>
  );
};

export default AboutPage;