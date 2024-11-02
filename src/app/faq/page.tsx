"use client";

import FaqAccordion, { mockData } from "../../components/faq/FAQAccordian";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="bg-white p-6 md:p-12 lg:p-24 min-h-screen">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <h1 className="text-6xl lg:text-7xl text-black font-bold text-left">
              <div className="[text-shadow:_2px_3px_4px_#AAAAAA]">FAQs</div>
            </h1>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end mb-[-4rem] lg:my-[-10rem]">
          <Image
            src="/HomeLogoFull.png"
            alt="Fintech Summit Logo"
            width={700}
            height={700}
          />
        </div>
        <h2
              className="text-4xl lg:text-5xl my-4 md:mb-6 lg:mb-8 mt-4 font-bold"
              style={{ color: "#6c93d6" }}
            >
              Opening Ceremony
            </h2>
        <FaqAccordion items={mockData.openingCeremony} />
        <h2
          className="text-4xl lg:text-5xl my-4 md:mb-6 lg:mb-8 mt-8 font-bold"
          style={{ color: "#6c93d6" }}
        >
          Hackathon
        </h2>
        <FaqAccordion items={mockData.hackathon} />
        <h2
          className="text-4xl lg:text-5xl mb-4 md:mb-6 lg:mb-8 mt-8 font-bold"
          style={{ color: "#6c93d6" }}
        >
          Workshops
        </h2>
        <FaqAccordion items={mockData.workshops} />
        <h2
          className="text-4xl lg:text-5xl mb-4 md:mb-6 lg:mb-8 mt-8 font-bold"
          style={{ color: "#6c93d6" }}
        >
          Demo day
        </h2>
        <FaqAccordion items={mockData.demo} />
      </div>
    </>
  );
}
