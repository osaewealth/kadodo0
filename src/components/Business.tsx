import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import Button from './Button';
import './Business.css';

// Assets
import globeNetwork from '../assets/newimages/Globe Network.png';
import shieldLock from '../assets/newimages/Verifyy.png';
import globeStand from '../assets/newimages/Globe.png';
import verifyIcon from '../assets/newimages/Verify.png';
import partnerIcon from '../assets/newimages/Partner.png';
import technicalIcon from '../assets/newimages/Technical.png';
import receivedIcon from '../assets/newimages/Recieved.png';
import cashIcon from '../assets/newimages/cash.png';
import levelOfTrustImg from '../assets/leveloftrust.png';

const Business: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="business-page">
            {/* Hero Section */}
            <section className="business-hero">
                <div className="container hero-flex">
                    <div className="hero-visual">
                        <motion.img
                            src={globeNetwork}
                            alt="Global Network"
                            className="orbiting-globe"
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 5, 0]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </div>
                    <div className="hero-text">
                        <motion.h1
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Global Business Verification
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Eliminating the "High Risk" label for SMEs. We bridge the trust
                            gap between Africa and the Caribbean with digital authentication
                            that fuels legitimate trade.
                        </motion.p>
                        <motion.div
                            className="hero-btns"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Button
                                variant="secondary"
                                size="lg"
                                className="btn-hero-select"
                                onClick={() => document.getElementById('select-region')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Select Your Region
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="value-prop">
                <div className="container">
                    <h2 className="section-title-centered">The Value of Verification</h2>
                    <div className="value-grid">
                        <motion.div className="value-card" whileHover={{ y: -10 }}>
                            <div className="value-icon-wrapper">
                                <img src={shieldLock} alt="Access Capital" className="value-card-icon" />
                            </div>
                            <h3>Access Capital</h3>
                            <p>Lower your risk profile for banks and investors. Verified data is the key to unlocking credit lines and expansion capital.</p>
                        </motion.div>
                        <motion.div className="value-card" whileHover={{ y: -10 }}>
                            <div className="value-icon-wrapper">
                                <img src={receivedIcon} alt="Win Contracts" className="value-card-icon" />
                            </div>
                            <h3>Win Contracts</h3>
                            <p>Qualify for high-value government and corporate procurement opportunities that require rigorous compliance proof.</p>
                        </motion.div>
                        <motion.div className="value-card" whileHover={{ y: -10 }}>
                            <div className="value-icon-wrapper">
                                <img src={globeStand} alt="Trade Globally" className="value-card-icon" />
                            </div>
                            <h3>Trade Globally</h3>
                            <p>Bridge the trust gap with European and Caribbean partners. Prove your existence and operational integrity instantly.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Levels of Trust */}
            <section className="trust-levels">
                <div className="container">
                    <h2 className="section-title-left">Choose Your Level of Trust</h2>
                    <p className="section-subtitle-left">Our verification framework allows you to build credibility as you grow.</p>
                    <div className="trust-flex">
                        <div className="tiers-list">
                            <div className="tier-item gold-border">
                                <img src={verifyIcon} alt="Basic" className="tier-icon-img" />
                                <div className="tier-info">
                                    <h4>Basic Verification (The Foundation)</h4>
                                    <p><strong>Focus: Existence.</strong> Includes Legal Registration check, Contact Person verification, and Business Profile validation.</p>
                                </div>
                            </div>
                            <div className="tier-item gold-border">
                                <img src={partnerIcon} alt="Standard" className="tier-icon-img" />
                                <div className="tier-info">
                                    <h4>Standard/Trust+ (The Compliance Layer)</h4>
                                    <p><strong>Focus: Good Standing.</strong> Includes Tax Compliance, Trade Association Membership, and Director Identity checks.</p>
                                </div>
                            </div>
                            <div className="tier-item dark-tier">
                                <img src={technicalIcon} alt="Global" className="tier-icon-img" />
                                <div className="tier-info">
                                    <h4 className="text-white">Global Verification (The Gold Standard)</h4>
                                    <p className="text-light"><strong>Focus: Operations & Impact.</strong> Includes Physical Site Inspection, CSR/Sustainability Audit, Export Readiness, and UBO (Ultimate Beneficial Owner) checks.</p>
                                </div>
                            </div>
                        </div>
                        <div className="trust-visual-container">
                            <div className="visual-bg-container">
                                <img src={levelOfTrustImg} alt="Trust Levels" className="trust-main-visual" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenges We Solve */}
            <section className="challenges-solve">
                <div className="container">
                    <h2 className="section-title-centered">Barriers to Global Trade</h2>
                    <div className="challenges-grid">
                        <div className="challenge-card">
                            <img src={cashIcon} alt="Financial Exclusion" className="challenge-icon" />
                            <h3>Financial Exclusion</h3>
                            <div className="challenge-sub">THE CHALLENGE</div>
                            <p>Banks classify 90% of SMEs as "High Risk" due to a lack of verifiable data, denying them capital.</p>
                            <div className="solution-box">
                                <div className="solution-tag">OUR SOLUTION</div>
                                <p>We provide the authenticated profiles banks need to de-risk lending and unlock credit.</p>
                            </div>
                        </div>
                        <div className="challenge-card">
                            <img src={globeStand} alt="The Black Box Risk" className="challenge-icon" />
                            <h3>The "Black Box" Risk</h3>
                            <div className="challenge-sub">THE CHALLENGE</div>
                            <p>European and global partners cannot verify local African suppliers, stalling cross-border trade.</p>
                            <div className="solution-box">
                                <div className="solution-tag">OUR SOLUTION</div>
                                <p>We offer definitive proof of existence and compliance, acting as the "Trust Bridge" for imports/exports.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dual-Check System */}
            <section className="dual-check">
                <div className="container dual-grid">
                    <div className="shield-side">
                        <img src={verifyIcon} alt="Verification System" className="large-shield" />
                    </div>
                    <div className="dual-info">
                        <h2>Dual-Check Verification System</h2>
                        <p>We go deeper than standard KYC. Our proprietary engine combines real-time API integration with government registries and physical field inspections by certified verification officers.</p>
                        <p>This hybrid approach ensures that digital data matches real-world operations, providing a level of certainty that satisfies global banking standards.</p>
                        <ul className="check-list">
                            <li><CheckCircle2 size={20} className="check-icon" /> Zero Data Forgery Risk</li>
                            <li><CheckCircle2 size={20} className="check-icon" /> Physical Site Confirmation</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Select Your Region */}
            <section id="select-region" className="select-region">
                <div className="container">
                    <h2 className="section-title-centered">Select Your Region</h2>
                    <p className="section-subtitle-centered">Regional gateways tailored to local regulatory frameworks.</p>
                    <div className="region-cards-grid">
                        <div className="region-card">
                            <h3>For Businesses in Ghana</h3>
                            <p>Full integration with GRA and Registrar General's Department.</p>
                            <Button
                                variant="secondary"
                                className="btn-full"
                                onClick={() => navigate('/ghana')}
                            >
                                Verify in Ghana
                            </Button>
                        </div>
                        <div className="region-card">
                            <h3>For Businesses in CARICOM</h3>
                            <p>Unlocking Caribbean trade corridors. Currently in early access.</p>
                            <Button variant="outline" className="btn-full">Join Waitlist</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Business;
