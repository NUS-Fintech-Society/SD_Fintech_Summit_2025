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
            <h1 className="text-7xl md:text-7xl lg:text-9xl  text-black font-bold mb-4 md:mb-6 lg:mb-8 text-left">
              <div className="[text-shadow:_2px_3px_4px_#AAAAAA]">FAQs</div>
            </h1>
            <div className="lg:hidden flex justify-center md:mb-8">
              <Image
                src="/HomeLogoFull.png"
                alt="Fintech Summit Logo"
                width={500}
                height={500}
              />
            </div>
            <h2
              className="text-5xl md:text-5xl lg:text-7xl mb-4 md:mb-6 lg:mb-8 font-bold"
              style={{ color: "#6c93d6" }}
            >
              Opening Ceremony
            </h2>
          </div>
          <div className="hidden lg:block mb-8">
            <Image
              src="/HomeLogoFull.png"
              alt="Fintech Summit Logo"
              width={500}
              height={500}
            />
          </div>
        </div>
        <FaqAccordion items={mockData.openingCeremony} />
        <h2
          className="text-5xl md:text-5xl lg:text-7xl my-4 md:mb-6 lg:mb-8 mt-8 font-bold"
          style={{ color: "#6c93d6" }}
        >
          Hackathon
        </h2>
        <FaqAccordion items={mockData.hackathon} />
        <h2
          className="text-5xl md:text-5xl lg:text-7xl mb-4 md:mb-6 lg:mb-8 mt-8 font-bold"
          style={{ color: "#6c93d6" }}
        >
          Workshops
        </h2>
        <FaqAccordion items={mockData.workshops} />
        <h2
          className="text-5xl md:text-5xl lg:text-7xl mb-4 md:mb-6 lg:mb-8 mt-8 font-bold"
          style={{ color: "#6c93d6" }}
        >
          Demo day
        </h2>
        <FaqAccordion items={mockData.demo} />
      </div>
    </>
  );
}
