import { MapPin, ChevronRight, ArrowRight } from 'lucide-react';
import Button from './Button';
import './Coverage.css';

// Assets
import globeCoverage from '../assets/globecoverage.png';
import businessIcon from '../assets/newimages/Business.png';
import individualsIcon from '../assets/newimages/Individuals.png';

import { useNavigate } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import Flag from './Flag';

const Coverage: React.FC = () => {
    const navigate = useNavigate();
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [showLiveFeed, setShowLiveFeed] = useState(false);
    const globeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!globeRef.current) return;

        const rect = globeRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element.
        const y = e.clientY - rect.top;  // y position within the element.

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
        const rotateY = ((x - centerX) / centerX) * 10;

        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div className="coverage-page">
            {/* Hero Section */}
            <section className="coverage-hero" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                {/* Globe Graphic on Right - positioned absolutely in CSS or as flex item */}
                <div className="hero-globe-wrapper" ref={globeRef} style={{ perspective: '1000px' }}>
                    <div
                        className="globe-3d-container"
                        style={{
                            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                            transition: 'transform 0.1s ease-out'
                        }}
                    >
                        <img src={globeCoverage} alt="Global Coverage" className="globe-graphic" />

                        {/* Location Pins */}
                        {/* Ghana Pin - Approx location adjustment needed in CSS */}
                        <div
                            className="globe-pin pin-ghana"
                            title="Ghana"
                            onClick={() => setShowLiveFeed(!showLiveFeed)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="pin-pulse"></div>
                            <MapPin size={24} className="pin-icon" fill="#a49945" />
                        </div>

                        {/* Caribbean Pin - Approx location adjustment needed in CSS */}
                        <div className="globe-pin pin-caribbean" title="Caribbean">
                            <div className="pin-pulse"></div>
                            <MapPin size={24} className="pin-icon" fill="#2e2b4f" />
                        </div>

                        {/* Live Verification Feed Popup */}
                        {showLiveFeed && (
                            <div className="live-feed-popup">
                                <div className="live-feed-header">
                                    <h3>LIVE VERIFICATION FEED</h3>
                                    <div className="live-indicator">
                                        <span className="live-dot"></span>
                                        <span className="live-text">LIVE</span>
                                    </div>
                                </div>
                                <div className="live-feed-list">
                                    <div className="feed-item">
                                        <Flag country="ghana" className="feed-flag" />
                                        <div className="feed-content">
                                            <div className="feed-title">Business Verified: Accra, Ghana</div>
                                            <div className="feed-time">2m ago</div>
                                        </div>
                                    </div>
                                    <div className="feed-item">
                                        <Flag country="ghana" className="feed-flag" />
                                        <div className="feed-content">
                                            <div className="feed-title">ID Authentication: Kumasi, Ghana</div>
                                            <div className="feed-time">5m ago</div>
                                        </div>
                                    </div>
                                    <div className="feed-item">
                                        <Flag country="barbados" className="feed-flag" />
                                        <div className="feed-content">
                                            <div className="feed-title">UBO Check: Bridgetown, Barbados</div>
                                            <div className="feed-time">8m ago</div>
                                        </div>
                                    </div>
                                    <div className="feed-item">
                                        <Flag country="jamaica" className="feed-flag" />
                                        <div className="feed-content">
                                            <div className="feed-title">License Verified: Kingston, Jamaica</div>
                                            <div className="feed-time">16m ago</div>
                                        </div>
                                    </div>
                                    <div className="feed-item">
                                        <Flag country="ghana" className="feed-flag" />
                                        <div className="feed-content">
                                            <div className="feed-title">Physical Audit: Tamale, Ghana</div>
                                            <div className="feed-time">24m ago</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="container coverage-container">
                    <div className="coverage-hero-content">
                        <div className="now-live-badge">
                            <span className="dot"></span>
                            Now Live in Ghana
                            <div className="flag-gh mini">
                                <div className="flag-gh-red"></div>
                                <div className="flag-gh-gold">
                                    <div className="black-star"></div>
                                </div>
                                <div className="flag-gh-green"></div>
                            </div>
                        </div>

                        <h1 className="coverage-title">Our Coverage</h1>
                        <p className="coverage-desc">
                            Currently live in Ghana with comprehensive ID verification.
                            Caribbean expansion is underway with Trinidad & Tobago,
                            Jamaica, Barbados, and Guyana coming soon.
                        </p>

                        <div className="coverage-btns">
                            <Button variant="secondary" className="btn-get-started" onClick={() => navigate('/contact-us')}>
                                Get Started <ChevronRight size={18} />
                            </Button>
                            <Button variant="outline" className="btn-view-ids" onClick={() => navigate('/ghana')}>
                                View Ghana IDs
                            </Button>
                        </div>
                    </div>

                    {/* Ghana Marker & Badge - Refined for design */}
                    <div className="ghana-marker-container">
                        <div className="marker-badge-box">
                            <div className="badge-header">Ghana</div>
                            <div className="badge-flag">
                                <div className="flag-gh">
                                    <div className="flag-gh-red"></div>
                                    <div className="flag-gh-gold">
                                        <div className="black-star"></div>
                                    </div>
                                    <div className="flag-gh-green"></div>
                                </div>
                            </div>
                        </div>
                        <div className="marker-pindrop">
                            <MapPin size={32} fill="white" color="white" />
                        </div>
                        {/* Smaller pins around if needed but screenshot shows main one */}
                        <div className="marker-pindrop-secondary">
                            <MapPin size={24} fill="#white" color="white" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Ghana Verification Section - Redesigned */}
            <section className="ghana-verification-redesigned">
                <div className="container">
                    <div className="ghana-section-header">
                        <h2 className="ghana-title">Active Region: Ghana</h2>
                        <div className="ghana-flag-large">
                            <Flag country="ghana" className="flag-svg-large" />
                        </div>
                    </div>

                    <div className="ghana-scope-grid">
                        {/* Business Verification Scope */}
                        <div className="scope-card business-scope">
                            <div className="scope-icon-container">
                                <img src={businessIcon} alt="Business Scope" className="scope-image" />
                            </div>
                            <h3>Business Verification Scope</h3>
                            <ul className="scope-list">
                                <li>
                                    <div className="check-circle"><div className="check-mark"></div></div>
                                    <div className="scope-text">
                                        <strong>Comprehensive Profile Check</strong>
                                        <span>Full analysis of business and leadership structures</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="check-circle"><div className="check-mark"></div></div>
                                    <div className="scope-text">
                                        <strong>SSNIT (Social Security)</strong>
                                        <span>Employer contribution and registration status</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="check-circle"><div className="check-mark"></div></div>
                                    <div className="scope-text">
                                        <strong>GRA (Tax Compliance)</strong>
                                        <span>Direct integration with Ghana Revenue Authority</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Individual & Marketplace Scope */}
                        <div className="scope-card individual-scope">
                            <div className="scope-icon-container">
                                <img src={individualsIcon} alt="Individual Scope" className="scope-image" />
                            </div>
                            <h3>Individual & Marketplace Scope</h3>
                            <ul className="scope-list">
                                <li>
                                    <div className="check-circle"><div className="check-mark"></div></div>
                                    <div className="scope-text">
                                        <strong>Biometric ID Verification</strong>
                                        <span>Ghana Card and passport authentication</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="check-circle"><div className="check-mark"></div></div>
                                    <div className="scope-text">
                                        <strong>Verified Work History</strong>
                                        <span>Past employment and reference validation</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="ghana-cta-container">
                        <Button className="btn-start-ghana" onClick={() => navigate('/ghana')}>
                            Start Verification in Ghana <ArrowRight size={20} />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Caribbean Expansion Section */}
            <section className="caribbean-expansion">
                <div className="container">
                    <div className="section-header-wrap">
                        <div className="coming-soon-badge">
                            Coming Soon
                        </div>
                        <h2 className="section-title-large">Contact Kadodo Africa</h2>
                        <p className="section-subtitle-large">Expansion: The Caribbean (CARICOM)</p>
                    </div>

                    <div className="expansion-cards-grid-new">
                        {[
                            { name: 'Antigua & Barbuda', id: 'antigua' },
                            { name: 'Barbados', id: 'barbados' },
                            { name: 'Belize', id: 'belize' },
                            { name: 'Bahamas', id: 'bahamas' },
                            { name: 'Dominica', id: 'dominica' },
                            { name: 'Dominican Republic', id: 'dominicanrepublic' },
                            { name: 'Grenada', id: 'grenada' },
                            { name: 'Guyana', id: 'guyana' },
                            { name: 'Haiti', id: 'haiti' },
                            { name: 'Jamaica', id: 'jamaica' },
                            { name: 'St. Kitts', id: 'stkitts' },
                            { name: 'St. Lucia', id: 'stlucia' },
                            { name: 'St. Vincent', id: 'stvincent' },
                            { name: 'Suriname', id: 'suriname' },
                            { name: 'Trinidad & Tobago', id: 'trinidad' }
                        ].map((country) => (
                            <div key={country.id} className="expansion-card-new" onClick={() => navigate('/contact-us')}>
                                <div className="flag-wrapper-new">
                                    <Flag country={country.id} className="flag-svg-new" />
                                </div>
                                <span className="country-name-new">{country.name}</span>
                            </div>
                        ))}

                        {/* More Coming Soon Card */}
                        <div className="expansion-card-new coming-soon-card">
                            <span className="country-name-new muted">More countries coming soon.</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global CTA Section */}
            <section className="global-cta-section">
                <div className="container">
                    <div className="global-cta-card">
                        <h2>Ready to go Global?</h2>
                        <p>Join the network of verified businesses and individuals pioneering cross-border trade between Africa and the Caribbean.</p>
                        <div className="global-cta-btns">
                            <Button className="btn-global-verified" onClick={() => navigate('/contact-us')}>
                                Get Verified
                            </Button>
                            <Button className="btn-global-sales" onClick={() => navigate('/contact-us')}>
                                Contact Sales
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Coverage;
