import { IWorkShop } from "./types";

export const workshopsMockData: Record<string, IWorkShop[]> = {
  day1: [
    {
      date: "2025-01-13",
      time: "11:00 AM",
      imageAlt: "Workshop 1",
      imageSrc: "./Bank Of America.png",
      description: "Bank of America",
    },
    {
      date: "2025-01-13",
      time: "2:00 PM",
      imageAlt: "Workshop 2",
      imageSrc: "./Nvdia.png",
      secondImageSrc: "./EmbeddedLLM.png",
      description: "Nvidia X Embedded LLM",
    },
  ],
  
  day2: [
    {
      date: "2025-01-14",
      time: "1:00 PM",
      imageAlt: "CitiBank",
      imageSrc: "./CitiBank.png",
      description: "CitiBank",
    },
  ],
  
  day3: [
    {
      date: "2025-01-15",
      time: "2:00 PM",
      imageAlt: "StashAway",
      imageSrc: "./StashAway.png",
      description: "StashAway",
    }
  ]
};