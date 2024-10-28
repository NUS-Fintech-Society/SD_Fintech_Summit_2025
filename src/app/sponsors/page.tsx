import React from 'react';
import SponsorSection from '../../components/sponsors/SponsorSection';

const Sponsors = () => {
    const platinumSponsors = ["Sponsor 1", "Sponsor 2", "Sponsor 3", "Sponsor 4", "Sponsor 5"];
    const goldSponsors = ["Sponsor 1", "Sponsor 2", "Sponsor 3", "Sponsor 4", "Sponsor 5"];
    const silverSponsors = ["Sponsor 1", "Sponsor 2", "Sponsor 3", "Sponsor 4", "Sponsor 5"];

    return (
        <div className="p-8 bg-custom-background min-h-screen">
            <h1 className="text-3xl font-bold text-center text-header-color mb-8">Our Sponsors</h1>
            <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                <SponsorSection title="Platinum" sponsors={platinumSponsors} />
                <SponsorSection title="Gold" sponsors={goldSponsors} />
                <SponsorSection title="Silver" sponsors={silverSponsors} />
            </div>
        </div>
    );
};

export default Sponsors;