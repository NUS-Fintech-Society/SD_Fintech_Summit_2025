import React from 'react';

//TODO: copy prop handling same as faq 

const SponsorList = ({ sponsors }) => {
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