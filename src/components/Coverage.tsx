import { ArrowRight } from 'lucide-react';
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
    const globeRef = useRef<HTMLDivElement>(null);
    const ghanaSectionRef = useRef<HTMLElement>(null);
    const caribbeanSectionRef = useRef<HTMLElement>(null);

    const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
            {/* Operational Coverage Selection Section */}
            <section className="operational-coverage-top">
                <div className="container">
                    <h2 className="oc-title">Operational Coverage</h2>
                    <p className="oc-description">
                        Providing the foundational digital trust infrastructure required for cross-border trade and institutional integration across Africa and the Caribbean.
                    </p>
                    <div className="oc-button-group">
                        <button
                            className="oc-btn-ghana"
                            onClick={() => scrollToSection(ghanaSectionRef)}
                        >
                            Ghana
                        </button>
                        <button
                            className="oc-btn-caribbean"
                            onClick={() => scrollToSection(caribbeanSectionRef)}
                        >
                            Caribbean Expansion
                        </button>
                    </div>
                </div>
            </section>
            {/* Global Trust Infrastructure Map Section */}
            <section className="global-map-section" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <div className="container map-header-container">
                    <div className="map-title-group">
                        <h1 className="map-main-title">Global Trust Infrastructure Map</h1>
                        <p className="map-subtitle">Real-time Trust Pulse: Visualizing live data flow and verified nodes.</p>
                    </div>
                </div>

                <div className="map-view-container">
                    {/* Left Sidebar: Live Feed */}
                    <div className="map-sidebar left-sidebar">
                        <div className="panel-box feed-panel">
                            <div className="panel-header">
                                <h3>LIVE VERIFICATION FEED</h3>
                                <div className="live-status">
                                    <span className="live-dot-pulse"></span>
                                    LIVE
                                </div>
                            </div>
                            <div className="feed-scroll-area">
                                <div className="feed-entry">
                                    <Flag country="ghana" className="entry-flag" />
                                    <div className="entry-text">
                                        <div className="entry-title">Business Verified: Accra, Ghana</div>
                                        <div className="entry-time">2m ago</div>
                                    </div>
                                </div>
                                <div className="feed-entry">
                                    <Flag country="ghana" className="entry-flag" />
                                    <div className="entry-text">
                                        <div className="entry-title">ID Authentication: Kumasi, Ghana</div>
                                        <div className="entry-time">5m ago</div>
                                    </div>
                                </div>
                                <div className="feed-entry">
                                    <Flag country="barbados" className="entry-flag" />
                                    <div className="entry-text">
                                        <div className="entry-title">UBO Check: Bridgetown, Barbados</div>
                                        <div className="entry-time">12m ago</div>
                                    </div>
                                </div>
                                <div className="feed-entry">
                                    <Flag country="jamaica" className="entry-flag" />
                                    <div className="entry-text">
                                        <div className="entry-title">License Verified: Kingston, Jamaica</div>
                                        <div className="entry-time">18m ago</div>
                                    </div>
                                </div>
                                <div className="feed-entry">
                                    <Flag country="ghana" className="entry-flag" />
                                    <div className="entry-text">
                                        <div className="entry-title">Physical Audit: Tamale, Ghana</div>
                                        <div className="entry-time">24m ago</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Center: The Globe */}
                    <div className="map-center-view" ref={globeRef}>
                        <div
                            className="globe-wrapper-3d"
                            style={{
                                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                                transition: 'transform 0.1s ease-out'
                            }}
                        >
                            <img src={globeCoverage} alt="High Tech Globe" className="high-tech-globe" />

                            {/* Connection Pulse Line */}
                            <svg className="data-pulse-svg" viewBox="0 0 400 300">
                                <path
                                    className="pulse-path"
                                    d="M100,100 Q200,50 300,150"
                                    fill="none"
                                    stroke="#a49945"
                                    strokeWidth="2"
                                    strokeDasharray="5,5"
                                />
                            </svg>

                            {/* Node Pins */}
                            <div className="node-marker ghana-node" title="Primary Trust Node: Ghana">
                                <div className="node-icon gold"></div>
                            </div>
                            <div className="node-marker caribbean-node" title="Active Integration: CARICOM">
                                <div className="node-icon green"></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Controls & Status */}
                    <div className="map-sidebar right-sidebar">
                        <div className="controls-stack">
                            <div className="panel-box zoom-controls">
                                <button className="zoom-btn">+</button>
                                <div className="zoom-divider"></div>
                                <button className="zoom-btn">-</button>
                            </div>

                            <div className="panel-box nav-control">
                                <button className="nav-btn">
                                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                                        <path d="M16 12l-4-4-4 4M12 8v8" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="panel-box status-panel">
                            <h3>LIVE INFRASTRUCTURE STATUS</h3>
                            <div className="status-legend">
                                <div className="legend-item">
                                    <span className="legend-dot gold"></span>
                                    <span>Primary Trust Node (GH)</span>
                                </div>
                                <div className="legend-item">
                                    <span className="legend-dot green"></span>
                                    <span>Active Integration (CARICOM)</span>
                                </div>
                                <div className="legend-item">
                                    <span className="legend-line pulse"></span>
                                    <span>Trans-Atlantic Data Pulse</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ghana Verification Section - Redesigned */}
            <section ref={ghanaSectionRef} className="ghana-verification-redesigned">
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
            <section ref={caribbeanSectionRef} className="caribbean-expansion">
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
