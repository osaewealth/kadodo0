import React from 'react';

import './Stats.css';

// Import partner logos
import agiLogo from '../assets/agi.png';
// Using placeholder images for missing logos
import placeholderLogo from '../assets/kadodologo.png';

const partners = [
    { name: "African Union", logo: placeholderLogo },
    { name: "Caricom", logo: placeholderLogo },
    { name: "AGI", logo: agiLogo },
];

const Stats: React.FC = () => {
    return (
        <section className="partners-section">
            <div className="container">
                <div className="partners-header">
                    <h3>Strategic Alignment & Global Partners</h3>
                </div>

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
