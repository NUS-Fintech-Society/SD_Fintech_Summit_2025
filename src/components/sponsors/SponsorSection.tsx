import React from 'react';
import SponsorList from './SponsorList';

const SponsorSection = ({ title, sponsors }) => {
    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">{title}</h2>
            <SponsorList sponsors={sponsors} />
        </div>
    );
};

export default SponsorSection;