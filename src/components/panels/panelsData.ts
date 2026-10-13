// panelsMockData with topic and description separated
import { IPanels } from './types'; // Make sure the path to types.ts is correct

export const panelsMockData: Record<string, IPanels[]> = {
  day1: [
    {
      date: "9 Jan 2026",
      time: "11:00AM - 11:30AM",
      venue: "NUS School of Computing (COM3)",
      topic: "Stablecoins as Global Commerce's New Engine",  // The new topic field
      description: "",  // The new description field
      moderators: ["Prof Hahn Jungpil - Director, NUS Fintech Lab"],
      speakers: ["Tommy Ching - Head of Client Solution, APAC (Ripple)", "CJ Fong - General Manager of APAC (GSR)"],
      speakerImages: [
        "/panel/Ripple.png",  // Ripple speaker image
        "/panel/GSR.png",   // GSR speaker image
      ],
      imageAlt: "Stablecoins as Global Commerce's New Engine",
    },
  ],
};