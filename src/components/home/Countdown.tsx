"use client";

import React, { useState, useEffect } from "react";

const Countdown: React.FC = () => {
  const calculateTimeLeft = () => {
    const summitDate = new Date("2025-01-01T00:00:00");
    const currentTime = new Date();
    const difference = summitDate.getTime() - currentTime.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft());
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex justify-center text-white mb-4">
      <div className="mx-2 text-center">
        <div
          className="text-[80px] font-semibold leading-[80px]"
          style={{
            textShadow:
              "0 0 4px rgba(0, 0, 0, 0.75), 0 4px 4px rgba(0, 0, 0, 0.75)",
          }}
        >
          {timeLeft.days}
        </div>
        <span className="block text-sm">days</span>
      </div>
      <div className="mx-2 text-center">
        <div
          className="text-[80px] font-semibold leading-[80px]"
          style={{
            textShadow:
              "0 0 4px rgba(0, 0, 0, 0.75), 0 4px 4px rgba(0, 0, 0, 0.75)",
          }}
        >
          {timeLeft.hours}
        </div>
        <span className="block text-sm">hrs</span>
      </div>
      <div className="mx-2 text-center">
        <div
          className="text-[80px] font-semibold leading-[80px]"
          style={{
            textShadow:
              "0 0 4px rgba(0, 0, 0, 0.75), 0 4px 4px rgba(0, 0, 0, 0.75)",
          }}
        >
          {timeLeft.minutes}
        </div>
        <span className="block text-sm">mins</span>
      </div>
      <div className="mx-2 text-center">
        <div
          className="text-[80px] font-semibold leading-[80px]"
          style={{
            textShadow:
              "0 0 4px rgba(0, 0, 0, 0.75), 0 4px 4px rgba(0, 0, 0, 0.75)",
          }}
        >
          {timeLeft.seconds}
        </div>
        <span className="block text-sm">secs</span>
      </div>
    </div>
  );
};

export default Countdown;
