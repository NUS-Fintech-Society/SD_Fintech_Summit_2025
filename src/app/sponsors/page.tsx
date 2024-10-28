import React from 'react';
import SponsorSection from '../../components/sponsors/SponsorSection';

const Sponsors = () => {
    const platinumSponsors = [
        { name: "Sponsor 1", imgSrc: "./tiktok.png", link: "/" },
        { name: "Sponsor 2", imgSrc: "./tiktok.png", link: "/" },
        { name: "Sponsor 3", imgSrc: "./tiktok.png", link: "/" }
    ];
    const goldSponsors = [
        { name: "Sponsor 1", imgSrc: "./tiktok.png", link: "/" },
        { name: "Sponsor 2", imgSrc: "./tiktok.png", link: "/" },
        { name: "Sponsor 3", imgSrc: "./tiktok.png", link: "/" },
        { name: "Sponsor 4", imgSrc: "./tiktok.png", link: "/" },
        { name: "Sponsor 5", imgSrc: "./tiktok.png", link: "/" }
    ];
    const silverSponsors = [
        { name: "Sponsor 1", imgSrc: "./tiktok.png", link: "/" },
        { name: "Sponsor 2", imgSrc: "./tiktok.png", link: "/" },
        { name: "Sponsor 3", imgSrc: "./tiktok.png", link: "/" }
    ];

    return (
        <div className="p-8 bg-custom-background min-h-screen">
            <h1 className="text-3xl font-bold text-center text-[#D9DFA1] mb-16">Our Sponsors</h1>
            <div className="flex flex-col lg:flex-row gap-10 justify-center">
                <div className="flex-grow">
                    <SponsorSection title="Platinum" sponsors={platinumSponsors} />
                </div>
                <div className="flex-grow">
                    <SponsorSection title="Gold" sponsors={goldSponsors} />
                </div>
                <div className="flex-grow">
                    <SponsorSection title="Silver" sponsors={silverSponsors} />
                </div>
            </div>
        </div>
    );
};

export default Sponsors;
