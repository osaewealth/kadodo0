import React from 'react';
import Section from './Section';
import './MarketplaceSellerAgreement.css';

const MarketplaceSellerAgreement: React.FC = () => {
    return (
        <Section id="marketplace-seller-agreement" className="msa-section">
            <div className="msa-container">
                <h1>Marketplace Seller Agreement (Merchant Terms)</h1>
                <p className="last-updated">Last Updated: April 4, 2026</p>
                <p className="last-updated">Effective Date: April 4, 2026</p>

                <div className="msa-content">
                    <h2>1. INTRODUCTION</h2>
                    <p>This Marketplace Seller Agreement ("Agreement") is a legal contract between <strong>Suku Technologies Ltd.</strong> (trading as "Kadodo Africa", "we", "us", or "our") and the business entity or individual ("Seller", "Merchant", "you") registering to list and sell products or services on the <strong>Kadodo Marketplace</strong> (the "Marketplace").</p>
                    <p>By registering as a Seller, listing items, or making a sale, you agree to be bound by this Agreement, our <a href="/terms">Terms of Service</a>, and our <a href="/privacy-policy">Privacy Policy</a>.</p>

                    <h2>2. ELIGIBILITY: THE "VERIFIED ONLY"</h2>
                    <p>The Kadodo Marketplace is a curated ecosystem of trust. To sell on our platform, you must:</p>
                    <ol>
                        <li><strong>Be Verified:</strong> Hold a valid, active "Kadodo Number" and "Verified" status (Business or Individual tier).</li>
                        <li><strong>Good Standing:</strong> Be in good standing with the Kadodo Africa platform (no history of fraud or bans).</li>
                        <li><strong>Legal Age:</strong> Be at least 18 years old or a registered legal entity.</li>
                    </ol>
                    <p><strong>Suspension of Verification:</strong> If your Kadodo Verification expires or is revoked for any reason, your Seller privileges will be immediately suspended, and your listings will be hidden.</p>

                    <h2>3. SELLER OBLIGATIONS</h2>

                    <h3>3.1 Listing Accuracy</h3>
                    <p>You are responsible for the accuracy of your product listings. You agree to:</p>
                    <ul>
                        <li>Provide clear, high-quality images that accurately represent the product.</li>
                        <li>Write detailed descriptions, including any defects, expiry dates, or limitations.</li>
                        <li>Ensure stock levels are accurate. You must not list items you do not physically possess or quantities of items that you cannot fulfill immediately (no "bait and switch").</li>
                    </ul>

                    <h3>3.2 Pricing</h3>
                    <p>You set the price for your items. However:</p>
                    <ul>
                        <li>Prices must be inclusive of all applicable taxes (e.g., VAT) unless the platform calculates tax separately at checkout.</li>
                        <li>You may not engage in price gouging during national emergencies.</li>
                    </ul>

                    <h3>3.3 Fulfillment and Shipping</h3>
                    <p>Unless you are using "Fulfilled by Kadodo" (if available), you are solely responsible for:</p>
                    <ul>
                        <li>Packaging items securely to prevent damage.</li>
                        <li>Shipping items within the handling time specified in your listing (default: 48 hours).</li>
                        <li>Providing valid tracking numbers to the Buyer and the Platform.</li>
                    </ul>

                    <h2>4. FEES AND PAYMENTS</h2>

                    <h3>4.1 Commission Fees</h3>
                    <p>Kadodo Africa charges a commission fee on the total transaction value (Product Price + Shipping) for every sale made through the Marketplace.</p>
                    <ul>
                        <li>The current Commission Rate is listed on our Pricing Page and is subject to change with notice.</li>
                        <li>This fee is deducted automatically from the payout.</li>
                    </ul>

                    <h3>4.2 Payout Schedule</h3>
                    <p>Funds from your sales (minus commissions and fees) will be settled to your designated bank account or mobile money wallet.</p>
                    <ul>
                        <li><strong>Standard Payout:</strong> T+5 days after confirmed delivery or Weekly on Fridays.</li>
                        <li>We reserve the right to hold funds ("Reserve") if we detect suspicious activity, high chargeback rates, or pending disputes.</li>
                    </ul>

                    <h3>4.3 Taxes</h3>
                    <p>You are the "merchant of record." You are solely responsible for calculating, collecting, reporting, and paying all applicable taxes (e.g., VAT, Income Tax) to the <strong>Ghana Revenue Authority (GRA)</strong> or relevant tax authorities. Kadodo Africa is not responsible for your tax compliance.</p>

                    <h2>5. PROHIBITED ITEMS</h2>
                    <p>You may NOT list or sell:</p>
                    <ul>
                        <li>Illegal drugs or drug paraphernalia.</li>
                        <li>Weapons, firearms, or explosives.</li>
                        <li>Counterfeit or "replica" goods (violating IP rights).</li>
                        <li>Stolen property.</li>
                        <li>Adult/Pornographic material.</li>
                        <li>Any item that violates the laws of the Republic of Ghana.</li>
                    </ul>
                    <p>We reserve the right to remove any listing at our sole discretion without prior notice.</p>

                    <h2>6. RETURNS AND REFUNDS</h2>

                    <h3>6.1 Seller Policy</h3>
                    <p>You must establish a Return Policy that complies with Ghanaian consumer protection laws. Your policy must be clearly visible on your store page.</p>

                    <h3>6.2 Minimum Standard</h3>
                    <p>At a minimum, you must accept returns and issue refunds if:</p>
                    <ul>
                        <li>The item received by a customer is damaged or defective.</li>
                        <li>The item received does not match the listing description ("Not as Described").</li>
                        <li>The item never arrived (Non-Delivery).</li>
                    </ul>

                    <h3>6.3 Disputes</h3>
                    <p>If a Buyer raises a dispute (e.g., claims an item is fake), Kadodo Africa acts as the final arbiter. We may request a refund to the Buyer from your funds if we determine you violated this Agreement.</p>

                    <h2>7. INTELLECTUAL PROPERTY</h2>
                    <ul>
                        <li><strong>Your Content:</strong> You grant us a non-exclusive, worldwide, royalty-free license to use your product images and descriptions to promote the Marketplace (e.g., in email newsletters or social media ads).</li>
                        <li><strong>Third-Party Rights:</strong> You represent that you own the copyright to your images or have the legal right to use them. You must not use stock images for unique items.</li>
                    </ul>

                    <h2>8. LIMITATION OF LIABILITY (VENUE DISCLAIMER)</h2>
                    <p><strong>KADODO AFRICA IS A VENUE.</strong></p>
                    <p>We facilitate transactions but do not take ownership of the goods. We are not a party to the contract between Buyer and Seller.</p>
                    <p>We are not liable for:</p>
                    <ul>
                        <li>The quality, safety, or legality of the items you sell.</li>
                        <li>Your failure to ship items or pay taxes.</li>
                        <li>Any economic loss you suffer due to platform downtime.</li>
                    </ul>

                    <h2>9. INDEMNIFICATION</h2>
                    <p>You agree to indemnify and hold Kadodo Africa harmless from any claims, demands, or damages (including legal fees) arising out of this Agreement, or your infringement of any third-party rights.</p>

                    <h2>10. TERMINATION</h2>
                    <p>We may terminate your Seller account immediately if:</p>
                    <ol>
                        <li>You violate this Agreement or our Terms of Service.</li>
                        <li>Your "Kadodo Number" verification status is revoked.</li>
                        <li>You engage in off-platform transactions (directing buyers to pay you outside Kadodo to avoid fees).</li>
                        <li>Your performance standards (shipping speed, defect rate) fall below acceptable levels.</li>
                    </ol>

                    <h2>11. GOVERNING LAW</h2>
                    <p>This Agreement is governed by the laws of the Republic of Ghana.</p>

                    <h2>12. DISPUTE RESOLUTION</h2>
                    <p>Any dispute arising out of this Agreement or in connection therewith, shall be settled amicably. Any dispute arising out of or in connection with this Agreement which cannot be settled amicably by the Parties, within sixty (60) days after the receipt by one Party of the other Party's request for such amicable settlement, shall be referred to and determined by a sole arbitrator to be appointed by agreement between the Parties or in default of agreement by the Parties, in accordance with the Alternative Dispute Resolution Act, 2010 (Act 798) and the Rules of the Ghana Arbitration Centre. The arbitration shall be held in Accra, Ghana and the language of the arbitration shall be English. In accordance with Section 52 of the Alternative Dispute Resolution Act, 2010 (Act 798) the arbitral award shall be final and binding.</p>

                    <h2>13. CONTACT</h2>
                    <div className="contact-details">
                        <p><strong>Merchant Support:</strong> <a href="mailto:merchants@kadodoafrica.com">merchants@kadodoafrica.com</a></p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default MarketplaceSellerAgreement;
