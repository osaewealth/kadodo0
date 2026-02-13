import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import './KadodoNumber.css';
import cardBusiness from '../assets/kadodocardbusiness.png';
import cardPersonal from '../assets/kadodocardpersonal.png';
import bizIcon from '../assets/newimages/Business.png';
import individualIcon from '../assets/newimages/Individuals.png';
import partnersIcon from '../assets/newimages/Partners.png';

const KadodoNumber: React.FC = () => {
    const location = useLocation();
    const isKadodoPage = location.pathname === '/kadodo-number';
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
                                <Link to="/kadodo-number" className="kn-card-btn-overlay">
                                    Start Now <span>→</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="kn-content">
                        <h1 className="kn-title">What is a Kadodo Number?</h1>
                        <p className="kn-desc">
                            The Kadodo Number is a unique, verifiable digital credential issued only after an entity passes our multi-layered authentication process. It serves as a definitive “Seal of Trust” across three key pillars:  </p>

                        <div className="kn-checklist-boxed">
                            <div className="kn-check-item-boxed">
                                <div className="check-icon-box">
                                    <img src={bizIcon} alt="Business Icon" className="kn-icon" />
                                </div>
                                <div className="check-text">
                                    <p className="check-title">For Businesses</p>
                                    <p className="check-desc">Your License to Scale. It is a verified business identity that proves your registration, tax standing, and operational legitimacy to banks and global supply chains.</p>
                                </div>
                            </div>
                            <div className="kn-check-item-boxed">
                                <div className="check-icon-box">
                                    <img src={individualIcon} alt="Individual Icon" className="kn-icon" />
                                </div>
                                <div className="check-text">
                                    <p className="check-title">For Individuals</p>
                                    <p className="check-desc">Your Professional Trust Passport. It authenticates your identity, academic credentials, and work history, making your reputation portable and globally recognized.</p>
                                </div>
                            </div>
                            <div className="kn-check-item-boxed">
                                <div className="check-icon-box">
                                    <img src={partnersIcon} alt="Partners Icon" className="kn-icon" />
                                </div>
                                <div className="check-text">
                                    <p className="check-title">For Partners</p>
                                    <p className="check-desc">Your Risk Mitigation Key. For investors and importers, the Kadodo Number is the entry point to a comprehensive KYB/KYC report, ensuring every engagement is backed by accurate, informed data.</p>
                                </div>
                            </div>
                        </div>

                        {!isKadodoPage && (
                            <Link to="/kadodo-number">
                                <button className="btn-primary-muted-gold-lg">
                                    Learn More About Verification
                                </button>
                            </Link>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default KadodoNumber;
