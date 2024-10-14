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
        />
      ))}
    </div>
  );
};

export default WorkshopList;
