import React from 'react';
import Section from './Section';
import './CookiePolicy.css';

const CookiePolicy: React.FC = () => {
    return (
        <Section id="cookie-policy" className="cp-section">
            <div className="cp-container">
                <h1>Cookie Policy</h1>
                <p className="last-updated">Last Updated: April 4, 2026</p>
                <p className="last-updated">Effective Date: April 4, 2026</p>

                <div className="cp-content">
                    <h2>1. INTRODUCTION</h2>
                    <p>This Cookie Policy explains how <strong>Kadodo Africa</strong> ("we", "us", or "our"), operated by <strong>Suku Technologies Ltd.</strong>, uses cookies and similar technologies (such as pixels, beacons, and tags) when you visit our website "<strong><a href="https://www.kadodoafrica.com">www.kadodoafrica.com</a></strong>" or use our mobile application.</p>
                    <p>This policy explains what these technologies are, why we use them, and your rights to control our use of them.</p>

                    <h2>2. WHAT ARE COOKIES?</h2>
                    <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide reporting information to the site owners.</p>
                    <ul>
                        <li><strong>First-party cookies</strong> are cookies set by us (Kadodo Africa).</li>
                        <li><strong>Third-party cookies</strong> are cookies set by parties other than us (e.g., Google Analytics, payment processors).</li>
                    </ul>

                    <h2>3. WHY WE USE COOKIES</h2>
                    <p>We use cookies for several reasons. Some cookies are required for technical reasons in order for our Platform to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies enable us to track and target the interests of our users to enhance the experience on our Platform.</p>

                    <h2>4. TYPES OF COOKIES WE USE</h2>
                    <p>We use the following types of cookies:</p>

                    <h3>4.1 Strictly Necessary Cookies</h3>
                    <p>These cookies are essential for you to browse the website and use its features, such as accessing secure areas of the site (e.g., your Verification Dashboard). Without these cookies, services like account login and secure document upload cannot be provided.</p>
                    <ul>
                        <li><strong>Examples:</strong> Session ID cookies, Authentication tokens, Security cookies (CSRF protection).</li>
                        <li><strong>Control:</strong> You cannot opt-out of these cookies as they are necessary for the website to function.</li>
                    </ul>

                    <h3>4.2 Performance and Analytics Cookies</h3>
                    <p>These cookies collect information about how you use our website, such as which pages you visit most often and if you get error messages. This helps us improve how our website works.</p>
                    <ul>
                        <li><strong>Examples:</strong> Google Analytics.</li>
                        <li><strong>Purpose:</strong> To track user acquisition, page load speeds, and site stability.</li>
                    </ul>

                    <h3>4.3 Functionality Cookies</h3>
                    <p>These cookies allow our website to remember choices you make (such as your user name, language, or the region you are in) and provide enhanced, more personal features.</p>
                    <ul>
                        <li><strong>Examples:</strong> Remembering your "Logged In" status so you don't have to sign in every time you visit.</li>
                    </ul>

                    <h3>4.4 Targeting / Marketing Cookies</h3>
                    <p>These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of the advertising campaign.</p>
                    <ul>
                        <li><strong>Examples:</strong> Facebook Pixel, LinkedIn Insight Tag.</li>
                    </ul>

                    <h2>5. THIRD-PARTY COOKIES</h2>
                    <p>In addition to our own cookies, we may also use various third-parties to report usage statistics of the Service, deliver advertisements on and through the Service, and so on. These third parties may track your use of our Service.</p>
                    <ul>
                        <li><strong>Payment Processors:</strong> When you pay for a subscription, our payment partners (e.g., Paystack) may set cookies to process the transaction securely.</li>
                    </ul>

                    <h2>6. HOW CAN YOU CONTROL COOKIES?</h2>
                    <p>You have the right to decide whether to accept or reject cookies.</p>
                    <ul>
                        <li><strong>Cookie Banner:</strong> Upon your first visit to our website, you will see a banner asking for your consent to set non-essential cookies. You can manage your preferences there.</li>
                        <li><strong>Browser Controls:</strong> You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
                            <ul>
                                <li>Chrome</li>
                                <li>Firefox</li>
                                <li>Safari</li>
                                <li>Edge</li>
                            </ul>
                        </li>
                    </ul>

                    <h2>7. UPDATES TO THIS POLICY</h2>
                    <p>We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.</p>

                    <h2>8. CONTACT US</h2>
                    <p>If you have any questions about our use of cookies or other technologies, please contact us at:</p>
                    <div className="contact-details">
                        <p><strong>Email:</strong> <a href="mailto:privacy@kadodoafrica.com">privacy@kadodoafrica.com</a></p>
                        <p><strong>Address:</strong> Suku Technologies Ltd., 21 King Tackie Avenue, Accra, Ghana.</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default CookiePolicy;
