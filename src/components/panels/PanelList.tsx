import React from "react";
import PanelItem from "./PanelItem";
import { IPanels } from "./types";

interface PanelListProps {
  panels: IPanels[];
}

const PanelList: React.FC<PanelListProps> = ({ panels }) => {
  return (
    <div className="mb-8">
      {panels.map((panel, index) => (
        <PanelItem
          key={index}
          date={panel.date}
          time={panel.time}
          topic={panel.topic} // Pass the topic here
          description={panel.description} // Pass the description here
          speakerImages={panel.speakerImages}
          imageAlt={panel.imageAlt}
        />
      ))}
    </div>
  );
};

export default PanelList;