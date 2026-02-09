import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, PlusCircle } from 'lucide-react';
import './IndividualVerification.css';

// Assets
import ghanaFlagPricing from '../assets/ghanaflagforpricing.png';
import consumerConfidenceIcon from '../assets/newimages/Verify.png';
import protectSellersIcon from '../assets/bankgradeimage.png';

const IndividualVerification: React.FC = () => {
    const [showBusiness, setShowBusiness] = useState(false);
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="individual-verification">
            {/* Hero Section */}
            <section className="verification-hero">
                <div className="ghana-flag-corner">
                    <img src={ghanaFlagPricing} alt="Ghana Flag" />
                </div>
                <div className="container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="hero-title">Verification Plans for Ghana</h1>
                        <p className="hero-subtitle">
                            Establish personal trust and unlock career or marketplace opportunities.<br />
                            All plans are billed annually in GH₵.
                        </p>

                        <div className="toggle-container">
                            <div className="toggle-outer">
                                <button 
                                    className={`toggle-button ${!showBusiness ? 'active' : ''}`}
                                    onClick={() => setShowBusiness(false)}
                                >
                                    For Individuals
                                </button>
                                <button 
                                    className={`toggle-button ${showBusiness ? 'active' : ''}`}
                                    onClick={() => setShowBusiness(true)}
                                >
                                    For Businesses
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Tiers Section */}
            <section className="pricing-tiers">
                <div className="container">
                    <div className="tiers-grid">
                        {showBusiness ? (
                            <>
                                {/* Business Basic Plan */}
                                <motion.div
                                    className="tier-card"
                                    {...fadeInUp}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                >
                                    <div className="tier-header">
                                        <span className="tier-label">BUSINESS BASIC</span>
                                        <h2 className="tier-price">GH₵100 <span className="period">/ year</span></h2>
                                    </div>
                                    <ul className="tier-features-list">
                                        <li><CheckCircle2 className="icon-check" /> <span>Business Profile Validation</span></li>
                                        <li><CheckCircle2 className="icon-check" /> <span>Legal Registration Check</span></li>
                                        <li><CheckCircle2 className="icon-check" /> <span>Contact Person Verification</span></li>
                                        <li><CheckCircle2 className="icon-check" /> <span>Marketplace Onboarding Verification (Optional)</span></li>
                                    </ul>
                                    <div className="tier-footer">
                                        <a href="https://kadodo.com.gh/sign-up/create?price_plan=5" target="_blank" rel="noopener noreferrer">
                                            <button
                                                className="btn-tier-select"
                                            >
                                                Select Basic
                                            </button>
                                        </a>
                                    </div>
                                </motion.div>

                                {/* Business Standard Plan */}
                                <motion.div
                                    className="tier-card"
                                    {...fadeInUp}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <div className="tier-header">
                                        <span className="tier-label">BUSINESS STANDARD</span>
                                        <h2 className="tier-price">GH₵250 <span className="period">/ year</span></h2>
                                    </div>
                                    <ul className="tier-features-list">
                                        <li className="highlight-feature"><PlusCircle className="icon-plus" /> <span>Everything in Basic+</span></li>
                                        <li><CheckCircle2 className="icon-check" /> <span>Tax Compliance Verification</span></li>
                                        <li><CheckCircle2 className="icon-check" /> <span>Social Security & Insurance</span></li>
                                        <li><CheckCircle2 className="icon-check" /> <span>Marketplace Onboarding Verification (Optional)</span></li>
                                    </ul>
                                    <div className="tier-footer">
                                        <a href="https://kadodo.com.gh/sign-up/create?price_plan=6" target="_blank" rel="noopener noreferrer">
                                            <button
                                                className="btn-tier-select dark"
                                            >
                                                Select Standard
                                            </button>
                                        </a>
                                    </div>
                                </motion.div>

                                {/* Business Premium Plan */}
                                <motion.div
                                    className="tier-card premium"
                                    {...fadeInUp}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    <div className="premium-choice-tag">PREMIUM CHOICE</div>
                                    <div className="tier-header">
                                        <span className="tier-label gold-text">BUSINESS PREMIUM</span>
                                        <h2 className="tier-price">GH₵1,500 <span className="period">/ year</span></h2>
                                    </div>
                                    <ul className="tier-features-list">
                                        <li className="highlight-feature gold-text"><PlusCircle className="icon-plus gold" /> <span>Everything in Standard Plan+</span></li>
                                        <li><CheckCircle2 className="icon-check gold" /> <span>Physical Site Inspection</span></li>
                                        <li><CheckCircle2 className="icon-check gold" /> <span>Enhanced Due Diligence</span></li>
                                        <li><CheckCircle2 className="icon-check gold" /> <span>Priority Support</span></li>
                                        <li><CheckCircle2 className="icon-check gold" /> <span>Marketplace Onboarding Verification (Optional)</span></li>
                                    </ul>
                                    <div className="tier-footer">
                                        <a href="https://kadodo.com.gh/sign-up/create?price_plan=9" target="_blank" rel="noopener noreferrer">
                                            <button
                                                className="btn-tier-select gold-btn"
                                            >
                                                Select Premium
                                            </button>
                                        </a>
                                    </div>
                                </motion.div>
                            </>
                        ) : (
                            <>
                                {/* Individual Basic Plan */}
                                <motion.div
                                    className="tier-card"
                                    {...fadeInUp}
                                    transition={{ duration: 0.6, delay: 0.1 }}
                                >
                                    <div className="tier-header">
                                        <span className="tier-label">INDIVIDUAL BASIC</span>
                                        <h2 className="tier-price">GH₵100 <span className="period">/ year</span></h2>
                                    </div>
                                    <ul className="tier-features-list">
                                        <li><CheckCircle2 className="icon-check" /> <span>Personal Biography</span></li>
                                        <li><CheckCircle2 className="icon-check" /> <span>ID Verification (Ghana Card, Birth Certificate, Passport, or Naturalisation Certificate)</span></li>
                                        <li><CheckCircle2 className="icon-check" /> <span>Education History</span></li>
                                        <li><CheckCircle2 className="icon-check" /> <span>Marketplace Onboarding Verification (Optional)</span></li>
                                    </ul>
                                    <div className="tier-footer">
                                        <a href="https://kadodo.com.gh/sign-up/create?price_plan=4" target="_blank" rel="noopener noreferrer">
                                            <button
                                                className="btn-tier-select"
                                            >
                                                Select Basic
                                            </button>
                                        </a>
                                    </div>
                                </motion.div>

                                {/* Individual Standard Plan */}
                                <motion.div
                                    className="tier-card"
                                    {...fadeInUp}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    <div className="tier-header">
                                        <span className="tier-label">INDIVIDUAL STANDARD</span>
                                        <h2 className="tier-price">GH₵250 <span className="period">/ year</span></h2>
                                    </div>
                                    <ul className="tier-features-list">
                                        <li className="highlight-feature"><PlusCircle className="icon-plus" /> <span>Everything in Basic+</span></li>
                                        <li><CheckCircle2 className="icon-check" /> <span>Work History or Work Experience</span></li>
                                        <li><CheckCircle2 className="icon-check" /> <span>Training Certification</span></li>
                                        <li><CheckCircle2 className="icon-check" /> <span>Marketplace Onboarding Verification (Optional)</span></li>
                                    </ul>
                                    <div className="tier-footer">
                                        <a href="https://kadodo.com.gh/sign-up/create?price_plan=7" target="_blank" rel="noopener noreferrer">
                                            <button
                                                className="btn-tier-select dark"
                                            >
                                                Select Standard
                                            </button>
                                        </a>
                                    </div>
                                </motion.div>

                                {/* Individual Premium Plan */}
                                <motion.div
                                    className="tier-card premium"
                                    {...fadeInUp}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    <div className="premium-choice-tag">PREMIUM CHOICE</div>
                                    <div className="tier-header">
                                        <span className="tier-label gold-text">INDIVIDUAL PREMIUM</span>
                                        <h2 className="tier-price">GH₵1,500 <span className="period">/ year</span></h2>
                                    </div>
                                    <ul className="tier-features-list">
                                        <li className="highlight-feature gold-text"><PlusCircle className="icon-plus gold" /> <span>Everything in Standard Plan+</span></li>
                                        <li><CheckCircle2 className="icon-check gold" /> <span>1 Additional Education History</span></li>
                                        <li><CheckCircle2 className="icon-check gold" /> <span>1 Additional Work History</span></li>
                                        <li><CheckCircle2 className="icon-check gold" /> <span>1 Additional Training Certification</span></li>
                                        <li><CheckCircle2 className="icon-check gold" /> <span>Awards and Accolades</span></li>
                                        <li><CheckCircle2 className="icon-check gold" /> <span>Marketplace Onboarding Verification (Optional)</span></li>
                                    </ul>
                                    <div className="tier-footer">
                                        <a href="https://kadodo.com.gh/sign-up/create?price_plan=8" target="_blank" rel="noopener noreferrer">
                                            <button
                                                className="btn-tier-select gold-btn"
                                            >
                                                Select Premium
                                            </button>
                                        </a>
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* Gatekeeper Section */}
            <section className="gatekeeper-banner-section">
                <div className="container">
                    <motion.div
                        className="gatekeeper-banner-card"
                        {...fadeInUp}
                    >
                        <div className="gatekeeper-visual">
                            <div className="shield-on-tablet">
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M50 15L30 25V45C30 57.5 38.5 69.1 50 72C61.5 69.1 70 57.5 70 45V25L50 15Z" fill="#333" stroke="#e0e0e0" strokeWidth="2" />
                                    <path d="M43 45L48 50L58 40" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    <rect x="20" y="70" width="60" height="10" rx="2" fill="#e0e0e0" />
                                    <rect x="25" y="65" width="50" height="5" rx="1" fill="#bdbdbd" />
                                </svg>
                            </div>
                        </div>
                        <div className="gatekeeper-text-content">
                            <h3>Gatekeeper to the Kadodo Marketplace</h3>
                            <p>
                                Verification is your passport to our exclusive trade ecosystem. We provide <strong>real-time Ghana Card authentication</strong> for every entity, ensuring that every seller you meet is as credible as they claim.
                            </p>
                            <div className="status-badge-live">
                                <span className="pulse-dot"></span>
                                Live verification service active
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Verification Section */}
            <section className="why-verification-refined">
                <div className="container">
                    <motion.h2
                        className="why-title-main"
                        {...fadeInUp}
                    >
                        Why Verification?
                    </motion.h2>
                    <div className="why-grid-v2">
                        <motion.div
                            className="why-item-card"
                            {...fadeInUp}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="why-icon-wrap">
                                <img src={consumerConfidenceIcon} alt="Build Confidence" />
                            </div>
                            <h3>To Build Consumer Confidence</h3>
                            <p>
                                In a fragmented market, your verified status acts as a definitive seal of quality and legitimacy, reducing transaction friction and building immediate buyer rapport.
                            </p>
                        </motion.div>

                        <motion.div
                            className="why-item-card"
                            {...fadeInUp}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="why-icon-wrap">
                                <img src={protectSellersIcon} alt="Protect Sellers" />
                            </div>
                            <h3>To Protect Sellers</h3>
                            <p>
                                Verification filters out malicious actors and non-compliant entities, protecting your business operations from fraud and ensuring you trade only with credible partners.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IndividualVerification;
