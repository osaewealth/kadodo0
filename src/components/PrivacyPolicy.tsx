import React from 'react';
import Section from './Section';
import './PrivacyPolicy.css';

const PrivacyPolicy: React.FC = () => {
    return (
        <Section id="privacy-policy" className="pp-section">
            <div className="pp-container">
                <h1>Privacy Policy</h1>
                <p className="last-updated">Last Updated: April 4, 2026</p>
                <p className="last-updated">Effective Date: April 4, 2026</p>

                <div className="pp-content">
                    <h2>1. INTRODUCTION</h2>
                    <p>Welcome to <strong>Kadodo Africa</strong>, owned and operated by <strong>Suku Technologies Ltd.</strong> ("Company", "we", "us", or "our").</p>
                    <p>We are committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, store, and share your personal information when you use our website, mobile application, and verification services (collectively, the "Services").</p>
                    <p>By accessing or using our Services, you agree to the collection and use of information in accordance with this policy. We process your data in compliance with the <strong>Data Protection Act, 2012 (Act 843)</strong> of the Republic of Ghana and international best practices.</p>

                    <h2>2. WHO IS THE DATA CONTROLLER?</h2>
                    <p>For the purposes of this Policy, the "Data Controller" (the entity that determines the purpose and means of processing your data) is:</p>
                    <div className="contact-details">
                        <p><strong>Suku Technologies Ltd.</strong></p>
                        <p>21 King Tackie Avenue</p>
                        <p>Accra, Ghana</p>
                        <p>Data Protection Officer Email: <a href="mailto:privacy@kadodoafrica.com">privacy@kadodoafrica.com</a></p>
                    </div>

                    <h2>3. INFORMATION WE COLLECT</h2>
                    <p>To provide our "Trust-as-a-Service" verification, we must collect specific, often sensitive, information.</p>

                    <h3>3.1 Personal Information</h3>
                    <ul>
                        <li><strong>Identity Data:</strong> Full name, date of birth, gender, nationality.</li>
                        <li><strong>Contact Data:</strong> Email address, phone number, physical address, and digital address (GPS).</li>
                        <li><strong>Government IDs:</strong> Scans or images of government-issued identification (e.g., Ghana Card, Passport, Driver's License) and Tax Identification Numbers (TIN).</li>
                    </ul>

                    <h3>3.2 Business Information</h3>
                    <ul>
                        <li><strong>Entity Data:</strong> Business registration certificates, incorporation documents, directors' details, and beneficial ownership information.</li>
                        <li><strong>Operational Data:</strong> Utility bills (for proof of address), business location photos, and trade references.</li>
                    </ul>

                    <h3>3.3 Biometric Data</h3>
                    <ul>
                        <li><strong>Facial Data:</strong> To verify that the person creating the account matches the ID provided, we collect facial images (selfies) and perform liveness checks. <strong>By using our service, you explicitly consent to the processing of your biometric data for identity verification purposes.</strong></li>
                    </ul>

                    <h3>3.4 Technical and Usage Data</h3>
                    <ul>
                        <li>IP address, browser type, device information, operating system, and data on how you interact with our Platform (e.g., pages visited, time spent).</li>
                    </ul>

                    <h2>4. HOW WE USE YOUR INFORMATION</h2>
                    <p>We use your data for the following specific purposes:</p>
                    <ol>
                        <li><strong>Verification:</strong> To validate your identity and business credentials against third-party databases (e.g., Office of the Registrar of Companies, National Identification Authority).</li>
                        <li><strong>Service Delivery:</strong> To create your "Kadodo Profile," issue your <strong>Kadodo Number</strong>, and enable you to list on the Marketplace.</li>
                        <li><strong>Communication:</strong> To send you transaction confirmations, verification status updates, and critical service alerts.</li>
                        <li><strong>Security:</strong> To detect and prevent fraud, money laundering, and unauthorized access to our Platform.</li>
                        <li><strong>Compliance:</strong> To meet our legal obligations under KYC (Know Your Customer) and AML (Anti-Money Laundering) laws.</li>
                    </ol>

                    <h2>5. LEGAL ASSUMPTIONS FOR PROCESSING</h2>
                    <p>We process your personal data under the following legal assumptions:</p>
                    <ul>
                        <li><strong>Consent:</strong> You have given us clear consent to process your personal data for a specific purpose (e.g., Verification).</li>
                        <li><strong>Contractual Necessity:</strong> Processing is necessary to fulfill the contract (Terms of Service) we have with you.</li>
                        <li><strong>Legal Obligation:</strong> Processing is necessary for compliance with a legal obligation (e.g., Anti-Money Laundering reporting).</li>
                    </ul>

                    <h2>6. DISCLOSURE OF YOUR INFORMATION</h2>
                    <p>We do not sell your personal data. We disclose your information only in the following circumstances:</p>

                    <h3>6.1 Verification Partners (Government Agencies)</h3>
                    <p>To verify your details, we transmit specific data points (e.g., ID numbers, Business Names) to issuing authorities such as the <strong>Office of the Registrar of Companies (ORC)</strong> and the <strong>National Identification Authority (NIA)</strong>.</p>

                    <h3>6.2 Relying Parties (With Your Consent)</h3>
                    <p>If you apply for a loan or contract with a third party (e.g., a Bank or Investor) through our Platform, we share your Verified Profile and underlying data with them <strong>only upon your explicit request or authorization</strong>.</p>

                    <h3>6.3 Service Providers</h3>
                    <p>We may employ third-party companies to facilitate our Service (e.g., cloud hosting, payment processors, SMS gateways). These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

                    <h3>6.4 Legal Requirements</h3>
                    <p>We may disclose your data if required to do so by law or in response to valid requests by public authorities (e.g., the Data Protection Commission, Financial Intelligence Centre).</p>

                    <h2>7. DATA SECURITY</h2>
                    <p>We implement robust security measures to protect your data, including:</p>
                    <ul>
                        <li><strong>Encryption:</strong> Data is encrypted in transit (SSL/TLS) and at rest.</li>
                        <li><strong>Access Controls:</strong> Strict role-based access to personal data for our employees.</li>
                        <li><strong>Regular Audits:</strong> Periodic security assessments to identify and mitigate vulnerabilities.</li>
                    </ul>
                    <p>However, no method of transmission over the Internet is 100% secure. While we strive to protect your data, we cannot guarantee its absolute security.</p>

                    <h2>8. DATA RETENTION</h2>
                    <p>We will retain your personal data only for as long as is necessary for the purposes set out in this Privacy Policy.</p>
                    <ul>
                        <li><strong>Active Accounts:</strong> We retain data while your account is active to provide the Service.</li>
                        <li><strong>Inactive Accounts:</strong> We may retain verification records for a period required by law (typically 5-7 years for financial records) after you close your account, to comply with legal/audit obligations.</li>
                    </ul>

                    <h2>9. YOUR DATA RIGHTS</h2>
                    <p>Under the Data Protection Act, 2012 (Act 843), you have the right to:</p>
                    <ol>
                        <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                        <li><strong>Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
                        <li><strong>Erasure:</strong> Request deletion of your data (Right to be Forgotten), subject to our legal retention obligations.</li>
                        <li><strong>Restrict Processing:</strong> Object to the processing of your data for specific purposes (e.g., marketing).</li>
                        <li><strong>Withdraw Consent:</strong> Withdraw your consent at any time where we relied on your consent to process your information.</li>
                    </ol>
                    <p>To exercise these rights, please contact us at <a href="mailto:privacy@kadodoafrica.com">privacy@kadodoafrica.com</a></p>

                    <h2>10. INTERNATIONAL DATA TRANSFERS</h2>
                    <p>Your information may be transferred to—and maintained on—computers located outside of Ghana (e.g., secure cloud servers). If we transfer data internationally, we ensure adequate safeguards are in place, to ensure your data remains protected in accordance with this Policy.</p>

                    <h2>11. COOKIES</h2>
                    <p>We use cookies to improve your experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service. Please see our Cookie Policy for more details.</p>

                    <h2>12. CHANGES TO THIS POLICY</h2>
                    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.</p>

                    <h2>13. CONTACT US</h2>
                    <p>If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer:</p>
                    <div className="contact-details">
                        <p><strong>Email:</strong> <a href="mailto:privacy@kadodo.africa">privacy@kadodo.africa</a></p>
                        <p><strong>Address:</strong> Suku Technologies Ltd., 21 King Tackie Avenue, Accra, Ghana.</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default PrivacyPolicy;
