import React from 'react';
import SponsorList from './SponsorList';

interface Sponsor {
	name: string;
	imgSrc: string;
	link: string;
}

interface SponsorSectionProps {
	title: 'Gold' | 'Platinum'  | 'Silver';
	sponsors: Sponsor[];
}

const SponsorSection: React.FC<SponsorSectionProps> = ({ title, sponsors }) => {
	const bubbleColor = (title: SponsorSectionProps['title']) => {
		switch (title) {
			case "Gold":
				return "bg-gradient-to-l from-[#CDA538] to-[#F3C443]";
			case "Platinum":
				return "bg-gradient-to-l from-[#BBA9A9] to-[#F9F0F0]";
			case "Silver":
				return "bg-gradient-to-l from-[#5D5D5D] to-[#AFAFAF]";
			default:
				return "bg-gradient-to-l from-gray-400 to-gray-200";
		}
	}

    return (
        <div className="relative p-6 bg-gray-100 rounded-lg shadow-md ">
            <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 text-center py-2 px-8 rounded-full shadow-lg ${bubbleColor(title)}`}>
                <h2 className="text-lg font-bold text-gray-800">{title}</h2>
            </div>

            <div className="pt-8 px-2 pb-2">
                <SponsorList sponsors={sponsors} />
            </div>
        </div>
    );
};

export default SponsorSection;
