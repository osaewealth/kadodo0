import React from 'react';

import './Stats.css';

// Import partner logos
import sponsor1 from '../assets/sponsor1.png';
import sponsor3 from '../assets/sponsor3.png';
import sponsor5 from '../assets/sponsor5.png';
import sponsor6 from '../assets/sponsor6.png';
import sponsor7 from '../assets/sponsor7.png';

const partners = [
    { name: "African Union", logo: sponsor1 },
    { name: "AGI", logo: sponsor3 },
    { name: "Partner 4", logo: sponsor5 },
    { name: "Partner 5", logo: sponsor6 },
    { name: "Partner 6", logo: sponsor7 },
];

const Stats: React.FC = () => {
    return (
        <section className="partners-section">
            <div className="container">
                

                <div className="marquee-container">
                    <div className="marquee-track">
                        {/* Double the logos for seamless loop */}
                        {[...partners, ...partners, ...partners].map((partner, index) => (
                            <div key={index} className="partner-item">
                                <img
                                    src={partner.logo}
                                    alt={`${partner.name} logo`}
                                    className="partner-logo"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
