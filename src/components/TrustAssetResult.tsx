import React from 'react';
import './TrustAssetResult.css';
import certificateImage from '../assets/kadodoverification.jpg';
import globalIcon from '../assets/newimages/Globe Network.png';
import instantIcon from '../assets/newimages/Verify.png';
import { Link } from 'react-router-dom';

const TrustAssetResult: React.FC = () => {
    return (
        <section className="tar-section">
            <div className="tar-container">
                {/* Top Section: Image + Content */}
                <div className="tar-grid">
                    <div className="tar-image-col">
                        <div className="tar-image-wrapper">
                            <img src={certificateImage} alt="Kadodo Verified Certificate" className="tar-cert-img" />
                        </div>
                    </div>
                    <div className="tar-content-col">
                        <h2 className="tar-title">The Result: A Portable Trust Asset</h2>
                        <p className="tar-desc">
                            The outcome of our process is more than a status — it's your <strong>Kadodo Number</strong>. This unique ID acts as a digital passport, allowing you to carry your reputation from market to market, bank to bank, and country to country across the AfCFTA region.
                        </p>

                        <div className="tar-feature-card">
                            <div className="tar-feature-icon-box">
                                <img src={globalIcon} alt="Universal Recognition" className="tar-feature-icon" />
                            </div>
                            <div className="tar-feature-text">
                                <h3>Universal Recognition</h3>
                                <p>Accepted by financial institutions and international procurement agencies.</p>
                            </div>
                        </div>

                        <div className="tar-feature-card">
                            <div className="tar-feature-icon-box">
                                <img src={instantIcon} alt="Instant Authentication" className="tar-feature-icon" />
                            </div>
                            <div className="tar-feature-text">
                                <h3>Instant Authentication</h3>
                                <p>Stakeholders can scan and verify your standing in milliseconds.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Section */}
                <div className="tar-cta-box">
                    <h2 className="tar-cta-title">Join the Circle of Verified Excellence</h2>
                    <div className="tar-cta-buttons">
                        <Link to="/contact-us">
                            <button className="btn-primary-muted-gold-lg">
                                Start Verification Now <span>→</span>
                            </button>
                        </Link>
                        <Link to="/contact-us">
                            <button className="btn-secondary-outline-lg">
                                Contact Sales
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustAssetResult;
