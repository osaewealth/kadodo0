import React from 'react';
import Section from './Section';
import './SubscriptionPolicy.css';

const SubscriptionPolicy: React.FC = () => {
    return (
        <Section id="subscription-policy" className="sp-section">
            <div className="sp-container">
                <h1>Subscription & Cancellation Policy</h1>
                <p className="last-updated">Last Updated: April 4, 2026</p>
                <p className="last-updated">Effective Date: April 4, 2026</p>

                <div className="sp-content">
                    <h2>1. OVERVIEW</h2>
                    <p>This policy governs the purchase, renewal, and cancellation of paid services on <strong>Kadodo Africa</strong> (operated by <strong>Suku Technologies Ltd.</strong>). By subscribing to a paid plan or purchasing a one-time verification service, you agree to these terms and conditions.</p>

                    <h2>2. TYPES OF SERVICES</h2>

                    <h3>2.1 One-Time Services</h3>
                    <p>Some services are billed on a one-off basis. Once paid, the service is delivered, and no recurring charges apply.</p>
                    <ul>
                        <li><strong>Examples:</strong> Individual Verification (Standard/Platinum), Single Business Profile Report.</li>
                    </ul>

                    <h3>2.2 Recurring Subscriptions (SaaS)</h3>
                    <p>These services provide ongoing access to premium features (e.g., "Verified" badge maintenance, API access, Marketplace selling privileges).</p>
                    <ul>
                        <li><strong>Examples:</strong> Kadodo Verified, Kadodo Trust+, Kadodo Global tiers.</li>
                        <li><strong>Billing Cycles:</strong> Available on <strong>Monthly</strong> or <strong>Annual</strong> plans.</li>
                    </ul>

                    <h2>3. BILLING AND PAYMENT</h2>

                    <h3>3.1 Payment Methods</h3>
                    <p>We accept payments via Mobile Money (MTN, Telecel, AT), Debit/Credit Cards (Visa, Mastercard), and Bank Transfers via our secure payment partners (e.g., Paystack).</p>

                    <h3>3.2 Authorization</h3>
                    <p>By providing a payment method, you authorize Suku Technologies Ltd. to charge the applicable fees (including any applicable taxes such as VAT, NHIL, GetFund, and E-Levy) to that payment method.</p>

                    <h3>3.3 Currency</h3>
                    <p>All transactions are processed in <strong>Ghanaian Cedis (GHS)</strong> unless otherwise displayed at checkout for international users (USD/EUR).</p>

                    <h2>4. AUTOMATIC RENEWAL</h2>
                    <p><strong>For Recurring Subscriptions Only:</strong></p>
                    <p>To ensure your business verification status does not expire (which would remove your "Verified" badge and hide your Marketplace listings), our subscriptions are set to auto-renew by default.</p>
                    <ul>
                        <li><strong>Monthly Plans:</strong> Renew every 30 days.</li>
                        <li><strong>Annual Plans:</strong> Renew every 365 days.</li>
                    </ul>
                    <p>Your payment method will be charged automatically at the start of each new billing cycle unless you cancel at least <strong>48 hours before</strong> the renewal date.</p>

                    <h2>5. CANCELLATION POLICY</h2>

                    <h3>5.1 How to Cancel</h3>
                    <p>You may cancel your subscription at any time through your account dashboard:</p>
                    <ol>
                        <li>Log in to Kadodo Africa.</li>
                        <li>Go to <strong>Settings &gt; Billing &amp; Subscription</strong>.</li>
                        <li>Click <strong>"Cancel Subscription".</strong></li>
                        <li>Follow the prompts to confirm.</li>
                    </ol>
                    <p>Alternatively, you may email <a href="mailto:support@kadodo.africa">support@kadodo.africa</a> with the subject line "Cancellation Request." Email requests must be sent at least 3 business days before the renewal date to ensure processing.</p>

                    <h3>5.2 Effect of Cancellation</h3>
                    <ul>
                        <li><strong>Access:</strong> You will retain access to your premium features until the end of your current billing cycle.</li>
                        <li><strong>Data:</strong> After your subscription ends, your account will revert to the "Basic" (Free) tier. You may lose access to advanced analytics, priority support, and your "Verified" badge may be removed or downgraded to "Unverified."</li>
                        <li><strong>No Future Charges:</strong> You will not be charged for the next billing cycle.</li>
                    </ul>

                    <h2>6. REFUND POLICY</h2>

                    <h3>6.1 General Rule: Non-Refundable</h3>
                    <p>Except as required by law or explicitly stated below, <strong>all fees paid are non-refundable.</strong></p>
                    <ul>
                        <li>We do not provide refunds for partially used subscription periods (e.g., if you cancel halfway through the month).</li>
                        <li>We do not provide refunds if you simply change your mind.</li>
                    </ul>

                    <h3>6.2 Verification Failure</h3>
                    <p>If you pay for a verification service (e.g., Trust+) and your application is <strong>rejected</strong> because:</p>
                    <ul>
                        <li>You submitted fraudulent documents;</li>
                        <li>You failed the "Liveness Check" (biometric mismatch); or</li>
                        <li>Your business is not in good standing with the Registrar of Companies;</li>
                    </ul>
                    <p>You are NOT eligible for a full refund. A processing fee (covering the cost of the third-party API checks we performed) will be deducted from any potential refund, or the refund may be denied entirely at our discretion.</p>

                    <h3>6.3 Technical Error</h3>
                    <p>If you were charged due to a technical error (e.g., double billing), please contact us within <strong>7 days</strong>. We will investigate and issue a full refund immediately if the error is confirmed to be on our end.</p>

                    <h2>7. UPGRADING AND DOWNGRADING</h2>

                    <h3>7.1 Upgrades</h3>
                    <p>If you upgrade your plan (e.g., from Verified to Trust+), the change takes effect immediately. You will be charged a prorated amount for the remainder of the cycle, or a full new cycle will begin, depending on the plan's terms.</p>

                    <h3>7.2 Downgrades</h3>
                    <p>If you downgrade your plan, the change will take effect at the end of your current billing cycle.</p>

                    <h2>8. FAILED PAYMENTS</h2>
                    <p>If your payment method fails (e.g., expired card, insufficient funds):</p>
                    <ol>
                        <li>We will attempt to process the charge again (retry logic) over the next 3-5 days.</li>
                        <li>If payment continues to fail, your subscription will be suspended. Your Verified Badge will be hidden, and your Marketplace listings will be paused until payment is updated.</li>
                    </ol>

                    <h2>9. PRICE CHANGES</h2>
                    <p>We reserve the right to adjust pricing for our service.</p>
                    <ul>
                        <li><strong>Notice:</strong> We will provide at least 30 days' notice via email before any price change takes effect for existing subscribers.</li>
                        <li><strong>Consent:</strong> Your continued use of the service after the price change constitutes your agreement to pay the verified amount. If you do not agree, you must cancel before the new price takes effect.</li>
                    </ul>

                    <h2>10. CONTACT US</h2>
                    <p>For cancellation assistance:</p>
                    <div className="contact-details">
                        <p><strong>Email:</strong> <a href="mailto:billing@kadodoafrica.com">billing@kadodoafrica.com</a></p>
                        <p><strong>Phone:</strong> +233242564188</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default SubscriptionPolicy;
