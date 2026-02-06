import React from 'react';
import './AboutUs.css';
import aboutHero from '../assets/aboutushero.jpg';
import busIcon from '../assets/image1011271012633-dph-200h.png';
import indIcon from '../assets/image1573536412633-mflj-200h.png';
import partIcon from '../assets/image1399075712686-bz2e-200h.png';
import founderImg from '../assets/founder.jpg';
import { CheckCircle2 } from 'lucide-react';

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
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 13V17M3 17V21M3 17H21M21 17V13M21 17V21M7 17V13C7 10.2386 9.23858 8 12 8C14.7614 8 17 10.2386 17 13V17" stroke="#2e2b4f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="12" cy="5" r="2" stroke="#2e2b4f" strokeWidth="2" />
                                    <path d="M8 8L7 6M16 8L17 6" stroke="#2e2b4f" strokeWidth="2" strokeLinecap="round" />
                                </svg>
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
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 15L9 20L12 11M12 8L10 4L4 4L4 15M12 11L15 8M15 8L13 4L20 4L20 12L15 15L12 11M15 15L17 20L21 20" stroke="#a49945" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 21V11" stroke="#a49945" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <h2>Our Mission</h2>
                        <p>To build a decentralized trust infrastructure that authenticates every business and individual in the AfCFTA and Caribbean markets, making cross-border trade seamless, secure, and inclusive.</p>
                    </div>

                    {/* Our Vision */}
                    <div className="mv-card vision-light">
                        <div className="mv-icon">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 18H15M10 21H14M12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15ZM12 15V18M12 21H12.01M17 12H19M5 12H7M12 5V7M15.5355 8.46447L16.9497 7.05025M7.05025 16.9497L8.46447 15.5355M15.5355 15.5355L16.9497 16.9497M7.05025 7.05025L8.46447 8.46447" stroke="#2e2b4f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
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
        </div>
    );
};

export default AboutUs;
