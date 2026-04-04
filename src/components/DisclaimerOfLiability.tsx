import React from 'react';
import Section from './Section';
import './DisclaimerOfLiability.css';

const DisclaimerOfLiability: React.FC = () => {
    return (
        <Section id="disclaimer-of-liability" className="dol-section">
            <div className="dol-container">
                <h1>Disclaimer of Warranty and Limitation of Liability (Verification Services)</h1>
                <p className="last-updated">Last Updated: April 4, 2026</p>
                <p className="last-updated">Effective Date: April 4, 2026</p>

                <div className="dol-content">
                    <h2>1. NATURE OF SERVICES</h2>
                    <p><strong>Kadodo Africa</strong> (operated by <strong>Suku Technologies Ltd.</strong>) provides identity and business verification services (the "Services") on a "Trust-as-a-Service" basis. We aggregate, cross-reference, and validate data provided by users against third-party databases.</p>
                    <p>By using our Services, analyzing a "Kadodo Profile," or relying on a "Kadodo Number," you acknowledge and agree to the terms of this Disclaimer.</p>

                    <h2>2. "AS IS" AND "AS AVAILABLE"</h2>
                    <p>THE SERVICES, INCLUDING ALL VERIFICATION REPORTS, KADODO NUMBERS, AND TRUST SCORES, ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. ALL WARRANTIES, REPRESENTATIONS, CONDITIONS AND OTHER TERMS implied by statute, common law or otherwise are excluded to the fullest extent permitted by law.</p>
                    <p>KADODO AFRICA EXPRESSLY DISCLAIMS THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, ACCURACY, AND NON-INFRINGEMENT.</p>

                    <h2>3. RELIANCE ON THIRD-PARTY DATA SOURCES</h2>
                    <p>Our verification process relies on the availability, accuracy, and currency of data contained in third-party databases, including but not limited to:</p>
                    <ul>
                        <li>The Office of the Registrar of Companies (ORC).</li>
                        <li>The National Identification Authority (NIA).</li>
                        <li>The Ghana Revenue Authority (GRA).</li>
                        <li>Educational Institutions and Professional Bodies.</li>
                    </ul>
                    <p><strong>WE DO NOT OWN, CONTROL, OR MAINTAIN THESE DATABASES.</strong></p>
                    <p>Therefore:</p>
                    <ol>
                        <li><strong>Latency:</strong> We cannot guarantee that the third-party data is up-to-the-minute. A business may have changed status (e.g., filed for bankruptcy or changed directors) in the time between our last check and your viewing of the profile.</li>
                        <li><strong>Errors:</strong> We are not responsible for errors, omissions, or inaccuracies that exist within the source government or institutional records.</li>
                        <li><strong>Downtime:</strong> We are not liable for delays in verification caused by the downtime or technical failure of these third-party systems.</li>
                    </ol>

                    <h2>4. "SNAPSHOT IN TIME" VERIFICATION</h2>
                    <p>A "Verified" status or "Kadodo Number" represents a snapshot in time. It confirms that the data provided matched the official records at the specific timestamp of the verification check.</p>
                    <p>It is not a continuous monitoring service (unless specifically subscribed to under an Enterprise agreement). It does not guarantee that the entity remains compliant or legitimate after the verification date.</p>

                    <h2>5. NO GUARANTEE OF CONDUCT OR SOLVENCY</h2>
                    <p><strong>A KADODO VERIFICATION IS NOT AN ENDORSEMENT.</strong></p>
                    <p>The issuance of a Kadodo Number or Verified Seal:</p>
                    <ol>
                        <li><strong>Is NOT</strong> a guarantee of a business's financial health, creditworthiness, or solvency.</li>
                        <li><strong>Is NOT</strong> a guarantee that the business or individual will perform their contractual obligations.</li>
                        <li><strong>Is NOT</strong> a warranty of the quality, safety, or legality of the goods or services verified sellers list on the Marketplace.</li>
                    </ol>
                    <p>You (the "Relying Party") are solely responsible for your final decision to lend to, invest in, or partner with a verified entity. Kadodo Africa acts as an information provider, not a risk underwriter.</p>

                    <h2>6. LIMITATION OF LIABILITY</h2>
                    <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL SUKU TECHNOLOGIES LTD., ITS AFFILIATES, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO THE USE OF, OR INABILITY TO USE, THE SERVICES.</p>
                    
                    <p><strong>WE ARE NOT LIABLE INTER ALIA FOR:</strong></p>
                    <ol>
                        <li>Any financial loss incurred by a Bank or Investor relying on a verification report where the subject entity subsequently defaults or commits fraud.</li>
                        <li>Any trade loss incurred by a buyer on the Marketplace due to a dispute with a seller.</li>
                    </ol>

                    <h3>CAP ON LIABILITY:</h3>
                    <p>UNDER NO CIRCUMSTANCES WILL KADODO AFRICA'S TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF THE SERVICES EXCEED THE GREATER OF: (A) THE AMOUNT YOU HAVE PAID TO USE THE SERVICES IN THE SIX (6) MONTHS PRIOR TO THE EVENT GIVING RISE TO THE LIABILITY, OR (B) ONE HUNDRED GHANA CEDIS (GHS 100.00).</p>

                    <h2>7. USER RESPONSIBILITY</h2>
                    <p>You acknowledge that the Services are tools to assist in your due diligence process but do not replace the need for your own independent judgment and risk assessment.</p>

                    <h2>8. CONTACT</h2>
                    <p>If you have questions regarding the scope of this disclaimer, please contact:</p>
                    <div className="contact-details">
                        <p><strong>Email:</strong> <a href="mailto:legal@kadodoafrica.com">legal@kadodoafrica.com</a></p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default DisclaimerOfLiability;
