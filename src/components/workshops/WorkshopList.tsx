import React from 'react';
import WorkshopItem from './WorkshopItem';

interface WorkshopListProps {
  workshops: { date: string; time: string; imageAlt?: string }[];
}

const WorkshopList: React.FC<WorkshopListProps> = ({ workshops }) => {
  return (
    <div className="mb-8">
      {workshops.map((workshop, index) => (
        <WorkshopItem key={index} date={workshop.date} time={workshop.time} imageAlt={workshop.imageAlt} />
      ))}
    </div>
  );
};

export default WorkshopList;