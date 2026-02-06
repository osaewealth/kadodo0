import { MapPin, GraduationCap, ChevronRight } from 'lucide-react';
import Button from './Button';
import './Coverage.css';

// Assets
import coverageMap from '../assets/coveragehero.png';
import suitIcon from '../assets/image1573536412633-mflj-200h.png';
import idIcon from '../assets/humanverificationicon.png';

const Coverage: React.FC = () => {
    return (
        <div className="coverage-page">
            {/* Hero Section */}
            <section className="coverage-hero">
                <div className="coverage-hero-bg">
                    <img src={coverageMap} alt="World Map" className="map-bg" />
                    <div className="hero-overlay"></div>
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
                            <Button variant="secondary" className="btn-get-started">
                                Get Started <ChevronRight size={18} />
                            </Button>
                            <Button variant="outline" className="btn-view-ids">
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
                        <div className="v-card-premium">
                            <div className="v-card-icon-overlapping edu">
                                <div className="edu-icon-design">
                                    <GraduationCap size={40} color="#fff" />
                                    <div className="mortarboard-tassel"></div>
                                </div>
                            </div>
                            <div className="v-card-premium-content">
                                <h3>Educational Credentials</h3>
                                <p>Verify degrees, certifications, and academic achievements</p>
                                <div className="v-card-spacer"></div>
                                <span className="v-card-eg">Eg: Student ID</span>
                            </div>
                        </div>

                        <div className="v-card-premium">
                            <div className="v-card-icon-overlapping emp">
                                <div className="emp-icon-design">
                                    <img src={suitIcon} alt="Employment" className="suit-img" />
                                </div>
                            </div>
                            <div className="v-card-premium-content">
                                <h3>Employment History</h3>
                                <p>Validate professional experience and career progression</p>
                                <div className="v-card-spacer"></div>
                                <span className="v-card-eg">Eg: SSNIT</span>
                            </div>
                        </div>

                        <div className="v-card-premium">
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
                        <div className="expansion-card">
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
                        <div className="expansion-card">
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
                        <div className="expansion-card">
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
                        <div className="expansion-card">
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
                        <Button className="btn-join-waitlist" variant="secondary">
                            Join Caribbean Waitlist <ChevronRight size={20} />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Coverage;
