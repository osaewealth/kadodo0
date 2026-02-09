import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Fingerprint, GraduationCap, IdCard, Briefcase } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import './Solutions.css';
import handshakeImage from '../assets/solutionpageheropicture.png';
import manImage from '../assets/mannnn.png';

// Onboarding Icons removed as per latest design update

// Enterprise Process Icons
import mandateIcon from '../assets/newimages/Processing_1.png';
import verifyIcon from '../assets/newimages/Verify.png';
import engageIcon from '../assets/newimages/Partners.png';

// Individual Icons are now Lucide components

const SolutionsHero: React.FC = () => {
    const navigate = useNavigate();
    const features = [
        "Business & Leadership Profile Check",
        "Business Registration Verification",
        "Social Security & Insurance",
        "Training Certification Verification",
        "Physical Site Inspection",
        "Contact Person Verification",
        "Tax Compliance Verification",
        "Trade/Association Membership",
        "CSR & Sustainability"
    ];

    return (
        <section className="solutions-hero">
            <div className="container solutions-hero-container">
                <motion.div
                    className="solutions-hero-visual"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="handshake-frame">
                        <img src={handshakeImage} alt="Business Handshake" />
                    </div>
                </motion.div>

                <motion.div
                    className="solutions-hero-content"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="solutions-hero-tag">ENTERPRISE GRADE TRUST</div>
                    <h1 className="solutions-hero-title">
                        For Businesses: <br /> Comprehensive 360° Verification
                    </h1>
                    <p className="solutions-hero-subtitle">
                        We go beyond basic checks. Our multi-layered verification process covers regulatory, financial, and operational compliance to prove your business is investment-ready.
                    </p>

                    <div className="solutions-hero-features">
                        <div className="features-column">
                            {features.slice(0, 5).map((feature, index) => (
                                <div key={index} className="solutions-hero-feature">
                                    <CheckCircle2 className="feature-check-icon" size={20} />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <div className="features-column">
                            {features.slice(5).map((feature, index) => (
                                <div key={index} className="solutions-hero-feature">
                                    <CheckCircle2 className="feature-check-icon" size={20} />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="btn-solutions-cta" onClick={() => navigate('/business')}>
                        Start Business Verification <ArrowRight size={20} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

const IndividualsSection: React.FC = () => {
    const navigate = useNavigate();
    const features = [
        { icon: <Fingerprint size={28} />, title: "Identity Authentication" },
        { icon: <GraduationCap size={28} />, title: "Academic Degree Verification" },
        { icon: <IdCard size={28} />, title: "Professional License Check" },
        { icon: <Briefcase size={28} />, title: "Employment History Validation" }
    ];

    return (
        <section className="individuals-section">
            <div className="container individuals-container">
                <motion.div
                    className="individuals-content"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="individuals-title">
                        For Individuals: <br /> Your Professional Trust Passport
                    </h2>
                    <p className="individuals-subtitle">
                        Carry your credentials with you across borders. We help professionals prove their expertise and identity to global employers and institutions.
                    </p>

                    <div className="individuals-features">
                        {features.map((feature, index) => (
                            <div key={index} className="individual-feature-card">
                                <div className="feature-icon-box">
                                    {feature.icon}
                                </div>
                                <span className="feature-title">{feature.title}</span>
                            </div>
                        ))}
                    </div>

                    <button className="btn-individuals-cta" onClick={() => navigate('/individual-verification')}>
                        Get Individually Verified <ArrowRight size={20} />
                    </button>
                </motion.div>

                <motion.div
                    className="individuals-visual"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="individuals-image-wrapper">
                        <div className="individuals-single-image">
                            <img src={manImage} alt="Professional Trust" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const MarketplaceOnboarding: React.FC = () => {
    const steps = [
        {
            number: "1",
            title: "Verify Business",
            description: "Submit your legal documents for a comprehensive background and compliance check.",
            color: "#2b2a4a"
        },
        {
            number: "2",
            title: "Receive Kadodo Number",
            description: "Your unique digital trust ID is issued and verified on-chain.",
            color: "#a49945"
        },
        {
            number: "3",
            title: "Activate Store",
            description: "Instantly sync your status with partner marketplaces and start trading.",
            color: "#1e293b"
        }
    ];

    return (
        <section className="onboarding-section">
            <div className="container onboarding-container">
                <motion.div
                    className="onboarding-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="onboarding-title">Marketplace Onboarding</h2>
                    <p className="onboarding-subtitle">
                        Fast-track your access to digital marketplaces through our 3-step trust flow.
                    </p>
                </motion.div>

                <div className="onboarding-steps">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="onboarding-step"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="step-number-container">
                                <div className="step-number" style={{ backgroundColor: step.color }}>
                                    {step.number}
                                </div>
                            </div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const EnterpriseProcess: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section className="enterprise-section">
            <div className="container enterprise-container">
                <motion.div
                    className="enterprise-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="enterprise-tag">For Enterprises & Partners</span>
                    <h2 className="enterprise-title">A 3-Step Process for European Entities</h2>
                </motion.div>

                <div className="enterprise-process-wrapper">
                    <div className="process-line-connector line-1"></div>
                    <div className="process-line-connector line-2"></div>

                    <div className="enterprise-process-grid">
                        {/* Step 1 */}
                        <motion.div
                            className="process-card card-1"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="process-card-icon-box box-1">
                                <img src={mandateIcon} alt="Mandate" />
                            </div>
                            <div className="process-card-content">
                                <h3>1. MANDATE</h3>
                                <p>Ask your identified African partner, supplier, applicant or beneficiary for their Kadodo Number as a standard part of your vetting process.</p>
                            </div>
                        </motion.div>

                        {/* Step 2 */}
                        <motion.div
                            className="process-card card-2"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="process-card-icon-box box-2">
                                <img src={verifyIcon} alt="Verify" />
                            </div>
                            <div className="process-card-content">
                                <h3>2. VERIFY</h3>
                                <p>Use our secure portal to check their verified status and access a comprehensive KYC report. No onboarding of them into your Kadodo platform; they apply to get verified. We can also handle the entire KYC & KYB.</p>
                            </div>
                        </motion.div>

                        {/* Step 3 */}
                        <motion.div
                            className="process-card card-3"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="process-card-icon-box box-3">
                                <img src={engageIcon} alt="Engage" />
                            </div>
                            <div className="process-card-content">
                                <h3>3. ENGAGE</h3>
                                <p>Invest, import, partner, or deploy funds with confidence, knowing your African counterpart is a legitimate, authenticated entity.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="enterprise-cta-wrapper">
                    <button className="btn-enterprise-cta" onClick={() => navigate('/contact-us')}>
                        Partner With Us <ArrowRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};

const SolutionsCTA: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section className="solutions-cta-section">
            <div className="container">
                <motion.div
                    className="solutions-cta-box"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="cta-title">Ready to Build Trust</h2>
                    <p className="cta-subtitle">Select the verification path that fits our goals today.</p>

                    <div className="cta-buttons">
                        <button className="btn-cta-primary" onClick={() => navigate('/business')}>
                            Start Business Verification <ArrowRight size={20} />
                        </button>
                        <Link to="/individual-verification" className="btn-cta-secondary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                            Start Individual Verification
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const SolutionsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="solutions-page">
            <SolutionsHero />
            <IndividualsSection />
            <MarketplaceOnboarding />
            <EnterpriseProcess />
            <SolutionsCTA />
        </div>
    );
};

export default SolutionsPage;
