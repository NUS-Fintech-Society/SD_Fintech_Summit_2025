// ContactPage.tsx
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0B2858] text-white">
      <div className="text-center">
        <p className="text-lg mb-2">For any enquiries, please contact us at</p>
        <a 
          href="mailto:nusfintech.ops@gmail.com" 
          className="text-lg text-blue-300 hover:text-blue-500"
        >
          nusfintech.ops@gmail.com
        </a>
      </div>
    </div>
  );
};

export default ContactPage;