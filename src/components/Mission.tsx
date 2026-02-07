import React from 'react';
import Section from './Section';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
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
                        </div>
                    </motion.div>

                    <motion.div
                        className="trust-content"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="trust-title">
                            Building Africa's <br /> Foundation of Trust
                        </h2>
                        <p className="trust-subtitle">
                            Providing the essential digital infrastructure to de-risk and power the African Continental Free Trade Area (AfCFTA) and Caribbean trade ecosystems.
                        </p>

                        <div className="mission-blocks">
                            <div className="mission-block">
                                <CheckCircle2 className="mission-block-icon" size={24} />
                                <span className="mission-block-text">Mission-driven verification infrastructure</span>
                            </div>
                            <div className="mission-block">
                                <CheckCircle2 className="mission-block-icon" size={24} />
                                <span className="mission-block-text">Mission-driven verification infrastructure</span>
                            </div>
                            <div className="mission-block">
                                <CheckCircle2 className="mission-block-icon" size={24} />
                                <span className="mission-block-text">Mission-driven verification infrastructure</span>
                            </div>
                        </div>

                        <button className="btn-mission-learn">
                            Learn About Our Mission <span className="arrow">→</span>
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Mission;
