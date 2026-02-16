import React from 'react';
import Section from './Section';
import './TermsOfService.css';

const TermsOfService: React.FC = () => {
    return (
        <Section id="terms-of-service" className="terms-section">
            <div className="terms-container">
                <h1>Terms of Service</h1>
                <p className="last-updated">Last Updated: February 12, 2026</p>

                <div className="terms-content">
                    <p>Welcome to Kadodo Africa. These Terms of Service ("Terms") govern your access to and use of our platform, services, and applications designed to facilitate trust and trade within the African Continental Free Trade Area (AfCFTA) and the Caribbean.</p>

                    <h2>1. DEFINITIONS</h2>
                    <p>In these Terms, the following definitions apply:</p>
                    <ul>
                        <li><strong>"Platform"</strong> refers to the Kadodo Africa website, mobile applications, and API services.</li>
                        <li><strong>"User"</strong> refers to any individual or entity accessing the Platform.</li>
                        <li><strong>"Kadodo Number"</strong> refers to the unique digital identification issued upon successful verification.</li>
                        <li><strong>"Verification Services"</strong> refers to the multi-layered authentication processes performed by Kadodo Africa.</li>
                    </ul>

                    <h2>2. ELIGIBILITY</h2>
                    <p>To use our services, you must be at least 18 years of age and possess the legal authority to enter into a binding agreement. Businesses must be legally registered entities in their respective jurisdictions or recognized informal operators seeking formalization through our Platform.</p>

                    <h2>3. ACCOUNT SECURITY</h2>
                    <p>You are responsible for maintaining the confidentiality of your login credentials. You agree to notify us immediately of any unauthorized use of your account. Kadodo Africa shall not be liable for any loss arising from your failure to secure your account.</p>

                    <h2>4. VERIFICATION SERVICES</h2>
                    <p>Our dual-check verification process involves cross-referencing data with government regulators and performing physical site visits or in-person verification through our network of agents. You consent to these investigative procedures as part of your application for a Kadodo Number.</p>

                    <h2>5. SUBSCRIPTIONS</h2>
                    <p>Certain features of the Platform are available via paid subscriptions. Fees are non-refundable except as required by law. We reserve the right to modify subscription fees with 30 days' notice to active subscribers.</p>

                    <h2>6. MARKETPLACE</h2>
                    <p>Kadodo Africa provides a directory and trust infrastructure. We are not a party to any trade agreements or contracts entered into between Users, even if those Users are verified on our Platform.</p>

                    <h2>7. USER CONDUCT</h2>
                    <p>Users agree not to:</p>
                    <ul>
                        <li>Provide false or misleading information during the verification process.</li>
                        <li>Use the Platform for any fraudulent or illegal activities.</li>
                        <li>Attempt to bypass our security measures or reverse-engineer the Platform.</li>
                    </ul>

                    <h2>8. INTELLECTUAL PROPERTY</h2>
                    <p>All content, trademarks, logos, and software on the Platform are the property of Kadodo Africa or its licensors. You are granted a limited, non-exclusive license to use the Platform for its intended business purposes.</p>

                    <h2>9. PRIVACY</h2>
                    <p>Your privacy is paramount. Our collection and use of personal data are governed by our Privacy Policy, which is incorporated into these Terms by reference. We comply with relevant data protection laws in our operating jurisdictions.</p>

                    <h2>10. DISCLAIMERS</h2>
                    <p>The Platform is provided "as is" and "as available." While we strive for 100% accuracy in our verification processes, Kadodo Africa does not warrant that the information provided is absolute or that the Platform will be error-free.</p>

                    <h2>11. LIMITATION OF LIABILITY</h2>
                    <p>To the maximum extent permitted by law, Kadodo Africa shall not be liable for any indirect, incidental, or consequential damages arising out of your use of the Platform or the conduct of other Users.</p>

                    <h2>12. INDEMNIFICATION</h2>
                    <p>You agree to indemnify and hold harmless Kadodo Africa, its officers, and employees from any claims, damages, or expenses arising from your breach of these Terms or your violation of any third-party rights.</p>

                    <h2>13. GOVERNING LAW</h2>
                    <p>These Terms shall be governed by and construed in accordance with the laws of the Republic of Ghana, without regard to its conflict of law principles. Any disputes shall be settled through arbitration in Accra.</p>

                    <h2>14. CHANGES TO TERMS</h2>
                    <p>We reserve the right to update these Terms at any time. We will notify Users of significant changes via the email address associated with their account or through a prominent notice on our Platform.</p>

                    <h2>15. CONTACT US</h2>
                    <p>If you have any questions regarding these Terms, please contact our legal department at:</p>
                    <div className="contact-details">
                        <p><strong>Legal Compliance Team</strong></p>
                        <p>Kadodo Africa HQ</p>
                        <p>Email: <a href="mailto:legal@kadodo.africa">legal@kadodo.africa</a></p>
                        <p>Phone: +233 (0) 50 123 4567</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default TermsOfService;
