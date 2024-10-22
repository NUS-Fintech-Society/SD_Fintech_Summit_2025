import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/home/Header";
import Countdown from "@/components/home/Countdown";
import ProblemStatement from "@/components/home/ProblemStatement";
import Timeline from "@/components/home/Timeline";

const HomePage = () => {
  return (
    <div className="bg-custom-background min-h-screen">
      <div className="container mx-auto p-8">
        <Header />
        {/* <Countdown /> */}
        <ProblemStatement />
        <Timeline />
      </div>
    </div>
  );
};

export default HomePage;
