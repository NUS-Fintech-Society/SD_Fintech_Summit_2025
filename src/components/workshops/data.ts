import { IWorkShop } from "./types";

export const workshopsMockData: Record<string, IWorkShop[]> = {
  day1: [
    {
      date: "2025-01-01",
      time: "10:00 AM",
      imageAlt: "Workshop 1",
      imageSrc: "https://via.placeholder.com/150?text=Workshop+1",
      description: "Introduction to Web Development",
    },
    {
      date: "2025-01-01",
      time: "2:00 PM",
      imageAlt: "Workshop 2",
      imageSrc: "https://via.placeholder.com/150?text=Workshop+2",
      description: "Advanced JavaScript Techniques",
    },
  ],
  day2: [
    {
      date: "2025-01-02",
      time: "10:00 AM",
      imageAlt: "Workshop A",
      imageSrc: "https://via.placeholder.com/150?text=Workshop+A",
      description: "Building RESTful APIs with Node.js",
    },
    {
      date: "2025-01-02",
      time: "2:00 PM",
      imageAlt: "Workshop B",
      imageSrc: "https://via.placeholder.com/150?text=Workshop+B",
      description: "Introduction to Docker and Containers",
    },
  ],
  day3: [
    {
      date: "2025-01-03",
      time: "10:00 AM",
      imageAlt: "Workshop C",
      imageSrc: "https://via.placeholder.com/150?text=Workshop+C",
      description: "Getting Started with Machine Learning",
    },
    {
      date: "2025-01-03",
      time: "2:00 PM",
      imageAlt: "Workshop D",
      imageSrc: "https://via.placeholder.com/150?text=Workshop+D",
      description: "Deploying Applications to the Cloud",
    },
  ],
  day4: [
    {
      date: "2025-01-04",
      time: "10:00 AM",
      imageAlt: "Workshop E",
      imageSrc: "https://via.placeholder.com/150?text=Workshop+E",
      description: "Mastering CSS with Tailwind",
    },
    {
      date: "2025-01-04",
      time: "2:00 PM",
      imageAlt: "Workshop F",
      imageSrc: "https://via.placeholder.com/150?text=Workshop+F",
      description: "Serverless Architecture with AWS Lambda",
    },
  ],
};
