import React from 'react';
import Section from './Section';
import './AcceptableUsePolicy.css';

const AcceptableUsePolicy: React.FC = () => {
    return (
        <Section id="acceptable-use-policy" className="aup-section">
            <div className="aup-container">
                <h1>Acceptable Use Policy (AUP)</h1>
                <p className="last-updated">Last Updated: April 4, 2026</p>
                <p className="last-updated">Effective Date: April 4, 2026</p>

                <div className="aup-content">
                    <h2>1. SCOPE</h2>
                    <p>This Acceptable Use Policy ("AUP") outlines the prohibited uses of the <strong>Kadodo Africa</strong> platform, website, API, and services (collectively, the "Services"). This policy applies to all users, including Verified Businesses, Individuals, and general visitors.</p>
                    <p>By accessing our Services, you agree to abide by this policy. Violation of this AUP may result in the immediate suspension or termination of your account and legal action.</p>

                    <h2>2. PROHIBITED ACTIONS (SYSTEM & SECURITY)</h2>
                    <p>You agree not to misuse the Services. Specifically, you must not:</p>

                    <h3>2.1 Scraping and Data Mining</h3>
                    <ul>
                        <li>Use of any robot, spider, scraper, deep-link, or other automated data gathering or extraction tool, program, algorithm, or methodology to access, acquire, copy, or monitor the Services or any portion of our database.</li>
                    </ul>
                    <p><strong>Why?</strong> Our database of verified businesses is our proprietary asset. Stealing this list is strictly prohibited.</p>

                    <h3>2.2 Security Breaches</h3>
                    <ul>
                        <li>Attempt to gain unauthorized access to any portion or feature of the Services, or any other systems or networks connected to the Services (hacking).</li>
                        <li>Probe, scan, or test the vulnerability of the system or breach the security or authentication measures.</li>
                        <li>Interfere with or disrupt the integrity or performance of the Services (e.g., DDoS attacks, introducing viruses, worms, or time bombs).</li>
                    </ul>

                    <h3>2.3 API Misuse</h3>
                    <ul>
                        <li>If you have access to our API (e.g., as a Bank partner), you must not exceed the rate limits defined in your agreement.</li>
                        <li>You must not sell, lease, or sub-license access our API to third parties.</li>
                    </ul>

                    <h2>3. PROHIBITED ACTIONS (VERIFICATION & IDENTITY)</h2>
                    <p>Because Kadodo Africa is a "Trust-as-a-Service" platform, the integrity of our verification process is paramount. You are strictly prohibited from:</p>
                    <ul>
                        <li><strong>Document Forgery:</strong> Submitting altered, photoshopped, forged, or stolen documents (IDs, Business Certificates, Utility Bills) for verification.</li>
                        <li><strong>Impersonation:</strong> Creating an account or a "Kadodo Profile" for a person or business other than yourself, or falsely implying an association with another entity.</li>
                        <li><strong>Biometric Spoofing:</strong> Using masks, photos of photos, deepfakes, or video loops to try and bypass our liveness checks.</li>
                        <li><strong>Badge Misuse:</strong> Using the "Kadodo Verified" badge or "Kadodo Number" on websites or marketing materials if your verification status has expired or been revoked.</li>
                    </ul>

                    <h2>4. PROHIBITED CONTENT</h2>
                    <p>You may not post, upload, publish, submit, or transmit any content (including Marketplace listings, profile descriptions, or reviews) that:</p>

                    <h3>4.1 Illegal Content</h3>
                    <ul>
                        <li>Violates any law or regulation of the Republic of Ghana.</li>
                        <li>Promotes illegal drugs, weapons, or human trafficking.</li>
                        <li>Infringes on the intellectual property rights (copyright, trademark) of others (e.g., selling counterfeit goods).</li>
                    </ul>

                    <h3>4.2 Harmful or Offensive Content</h3>
                    <ul>
                        <li>Is defamatory, obscene, pornographic, vulgar, or offensive.</li>
                        <li>Promotes discrimination, bigotry, racism, hatred, harassment, or harm against any individual or group.</li>
                        <li>Is violent or threatening or promotes violence or actions that are threatening to any person or entity.</li>
                    </ul>

                    <h3>4.3 Fraudulent Content</h3>
                    <ul>
                        <li>Contains false, misleading, or deceptive information (e.g., listing a product on the Marketplace that does not exist).</li>
                        <li>Promotes Ponzi schemes, pyramid schemes, or "get rich quick" schemes.</li>
                    </ul>

                    <h2>5. MARKETPLACE SPECIFIC RULES</h2>
                    <p>If you are a Seller on the Kadodo Marketplace, you further agree NOT to:</p>
                    <ul>
                        <li><strong>Bypass Fees:</strong> Direct buyers to pay you outside of the Kadodo platform (e.g., "WhatsApp me to pay via MoMo direct") to avoid paying commission fees.</li>
                        <li><strong>Data Misuse:</strong> Use the contact information of buyers for any purpose other than fulfilling their specific order (e.g., adding them to your marketing email list without consent).</li>
                    </ul>

                    <h2>6. ENFORCEMENT</h2>
                    <p>We reserve the right, obligation, to investigate any violation of this Policy. If we determine that you have violated this AUP, we may take any of the following actions:</p>
                    <ol>
                        <li><strong>Warning:</strong> Issue a formal warning via email.</li>
                        <li><strong>Content Removal:</strong> Delete the offending listing, profile text, or review.</li>
                        <li><strong>Suspension:</strong> Temporarily suspend your account and hide your "Verified" status.</li>
                        <li><strong>Termination:</strong> Permanently ban your account and revoke your Kadodo Number.</li>
                        <li><strong>Legal Action:</strong> Report your activities to law enforcement agencies (e.g., the Ghana Police Service, EOCO) if the violation involves illegal acts for example fraud or forgery.</li>
                    </ol>

                    <h2>7. REPORTING VIOLATIONS</h2>
                    <p>If you discover any content or user behavior that violates this policy, please report it to us immediately.</p>
                    <div className="contact-details">
                        <p><strong>Email:</strong> <a href="mailto:compliance@kadodoafrica.com">compliance@kadodoafrica.com</a></p>
                        <p><strong>Subject:</strong> AUP Violation Report</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default AcceptableUsePolicy;
