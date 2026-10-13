"use client";

import React, { useState, useEffect } from "react";

const Countdown: React.FC = () => {
  const calculateTimeLeft = () => {
    const summitDate = new Date("2026-01-05T00:00:00");
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
    <div className="flex justify-center grid-cols-4 text-white mb-4">
      {/* Days */}
      <div className="flex-initial mx-1 grid grid-cols-1 sm:grid-cols-2 sm:gap-2 items-center sm:items-start">
        <div
          className="text-[60px] sm:text-[80px] font-semibold leading-[60px] sm:leading-[80px] flex justify-center sm:items-start font-mono"
          style={{
            minWidth: "70px",
            textShadow:
              "0 0 4px rgba(0, 0, 0, 0.75), 0 4px 4px rgba(0, 0, 0, 0.75)",
          }}
        >
          {timeLeft.days}
        </div>
        <span className="text-[14px] sm:text-[16px] text-center mt-2 mx-0 sm:mt-[6px] italic">
          days
        </span>
      </div>

      {/* Hours */}
      <div className="mx-1 grid grid-cols-1 sm:grid-cols-2 sm:gap-2 items-center sm:items-start">
        <div
          className="text-[60px] sm:text-[80px] font-semibold leading-[60px] sm:leading-[80px] flex justify-center sm:items-start font-mono"
          style={{
            minWidth: "70px",
            textShadow:
              "0 0 4px rgba(0, 0, 0, 0.75), 0 4px 4px rgba(0, 0, 0, 0.75)",
          }}
        >
          {timeLeft.hours}
        </div>
        <span className="text-[14px] sm:text-[16px] text-center mt-2 mx-0 sm:mt-[6px] italic">
          hours
        </span>
      </div>

      {/* Minutes */}
      <div className="mx-1 grid grid-cols-1 sm:grid-cols-2 sm:gap-2 items-center sm:items-start">
        <div
          className="text-[60px] sm:text-[80px] font-semibold leading-[60px] sm:leading-[80px] flex justify-center sm:items-start font-mono"
          style={{
            minWidth: "70px",
            textShadow:
              "0 0 4px rgba(0, 0, 0, 0.75), 0 4px 4px rgba(0, 0, 0, 0.75)",
          }}
        >
          {timeLeft.minutes}
        </div>
        <span className="text-[14px] sm:text-[16px] text-center mt-2 mx-0 sm:mt-[6px] italic">
          mins
        </span>
      </div>

      {/* Seconds */}
      <div className="mx-1 grid grid-cols-1 sm:grid-cols-2 sm:gap-2 items-center sm:items-start">
        <div
          className="text-[60px] sm:text-[80px] font-semibold leading-[60px] sm:leading-[80px] flex justify-center sm:items-start font-mono" // Monospace font added
          style={{
            minWidth: "70px",
            textShadow:
              "0 0 4px rgba(0, 0, 0, 0.75), 0 4px 4px rgba(0, 0, 0, 0.75)",
          }}
        >
          {timeLeft.seconds}
        </div>
        <span className="text-[14px] sm:text-[16px] text-center mt-2 mx-0 sm:mt-[6px] italic">
          secs
        </span>
      </div>
    </div>
  );
};

export default Countdown;
