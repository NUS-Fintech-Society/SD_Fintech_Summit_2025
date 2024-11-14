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
        { name: "Bank of America", imgSrc: "./sponsors/Bank of America.png", link: "https://www.bankofamerica.com" },
        { name: "Coingecko", imgSrc: "./sponsors/Coingecko.png", link: "https://www.coingecko.com" }
    ];

    return (
        <div className="p-8 bg-custom-background min-h-screen">
            <h1 className="text-3xl font-bold text-center text-[#D9DFA1] mb-16">Our Sponsors</h1>
            <div className="flex flex-col lg:flex-row gap-10 justify-center">
                <div className="flex-grow">
                    <SponsorSection title="Gold" sponsors={goldSponsors} />
                </div>
                <div className="flex-grow">
                    <SponsorSection title="Platinum" sponsors={platinumSponsors} />
                </div>
                <div className="flex-grow">
                    <SponsorSection title="Silver" sponsors={silverSponsors} />
                </div>
            </div>
        </div>
    );
};

export default Sponsors;
