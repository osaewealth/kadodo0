import React from 'react';
import { Link } from 'react-router-dom';
import trustHero from '../assets/trust.jpg';
import './LegalHub.css';

interface PolicyCardProps {
    title: string;
    description: string;
    link: string;
}

const PolicyCard: React.FC<PolicyCardProps> = ({ title, description, link }) => (
    <Link to={link} className="policy-card-minimal">
        <div className="policy-content">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
        <div className="policy-action">
            <span className="read-more">Read Policy</span>
            <span className="policy-arrow">&rarr;</span>
        </div>
    </Link>
);

const LegalHub: React.FC = () => {
    return (
        <div className="legal-hub-container">
            <div className="legal-hero" style={{ backgroundImage: `linear-gradient(rgba(46, 43, 79, 0.85), rgba(46, 43, 79, 0.95)), url(${trustHero})` }}>
                <div className="legal-hero-content">
                    <h1>Legal & Privacy <span className="highlight-gold">Trust Center</span></h1>
                    <p>Digital trust is governed, not assumed. Review our policies, agreements, and commitments to secure African commerce.</p>
                </div>
            </div>

            <div className="legal-hub-content container">
                
                <section className="legal-section">
                    <div className="section-header-minimal">
                        <span className="section-line"></span>
                        <h2>General Policies</h2>
                    </div>
                    <div className="policy-grid-minimal">
                        <PolicyCard 
                            title="Terms of Service" 
                            description="The core rules and guidelines for using the Kadodo platform."
                            link="/terms"
                        />
                        <PolicyCard 
                            title="Privacy Policy" 
                            description="How we collect, use, and protect your personal information safely."
                            link="/privacy-policy"
                        />
                        <PolicyCard 
                            title="Cookie Policy" 
                            description="Information on how we use cookies and tracking technologies."
                            link="/cookie-policy"
                        />
                    </div>
                </section>

                <section className="legal-section">
                    <div className="section-header-minimal">
                        <span className="section-line"></span>
                        <h2>Agreements & Guidelines</h2>
                    </div>
                    <div className="policy-grid-minimal">
                        <PolicyCard 
                            title="Marketplace Seller Agreement" 
                            description="Terms and conditions for sellers operating on the Kadodo Marketplace."
                            link="/marketplace-seller-agreement"
                        />
                        <PolicyCard 
                            title="Subscription Policy" 
                            description="Details regarding billing, renewals, and cancellation of services."
                            link="/subscription-policy"
                        />
                        <PolicyCard 
                            title="Acceptable Use Policy" 
                            description="Guidelines on acceptable and prohibited conduct while using our services."
                            link="/acceptable-use-policy"
                        />
                    </div>
                </section>

                <section className="legal-section">
                    <div className="section-header-minimal">
                        <span className="section-line"></span>
                        <h2>Data & Liability</h2>
                    </div>
                    <div className="policy-grid-minimal" style={{ marginBottom: '80px' }}>
                        <PolicyCard 
                            title="Biometric Data Policy" 
                            description="Our strict protocols for handling biometric information securely."
                            link="/biometric-data-policy"
                        />
                        <PolicyCard 
                            title="Data Sharing Policy" 
                            description="How and when we share data with third parties or partners."
                            link="/data-sharing-policy"
                        />
                        <PolicyCard 
                            title="Disclaimer of Liability" 
                            description="General disclaimers regarding the use of Kadodo information and services."
                            link="/disclaimer-of-liability"
                        />
                        <PolicyCard 
                            title="Limitation of Liability" 
                            description="Limitations on damages and responsibilities under our platform."
                            link="/limitation-of-liability"
                        />
                    </div>
                </section>

            </div>
        </div>
    );
};

export default LegalHub;
