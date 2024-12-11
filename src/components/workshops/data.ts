import { IWorkShop } from "./types";

export const workshopsMockData: Record<string, IWorkShop[]> = {
  day1: [
    {
      date: "2025-01-13",
      time: "10:30 AM",
      imageAlt: "Workshop 1",
      imageSrc: "./Metacamp.png",
      description: "Metacamp",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdNwHG5RAWMmyAO5AXEbPGSn0wUCqfAVRnWOp6rCeg0o7jErA/viewform", // CitiBank link
    },
    {
      date: "2025-01-13",
      time: "10:30 AM",
      imageAlt: "Workshop 2",
      imageSrc: "./Nvdia.png",
      secondImageSrc: "./EmbeddedLLM.png",
      description: "Nvidia X Embedded LLM",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSc1AJxMFKfvM1BGgF7WF9fS588SSsnfNnRMQRcSxNyc3oSIOA/viewform", // Embedded LLM X Nvidia link
    },
  ],
  
  day2: [
    {
      date: "2025-01-14",
      time: "1:00 PM",
      imageAlt: "CitiBank",
      imageSrc: "./CitiBank.png",
      description: "CitiBank",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeb9hh7ZzZ5ZaECyadM-Vio_BW5vv3aE04YMd1TolVmbl0xAA/viewform", // CitiBank link
    },
  ],
  
  day3: [
    {
      date: "2025-01-15",
      time: "2:00 PM",
      imageAlt: "StashAway",
      imageSrc: "./StashAway.png",
      description: "StashAway",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdqqeBMqaq3l2nQA8sy2XgK5hkYdk3FTzBzwLCt8LydH-lsqA/viewform", // StashAway link
    },
    {
      date: "2025-01-15",
      time: "2:00 PM",
      imageAlt: "Talos",
      imageSrc: "./Talos.png",
      description: "Talos",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdgbLcbIuHNNREqgPbmU__pX4k_-srfSZhBExnjG7ryb0dQXQ/viewform", // Talos link
    }
  ]
};