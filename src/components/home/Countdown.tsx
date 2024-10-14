"use client";
import React, { useEffect, useState } from 'react';

const Countdown: React.FC = () => {
  // Target Date
  const targetDate = new Date('2025-01-06T00:00:00+08:00').getTime();

  // Styling for Font
  const innerShadowStyle = {
    textShadow: '0 -4px -4px rgba(0, 0, 0, 0.25)', // Inner shadow effect
  };

  // State to hold the time left
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Update the countdown every second
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      // Calculate time left
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 }); // Optional: Set to zero when finished
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex justify-center space-x-4 text-white mb-8">
      {['days', 'hours', 'minutes', 'seconds'].map((label, index) => (
        <div key={index} className="flex justify-center items-center text-center">
          <div className="text-4xl font-bold" style={innerShadowStyle} >{timeLeft[label as keyof typeof timeLeft]}</div>
          <p className="text-lg mb-3 font-thin">{label}</p>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
