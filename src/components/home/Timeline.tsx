"use client";

import React, { useState } from 'react';

type TimelineItemType = {
  title: string;
  description: string;
  date: string;
  link: string;
};

const timelineItems: TimelineItemType[] = [
  {
    title: 'Registration',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '01 JAN',
    link: '/',
  },
  {
    title: 'Workshop',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '02 JAN',
    link: '/',
  },
  {
    title: 'Workshop',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '03 JAN',
    link: '/',
  },
  {
    title: 'Workshop',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '03 JAN',
    link: '/',
  },
  {
    title: 'Workshop',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '03 JAN',
    link: '/',
  },
  {
    title: 'Hackathon',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '04 JAN',
    link: '/',
  },
];

const Timeline = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleTimeline = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="my-8">
      <button
        onClick={toggleTimeline}
        className="bg-[#D9D9D9] text-[#102B71] py-2 px-16 rounded-full font-semibold hover:bg-[#F5A202] transition duration-300 mx-auto block text-4xl mb-12 shadow-[0_4px_14px_rgba(0,0,0,0.6)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.8)]"
      >
        TIMELINE
      </button>

      {isVisible && (
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#D9D9D9] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_4px_14px_rgba(0,0,0,0.6)]"></div>

              <div className={`relative w-[calc(100%-6rem)] md:w-[calc(50%-4rem)] bg-[#D9D9D9] p-6 rounded-lg border border-[#D9D9D9] shadow-[0_4px_10px_rgba(0,0,0,0.6)] 
                ${index % 2 === 0 ? 'ml-8' : 'md:mr-8'} 
                before:absolute before:content-[''] before:w-0 before:h-0 before:border-[32px] before:border-transparent 
                ${index % 2 === 0 
                  ? 'before:right-full before:border-r-[#D9D9D9]' 
                  : 'before:right-full before:border-r-[#D9D9D9] md:before:left-full md:before:border-l-[#D9D9D9] md:before:border-r-0 md:before:right-0'}  
                before:top-1/2 before:-translate-y-1/2`}>

                <div className="text-3xl font-bold text-[#102B71] mb-2">{item.date}</div>
                <div className="font-bold text-slate-900 mb-2">{item.title}</div>
                <div className="text-slate-500 mb-4">{item.description}</div>
                <a href={item.link} className="bg-[#F5A202] text-[#102B71] py-2 px-4 rounded-full font-medium">
                  More
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;
