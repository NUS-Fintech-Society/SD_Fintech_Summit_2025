import React from "react";
import WorkshopItem from "./WorkshopItem";
import { IWorkShop } from "./types";

interface WorkshopListProps {
  workshops: IWorkShop[];
}

const WorkshopList: React.FC<WorkshopListProps> = ({ workshops }) => {
  return (
    <div className="mb-8">
      {workshops.map((workshop, index) => (
        <WorkshopItem
          key={index}
          date={workshop.date}
          time={workshop.time}
          imageAlt={workshop.imageAlt}
          imageSrc={workshop.imageSrc}
          description={workshop.description}
          secondImageSrc={workshop.secondImageSrc} // Pass secondImageSrc if available
          registrationLink={workshop.registrationLink}
          title={workshop.title}
          company={workshop.company}
          speakers={workshop.speakers}
          disabled={workshop.disabled}
        />
      ))}
    </div>
  );
};

export default WorkshopList;