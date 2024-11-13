// HomePage.tsx
import React from "react";
import Header from "@/components/home/Header";
import ProblemStatement from "@/components/home/ProblemStatement";
import Bounty from "@/components/home/Bounty";
import Prizes from "@/components/home/Prizes";
import Timeline from "@/components/home/Timeline";
import DownloadButton from "@/components/home/DownloadButton";

const HomePage: React.FC = () => {
  return (
    <div className="bg-custom-background min-h-screen">
      <div className="container mx-auto p-8">
        <Header />
        <ProblemStatement />
        <Bounty />
        <Prizes />
        <DownloadButton />
        <Timeline />
      </div>
    </div>
  );
};

export default HomePage;
