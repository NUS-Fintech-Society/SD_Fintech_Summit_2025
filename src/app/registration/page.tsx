import React from 'react';
import RegistrationForm from '@/components/registration/RegistrationForm';

const RegistrationPage: React.FC = () => {
  return (
    <div className="bg-blue-900 min-h-screen">
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold text-center text-white mb-4">WORKSHOP REGISTRATION</h1>
        <p className="text-center text-white mb-8">Date: 10 Jan 2025</p>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default RegistrationPage;