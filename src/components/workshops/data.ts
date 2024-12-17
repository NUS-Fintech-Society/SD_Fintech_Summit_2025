import { IWorkShop } from "./types";

export const workshopsMockData: Record<string, IWorkShop[]> = {
  day1: [
    {
      date: "13 Jan 2025",
      time: "10:00 AM",
      imageAlt: "Workshop 1",
      imageSrc: "/workshops/Metacamp.png",
      title: "Metacamp",
      company: "Metacamp",
      description: "Details to be announced",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdNwHG5RAWMmyAO5AXEbPGSn0wUCqfAVRnWOp6rCeg0o7jErA/viewform", // CitiBank link
    },
    {
      date: "13 Jan 2025",
      time: "2:00 PM",
      imageAlt: "Workshop 2",
      imageSrc: "/workshops/Nvdia.png",
      secondImageSrc: "/workshops/EmbeddedLLM.svg",
      title: "Creating Applications Using LLM, Vision & Text Models",
      company: "Nvidia X EmbeddedLLM",
      description: "Learn to build AI-powered apps in mere hours! ",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSc1AJxMFKfvM1BGgF7WF9fS588SSsnfNnRMQRcSxNyc3oSIOA/viewform", // Embedded LLM X Nvidia link
    },
  ],
  
  day2: [
    {
      date: "14 Jan 2025",
      time: "1:00 PM",
      imageAlt: "CitiBank",
      imageSrc: "/workshops/CitiBank.png",
      title: "CitiBank",
      company: "CitiBank",
      description: "Details to be announced",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeb9hh7ZzZ5ZaECyadM-Vio_BW5vv3aE04YMd1TolVmbl0xAA/viewform", // CitiBank link
    },
  ],
  
  day3: [
    {
      date: "15 Jan 2025",
      time: "2:00 PM",
      imageAlt: "StashAway",
      imageSrc: "/workshops/StashAway.png",
      title: "From idea to impact: Building a fintech business",
      company: "StashAway",
      description: "Details to be announced",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdqqeBMqaq3l2nQA8sy2XgK5hkYdk3FTzBzwLCt8LydH-lsqA/viewform", // StashAway link
    },
    {
      date: "15 Jan 2025",
      time: "3:45 PM",
      imageAlt: "Talos",
      imageSrc: "/workshops/Talos.png",
      title: "Careers: Transitioning from Traditional Finance into the World of Digital Assets in Blockchain",
      company: "Talos",
      description: "Details to be announced",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdgbLcbIuHNNREqgPbmU__pX4k_-srfSZhBExnjG7ryb0dQXQ/viewform", // Talos link
    }
  ]
};