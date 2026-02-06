import React from 'react';
import Section from './Section';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Mission.css';
import womanImage from '../assets/woman.png';

const Mission: React.FC = () => {
    return (
        <Section id="about-us" className="foundation-trust-section">
            <div className="mission-container">
                <motion.div
                    className="trust-grid"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <motion.div
                        className="trust-visual"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="trust-image-wrapper">
                            <img src={womanImage} alt="Professional Verification Expert" className="trust-main-img" />
                            <div className="verified-badge-overlay">
                                <div className="badge-content">
                                    <div className="badge-icon">
                                        <CheckCircle2 size={20} color="#00bfa5" />
                                    </div>
                                    <div className="badge-text">
                                        <p className="badge-status">VERIFIED</p>
                                        <div className="badge-skeleton-lines">
                                            <div className="sk-line"></div>
                                            <div className="sk-line"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="trust-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="trust-title">The Future of African Commerce is Built on Trust</h2>
                        <p className="trust-subtitle">
                            We bridge the trust gap for the $2.5 Trillion AfCFTA market. Kadodo profiles, authenticates, and connects credible businesses and individuals across Africa and the Caribbean.
                        </p>

                        <div className="trust-checklist">
                            <div className="trust-check-item">
                                <div className="trust-check-icon">
                                    <CheckCircle2 size={22} color="#a49945" />
                                </div>
                                <span className="trust-check-text">Verified business and identity profiles</span>
                            </div>
                            <div className="trust-check-item">
                                <div className="trust-check-icon">
                                    <CheckCircle2 size={22} color="#a49945" />
                                </div>
                                <span className="trust-check-text">Cross-border trust infrastructure for AfCFTA trade</span>
                            </div>
                            <div className="trust-check-item">
                                <div className="trust-check-icon">
                                    <CheckCircle2 size={22} color="#a49945" />
                                </div>
                                <span className="trust-check-text">Risk reduction for partners, investors, and buyers</span>
                            </div>
                        </div>

                        <Link to="/about-us" className="btn-trust-cta">
                            Learn About Our Mission <span>→</span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Mission;
