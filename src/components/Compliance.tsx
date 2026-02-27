import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Compliance.css';
import complianceImage from '../assets/compliance12.png';
import shieldImage from '../assets/shield individuals.png';

// Placeholder images
import docImage from '../assets/newimages/Technical.png';
import regulatorImage from '../assets/newimages/Partner.png';
import vendorImage from '../assets/newimages/Business.png';
import policyImage from '../assets/newimages/Mission.png';

// Infrastructure Logos
import awsLogo from '../assets/newimages/aws.png';
import pgLogo from '../assets/newimages/postgreSQL.png';
import laravelLogo from '../assets/newimages/laravel.png';
import paystackLogo from '../assets/newimages/paystack.png';

// Architecture Placeholders
import rbacImage from '../assets/newimages/Individuals.png';
import privilegeImage from '../assets/newimages/Comprehensive.png';
import encryptImage from '../assets/newimages/Globe Network.png';
import filesImage from '../assets/newimages/Digital Bridge.png';
import environmentImage from '../assets/newimages/Globe.png';
import auditImage from '../assets/newimages/Processing_1.png';

// FAQ Image
import faqWomanImage from '../assets/questionwoman.png';

// Hero Card Icons (assuming these based on the asset list)
import uptimeImage from '../assets/newimages/Verify.png'; // Verify or similar makes sense for uptime
import dataProtectionImage from '../assets/data protection.png'; // Corrected path

const Compliance: React.FC = () => {
    return (
        <>
            <section className="compliance-hero">
                <div className="container compliance-hero-container">
                    <div className="compliance-hero-content">
                        <span className="compliance-hero-badge">TRANSPARENCY HUB</span>
                        <h1>Trust Center</h1>
                        <p>Transparency is the foundation of our platform. Explore our security standards, regulatory compliance, and how we protect the identity of Africa's businesses and professionals.</p>
                    </div>

                    <div className="compliance-hero-graphic">
                        <img src={complianceImage} alt="Compliance Standards" className="compliance-hero-img" />
                    </div>
                </div>

                <div className="container compliance-cards-container">
                    <div className="compliance-card">
                        <div className="card-icon-wrapper uptime-icon" style={{ background: 'transparent' }}>
                            <img src={uptimeImage} alt="Uptime" style={{ width: '80px', height: 'auto', objectFit: 'contain' }} />
                        </div>
                        <div className="card-text">
                            <span className="card-label">UPTIME</span>
                            <h3 className="card-value">99.9%</h3>
                        </div>
                    </div>

                    <div className="compliance-card">
                        <div className="card-icon-wrapper data-icon" style={{ background: 'transparent' }}>
                            <img src={dataProtectionImage} alt="Data Protection" style={{ width: '80px', height: 'auto', objectFit: 'contain' }} />
                        </div>
                        <div className="card-text">
                            <span className="card-label">DATA PROTECTION</span>
                            <h3 className="card-value">Act 843<br />Compliant</h3>
                        </div>
                    </div>

                    <div className="compliance-card">
                        <div className="card-icon-wrapper encryption-icon" style={{ background: 'transparent' }}>
                            <img src={shieldImage} alt="Encryption" style={{ width: '80px', height: 'auto', objectFit: 'contain' }} />
                        </div>
                        <div className="card-text">
                            <span className="card-label">ENCRYPTION</span>
                            <h3 className="card-value">AES-256</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="compliance-resources-section">
                <div className="container">
                    <h2 className="resources-heading">Compliance & Security Resources</h2>

                    <div className="resources-grid">
                        <div className="resource-card">
                            <div className="resource-icon">
                                <img src={docImage} alt="Security Documentation" />
                            </div>
                            <h3>Security Documentation</h3>
                            <p>Infrastructure security, encryption protocols (AES-256), and penetration testing summaries.</p>
                        </div>

                        <div className="resource-card">
                            <div className="resource-icon">
                                <img src={regulatorImage} alt="Regulator Agreements" />
                            </div>
                            <h3>Regulator Agreements</h3>
                            <p>Official MoUs and data-sharing frameworks with NIA, ORC, and GRA.</p>
                        </div>

                        <div className="resource-card">
                            <div className="resource-icon">
                                <img src={vendorImage} alt="Vendor Signed BAAs" />
                            </div>
                            <h3>Vendor Signed BAAs</h3>
                            <p>Business Associate Agreements and security contracts with tech partners.</p>
                        </div>

                        <div className="resource-card">
                            <div className="resource-icon">
                                <img src={policyImage} alt="Operational Policies" />
                            </div>
                            <h3>Operational Policies</h3>
                            <p>Privacy Policy, Biometric Data Policy, and Acceptable Use Policy.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="compliance-cta-section">
                <div className="container">
                    <div className="compliance-cta-box">
                        <h2>Require access to our private security audits or full BAA documents?</h2>
                        <p>Submit a formal request to our compliance team for sensitive documentation. Standard review time is 2-3 business days.</p>
                        <Link to="/compliance-form" style={{ textDecoration: 'none' }}>
                            <button className="cta-button">
                                Request Access via Compliance Form
                                <ArrowRight size={20} />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="infrastructure-section">
                <div className="container">
                    <div className="infrastructure-header">
                        <h2>Infrastructure & Third-Party Subprocessors</h2>
                        <p>We partner with world-class providers to ensure the highest levels of uptime, data sovereignty, and end-to-end security.</p>
                    </div>

                    <div className="table-wrapper">
                        <table className="infrastructure-table">
                            <thead>
                                <tr>
                                    <th>SERVICE PROVIDER</th>
                                    <th>FUNCTION</th>
                                    <th>REGION/COMPLIANCE</th>
                                    <th>DETAILS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src={awsLogo} alt="AWS" className="provider-logo aws-logo" />
                                    </td>
                                    <td>Primary Cloud Provider</td>
                                    <td><span className="compliance-badge badge-canada">Canada</span></td>
                                    <td>Primary hosting for application and core services.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={pgLogo} alt="PostgreSQL" className="provider-logo pg-logo" />
                                    </td>
                                    <td>Database Management</td>
                                    <td><span className="compliance-badge badge-soc2">SOC 2</span></td>
                                    <td>Structured storage with AES-256 at-rest encryption.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={laravelLogo} alt="Laravel" className="provider-logo laravel-logo" />
                                    </td>
                                    <td>Application Framework</td>
                                    <td><span className="compliance-badge badge-opensource">Open Source</span></td>
                                    <td>Core logic and security middleware for request handling.</td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src={paystackLogo} alt="Paystack" className="provider-logo paystack-logo" />
                                    </td>
                                    <td>Payment Processing</td>
                                    <td><span className="compliance-badge badge-pcidss">PCI-DSS</span></td>
                                    <td>Secure, compliant handling of registration and fee payments.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="architecture-section">
                <div className="container">
                    <h2 className="architecture-heading">Security Architecture & Controls</h2>

                    <div className="architecture-grid">
                        <div className="resource-card architecture-card">
                            <div className="resource-icon">
                                <img src={rbacImage} alt="Role-based access control (RBAC)" />
                            </div>
                            <h3>Role-based access control (RBAC)</h3>
                            <p>Precise permission management based on staff responsibility.</p>
                        </div>

                        <div className="resource-card architecture-card">
                            <div className="resource-icon">
                                <img src={privilegeImage} alt="Principle of Least Privilege" />
                            </div>
                            <h3>Principle of Least Privilege</h3>
                            <p>Access is strictly limited to only what is necessary for the task.</p>
                        </div>

                        <div className="resource-card architecture-card">
                            <div className="resource-icon">
                                <img src={encryptImage} alt="Encryption Everywhere" />
                            </div>
                            <h3>Encryption Everywhere</h3>
                            <p>Infrastructure security, encryption protocols (AES-256), and penetration testing summaries.</p>
                        </div>

                        <div className="resource-card architecture-card">
                            <div className="resource-icon">
                                <img src={filesImage} alt="Secure File Handling" />
                            </div>
                            <h3>Secure File Handling</h3>
                            <p>Precise permission management based on staff responsibility.</p>
                        </div>

                        <div className="resource-card architecture-card">
                            <div className="resource-icon">
                                <img src={environmentImage} alt="Environment Separation" />
                            </div>
                            <h3>Environment Separation</h3>
                            <p>Strict isolation between development, staging, and production environments.</p>
                        </div>

                        <div className="resource-card architecture-card">
                            <div className="resource-icon">
                                <img src={auditImage} alt="Audit & Activity Logs" />
                            </div>
                            <h3>Audit & Activity Logs</h3>
                            <p>Comprehensive logging of all administrative actions and data access.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="faq-section">
                <div className="container faq-container">
                    <div className="faq-content">
                        <h2>Data Sovereignty & Security FAQ</h2>

                        <div className="faq-box">
                            <h3>Where is customer data stored and processed?</h3>
                            <p>Kadodo uses cloud providers with primary data centers in Europe and North America to ensure 99.9% availability. For certain regulatory workflows, local caching may occur. See the full list of subprocessors above for region-specific details</p>
                        </div>

                        <div className="faq-box">
                            <h3>How is sensitive identity data protected?</h3>
                            <p>All sensitive fields (PII) are protected by AES-256 field-level encryption. Access keys are managed via AWS KMS with strict IAM policies and hardware-based multi-factor authentication for all administrative access.</p>
                        </div>
                    </div>

                    <div className="faq-image-wrapper">
                        <img src={faqWomanImage} alt="Questions about security?" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Compliance;
