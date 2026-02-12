import React from 'react';
import { Mail, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/kadodologofooter.png';

const Footer: React.FC = () => {
    return (
        <footer id="contact-us" className="footer-refined">
            <div className="container footer-content-grid">
                {/* Brand Column */}
                <div className="footer-brand-col">
                    <img src={logo} alt="Kadodo" className="footer-logo-refined" />
                    <p className="footer-desc-refined">
                        Empowering African and Caribbean commerce through secure, decentralized trust infrastructure. Official digital passport for cross-border trade.
                    </p>
                    <div className="footer-social-icons">
                        <div className="icon-circle">
                            <Share2 size={18} />
                        </div>
                        <div className="icon-circle">
                            <Mail size={18} />
                        </div>
                    </div>
                </div>

                {/* Solutions Column */}
                <div className="footer-nav-col">
                    <h4>SOLUTIONS</h4>
                    <ul className="footer-links-list">
                        <li><Link to="/business">Business Verification</Link></li>
                        <li><Link to="/individual-verification">Individual Verification</Link></li>
                        <li><Link to="/solution-partners">Partner Solutions</Link></li>
                    </ul>
                </div>

                {/* Coverage Column */}
                <div className="footer-nav-col">
                    <h4>COVERAGE</h4>
                    <ul className="footer-links-list">
                        <li><Link to="/ghana">Ghana Gateway</Link></li>
                        <li><Link to="/kadodo-number">Kadodo Number</Link></li>
                    </ul>
                </div>

                {/* Company Column */}
                <div className="footer-nav-col">
                    <h4>COMPANY</h4>
                    <ul className="footer-links-list">
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/contact-us">Contact Us</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/legal">Legal & Privacy</Link></li>
                        <li><Link to="/terms">Terms of Service</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom-refined">
                <div className="container bottom-flex">
                    <p className="copyright-text">
                        © 2024 Kadodo Africa. All Rights Reserved. Built for AfCFTA.
                    </p>
                    <div className="bottom-legal-links">
                        <Link to="/legal">Privacy Policy</Link>
                        <Link to="/legal">Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
