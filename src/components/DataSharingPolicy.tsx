import React from 'react';
import Section from './Section';
import './DataSharingPolicy.css';

const DataSharingPolicy: React.FC = () => {
    return (
        <Section id="data-sharing-policy" className="dsp-section">
            <div className="dsp-container">
                <h1>Data Sharing & Third-Party Disclosure Policy</h1>
                <p className="last-updated">Last Updated: April 4, 2026</p>
                <p className="last-updated">Effective Date: April 4, 2026</p>

                <div className="dsp-content">
                    <h2>1. OUR PLEDGE</h2>
                    <p>At <strong>Kadodo Africa</strong> (operated by <strong>Suku Technologies Ltd.</strong>), building trust is our business. We understand that your data is your asset.</p>
                    <p><strong>We do not sell your Personal Information to advertisers or data brokers.</strong></p>
                    <p>Your data is only used for the purposes of this platform. We use your data to:</p>
                    <ol>
                        <li>Verify your identity and business credentials.</li>
                        <li>Provide the services you have requested (e.g., listing on the Marketplace).</li>
                        <li>Connect you with opportunities (e.g., loans or contracts) <strong>at your specific request</strong>.</li>
                        <li>Comply with the law.</li>
                    </ol>
                    <p>This policy details the specific categories of third parties with whom we share data and the reasons why.</p>

                    <h2>2. CATEGORIES OF THIRD-PARTY RECIPIENTS</h2>

                    <h3>2.1 Verification Partners (Data Sources)</h3>
                    <p>To issue a "Kadodo Number," we must validate the information you provide against official sources. We transmit specific data points (e.g., ID numbers, Business Names, Registration Numbers) to these entities to receive a "Match/No Match" confirmation or a status report.</p>
                    <ul>
                        <li><strong>Government Registries:</strong> Office of the Registrar of Companies (ORC), National Identification Authority (NIA), Ghana Revenue Authority (GRA).</li>
                        <li><strong>Educational Institutions:</strong> Universities and credentialing bodies (for Individual Verification).</li>
                        <li><strong>Professional Bodies:</strong> Associations (e.g., ICAG, GNCCI) to confirm membership status.</li>
                    </ul>

                    <h3>2.2 Relying Parties (Value Partners)</h3>
                    <p>These are the entities you want to build trust with. We share your verified "Kadodo Profile" and underlying verification reports with them <strong>only when you authorize it.</strong></p>
                    <ul>
                        <li><strong>Financial Institutions:</strong> Banks, Microfinance institutions, and Fintechs (e.g., for loan applications).</li>
                        <li><strong>Investors:</strong> Venture Capital firms or Angel Investors (e.g., for fundraising).</li>
                        <li><strong>Corporate Partners:</strong> Large enterprises looking for verified suppliers.</li>
                    </ul>
                    <p><strong>Consent Mechanism:</strong> We will never send your full data profile to a bank without your active consent (e.g., clicking "Apply for Loan" or "Share Profile" within the platform).</p>

                    <h3>2.3 Service Providers (Data Processors)</h3>
                    <p>We engage trusted third-party vendors to perform technical and operational functions on our behalf. They process data only and are contractually bound to confidentiality. Only limited data is shared in line with the purpose for which it is required and in accordance with the Data Protection laws in Ghana.</p>
                    <ul>
                        <li><strong>Cloud Hosting & Infrastructure:</strong> (e.g., AWS, Azure, Google Cloud) to store your data securely.</li>
                        <li><strong>Identity Verification Tech:</strong> (e.g., Biometric processing vendors) to perform liveness checks.</li>
                        <li><strong>Payment Processors:</strong> (e.g., Paystack, Stripe) to handle subscription payments. <strong>Note:</strong> Kadodo does not store your full credit card details; these are handled directly by the processor.</li>
                        <li><strong>Communication Services:</strong> (e.g., SMS gateways, Email providers) to send OTPs and alerts.</li>
                    </ul>

                    <h3>2.4 Legal and Regulatory Authorities</h3>
                    <p>We may disclose your information if we believe in good faith that such disclosure is necessary to:</p>
                    <ul>
                        <li>Comply with a legal obligation (e.g., court order, subpoena).</li>
                        <li>Cooperate with the <strong>Financial Intelligence Centre (FIC)</strong> regarding suspected money laundering or terrorist financing.</li>
                        <li>Protect the rights, property, or safety of Kadodo Africa, our users, or the public.</li>
                    </ul>

                    <h2>3. AGGREGATED AND ANONYMIZED DATA</h2>
                    <p>We may share <strong>non-personal</strong>, aggregated, or anonymized data with partners or researchers for industry analysis, demographic profiling, and policy-making (e.g., "50% of verified SMEs in Accra are in the Agribusiness sector"). This data cannot be used to identify you personally.</p>
                    <p>By signing up to the Kadodo platform, you consent to the use of non-personal data in this manner.</p>

                    <h2>4. INTERNATIONAL DATA TRANSFERS</h2>
                    <p>Some of our Service Providers (e.g., Cloud Hosting) may be located outside of Ghana.</p>
                    <ul>
                        <li>When we transfer data across borders, we ensure that the recipient country offers an adequate level of data protection in place to protect your information, in compliance with the <strong>Data Protection Act, 2012 (Act 843)</strong>.</li>
                    </ul>

                    <h2>5. LINKS TO THIRD-PARTY SITES</h2>
                    <p>Our Platform may contain links to other websites (e.g., a bank's website). We are not responsible for the privacy practices or content of these external sites. We encourage you to read the privacy policies of any third-party sites you visit.</p>

                    <h2>6. BUSINESS TRANSFERS</h2>
                    <p>If Suku Technologies Ltd. is involved in a merger, acquisition, or sale of assets, your User Data may be transferred as part of that transaction. We will notify you via email and/or a prominent notice on our Platform of any change in ownership or uses of your personal information, as well as any choices you may have regarding your personal information.</p>

                    <h2>7. CONTACT US</h2>
                    <p>If you have questions about who has access to your data, please contact:</p>
                    <div className="contact-details">
                        <p><strong>Email:</strong> <a href="mailto:privacy@kadodoafrica.com">privacy@kadodoafrica.com</a></p>
                        <p><strong>Subject Line:</strong> Data Sharing Inquiry</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default DataSharingPolicy;
