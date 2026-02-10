import { MapPin, ChevronRight } from 'lucide-react';
import Button from './Button';
import './Coverage.css';

// Assets
import globeCoverage from '../assets/globecoverage.png';
import eduIcon from '../assets/newimages/Education.png';
import empIcon from '../assets/newimages/Employment.png';
import idIcon from '../assets/newimages/ID.png';

import { useNavigate } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';

const Coverage: React.FC = () => {
    const navigate = useNavigate();
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
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
                        <div className="globe-pin pin-ghana" title="Ghana">
                            <div className="pin-pulse"></div>
                            <MapPin size={24} className="pin-icon" fill="#a49945" />
                        </div>

                        {/* Caribbean Pin - Approx location adjustment needed in CSS */}
                        <div className="globe-pin pin-caribbean" title="Caribbean">
                            <div className="pin-pulse"></div>
                            <MapPin size={24} className="pin-icon" fill="#2e2b4f" />
                        </div>
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

            {/* Ghana ID Verification Section */}
            <section className="ghana-verification">
                <div className="container">
                    <div className="section-header-wrap">
                        <div className="status-label-top">
                            <div className="flag-gh-large">
                                <div className="flag-gh-red"></div>
                                <div className="flag-gh-gold">
                                    <div className="black-star"></div>
                                </div>
                                <div className="flag-gh-green"></div>
                            </div>
                            <span className="badge-active-olive">Active</span>
                        </div>
                        <h2 className="section-title-large">Ghana ID Verification</h2>
                        <p className="section-subtitle-large">Comprehensive identity verification for all major Ghanaian documents. Fast, secure, and compliant.</p>
                    </div>

                    <div className="verification-cards-refined">
                        <div className="v-card-premium" onClick={() => navigate('/individual-verification')} style={{ cursor: 'pointer' }}>
                            <div className="v-card-icon-overlapping edu">
                                <div className="edu-icon-design">
                                    <img src={eduIcon} alt="Education" className="edu-img" />
                                </div>
                            </div>
                            <div className="v-card-premium-content">
                                <h3>Educational Credentials</h3>
                                <p>Verify degrees, certifications, and academic achievements</p>
                                <div className="v-card-spacer"></div>
                                <span className="v-card-eg">Eg: Student ID</span>
                            </div>
                        </div>

                        <div className="v-card-premium" onClick={() => navigate('/individual-verification')} style={{ cursor: 'pointer' }}>
                            <div className="v-card-icon-overlapping emp">
                                <div className="emp-icon-design">
                                    <img src={empIcon} alt="Employment" className="suit-img" />
                                </div>
                            </div>
                            <div className="v-card-premium-content">
                                <h3>Employment History</h3>
                                <p>Validate professional experience and career progression</p>
                                <div className="v-card-spacer"></div>
                                <span className="v-card-eg">Eg: SSNIT</span>
                            </div>
                        </div>

                        <div className="v-card-premium" onClick={() => navigate('/individual-verification')} style={{ cursor: 'pointer' }}>
                            <div className="v-card-icon-overlapping pro">
                                <div className="pro-icon-design">
                                    <img src={idIcon} alt="Professional" className="id-img" />
                                </div>
                            </div>
                            <div className="v-card-premium-content">
                                <h3>Professional Licenses</h3>
                                <p>Confirm regulatory and professional certifications</p>
                                <div className="v-card-spacer"></div>
                                <span className="v-card-eg">Eg: Driver's License</span>
                            </div>
                        </div>
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
                        <h2 className="section-title-large">Caribbean Expansion</h2>
                        <p className="section-subtitle-large">We're bringing the same trusted identity verification to the Caribbean. Join our waitlist to get early access.</p>
                    </div>

                    <div className="expansion-cards-grid">
                        {/* Trinidad & Tobago */}
                        <div className="expansion-card" onClick={() => navigate('/contact-us')} style={{ cursor: 'pointer' }}>
                            <div className="flag-container">
                                <div className="flag-tt">
                                    <div className="tt-stripe-white-1"></div>
                                    <div className="tt-stripe-black"></div>
                                    <div className="tt-stripe-white-2"></div>
                                </div>
                            </div>
                            <div className="expansion-card-content">
                                <div className="card-info-left">
                                    <h3>Trinidad & Tobago</h3>
                                    <span>5 ID Types</span>
                                </div>
                            </div>
                        </div>

                        {/* Jamaica */}
                        <div className="expansion-card" onClick={() => navigate('/contact-us')} style={{ cursor: 'pointer' }}>
                            <div className="flag-container">
                                <div className="flag-jm">
                                    <div className="jm-tri-green-top"></div>
                                    <div className="jm-tri-green-bottom"></div>
                                    <div className="jm-tri-black-left"></div>
                                    <div className="jm-tri-black-right"></div>
                                </div>
                            </div>
                            <div className="expansion-card-content">
                                <div className="card-info-left">
                                    <h3>Jamaica</h3>
                                    <span>4 ID Types</span>
                                </div>
                            </div>
                        </div>

                        {/* Barbados */}
                        <div className="expansion-card" onClick={() => navigate('/contact-us')} style={{ cursor: 'pointer' }}>
                            <div className="flag-container">
                                <div className="flag-bb">
                                    <div className="bb-stripe-blue-left"></div>
                                    <div className="bb-stripe-yellow">
                                        <div className="bb-trident"></div>
                                    </div>
                                    <div className="bb-stripe-blue-right"></div>
                                </div>
                            </div>
                            <div className="expansion-card-content">
                                <div className="card-info-left">
                                    <h3>Barbados</h3>
                                    <span>3 ID Types</span>
                                </div>
                            </div>
                        </div>

                        {/* Guyana */}
                        <div className="expansion-card" onClick={() => navigate('/contact-us')} style={{ cursor: 'pointer' }}>
                            <div className="flag-container">
                                <div className="flag-gy">
                                    <div className="gy-white-triangle"></div>
                                    <div className="gy-yellow-triangle"></div>
                                    <div className="gy-black-triangle"></div>
                                    <div className="gy-red-triangle"></div>
                                </div>
                            </div>
                            <div className="expansion-card-content">
                                <div className="card-info-left">
                                    <h3>Guyana</h3>
                                    <span>4 ID Types</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="waitlist-footer">
                        <Button className="btn-join-waitlist" variant="secondary" onClick={() => navigate('/contact-us')}>
                            Join Caribbean Waitlist <ChevronRight size={20} />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Coverage;
