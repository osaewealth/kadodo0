import React from 'react';
import Section from './Section';
import './LimitationOfLiability.css';

const LimitationOfLiability: React.FC = () => {
    return (
        <Section id="limitation-of-liability" className="lol-section">
            <div className="lol-container">
                <h1>Limitation of Liability Policy</h1>
                <p className="last-updated">Last Updated: April 4, 2026</p>
                <p className="last-updated">Effective Date: April 4, 2026</p>

                <div className="lol-content">
                    <h2>1. PREAMBLE</h2>
                    <p>This Limitation of Liability Policy is incorporated into and subject to the <strong>Kadodo Africa</strong> Terms of Service. It sets forth the full extent of the financial liability of <strong>Suku Technologies Ltd.</strong> ("Company", "we", "us") to you ("User", "Relying Party") regarding your use of the Platform and Services.</p>
                    <p><strong>PLEASE READ THIS SECTION CAREFULLY. IT LIMITS YOUR RIGHTS TO SUE US FOR DAMAGES.</strong></p>

                    <h2>2. DISCLAIMER OF WARRANTIES (THE "AS-IS" CLAUSE)</h2>
                    <p>TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE KADODO AFRICA PLATFORM, VERIFICATION REPORTS, API ACCESS, AND MARKETPLACE SERVICES ARE PROVIDED ON AN <strong>"AS IS"</strong> AND <strong>"AS AVAILABLE"</strong> BASIS. ALL WARRANTIES, REPRESENTATIONS, CONDITIONS AND OTHER TERMS implied by statute, common law or otherwise are excluded to the fullest extent permitted by law.</p>
                    <p>WE SPECIFICALLY DISCLAIM ANY IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, OR THAT ANY DEFECTS WILL BE CORRECTED.</p>

                    <h2>3. EXCLUSION OF CONSEQUENTIAL AND INDIRECT DAMAGES</h2>
                    <p>UNDER NO CIRCUMSTANCES SHALL SUKU TECHNOLOGIES LTD., ITS DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, PARTNERS, OR LICENSORS BE LIABLE TO YOU FOR ANY:</p>
                    <ol>
                        <li><strong>INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES;</strong></li>
                        <li><strong>SPECIAL, EXEMPLARY, OR PUNITIVE DAMAGES;</strong></li>
                        <li><strong>LOSS OF PROFITS, REVENUE, OR BUSINESS OPPORTUNITIES;</strong></li>
                        <li><strong>LOSS OF DATA OR REPUTATION (GOODWILL);</strong></li>
                        <li><strong>SERVICE INTERRUPTIONS OR SYSTEM FAILURES;</strong></li>
                    </ol>
                    <p>WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>

                    <h2>4. SPECIFIC LIABILITY SCENARIOS (KADODO CONTEXT)</h2>
                    <p>To create clarity regarding our "Trust-as-a-Service" model, we explicitly disclaim liability for the following specific scenarios:</p>

                    <h3>4.1 Verification Accuracy</h3>
                    <p>We are a data aggregator, not a guarantor. We are <strong>NOT LIABLE</strong> if a verified business or individual:</p>
                    <ul>
                        <li>Provided false information that bypassed our checks due to sophisticated forgery.</li>
                        <li>Changed their status (e.g., became insolvent or was struck off the register) after the date of our verification report.</li>
                        <li>Commits fraud against you or defaults on a loan or contract.</li>
                    </ul>

                    <h3>4.2 Third-Party Data Sources</h3>
                    <p>We are <strong>NOT LIABLE</strong> for errors, omissions, or downtimes originating from third-party government databases (e.g., Office of the Registrar of Companies, National Identification Authority) that result in an incorrect verification status or a delay in service.</p>

                    <h3>4.3 Marketplace Transactions</h3>
                    <p>We are <strong>NOT LIABLE</strong> for any dispute regarding the quality, safety, delivery, or legality of goods sold on the Kadodo Marketplace. We are a venue, not a party to the transaction.</p>

                    <h2>5. CAP ON LIABILITY (THE "MONETARY LIMIT")</h2>
                    <p>NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR CUMULATIVE LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE GREATER OF:</p>
                    <ol>
                        <li><strong>THE TOTAL AMOUNT PAID BY YOU</strong> TO KADODO AFRICA FOR THE SPECIFIC SERVICE GIVING RISE TO THE CLAIM DURING THE <strong>SIX (6) MONTHS</strong> PRIOR TO THE CLAIM; OR</li>
                        <li><strong>ONE HUNDRED GHANA CEDIS (GHS 100.00).</strong></li>
                    </ol>
                    <p>THIS LIMITATION APPLIES TO ALL CLAIMS IN THE AGGREGATE, INCLUDING, WITHOUT LIMITATION, BREACH OF CONTRACT, BREACH OF WARRANTY, INDEMNITY, NEGLIGENCE, STRICT LIABILITY, MISREPRESENTATIONS, AND OTHER TORTS.</p>

                    <p>BARRED</p>

                    <h2>6. INDEMNIFICATION BY USER</h2>
                    <p>You agree to indemnify and hold Suku Technologies Ltd. harmless from any losses, including legal fees, that result from your violation of these Terms or your negligence/misconduct (e.g., if you upload a virus to our platform or defraud another user).</p>
                </div>
            </div>
        </Section>
    );
};

export default LimitationOfLiability;
