import React from 'react';
import './AboutUs.css';
import aboutHero from '../assets/aboutushero.jpg';
import busIcon from '../assets/newimages/Business.png';
import indIcon from '../assets/newimages/Individuals.png';
import partIcon from '../assets/newimages/Partners.png';
import bridgeIcon from '../assets/newimages/Digital Bridge.png';
import missionIcon from '../assets/newimages/Mission.png';
import visionIcon from '../assets/newimages/Vision.png';
import founderImg from '../assets/founder.jpg';
import sponsor1 from '../assets/sponsor1.png';
import sponsor2 from '../assets/sponsor2.png';
import sponsor3 from '../assets/sponsor3.png';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const AboutUs: React.FC = () => {
    return (
        <div className="about-us-page">
            {/* Hero Section */}
            <section className="about-hero" style={{ backgroundImage: `url(${aboutHero})` }}>
                <div className="about-hero-overlay"></div>
                <div className="container about-hero-container">
                    <div className="about-hero-content">
                        <h1>Building Africa's Foundation of <span className="text-accent-gold">Trust</span></h1>
                        <p>Providing the essential digital infrastructure to de-risk and power the African Continental Free Trade Area (AfCFTA) and Caribbean trade ecosystems.</p>
                    </div>
                </div>
            </section>

            {/* Bridging the Verification Gap Section */}
            <section className="verification-gap">
                <div className="container gap-grid">
                    <div className="gap-content">
                        <h2>Bridging the Verification Gap</h2>
                        <p>For decades, the primary barrier to cross-border trade in Africa hasn't been distance—it's been the lack of verifiable identity and data. High due diligence costs and perceived risks have sidelined millions of credible SMEs and professionals.</p>
                        <p>Kadodo Africa was born to solve this. We act as a sovereign trust-layer, connecting regulators, businesses, and individuals through a unified verification system. By turning reputation into a portable digital asset, we unlock access to markets, capital, and global opportunities.</p>
                    </div>
                    <div className="gap-image-wrap">
                        <div className="gap-image-bg" style={{ backgroundImage: `url(${aboutHero})` }}></div>
                        <div className="digital-bridge-card">
                            <div className="bridge-icon-wrap">
                                <img src={bridgeIcon} alt="The Digital Bridge" className="bridge-icon-png" />
                            </div>
                            <h3>The Digital Bridge</h3>
                            <span>Connecting Regulators & Market Participants</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="mission-vision-refined">
                <div className="container mv-grid">
                    {/* Our Mission */}
                    <div className="mv-card mission-dark">
                        <div className="mv-icon">
                            <img src={missionIcon} alt="Our Mission" className="mv-icon-png" />
                        </div>
                        <h2>Our Mission</h2>
                        <p>To build a decentralized trust infrastructure that authenticates every business and individual in the AfCFTA and Caribbean markets, making cross-border trade seamless, secure, and inclusive.</p>
                    </div>

                    {/* Our Vision */}
                    <div className="mv-card vision-light">
                        <div className="mv-icon">
                            <img src={visionIcon} alt="Our Vision" className="mv-icon-png" />
                        </div>
                        <h2>Our Vision</h2>
                        <p>To become the global standard for identity and trust verification in emerging markets, empowering over 100 million businesses and professionals with a portable digital legacy.</p>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="what-we-do">
                <div className="container">
                    <div className="section-header-centered">
                        <h2 className="section-title-large">What We Do</h2>
                    </div>
                    <div className="what-we-do-grid">
                        <div className="wwd-card">
                            <div className="wwd-icon">
                                <img src={busIcon} alt="For Businesses" />
                            </div>
                            <h3>For Businesses</h3>
                            <p>Issuance of the <span className="text-accent-gold">Kadodo Number</span> a multi-layered verification badge that serves as a digital trust passport for SMEs to access banks and international exporters.</p>
                        </div>
                        <div className="wwd-card">
                            <div className="wwd-icon">
                                <img src={indIcon} alt="For Individuals" />
                            </div>
                            <h3>For Individuals</h3>
                            <p>Formalizing informal reputation. We verify professional credentials and experience to create portable <span className="text-accent-gold">Trust Passports</span> for global employability.</p>
                        </div>
                        <div className="wwd-card">
                            <div className="wwd-icon">
                                <img src={partIcon} alt="For Partners" />
                            </div>
                            <h3>For Partners</h3>
                            <p>Creating <span className="text-accent-gold">de-risked pipelines</span> for investors, development agencies, and importers seeking verified partners within the AfCFTA trade zones.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Leadership Section */}
            <section className="our-leadership">
                <div className="container leadership-grid">
                    <div className="leadership-image-wrap">
                        <img src={founderImg} alt="Tsonam Cleanse Akpeloo" className="leader-img" />
                        <div className="leader-nameplate">
                            <h3>Tsonam Cleanse Akpeloo</h3>
                            <span className="leader-title">FOUNDER & CEO</span>
                        </div>
                    </div>
                    <div className="leadership-content">
                        <h2>Our Leadership</h2>
                        <p className="leader-intro">
                            A serial entrepreneur and digital transformation expert with over 15 years of experience in African technology ecosystems. Tsonam has been at the forefront of policy advocacy for the AfCFTA and private sector development.
                        </p>
                        <p className="leader-vision">
                            His vision for Kadodo Africa stems from a deep commitment to industrialization and the belief that verified data is the most valuable currency for Africa's economic resurgence.
                        </p>
                        <div className="leader-badges">
                            <div className="leader-badge">
                                <CheckCircle2 size={18} className="badge-check" /> <span>Chair, AGI Greater Accra</span>
                            </div>
                            <div className="leader-badge">
                                <CheckCircle2 size={18} className="badge-check" /> <span>Digital Africa Ambassador</span>
                            </div>
                            <div className="leader-badge">
                                <CheckCircle2 size={18} className="badge-check" /> <span>AfCFTA Policy Consultant</span>
                            </div>
                            <div className="leader-badge">
                                <CheckCircle2 size={18} className="badge-check" /> <span>UN SDSN Fellow</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Operational Leadership Section */}
            <section className="operational-leadership">
                <div className="container">
                    <div className="section-header-centered">
                        <h2 className="section-title-large">Operational Leadership</h2>
                    </div>
                    <div className="operational-grid">
                        <div className="op-card">
                            <div className="op-image-circle">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&auto=format&fit=crop" alt="Chief Technology Officer" />
                            </div>
                            <h3>Chief Technology Officer</h3>
                            <span className="op-subtitle">Product & Engineering</span>
                        </div>
                        <div className="op-card">
                            <div className="op-image-circle">
                                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=400&auto=format&fit=crop" alt="Head of Sales & Marketing" />
                            </div>
                            <h3>Head of Sales & Marketing</h3>
                            <span className="op-subtitle">Growth & Expansion</span>
                        </div>
                        <div className="op-card">
                            <div className="op-image-circle">
                                <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=400&h=400&auto=format&fit=crop" alt="Head of Operations & Compliance" />
                            </div>
                            <h3>Head of Operations & Compliance</h3>
                            <span className="op-subtitle">Regulatory Affairs</span>
                        </div>
                        <div className="op-card">
                            <div className="op-image-circle">
                                <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&h=400&auto=format&fit=crop" alt="Head of Strategic Partnerships" />
                            </div>
                            <h3>Head of Strategic Partnerships</h3>
                            <span className="op-subtitle">Global Ecosystems</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Partners Section */}
            <section className="partners-marquee-section">
                <div className="container">
                    <div className="section-header-centered">
                        <span className="section-tag">Strategic Alignment & Global Partners</span>
                    </div>
                    <div className="marquee-wrapper">
                        <div className="marquee-content">
                            {[sponsor1, sponsor2, sponsor3, sponsor1, sponsor2, sponsor3].map((logo, idx) => (
                                <div key={idx} className="partner-logo-item">
                                    <img src={logo} alt={`Partner ${idx + 1}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Us (CTA) Section */}
            <section className="about-cta">
                <div className="container">
                    <div className="about-cta-card">
                        <h2>Join Us in Building the Future</h2>
                        <p>Whether you are a business seeking growth or a partner seeking impact, Kadodo Africa is your gateway to trust.</p>
                        <div className="about-cta-btns">
                            <button className="btn-primary-gold">
                                Get Verified Today <ArrowRight size={20} />
                            </button>
                            <button className="btn-secondary-outline">
                                Contact Our Team
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
