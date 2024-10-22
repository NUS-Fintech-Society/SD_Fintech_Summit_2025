import React from 'react';
import AboutSection from '@/components/about/AboutSection';
import AboutButton from '@/components/about/AboutButton';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-custom-background min-h-screen">
    <div className="container mx-auto p-8">

      <h1 className="text-3xl font-bold text-center text-header-color mb-8">FINTECH SUMMIT </h1>
      <AboutSection title="FINTECH SUMMIT" imageURL = "/Summit Logo.svg"  
      content="To Educate students with <strong>Fintech knowledge</strong> through events
      and industry projects, and connect and establish relationship
      with industry leaders." />

    <div className="mb-8" />
    
    <h1 className="text-3xl font-bold text-center text-header-color mb-8">FINTECH SOCIETY</h1>
      <AboutSection title="FINTECH SOCIETY" imageURL = "/Fintech Logo.svg" 
      content="<strong>NUS FinTech Society</strong> was founded in 2018 in collaboration
      with NUS Fintech Lab under NUS School of Computing. </br></br>We identify ourselvers
      as Fintech enthusiasts looking for opportunities to learn and grow our knowledge,
      skills and network in the Fintech Space.  </br></br>In 2024, <strong>NUS Fintech Society</strong> has amassed
      over 200 members, making it one of NUS' largest student-run organisation.">
        <AboutButton />
        </AboutSection>
      </div>
    </div>
  );
};

export default AboutPage;