// SectionTitle.tsx
import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div>
        Placeholder design for {title}
    </div>
  );
};

export default SectionTitle;