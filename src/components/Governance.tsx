import React, { useEffect } from 'react';
import { CircleCheck } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import './Governance.css';

// Image imports
import lawyersImage from '../assets/lawyers.png';
import backgroundHero from '../assets/lawyerbuilding.jpg';
import lawHammerImage from '../assets/lawhammer.jpg';
import verifyImage from '../assets/newimages/Verify.png';
import verifyyImage from '../assets/newimages/Verifyy.png';
import dataByDesignIcon from '../assets/databydesign.png';
import lawfulBasisIcon from '../assets/lawfulbasis.png';
import dataSubjectRightIcon from '../assets/datasubjectright.png';
import infrastructureIcon from '../assets/infrastructureimg.png';

const Governance: React.FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="governance-page">
            {/* Hero Section */}
            <header className="governance-hero-new" style={{ backgroundImage: `url(${backgroundHero})` }}>
                <div className="governance-hero-flex">
                    <div className="hero-people-side">
                        <img src={lawyersImage} alt="Legal Team" className="lawyers-img" />
                    </div>
                    <div className="hero-text-side">
                        <h1>Compliance Access Request</h1>
                        <p className="hero-description">
                            Institutional-grade digital trust for African commerce. We ensure that
                            every transaction and identity within our ecosystem meets global
                            regulatory standards.
                        </p>
                        <div className="hero-quote">
                            "Digital trust is governed, not assumed."
                        </div>
                    </div>
                </div>
            </header>

            {/* Legal Oversight Section */}
            <section className="legal-oversight">
                <div className="container legal-container">
                    <div className="legal-image-side">
                        <img src={lawHammerImage} alt="Legal Oversight Gavel" className="legal-img" />
                    </div>
                    <div className="legal-content-side">
                        <h2 className="legal-title">Legal Oversight</h2>
                        <p className="legal-intro">
                            We retain Fiadjoe and Fiadjoe Associates external legal counsel for
                            regulatory, digital identity, data protection, and cross-border
                            trade compliance matters, including alignment with European Union
                            regulatory frameworks.
                        </p>

                        <h3 className="legal-subtitle">Our legal advisors support:</h3>

                        <div className="legal-support-list">
                            <div className="legal-list-item">
                                <CircleCheck size={24} className="legal-icon" />
                                <span>Ongoing compliance policy review</span>
                            </div>
                            <div className="legal-list-item">
                                <CircleCheck size={24} className="legal-icon" />
                                <span>Cross-border contractual structuring</span>
                            </div>
                            <div className="legal-list-item">
                                <CircleCheck size={24} className="legal-icon" />
                                <span>Data protection governance alignment</span>
                            </div>
                            <div className="legal-list-item">
                                <CircleCheck size={24} className="legal-icon" />
                                <span>Regulatory risk management</span>
                            </div>
                            <div className="legal-list-item">
                                <CircleCheck size={24} className="legal-icon" />
                                <span>Institutional-grade compliance oversight</span>
                            </div>
                        </div>

                        <p className="legal-footer-text">
                            Our framework is structured in alignment with the General Data Protection
                            Regulation (GDPR) and other applicable international regulatory standards.
                        </p>
                    </div>
                </div>
            </section>

            {/* Risk Management Framework */}
            <section className="risk-framework">
                <div className="container">
                    <h2 className="section-title-centered">Risk Management Framework</h2>
                    <p className="section-description">
                        Institutional transparency is core to our operational integrity.
                    </p>
                    <div className="risk-grid">
                        <div className="risk-card">
                            <div className="risk-card-content">
                                <img src={verifyImage} alt="Risk-Based Verification" className="risk-icon-img" />
                                <div className="risk-card-text">
                                    <h3>Risk-Based Verification Model</h3>
                                    <p>Our tiered verification system integrates real-time API checks, manual site inspections, and dynamic risk scoring to ensure business legitimacy.</p>
                                    <div className="risk-tags">
                                        <span>API Integration</span>
                                        <span>Manual Inspection</span>
                                        <span>Risk Scoring</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="risk-card">
                            <div className="risk-card-content">
                                <img src={verifyyImage} alt="Anti-Fraud & Integrity" className="risk-icon-img" />
                                <div className="risk-card-text">
                                    <h3>Anti-Fraud & Document Integrity</h3>
                                    <p>Advanced document validation using chain-of-custody protocols and AI-driven tamper detection to prevent identity theft and fraud.</p>
                                    <div className="risk-tags">
                                        <span>Chain-of-Custody</span>
                                        <span>Tamper Detection</span>
                                        <span>Biometric Match</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Data Protection Principles */}
            <section className="data-protection">
                <div className="container">
                    <h2 className="section-title-centered">Data Protection Principles</h2>
                    <p className="section-description">Upholding the highest standards of digital privacy across the continent.</p>

                    <div className="principles-grid">
                        <div className="principle-item">
                            <div className="principle-icon-wrapper">
                                <img src={dataByDesignIcon} alt="Privacy by Design" className="principle-icon-img-large" />
                            </div>
                            <h3>Privacy by Design</h3>
                            <p>Security and privacy are embedded into every layer of our platform architecture from inception.</p>
                        </div>

                        <div className="principle-item">
                            <div className="principle-icon-wrapper">
                                <img src={lawfulBasisIcon} alt="Lawful Basis" className="principle-icon-img-large" />
                            </div>
                            <h3>Lawful Basis</h3>
                            <p>Processing of data is strictly governed by legitimate interests, legal obligations, and user consent.</p>
                        </div>

                        <div className="principle-item">
                            <div className="principle-icon-wrapper">
                                <img src={dataSubjectRightIcon} alt="Data Subject Rights" className="principle-icon-img-large" />
                            </div>
                            <h3>Data Subject Rights</h3>
                            <p>Empowering African businesses with the right to access, rectify, and erase their digital footprint.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* AML & KYC Compliance Section */}
            <section className="aml-kyc-section">
                <div className="container aml-container">
                    <div className="aml-content-side">
                        <h2 className="aml-title">AML & KYC Compliance</h2>
                        <p className="aml-description">
                            Our screening processes are designed to mitigate financial crime risks,
                            ensuring Kadodo remains a safe corridor for investment and trade.
                        </p>
                        <div className="aml-actions">
                            <button className="aml-btn">Identity Screening</button>
                            <button className="aml-btn">Sanctions/PEP Checks</button>
                        </div>
                    </div>

                    <div className="aml-card-side">
                        <div className="infra-card">
                            <div className="infra-card-header">
                                <div className="infra-text">
                                    <h3>Infrastructure Integrity</h3>
                                    <p>
                                        Kadodo Africa conducts rigorous due diligence on all subprocessors.
                                        We maintain binding Data Processing Agreements (DPAs) to ensure
                                        end-to-end security compliance.
                                    </p>
                                </div>
                                <div className="infra-icon">
                                    <img src={infrastructureIcon} alt="Infrastructure Integrity" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Governance;
