import React from 'react';
import './TrustArchitecture.css';
import businessIcon from '../assets/newimages/Business.png';
import professionalIcon from '../assets/newimages/Individuals.png';
import securityImage from '../assets/bankgradeimage.png';
import { CheckCircle2 } from 'lucide-react';

const TrustArchitecture: React.FC = () => {
    return (
        <section className="trust-architecture-section">
            <div className="ta-container">
                <h2 className="ta-title">The Scope of Our Trust Architecture</h2>

                <div className="ta-cards-grid">
                    {/* Companies Card */}
                    <div className="ta-card">
                        <div className="ta-icon-box">
                            <img src={businessIcon} alt="Companies & SMEs" className="ta-icon" />
                        </div>
                        <h3 className="ta-card-title">For Companies & SMEs</h3>
                        <ul className="ta-list">
                            <li><CheckCircle2 className="ta-check" size={20} /> ORC Business Registration</li>
                            <li><CheckCircle2 className="ta-check" size={20} /> GRA Tax Clearance</li>
                            <li><CheckCircle2 className="ta-check" size={20} /> SSNIT Compliance</li>
                            <li><CheckCircle2 className="ta-check" size={20} /> Physical Site Inspection</li>
                            <li><CheckCircle2 className="ta-check" size={20} /> Director KYC Verification</li>
                        </ul>
                    </div>

                    {/* Professionals Card */}
                    <div className="ta-card">
                        <div className="ta-icon-box">
                            <img src={professionalIcon} alt="Professionals" className="ta-icon" />
                        </div>
                        <h3 className="ta-card-title">For Professionals</h3>
                        <ul className="ta-list">
                            <li><CheckCircle2 className="ta-check" size={20} /> Ghana Card Authentication</li>
                            <li><CheckCircle2 className="ta-check" size={20} /> Liveness Authentication</li>
                            <li><CheckCircle2 className="ta-check" size={20} /> Educational Background Check</li>
                            <li><CheckCircle2 className="ta-check" size={20} /> Industry-Specific Licenses</li>
                            <li><CheckCircle2 className="ta-check" size={20} /> Criminal Record Clearance</li>
                        </ul>
                    </div>
                </div>

                {/* Bank-Grade Security Section */}
                <div className="ta-security-section">
                    <div className="ta-security-content">
                        <h2 className="ta-security-title">Bank-Grade Security</h2>
                        <p className="ta-security-desc">
                            Your data is protected with 256-bit encryption. We are fully compliant with <strong>GDPR</strong> and Ghana's <strong>Data Protection Act (Act 843)</strong>, ensuring your sovereignty over your information at all times.
                        </p>
                    </div>
                    <div className="ta-security-image">
                        <img src={securityImage} alt="Bank-Grade Security" className="ta-sec-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustArchitecture;
