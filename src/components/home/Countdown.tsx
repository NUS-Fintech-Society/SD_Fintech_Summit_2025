import React from 'react';

const Countdown: React.FC = () => {
  // Hardcoded countdown values
  const timeLeft = {
    days: 10, // Hardcoded days
    hours: 5, // Hardcoded hours
    minutes: 30, // Hardcoded minutes
    seconds: 45, // Hardcoded seconds
  };

  return (
    <div className="flex justify-center space-x-4 text-white mb-8">
      {['days', 'hours', 'minutes', 'seconds'].map((label, index) => (
        <div key={index} className="text-center">
          <div className="text-3xl font-bold">{timeLeft[label as keyof typeof timeLeft]}</div>
          <p className="text-sm">{label.toUpperCase()}</p>
        </div>
      ))}
    </div>
  );
};

export default Countdown;