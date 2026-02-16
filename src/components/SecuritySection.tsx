import React from 'react';
import { motion } from 'framer-motion';
import './SecuritySection.css';
import dpcLogo from '../assets/data protection.png';

const SecuritySection: React.FC = () => {
    return (
        <section className="security-section">
            <div className="security-container">
                <motion.div
                    className="security-grid"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="security-content">
                        <h2 className="security-title">Unmatched Security and Compliance</h2>
                        <p className="security-description">
                            We prioritize the highest standards of security and compliance to safeguard your operations and protect user data. Our robust measures ensure adherence to global regulatory frameworks, providing peace of mind in an ever-evolving digital landscape
                        </p>
                    </div>
                    <div className="security-visual">
                        <img src={dpcLogo} alt="Data Protection Commission" className="dpc-logo" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SecuritySection;
