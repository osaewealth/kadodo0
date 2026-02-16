import React from 'react';
import VerificationTiers from './VerificationTiers';
import TrustArchitecture from './TrustArchitecture';
import TrustAssetResult from './TrustAssetResult';
import './KadodoNumberPage.css';
import heroImage from '../assets/kadodonumberpagehero.png';
import { motion } from 'framer-motion';

const KadodoNumberPage: React.FC = () => {
    return (
        <div className="kadodo-number-page">
            {/* Hero Section */}
            <section className="kn-page-hero">
                <div className="container">
                    <div className="kn-hero-grid">
                        <motion.div
                            className="kn-hero-content"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="kn-hero-title">The Gold Standard of Verification</h1>
                            <span className="kn-hero-subtitle">Verification is not just a checkbox</span>
                            <p className="kn-hero-desc">
                                Trust in the African market requires more than just document collection. At Kodoo, our methodology is built on a <strong>Dual-Verification Engine</strong> that bridges the gap between digital records and physical truth.
                            </p>
                            <div className="kn-hero-tag">
                                We don't validate data we verify reality
                            </div>
                        </motion.div>

                        <motion.div
                            className="kn-hero-image-wrapper"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <img src={heroImage} alt="Global Standard Verification" className="kn-hero-img" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Tiers Section */}
            <VerificationTiers />

            {/* Trust Architecture Section */}
            <TrustArchitecture />

            {/* Result & CTA Section */}
            <TrustAssetResult />


        </div>
    );
};

export default KadodoNumberPage;
