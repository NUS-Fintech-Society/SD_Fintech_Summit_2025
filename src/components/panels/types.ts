// Update the IPanels interface to separate topic and description
export interface IPanels {
  date: string; // Date of the panel
  time: string; // Time of the panel
  venue?: string; // Venue of the panel
  topic: string; // Topic of the panel
  description: string; // Description of the panel
  moderators?: string[];
  speakers?: string[]; // List of speaker names
  speakerImages?: string[]; // List of speaker images (one image for each speaker)
  imageAlt?: string; // Optional alt text for the panel image
}