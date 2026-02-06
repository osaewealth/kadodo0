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
                            <motion.div
                                className="verified-badge-premium"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                            >
                                <div className="badge-inner">
                                    <div className="badge-icon-pulsing">
                                        <CheckCircle2 size={24} color="#00bfa5" fill="#00bfa520" />
                                    </div>
                                    <span className="badge-text-bold">Verified</span>
                                </div>
                                <div className="badge-shine-effect"></div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="trust-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="trust-tag">Authenticating The Future</div>
                        <h2 className="trust-title">
                            The Future of <span className="text-gold">African Commerce</span> is Built on Trust
                        </h2>
                        <p className="trust-subtitle">
                            We bridge the trust gap for the $2.5 Trillion AfCFTA market. Kadodo profiles, authenticates, and connects credible businesses and individuals across Africa and the Caribbean.
                        </p>

                        <div className="trust-btns">
                            <button className="btn-trust-gold">
                                <CheckCircle2 size={18} /> Verify My Business
                            </button>
                            <button className="btn-trust-outline">
                                <CheckCircle2 size={18} /> Verify My Profession
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Mission;
