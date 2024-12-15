import React from 'react';
import SponsorSection from '../../components/sponsors/SponsorSection';

const Sponsors = () => {
    const goldSponsors = [
        { name: "Jane Street", imgSrc: "./sponsors/Jane Street.png", link: "https://www.janestreet.com" },
        { name: "Metacamp", imgSrc: "./sponsors/Metacamp.png", link: "https://metacamp.so" },
        { name: "Moledao", imgSrc: "./sponsors/Moledao.png", link: "https://moledao.io" },
        { name: "Flowdesk", imgSrc: "./sponsors/Flowdesk.png", link: "https://flowdesk.co" }
    ];
    const platinumSponsors = [
        { name: "Northern Trust", imgSrc: "./sponsors/Northern Trust.png", link: "https://www.northerntrust.com" },
        { name: "Ripple", imgSrc: "./sponsors/Ripple.png", link: "https://ripple.com" }
    ];
    const silverSponsors = [
        { name: "Dethings", imgSrc: "./sponsors/DeThings.png", link: "https://dethings.com" },
        { name: "eFinancialCareers", imgSrc: "./sponsors/eFinancialCareers.svg", link: "https://www.efinancialcareers.sg" },
        // { name: "Bank of America", imgSrc: "./sponsors/Bank of America.png", link: "https://www.bankofamerica.com" },
        { name: "Coingecko", imgSrc: "./sponsors/CoinGecko.png", link: "https://www.coingecko.com" }
    ];
    const communityPartners = [
        { name: "Gigdao", imgSrc: "./sponsors/Gigdao.png", link: "https://gigdao.io" },
        { name: "Seegrowth", imgSrc: "./sponsors/Seegrowth.png", link: "https://seegrowth.framer.website/" },
        { name: "Builderdao", imgSrc: "./sponsors/Builderdao.png", link: "https://buidlerdao.xyz/" }
    ];

    return (
        <div className="p-8 bg-custom-background min-h-screen">
            <h1 className="text-2xl text-center text-white font-bold mb-8">
                <div className="[text-shadow:_4px_3px_0px_#000000] text-5xl mb-4">
                    OUR SPONSORS
                </div>
            </h1>
            <div className="flex flex-col lg:flex-row gap-10 justify-center">
                <div className="flex-grow order-2 lg:order-1">
                    <SponsorSection title="Platinum" sponsors={platinumSponsors} />
                </div>
                <div className="flex-grow order-1 lg:order-2">
                    <SponsorSection title="Gold" sponsors={goldSponsors} />
                </div>
                <div className="flex-grow order-3 lg:flex lg:flex-row lg:gap-10">
                    <SponsorSection title="Silver" sponsors={silverSponsors} />
                </div>
                <div className="flex-grow order-4 lg:flex lg:flex-row lg:gap-10">
                    <SponsorSection title="Community Partners" sponsors={communityPartners} />
                </div>
            </div>
        </div>
    );
};

export default Sponsors;