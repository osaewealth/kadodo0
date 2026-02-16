import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Shield, Globe, MessageSquare, Lock, User } from 'lucide-react';
import './SolutionIndividual.css';

// Assets
import careerIcon from '../assets/carreermobilityicon.png';
import financeIcon from '../assets/newimages/cash.png';
import teamIcon from '../assets/teamicon.png';
import shieldIndividual from '../assets/shield individuals.png';
import credibilityWoman from '../assets/buildyourprofessionalwoman.png';
import identityIcon from '../assets/newimages/ID.png';
import standardIcon from '../assets/standardlayericon.png';
import premiumIcon from '../assets/premiumlayericon.png';

const SolutionIndividual: React.FC = () => {
    const navigate = useNavigate();

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    const staggerContainer = {
        initial: {},
        whileInView: {
            transition: {
                staggerChildren: 0.2
            }
        },
        viewport: { once: true }
    };

    const scrollToRegion = () => {
        const element = document.getElementById('region-selection');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="solution-individual">
            {/* Hero Section */}
            <section className="solution-individual-hero">
                <div className="container">
                    <motion.div
                        className="hero-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>Global Individual Verification</h1>
                        <p>
                            Your Digital Trust Passport. Authenticate your professional identity
                            and unlock global opportunities across Africa and the Caribbean.
                        </p>
                        <button className="btn-region" onClick={scrollToRegion}>Select Your Region</button>
                    </motion.div>

                    <motion.div
                        className="hero-right"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <div className="shield-container">
                            {/* Floating Icons */}
                            <motion.div
                                className="floating-icon"
                                style={{ top: '5%', right: '20%' }}
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <Shield size={20} color="#fff" />
                            </motion.div>
                            <motion.div
                                className="floating-icon"
                                style={{ top: '25%', left: '0%' }}
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <MessageSquare size={20} color="#fff" />
                            </motion.div>
                            <motion.div
                                className="floating-icon"
                                style={{ bottom: '10%', left: '15%' }}
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity }}
                            >
                                <Lock size={20} color="#fff" />
                            </motion.div>
                            <motion.div
                                className="floating-icon"
                                style={{ top: '45%', right: '0%' }}
                                animate={{ y: [0, 12, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity }}
                            >
                                <Globe size={20} color="#fff" />
                            </motion.div>
                            <motion.div
                                className="floating-icon"
                                style={{ bottom: '25%', right: '5%' }}
                                animate={{ y: [0, -12, 0] }}
                                transition={{ duration: 3.8, repeat: Infinity }}
                            >
                                <User size={20} color="#fff" />
                            </motion.div>

                            <img src={shieldIndividual} alt="Global Verification Shield" className="shield-main" />

                            {/* Decorative Network Lines (SVG) */}
                            <svg className="network-lines" viewBox="0 0 400 400">
                                <motion.circle cx="200" cy="200" r="160" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
                                <motion.circle cx="200" cy="200" r="120" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
                                <line x1="200" y1="200" x2="330" y2="100" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                                <line x1="200" y1="200" x2="100" y2="150" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                                <line x1="200" y1="200" x2="150" y2="330" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                                <line x1="200" y1="200" x2="350" y2="250" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                                <line x1="200" y1="200" x2="300" y2="350" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section className="solution-features">
                <div className="container">
                    <motion.div
                        className="features-grid"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        {/* Career Mobility */}
                        <motion.div className="feature-card" variants={fadeInUp}>
                            <div className="feature-icon-box">
                                <img src={careerIcon} alt="Career Mobility" />
                            </div>
                            <h3>Career Mobility</h3>
                            <p>
                                Seamlessly transition between markets with a portable identity
                                that confirms your professional standing to employers worldwide.
                            </p>
                        </motion.div>

                        {/* Access Finance */}
                        <motion.div className="feature-card" variants={fadeInUp}>
                            <div className="feature-icon-box">
                                <img src={financeIcon} alt="Access Finance" />
                            </div>
                            <h3>Access Finance</h3>
                            <p>
                                Build a credit-ready profile. Use your verified status to
                                de-risk yourself for personal loans, mortgages, and business capital.
                            </p>
                        </motion.div>

                        {/* Build Trust */}
                        <motion.div className="feature-card" variants={fadeInUp}>
                            <div className="feature-icon-box">
                                <img src={teamIcon} alt="Build Trust" />
                            </div>
                            <h3>Build Trust</h3>
                            <p>
                                Stand out in the digital economy. A verified Kadodo Number
                                proves you are exactly who you say you are.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            {/* Credibility Section */}
            <section className="credibility-section">
                <div className="container credibility-container">
                    <motion.div
                        className="credibility-visual"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src={credibilityWoman} alt="Professional Credibility" className="credibility-woman-img" />
                    </motion.div>

                    <motion.div
                        className="credibility-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="credibility-title">Build Your Professional Credibility</h2>

                        <div className="layers-container">
                            {/* Identity Layer */}
                            <motion.div className="layer-card" variants={fadeInUp}>
                                <div className="layer-icon">
                                    <img src={identityIcon} alt="Identity Layer" />
                                </div>
                                <div className="layer-text">
                                    <h3>Identity Layer</h3>
                                    <p>Basic verification of national ID, biometrics, and contact information. The foundation of your trust profile.</p>
                                </div>
                            </motion.div>

                            {/* Standard Layer */}
                            <motion.div className="layer-card" variants={fadeInUp}>
                                <div className="layer-icon">
                                    <img src={standardIcon} alt="Standard Layer" />
                                </div>
                                <div className="layer-text">
                                    <h3>Standard Layer</h3>
                                    <p>Validation of work history and professional certifications through institutional cross-referencing.</p>
                                </div>
                            </motion.div>

                            {/* Premium Layer */}
                            <motion.div className="layer-card" variants={fadeInUp}>
                                <div className="layer-icon">
                                    <img src={premiumIcon} alt="Premium Layer" />
                                </div>
                                <div className="layer-text">
                                    <h3>Premium Layer</h3>
                                    <p>The gold standard. Includes full background checks, financial KYC, and high-level security clearance for elite contracts.</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* Dual-Verification Engine */}
            <section className="verification-engine-section">
                <div className="container centered">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="engine-title">Dual-Verification Engine</h2>
                        <p className="engine-desc">
                            We don't just check documents; we verify people. Our engine combines high-tech biometric face-matching with institutional validation.
                            We connect directly with universities, professional bodies, and government databases to ensure your credentials are unimpeachable.
                        </p>
                        <div className="engine-pills">
                            <span className="pill pill-bordered">API Cross-Reference</span>
                            <span className="pill pill-bordered">In-Person Validation</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Select Your Region */}
            <section id="region-selection" className="region-selection-section">
                <div className="container centered">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="region-title">Select Your Region</h2>
                        <p className="region-subtitle">Choose your location to start your individual verification journey.</p>

                        <div className="region-cards">
                            <div className="region-card">
                                <h3>For Individuals in Ghana</h3>
                                <p>Access local employment benefits and cross-border trade opportunities within West Africa</p>
                                <button className="btn-navy" onClick={() => navigate('/ghana')}>Verify in Ghana</button>
                            </div>
                            <div className="region-card">
                                <h3>For Individuals in CARICOM</h3>
                                <p>Unlocking the bridge between the Caribbean and African trade corridors. Early access coming soon.</p>
                                <button className="btn-outline-waitlist">Join Waitlist</button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Marketplace CTA */}
            <section className="marketplace-cta-section">
                <div className="container">
                    <motion.div
                        className="marketplace-box"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="marketplace-title">Sell Your Skills on Kadodo Marketplace</h2>
                        <p className="marketplace-desc">Join the verified community of professionals offering services across the continent.</p>
                        <button className="btn-marketplace" onClick={() => navigate('/solutions')}>Learn About Marketplace Onboarding</button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default SolutionIndividual;
