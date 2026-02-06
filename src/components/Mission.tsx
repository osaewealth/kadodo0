import React from 'react';
import Section from './Section';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Mission.css';
import missionImage from '../assets/man-holding-phone.png';

const Mission: React.FC = () => {
    return (
        <Section id="about-us" className="mission-section-new">
            <div className="mission-container">
                <motion.div
                    className="mission-grid-new"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <motion.div
                        className="mission-visual-new"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src={missionImage} alt="Mission Vision" className="mission-main-img" />
                    </motion.div>

                    <motion.div
                        className="mission-content-new"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="mission-title-new">Building Africa's Foundation of Trust</h2>
                        <p className="mission-subtitle-new">
                            Providing the essential digital infrastructure to de-risk and power the African Continental Free Trade Area (AfCFTA) and Caribbean trade ecosystems.
                        </p>

                        <div className="mission-checklist-new">
                            <div className="mission-check-item-new">
                                <div className="mission-check-icon">
                                    <Check size={18} />
                                </div>
                                <span className="mission-check-text">Mission-driven verification infrastructure</span>
                            </div>
                            <div className="mission-check-item-new">
                                <div className="mission-check-icon">
                                    <Check size={18} />
                                </div>
                                <span className="mission-check-text">Mission-driven verification infrastructure</span>
                            </div>
                            <div className="mission-check-item-new">
                                <div className="mission-check-icon">
                                    <Check size={18} />
                                </div>
                                <span className="mission-check-text">Mission-driven verification infrastructure</span>
                            </div>
                        </div>

                        <Link to="/about-us" className="btn-mission-cta">
                            Learn About Our Mission <span>→</span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </Section>
    );
};

export default Mission;
