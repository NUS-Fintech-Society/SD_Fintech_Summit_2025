// panelsMockData with topic and description separated
export const panelsMockData: Record<string, IPanels[]> = {
  day1: [
    {
      date: "2025-01-13",
      time: "10:00 AM",
      topic: "Navigating the volatile markets",  // The new topic field
      description: "How can venture firms and market participants mitigate risks from scams, vapourware, and everything in between.",  // The new description field
      speakers: ["Ripple", "Taisu", "Coinbase"],
      speakerImages: [
        "./Ripple.png",  // Ripple speaker image
        "./Taisu.png",   // Taisu speaker image
        "./Coinbase.png", // Coinbase speaker image
      ],
      imageAlt: "Navigating Volatile Markets Panel",
    },
  ],
};