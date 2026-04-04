import React from 'react';
import Section from './Section';
import './BiometricDataPolicy.css';

const BiometricDataPolicy: React.FC = () => {
    return (
        <Section id="biometric-data-policy" className="bdp-section">
            <div className="bdp-container">
                <h1>Biometric Data Policy</h1>
                <p className="last-updated">Last Updated: April 4, 2026</p>
                <p className="last-updated">Effective Date: April 4, 2026</p>

                <div className="bdp-content">
                    <h2>1. OVERVIEW</h2>
                    <p>At <strong>Kadodo Africa</strong> (operated by <strong>Suku Technologies Ltd.</strong>), verifying your identity is central to our mission of building trust. To do this securely and prevent identity theft, we use biometric verification technologies.</p>
                    <p>This <strong>Biometric Data Policy</strong> explains what biometric data we collect, how we use it, how we store it, and how long we keep it. This policy should be read in conjunction with our Privacy Policy and Terms of Service.</p>

                    <h2>2. WHAT IS BIOMETRIC DATA?</h2>
                    <p>"Biometric Data" refers to information resulting from specific technical processing relating to the physical, physiological, or behavioral characteristics of a natural person, which allows or confirms the unique identification of that person.</p>
                    <p>For the purposes of Kadodo Africa, Biometric Data specifically refers to:</p>
                    <ul>
                        <li><strong>Facial Geometry:</strong> Data derived from a photograph (selfie) or video scan of your face.</li>
                        <li><strong>Liveness Detection Data:</strong> Technical data used to determine if a user is a real, live person and not the insertion of a photo, mask, or bot.</li>
                    </ul>

                    <h2>3. WHY WE COLLECT BIOMETRIC DATA</h2>
                    <p>We collect and process your Biometric Data solely for the following purposes:</p>
                    <ol>
                        <li><strong>Identity Verification:</strong> To match the "live" image of your face against the photo on your government-issued ID (e.g., Ghana Card) to ensure they belong to the same person.</li>
                        <li><strong>Fraud Prevention:</strong> To detect and prevent "spoofing" attacks (using a photo of another person) during the onboarding process.</li>
                        <li><strong>Security:</strong> To re-authenticate your identity during high-value transactions or account recovery (if applicable).</li>
                    </ol>
                    <p><strong>We do NOT use your Biometric Data for marketing, advertising, or demographic profiling.</strong></p>

                    <h2>4. CONSENT</h2>
                    <p>We will strictly obtain your <strong>explicit consent</strong> before collecting any Biometric Data.</p>
                    <ul>
                        <li>During the verification flow, you will be presented with a notice asking for permission to access your camera and process your facial scan.</li>
                        <li>By proceeding with the facial scan, you explicitly consent to the collection and processing of your Biometric Data as described in this policy.</li>
                        <li>You may decline to provide Biometric Data; however, this will prevent us from completing your digital verification, and you may be unable to use the Kadodo platform.</li>
                    </ul>

                    <h2>5. DISCLOSURE OF BIOMETRIC DATA</h2>
                    <p>We do not sell, lease, trade, or otherwise profit from your Biometric Data.</p>
                    <p>We verify your data through trusted third-party verification providers (e.g., government APIs or identity verification vendors) solely to facilitate the identity check. These vendors:</p>
                    <ol>
                        <li>Are contractually obligated to keep your data confidential.</li>
                        <li>Are prohibited from using your data for any purpose other than the verification service requested by Kadodo Africa.</li>
                        <li>Must implement security measures consistent with this policy and applicable law.</li>
                    </ol>
                    <p>We may also disclose Biometric Data if compelled by a valid court order or subpoena issued by a court of competent jurisdiction.</p>

                    <h2>6. DATA STORAGE AND SECURITY</h2>
                    <p>We treat Biometric Data with the highest level of security.</p>
                    <ul>
                        <li><strong>Encryption:</strong> All Biometric Data is encrypted in transit (using SSL/TLS) and at rest (using AES standards).</li>
                        <li><strong>Access Control:</strong> Access to Biometric Data is strictly limited to authorized personnel and systems that require access to perform the verification function.</li>
                        <li><strong>Separation:</strong> Where technically feasible, Biometric Data is stored separately from other personal identification information to reduce risk.</li>
                    </ul>

                    <h2>7. RETENTION AND DELETION SCHEDULE</h2>
                    <p>We retain your Biometric Data only as long as necessary to fulfill the initial purpose of verification or to comply with legal obligations.</p>
                    <ol>
                        <li><strong>Verification Data:</strong> Once your identity has been successfully verified, the raw biometric scan (the map of your face) is typically deleted or anonymized by our verification processor within a standard retention period (e.g., 90 days), unless a longer period is required by law for audit trails.</li>
                        <li><strong>Account Closure:</strong> If you close your Kadodo account, we will permanently destroy any biometric data associated with your profile within <strong>thirty (30) days</strong> of your request, unless a longer retention period is mandated by the Anti-Money Laundering Act or other applicable laws.</li>
                        <li><strong>Dispute Resolution:</strong> In cases of suspected fraud, we may retain data for a longer period as evidence for legal proceedings.</li>
                    </ol>

                    <h2>8. YOUR RIGHTS</h2>
                    <p>Under the Data Protection Act, 2012 (Act 843), you have the right to request:</p>
                    <ul>
                        <li>Confirmation of whether we hold biometric data about you.</li>
                        <li>Correction of inaccurate data.</li>
                        <li>Deletion of your biometric data (subject to legal retention requirements).</li>
                    </ul>
                    <p>To exercise these rights, please contact our Data Protection Officer at <a href="mailto:privacy@kadodoafrica.com">privacy@kadodoafrica.com</a>.</p>

                    <h2>9. CONTACT US</h2>
                    <p>If you have questions about this Biometric Data Policy, please contact:</p>
                    <div className="contact-details">
                        <p><strong>Suku Technologies Ltd.</strong></p>
                        <p>21 King Tackie Avenue</p>
                        <p>Accra, Ghana</p>
                        <p>Email: <a href="mailto:privacy@kadodoafrica.com">privacy@kadodoafrica.com</a></p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default BiometricDataPolicy;
