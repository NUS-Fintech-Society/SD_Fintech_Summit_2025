import React from "react";
import Link from "next/link";

interface Sponsor {
  name: string;
  imgSrc: string;
  link: string;
}

interface SponsorListProps {
  sponsors: Sponsor[];
}

const SponsorList: React.FC<SponsorListProps> = ({ sponsors }) => {
  return (
    <div className="space-y-4">
      {sponsors.map((sponsor, index) => (
        <Link
          key={index}
          href={sponsor.link}
          className="flex justify-center items-center group block bg-[#F9F9F9] p-6 rounded-md shadow-sm overflow-hidden border-2 border-[#E5E5E5] hover:border-[#F5A202] transition-all duration-[600ms]"
        >
          <img
            src={sponsor.imgSrc}
            alt={sponsor.name}
            className="relative z-10 w-full h-24 object-contain rounded-md"
          />
        </Link>
      ))}
    </div>
  );
};

export default SponsorList;
