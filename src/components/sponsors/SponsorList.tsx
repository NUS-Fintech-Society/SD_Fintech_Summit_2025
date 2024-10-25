import React from 'react';

interface SponsorListProps {
    sponsors: string[];  // Explicitly typing 'sponsors' as an array of strings
}

const SponsorList: React.FC<SponsorListProps> = ({ sponsors }) => {
    return (
        <div className="space-y-2">
            {sponsors.map((sponsor, index) => (
                <p key={index} className="text-gray-700 text-center bg-white p-2 rounded-md shadow-sm">
                    {sponsor}
                </p>
            ))}
        </div>
    );
};

export default SponsorList;