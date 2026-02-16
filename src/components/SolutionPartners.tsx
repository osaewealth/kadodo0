import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './SolutionPartners.css';

// Assets
import heroBg from '../assets/solutionpartnershero.jpg';
import mitigateIcon from '../assets/newimages/Risk_1.png';
import accelerateIcon from '../assets/newimages/Processing_1.png';
import impactIcon from '../assets/ensureicon.png';
import Challenges from './Challenges';

// New Project Assets
import dealFlowSME from '../assets/newimages/SMEs.png';
import supplierVerify from '../assets/newimages/Verify.png';
import partnersIntegrity from '../assets/newimages/Partners.png';

// Flow Icons
import mandateIcon from '../assets/newimages/Processing_1.png';
import verifyIcon from '../assets/newimages/Verify.png';
import engageIcon from '../assets/newimages/Partners.png';
import apiIcon from '../assets/newimages/Comprehensive.png';


const SolutionPartners: React.FC = () => {
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

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="solution-partners">
            {/* Hero Section */}
            <section className="partners-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${heroBg})` }}>
                <div className="container">
                    <motion.div
                        className="partners-hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1>De-Risk Your Engagement <br /> with the Global South</h1>
                        <p>
                            The institutional-grade due diligence infrastructure for verification
                            of suppliers, investment targets, and project beneficiaries across
                            Africa and the Caribbean.
                        </p>
                        <div className="hero-actions">
                            <button className="btn-gold" onClick={() => navigate('/contact-us')}>Partner Request Access</button>
                            <button className="btn-outline-white" onClick={() => navigate('/legal')}>View Compliance Standards</button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Feature Cards Section */}
            <section className="partners-features">
                <div className="container">
                    <motion.div
                        className="features-grid"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        {/* Mitigate Fraud */}
                        <motion.div className="partner-feature-card" variants={fadeInUp}>
                            <div className="feature-icon">
                                <img src={mitigateIcon} alt="Mitigate Fraud" />
                            </div>
                            <h3>Mitigate Fraud</h3>
                            <p>
                                Utilize our dual-check system combining real-time API verification
                                with local field audits to eliminate shadow entities and identity
                                fraud in high-growth markets.
                            </p>
                        </motion.div>

                        {/* Accelerate Onboarding */}
                        <motion.div className="partner-feature-card" variants={fadeInUp}>
                            <div className="feature-icon">
                                <img src={accelerateIcon} alt="Accelerate Onboarding" />
                            </div>
                            <h3>Accelerate Onboarding</h3>
                            <p>
                                Reduce supplier and investee KYC/KYB cycles from weeks to minutes
                                through automated credential harvesting and digital trust passports.
                            </p>
                        </motion.div>

                        {/* Ensure Impact */}
                        <motion.div className="partner-feature-card" variants={fadeInUp}>
                            <div className="feature-icon">
                                <img src={impactIcon} alt="Ensure Impact" />
                            </div>
                            <h3>Ensure Impact</h3>
                            <p>
                                Track fund disbursement and program efficacy with verifiable digital
                                identities that link development outcomes directly to authenticated beneficiaries.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <Challenges />

            {/* Institutional Solutions Sections */}
            <section className="institutional-solutions">
                <div className="container">
                    {/* Curated Deal Flow */}
                    <motion.div
                        className="institutional-block bg-gold"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                    >
                        <div className="block-image">
                            <img src={dealFlowSME} alt="Curated Deal Flow" />
                        </div>
                        <div className="block-content">
                            <span className="block-subtitle">FOR GLOBAL INVESTORS (VC/PE)</span>
                            <h2 className="block-title">Curated Deal Flow</h2>
                            <p className="block-description">
                                Access a pre-vetted pipeline of African startups and SMEs
                                with institutional-grade compliance reports already attached to their profiles.
                            </p>
                            <Link to="/contact-us" className="block-link">Request Investor Deck <ArrowRight size={18} /></Link>
                        </div>
                    </motion.div>

                    {/* Supplier Verification */}
                    <motion.div
                        className="institutional-block bg-lavender"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                    >
                        <div className="block-content">
                            <span className="block-subtitle">FOR IMPORTERS & SUPPLY CHAIN</span>
                            <h2 className="block-title">Supplier Verification</h2>
                            <p className="block-description">
                                Source with confidence. We verify the existence, tax
                                status, and export readiness of suppliers across 15+ African
                                and Caribbean markets.
                            </p>
                            <Link to="/business" className="block-link">Onboarding Your Suppliers <ArrowRight size={18} /></Link>
                        </div>
                        <div className="block-image">
                            <img src={supplierVerify} alt="Supplier Verification" />
                        </div>
                    </motion.div>

                    {/* Program Integrity */}
                    <motion.div
                        className="institutional-block bg-alt"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                    >
                        <div className="block-image">
                            <img src={partnersIntegrity} alt="Program Integrity" />
                        </div>
                        <div className="block-content">
                            <span className="block-subtitle">FOR DEVELOPMENT AGENCIES (NGOS/DFIS)</span>
                            <h2 className="block-title">Program Integrity</h2>
                            <p className="block-description">
                                Ensure your grants and interventions reach the right
                                people. Use our identity stack for transparent beneficiary
                                management and auditing.
                            </p>
                            <Link to="/contact-us" className="block-link">Contact Partnerships <ArrowRight size={18} /></Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Engagement Flow Section */}
            <section className="engagement-flow-section">
                <div className="container">
                    <motion.div
                        className="engagement-header"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                    >
                        <h2 className="engagement-title">THE ENGAGEMENT FLOW</h2>
                    </motion.div>

                    <div className="engagement-process-wrapper">
                        <div className="engagement-line line-1"></div>
                        <div className="engagement-line line-2"></div>

                        <div className="engagement-grid">
                            {/* Step 1 */}
                            <motion.div
                                className="flow-card flow-1"
                                variants={fadeInUp}
                                initial="initial"
                                whileInView="whileInView"
                            >
                                <div className="flow-card-icon">
                                    <img src={mandateIcon} alt="Mandate" />
                                </div>
                                <div className="flow-card-content">
                                    <h3>1. MANDATE</h3>
                                    <p>Define your compliance requirements and verification scope for the project or relationship.</p>
                                </div>
                            </motion.div>

                            {/* Step 2 */}
                            <motion.div
                                className="flow-card flow-2"
                                variants={fadeInUp}
                                initial="initial"
                                whileInView="whileInView"
                            >
                                <div className="flow-card-icon">
                                    <img src={verifyIcon} alt="Verify" />
                                </div>
                                <div className="flow-card-content">
                                    <h3>2. VERIFY</h3>
                                    <p>Kadodo conducts multi-layered digital and physical audits to validate entities and individuals.</p>
                                </div>
                            </motion.div>

                            {/* Step 3 */}
                            <motion.div
                                className="flow-card flow-3"
                                variants={fadeInUp}
                                initial="initial"
                                whileInView="whileInView"
                            >
                                <div className="flow-card-icon">
                                    <img src={engageIcon} alt="Engage" />
                                </div>
                                <div className="flow-card-content">
                                    <h3>3. ENGAGE</h3>
                                    <p>Integrate verified data into your systems and begin operations with complete confidence.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Kadodo API Section */}
            <section className="kadodo-api-section">
                <div className="container api-container">
                    <motion.div
                        className="api-content"
                        variants={fadeInUp}
                        initial="initial"
                        whileInView="whileInView"
                    >
                        <span className="coming-soon-badge">Coming Soon</span>
                        <h2 className="api-title">Built for Scale: The Kadodo API</h2>
                        <p className="api-description">
                            Integrate institutional trust directly into your ERP or CRM. Verify hundreds
                            of suppliers or beneficiaries automatically via our secure infrastructure.
                        </p>
                        <div className="api-features">
                            <div className="api-feature">
                                <CheckCircle2 size={24} className="feature-check" />
                                <span>Real-time Regulatory Queries</span>
                            </div>
                            <div className="api-feature">
                                <CheckCircle2 size={24} className="feature-check" />
                                <span>Webhooks for Status Updates</span>
                            </div>
                            <div className="api-feature">
                                <CheckCircle2 size={24} className="feature-check" />
                                <span>End-to-End Encryption</span>
                            </div>
                        </div>
                        <button className="btn-api-waitlist" onClick={() => navigate('/contact-us')}>Join API Waitlist</button>
                    </motion.div>

                    <motion.div
                        className="api-visual"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src={apiIcon} alt="Kadodo API Infrastructure" />
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default SolutionPartners;
