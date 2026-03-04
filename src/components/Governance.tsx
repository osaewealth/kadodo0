import React, { useEffect } from 'react';
import { CircleCheck, ArrowRight } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
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
import personCarryingBoxes from '../assets/personcarryingboxes.jpg';
import lawlawImage from '../assets/lawlaw.jpg';

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
                        <div className="hero-actions">
                            <Link to="/compliance-form" className="hero-cta-btn">
                                Request Compliance Access <ArrowRight size={20} />
                            </Link>
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
                            <Link to="/compliance-form" className="aml-btn-link">
                                <button className="aml-btn">Identity Screening</button>
                            </Link>
                            <Link to="/compliance-form" className="aml-btn-link">
                                <button className="aml-btn">Sanctions/PEP Checks</button>
                            </Link>
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

            {/* Trust Badge Framework Section */}
            <section className="trust-badge-framework">
                <div className="container">
                    <h2 className="section-title-centered">Trust Badge Framework</h2>

                    <div className="trust-badge-card">
                        <div className="trust-badge-content">
                            <div className="issuance-thresholds">
                                <h3 className="issuance-title">Issuance Thresholds</h3>
                                <p className="issuance-description">
                                    Verification badges are only issued upon successful
                                    completion of the 'KYB' (Know Your Business) protocol,
                                    requiring valid registration, tax compliance, and physical
                                    presence verification.
                                </p>

                                <ul className="issuance-list">
                                    <li className="issuance-item">
                                        <CircleCheck size={20} className="check-icon" />
                                        <span>Legal Entity Proof</span>
                                    </li>
                                    <li className="issuance-item">
                                        <CircleCheck size={20} className="check-icon" />
                                        <span>Physical Address Validation</span>
                                    </li>
                                    <li className="issuance-item">
                                        <CircleCheck size={20} className="check-icon" />
                                        <span>Operational Capacity Audit</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="trust-badge-image">
                                <img src={personCarryingBoxes} alt="Person carrying boxes" className="boxes-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Revocation & Appeals Section */}
            <section className="revocation-appeals">
                <div className="container">
                    <div className="revocation-card" style={{ backgroundImage: `url(${lawlawImage})` }}>
                        <div className="revocation-content-side">
                            <h2 className="revocation-title">Revocation & Appeals</h2>
                            <p className="revocation-description">
                                Maintaining trust requires strict enforcement. Our
                                Governance Board monitors for non-compliance, providing
                                a transparent escalation and appeals procedure.
                            </p>

                            <div className="revocation-cards-container">
                                <div className="revocation-mini-card">
                                    <h4 className="mini-card-tag incident">INCIDENT MONITORING</h4>
                                    <p className="mini-card-text">
                                        24/7 Automated monitoring of compliance thresholds.
                                    </p>
                                </div>

                                <div className="revocation-mini-card">
                                    <h4 className="mini-card-tag escalation">ESCALATION PATHWAY</h4>
                                    <p className="mini-card-text">
                                        Defined procedures for breach notification and remediation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Compliance Section */}
            <section className="contact-compliance">
                <div className="container">
                    <div className="contact-border-box">
                        <h2 className="contact-title">Contact Compliance</h2>
                        <p className="contact-description">
                            For legal inquiries, data protection requests, or compliance concerns,
                            please reach out to our dedicated teams.
                        </p>

                        <div className="contact-cards-flex">
                            <div className="contact-info-card">
                                <h4 className="contact-tag">GENERAL COMPLIANCE</h4>
                                <a href="mailto:compliance@kadodoafrica.com" className="contact-email">compliance@kadodoafrica.com</a>
                            </div>

                            <div className="contact-info-card">
                                <h4 className="contact-tag">DATA PROTECTION OFFICER</h4>
                                <a href="mailto:dpo@kadodoafrica.com" className="contact-email">dpo@kadodoafrica.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Governance;
