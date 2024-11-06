"use client";

import React, { useState } from "react";

type TimelineItemType = {
  title: string;
  description: string;
  date: string;
  link?: string;
};

const timelineItems: TimelineItemType[] = [
  {
    title: "Workshop and Hackathon Registration Opens",
    description:
      "Hackathon Problem Statement Announcement",
    date: "12 DEC",
    link: "/",
  },
  {
    title: "Hackathon Ideation",
    description:
      "• Participants start coding and ideation \n • Submission Deadline: 31 Dec 2024, 2359",
    date: "12 DEC to 31 DEC",
    link: "/",
  },
  {
    title: "Workshop and Hackathon Registration Closes",
    description:
      "",
    date: "31 DEC",
  },
  {
    title: "Opening Ceremony (Physical)",
    description:
      "• Welcoming speech \n • Introduce the summit \n • Keynote speeches",
    date: "06 JAN",
  },
  {
    title: "Ideation Judging & Results",
    description:
      "Release of results by 2359",
    date: "01 JAN to 07 JAN",
  },
  {
    title: "Online Workshops",
    description:
      "",
    date: "02 JAN to 16 JAN",
    link: "/",
  },
  {
    title: "Prototyping",
    description:
      "• Semi-finalists work on developing prototypes \n • Submission Deadline: 12 JAN 2025, 2359",
    date: "07 JAN to 12 JAN",
    link: "/",
  },
  {
    title: "Prototype Judging",
    description:
      "• Judging of submitted prototypes \n • Prototyping Result Release: 14 JAN 2025, 1200",
    date: "13 JAN to 14 JAN",
  },
  {
    title: "Hacker House: Preparation for Finalists",
    description:
      "• Finalists prepare for their final sprint",
    date: "14 JAN to 16 JAN",
  },
  {
    title: "Finalist Demo Day (Physical)",
    description:
      "• 0900 - 1200: Sponsoring companies set up booths. \n • 1200 - 1500: Finalist presentations to judges.",
    date: "17 JAN",
  },
];

const Timeline = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleTimeline = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="my-8">
      <div className="relative flex items-center justify-center">
        <button
          onClick={toggleTimeline}
          className="group bg-[#D9D9D9] text-[#102B71] py-2 px-16 rounded-full font-semibold hover:bg-[#F5A202] transition duration-300 mx-auto block text-4xl mb-12 shadow-[0_4px_14px_rgba(0,0,0,0.6)] hover:shadow-[0_6px_18px_rgba(0,0,0,0.8)]"
        >
          <div className="absolute pl-44 pt-7 z-28">
            <svg
              className="w-10 h-10 group-hover:w-8 group-hover:h-8 transition-transform duration-300"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.71152 3.67446C4.17096 3.46151 3.90067 3.35504 3.72846 3.41232C3.57892 3.46207 3.46158 3.5794 3.41184 3.72894C3.35455 3.90116 3.46102 4.17144 3.67397 4.71201L8.97461 18.1675C9.14612 18.6028 9.23188 18.8205 9.37164 18.9079C9.49348 18.9841 9.64219 19.0041 9.77986 18.963C9.93778 18.9158 10.0782 18.7286 10.3589 18.3542L12.4996 15.5001L15.9489 20.2429C16.1385 20.5036 16.2334 20.634 16.3542 20.6885C16.4602 20.7363 16.5796 20.7457 16.6918 20.715C16.8196 20.68 16.9336 20.566 17.1616 20.338L20.3376 17.1621C20.5655 16.9341 20.6795 16.8201 20.7145 16.6923C20.7452 16.5801 20.7359 16.4607 20.688 16.3547C20.6335 16.2338 20.5032 16.139 20.2424 15.9494L15.4996 12.5001L18.3538 10.3594C18.7281 10.0787 18.9153 9.93827 18.9625 9.78035C19.0036 9.64268 18.9836 9.49397 18.9074 9.37213C18.82 9.23237 18.6024 9.14661 18.167 8.97509L4.71152 3.67446Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          TIMELINE
        </button>
      </div>

      {isVisible && (
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F5A202] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_4px_14px_rgba(0,0,0,0.6)]"></div>

              <div
                className={`relative w-[calc(100%-6rem)] md:w-[calc(50%-4rem)] bg-gradient-to-r bg-[#D9D9D9] p-8 rounded-lg border border-[#D9D9D9] shadow-[0_4px_10px_rgba(0,0,0,0.6)] 
                ${index % 2 === 0 ? "ml-8" : "md:mr-8"} 
                before:absolute before:content-[''] before:w-0 before:h-0 before:border-[32px] before:border-transparent 
                ${
                  index % 2 === 0
                    ? "before:right-full before:border-r-[#D9D9D9]"
                    : "before:right-full before:border-r-[#D9D9D9] md:before:left-full md:before:border-l-[#D9D9D9] md:before:border-r-0 md:before:right-0"
                }  
                before:top-1/2 before:-translate-y-1/2`}
              >
                <div className="text-3xl font-bold text-[#102B71] mb-2">
                  {item.date}
                </div>
                <div className="font-bold text-slate-900 mb-2">
                  {item.title}
                </div>
                <div className="text-slate-500 mb-4 whitespace-pre-line">{item.description}</div>
                {item.link && (
                   <a
                   href={item.link}
                   className="bg-[#F5A202] text-[#102B71] py-2 px-4 rounded-full font-medium"
                 >
                   More
                 </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;
