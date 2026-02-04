import React from 'react';
import { motion } from 'framer-motion';
import './KadodoNumber.css';
import cardBusiness from '../assets/kadodocardbusiness.png';
import cardPersonal from '../assets/kadodocardpersonal.png';

const KadodoNumber: React.FC = () => {
    return (
        <section id="coverage" className="kadodo-number-section">
            <div className="kn-container">
                <motion.div
                    className="kn-grid"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="kn-visual">
                        <div className="cards-wrapper-refined">
                            <div className="kn-card-container kn-card-personal-wrapper">
                                <img src={cardPersonal} alt="Personal Identity Card" className="kn-card" />
                            </div>
                            <div className="kn-card-container kn-card-business-wrapper">
                                <img src={cardBusiness} alt="Verified Business Card" className="kn-card" />
                                <button className="kn-card-btn-overlay">
                                    Start Now <span>→</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="kn-content">
                        <h1 className="kn-title">What is a Kadodo Number?</h1>
                        <p className="kn-desc">
                            These digital verification cards serve as a digital trust passport for businesses and individuals. A unique Kadodo ID represents a multi-layered verification badge that opens doors to international trade across Africa and the Caribbean.
                        </p>

                        <div className="kn-checklist-boxed">
                            <div className="kn-check-item-boxed">
                                <div className="check-icon-box">
                                    <span className="check-mark">✔</span>
                                </div>
                                <div className="check-text">
                                    <p className="check-title">Identity Verification</p>
                                    <p className="check-desc">Government-level KYC and individual background checks.</p>
                                </div>
                            </div>
                            <div className="kn-check-item-boxed">
                                <div className="check-icon-box">
                                    <span className="check-mark">✔</span>
                                </div>
                                <div className="check-text">
                                    <p className="check-title">Entity Authentication</p>
                                    <p className="check-desc">Full validation of business registration and legal standing.</p>
                                </div>
                            </div>
                            <div className="kn-check-item-boxed">
                                <div className="check-icon-box">
                                    <span className="check-mark">✔</span>
                                </div>
                                <div className="check-text">
                                    <p className="check-title">Professional Standing</p>
                                    <p className="check-desc">Certification of industry-specific licenses and standards.</p>
                                </div>
                            </div>
                        </div>

                        <button className="btn-primary-muted-gold-lg">
                            Learn More About Verification
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default KadodoNumber;
