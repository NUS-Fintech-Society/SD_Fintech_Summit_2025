"use client";
import { useState } from "react";
import { FaPlus, FaMinus, FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { FAQItemProps } from "./FAQItem";

export const FaqAccordion = ({ items }: { items: FAQItemProps[] }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          style={{ backgroundColor: "#dee6f2" }}
          className="rounded-lg p-8 shadow-sm"
        >
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 font-bold text-lg">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-black text-lg font-semibold">
                {item.question}
              </h3>
            </div>
            <span className="text-gray-500">
              {activeIndex === index ? (
                <FaMinusCircle size={24} />
              ) : (
                <FaPlusCircle size={24} />
              )}
            </span>
          </div>
          {activeIndex === index && (
            <div className="mt-2 text-gray-600">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export const mockData: Record<
  "openingCeremony" | "hackathon" | "workshops" | "demo" | "afterEventParty",
  FAQItemProps[]
> = {
  openingCeremony: [
    {
      question: "How do we sign up?",
      answer:
        "You can indicate your attendance in the registration form. All teams are required to attend, except for international teams (i.e. Teams not based in Singapore).",
    },
    {
      question: "What can I expect for the opening ceremony?",
      answer:
        "A panel discussion as well as breakout rooms for each problem challenge where participants can check 1 to 1 with the judges/mentors! There’ll also be free goodies for everyone as well!",
    },
  ],
  hackathon: [
    {
      question: "Who is eligible to take part in the hackathon?",
      answer:
        "NUS Fintech Summit 2026 is open to all tertiary students across the globe.",
    },
    {
      question: "Are there any requirements for the hackathon team formation?",
      answer:
        "The team should consist of 3-5 members from any tertiary institute. Please appoint a Team Lead to be the main point of contact throughout the hackathon.",
    },
    {
      question: "How do we sign up for the hackathon?",
      answer:
        "Registration for the NUS Fintech Summit 2026 hackathon opens from 15–31 December 2025. You may sign up individually or as a team using the registration link provided on our official channels.",
    },
    {
      question: "Will the hackathon be conducted remotely?",
      answer:
        "The hackathon will be conducted remotely with the exception of opening ceremony and demo day. International finalists are encouraged, if possible, to be present physically.",
    },
    {
      question: "Where do we submit our files for the hackathon?",
      answer: "You may submit your files via our devpost. (https://nus-fintech-summit-2026.devpost.com/)", //TODO update devpost
    },
    {
      question: "What is the judging criteria and submission requirements?",
      answer:
        "You may refer to our devpost. (https://nus-fintech-summit-2026.devpost.com/)", //TODO update devpost
    },
    {
      question: "What does it cost?",
      answer: "No registration fee is required.",
    },
    {
      question: "Who do we reach out to if we have more enquiries?",
      answer:
        "If you have any further questions, you can contact us via nusfintech.ops@gmail.com.",
    },
  ],
  workshops: [
    {
      question: "How do we sign-up?",
      answer: "You may signup for the workshops through the Workshops tab on this website.",
    },
    {
      question: "Can I attend the workshop virtually?",
      answer:
        "Workshops on 5 and 6 January 2026 will be held fully in person at NUS COM3 MPH. Virtual attendance is not available.",
    },
    {
      question: "Are the workshops compulsory for hackathon participants?",
      answer:
        "Workshops are not compulsory for hackathon participants. These are meant to provide participants with insights on the developments within the Fintech space.",
    },
    {
      question:
        "If I am not participating in the hackathon, can I still sign up for any of the workshops?",
      answer:
        "Yes, the workshops are open to all tertiary students and public.",
    },
    {
      question: "How many workshops can I sign up for?",
      answer:
        "There is no limit to the number of workshops you can sign up for.",
    },
  ],
  demo: [
    {
      question: "How do we sign up?",
      answer: "Sign-up links will be made available on our Linktree!",
    },
    {
      question:
        "Must all hackathon finalists be physically present at the venue?",
      answer:
        "Yes, all finalist teams must be physically present on 9 January 2026 for Final Demo Day presentations.",
    },
  ],
  afterEventParty: [
    {
      question: "How do we sign up?",
      answer:
        "Sign-up links will be made available on our Linktree! This is a by-invite-only event.",
    },
    {
      question: "Who is Eligible?",
      answer:
        "Only finalists, sponsors, society members and workshop speakers will be eligible to join.",
    },
    {
      question: "What can I expect?",
      answer:
        "Networking sessions, free food and a nice night-out to round off the event!",
    },
    {
      question: "Any fees?",
      answer: "Entirely free! Just remember to RSVP once the link goes live!",
    },
  ],
};

export default FaqAccordion;

