import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Button from './Button';
import './Ghana.css';

// Assets
import fingerprintImg from '../assets/fingerprint.png';
import graLogo from '../assets/GRA.png';
import niaLogo from '../assets/NIA.png';
import orcLogo from '../assets/ORC.png';
import ssnitLogo from '../assets/SSNIT.png';
import businessPathIcon from '../assets/newimages/Business.png';
import individualsPathIcon from '../assets/newimages/Individuals.png';
import kadodomarketplace from '../assets/kadodomarketplace.png';
import informalsector from '../assets/informalsector.png';
import agiLogo from '../assets/agi.png';
import cccLogo from '../assets/ccc.png';
import geaLogo from '../assets/ghanaemploymentassociation.png';

const Ghana: React.FC = () => {
    const navigate = useNavigate();
    const regulatoryLogos = [
        { src: orcLogo, alt: 'Office of the Registrar of Companies' },
        { src: niaLogo, alt: 'National Identification Authority' },
        { src: graLogo, alt: 'Ghana Revenue Authority' },
        { src: ssnitLogo, alt: 'SSNIT' },
    ];

    // Double the logos for a seamless marquee loop
    const marqueeLogos = [...regulatoryLogos, ...regulatoryLogos, ...regulatoryLogos];

    return (
        <div className="ghana-page">
            {/* Hero Section */}
            <section className="gh-hero">
                <div className="container gh-hero-grid">
                    <div className="gh-hero-content">
                        <motion.span
                            className="gh-gateway-tag"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            OFFICIAL GHANA GATEWAY
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Ghana's Trusted Digital <br /> Verification Platform
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Empowering Ghanaian businesses and professionals to participate in the $2.5T AfCFTA market with validated, secure digital identities.
                        </motion.p>
                        <motion.div
                            className="gh-hero-actions"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <Button
                                variant="secondary"
                                size="lg"
                                className="btn-gh-primary"
                                onClick={() => navigate('/business')}
                            >
                                VERIFY BUSINESS
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="btn-gh-outline"
                                onClick={() => navigate('/individual-verification')}
                            >
                                VERIFY INDIVIDUAL
                            </Button>
                        </motion.div>
                    </div>
                    <div className="gh-hero-visual">
                        <motion.img
                            src={fingerprintImg}
                            alt="Digital Verification"
                            className="gh-fingerprint-visual"
                            animate={{
                                y: [0, -15, 0],
                                filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Strategic Regulatory Integration (Marquee) */}
            <section className="gh-regulatory-integration">
                <div className="container">
                    <h2 className="gh-section-title-ghana">STRATEGIC REGULATORY INTEGRATION</h2>
                </div>
                <div className="gh-marquee-wrapper">
                    <div className="gh-marquee-content">
                        {marqueeLogos.map((logo, index) => (
                            <div key={index} className="gh-marquee-item">
                                <img src={logo.src} alt={logo.alt} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Choose Your Path Section */}
            <section className="gh-choose-path">
                <div className="container">
                    <div className="gh-path-header">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            Choose Your Path
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            Select the verification framework that fits your profile
                        </motion.p>
                    </div>

                    <div className="gh-path-grid">
                        {/* Business Path */}
                        <motion.div
                            className="gh-path-card"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="gh-path-visual-wrapper">
                                <img src={businessPathIcon} alt="Business" className="gh-path-isometric-icon" />
                            </div>
                            <div className="gh-path-card-content">
                                <h3>For Companies & SMEs</h3>
                                <p>Prove your business is legal, compliant, and investment-ready. We validate your registration, tax status, and leadership.</p>

                                <div className="gh-checks-list-container">
                                    <span className="gh-checks-label">KEY CHECKS</span>
                                    <ul className="gh-checks-list">
                                        <li>
                                            <CheckCircle2 color="#34a853" size={24} />
                                            <span>ORC Certificate</span>
                                        </li>
                                        <li>
                                            <CheckCircle2 color="#34a853" size={24} />
                                            <span>Contact Person</span>
                                        </li>
                                        <li>
                                            <CheckCircle2 color="#34a853" size={24} />
                                            <span>SSNIT & GRA Compliance</span>
                                        </li>
                                    </ul>
                                </div>

                                <Link to="/business" className="gh-path-cta-link">
                                    View Business Plans <ArrowRight size={20} />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Individual Path */}
                        <motion.div
                            className="gh-path-card"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="gh-path-visual-wrapper">
                                <img src={individualsPathIcon} alt="Professionals" className="gh-path-isometric-icon" />
                            </div>
                            <div className="gh-path-card-content">
                                <h3>For Professionals & Freelancers</h3>
                                <p>Turn your reputation into a verifiable asset. Perfect for gig workers, consultants, and traders.</p>

                                <div className="gh-checks-list-container">
                                    <span className="gh-checks-label">KEY CHECKS</span>
                                    <ul className="gh-checks-list">
                                        <li>
                                            <CheckCircle2 color="#34a853" size={24} />
                                            <span>Ghana Card (NIA)</span>
                                        </li>
                                        <li>
                                            <CheckCircle2 color="#34a853" size={24} />
                                            <span>Education History</span>
                                        </li>
                                        <li>
                                            <CheckCircle2 color="#34a853" size={24} />
                                            <span>Work Experience</span>
                                        </li>
                                    </ul>
                                </div>

                                <Link to="/individual-verification" className="gh-path-cta-link">
                                    View Individual Plans <ArrowRight size={20} />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="gh-how-it-works">
                <div className="container">
                    <h2 className="gh-section-title-dark">How It Works</h2>
                    <div className="gh-steps-grid">
                        <motion.div
                            className="gh-step-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="gh-step-number dark">1</div>
                            <h3>Register & Upload</h3>
                            <p>Submit your ORC documents or Ghana Card credentials via our secure portal.</p>
                        </motion.div>

                        <motion.div
                            className="gh-step-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="gh-step-number gold">2</div>
                            <h3>Dual-Check Verification</h3>
                            <p>Real-time API validation with national databases combined with physical inspection by certified officers.</p>
                        </motion.div>

                        <motion.div
                            className="gh-step-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="gh-step-number dark">3</div>
                            <h3>Get Kadodo Number</h3>
                            <p>Receive your digital ID and trust badge, making you instantly visible to global trade partners.</p>
                        </motion.div>
                    </div>
                </div>
            </section>
            {/* Marketplace Section */}
            <section className="gh-marketplace-banner">
                <div className="container gh-marketplace-grid">
                    <div className="gh-marketplace-content">
                        <p className="gh-marketplace-text-block">
                            <span className="gh-marketplace-title-inline">The Kadodo Marketplace</span>
                            Once verified, Ghanaian businesses gain exclusive access to our regional marketplace. Connect with verified importers from across Africa and Europe who are actively seeking compliant suppliers.
                        </p>
                        <Button
                            variant="secondary"
                            size="lg"
                            className="gh-btn-marketplace"
                            onClick={() => navigate('/solutions')}
                        >
                            Learn About Marketplace Onboarding
                        </Button>
                    </div>
                    <div className="gh-marketplace-visual">
                        <img src={kadodomarketplace} alt="Global Marketplace" />
                    </div>
                </div>
            </section>

            {/* Informal Sector Section */}
            <section className="gh-informal-sector">
                <div className="container gh-informal-grid">
                    <div className="gh-informal-visual">
                        <img src={informalsector} alt="Informal Sector Market" />
                    </div>
                    <div className="gh-informal-content">
                        <span className="gh-informal-tag">INFORMAL SECTOR FOCUS</span>
                        <p className="gh-informal-text-block">
                            <span className="gh-informal-title-inline">Are You Operating In The Informal Sector? </span>
                            <span className="gh-informal-subtitle-inline">No formal business registration? No problem. </span>
                            Start by getting your Individual Profile verified. This provides the foundational credibility you need to build trust with customers and partners, access micro-finance, and begin your journey toward formalization whether you operate in the busy markets of Makola or Kejetia, or just a convenience store in front of your house.
                        </p>
                        <Button
                            variant="secondary"
                            size="lg"
                            className="gh-btn-informal"
                            onClick={() => navigate('/individual-verification')}
                        >
                            Start Individual Verification
                        </Button>
                    </div>
                </div>
            </section>

            {/* Strategic Partners Section */}
            <section className="gh-partners">
                <div className="container">
                    <div className="gh-partners-grid">
                        <div className="gh-partner-item">
                            <img src={agiLogo} alt="AGI - Association of Ghana Industries" />
                        </div>
                        <div className="gh-partner-item">
                            <img src={cccLogo} alt="GNCCI - Ghana National Chamber of Commerce & Industry" />
                        </div>
                        <div className="gh-partner-item">
                            <img src={geaLogo} alt="GEA - Ghana Employers' Association" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Ghana;
