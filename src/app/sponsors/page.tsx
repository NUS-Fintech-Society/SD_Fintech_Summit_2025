import React from 'react';
import SponsorSection from '../../components/sponsors/SponsorSection';

const Sponsors = () => {
    const goldSponsors = [
        { name: "Blockchain for Good", imgSrc: "/sponsors/BlockchainGood.png", link: "https://www.blockchainforgood.xyz" },
        { name: "GSR", imgSrc: "/sponsors/GSR.jpg", link: "https://www.gsr.io" },
        { name: "Flowdesk", imgSrc: "/sponsors/Flowdesk.png", link: "https://flowdesk.co" },
    ];
    const platinumSponsors = [
        { name: "Ripple", imgSrc: "/sponsors/Ripple.png", link: "https://ripple.com" }
    ];
    const silverSponsors = [
        { name: "Metacamp", imgSrc: "/sponsors/Metacamp2.png", link: "https://www.metacamp.sg/"}
    ];
    const communityPartners = [
        // { name: "Builderdao", imgSrc: "/sponsors/Builderdao.png", link: "https://buidlerdao.xyz/" },
        // { name: "Gigdao", imgSrc: "/sponsors/Gigdao.png", link: "https://gigdao.io" },
        { name: "Moledao", imgSrc: "/sponsors/Moledao.png", link: "https://moledao.io" },
        // { name: "Seegrowth", imgSrc: "/sponsors/Seegrowth.png", link: "https://seegrowth.framer.website/" },
        { name: "Animoca Brands", imgSrc: "/sponsors/animoca.png", link: "https://www.animocabrands.com/" },
        { name: "Singapore Fintech Youth Chapter", imgSrc: "/sponsors/syfc.png", link: "https://www.fintechyouth.org/" },
    ];

    return (
        <div className="p-8 bg-custom-background min-h-screen">
            <h1 className="text-2xl text-center text-white font-bold mb-8">
                <div className="[text-shadow:_4px_3px_0px_#000000] text-5xl mb-4">
                    OUR SPONSORS
                </div>
            </h1>
            <div className="flex flex-col lg:flex-row gap-10 justify-center">
                <div className="flex-grow order-1 lg:order-1">
                    <SponsorSection title="Platinum" sponsors={platinumSponsors} />
                </div>
                <div className="flex-grow order-2 lg:order-2">
                    <SponsorSection title="Gold" sponsors={goldSponsors} />
                </div>
                <div className="flex-grow order-3 lg:order-3">
                    <SponsorSection title="Silver" sponsors={silverSponsors} />
                </div>
                <div className="flex-grow order-4 lg:order-4">
                    <SponsorSection title="Community Partners" sponsors={communityPartners} />
                </div>
            </div>
        </div>
    );
};

export default Sponsors;
