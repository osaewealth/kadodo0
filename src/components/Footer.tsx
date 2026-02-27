import React from 'react';
import { Mail, Share2, X, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';
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
                        <div className="share-menu-container">
                            <button className="share-trigger">
                                <Share2 size={20} />
                            </button>
                            <div className="sub-buttons">
                                <a href="https://x.com/KadodoAfrica" target="_blank" rel="noopener noreferrer" className="sub-button x-btn" aria-label="Follow on X">
                                    <X size={14} />
                                </a>
                                <a href="https://www.linkedin.com/company/kadodogh/" target="_blank" rel="noopener noreferrer" className="sub-button linkedin-btn" aria-label="Follow on LinkedIn">
                                    <Linkedin size={14} />
                                </a>
                                <a href="https://www.instagram.com/kadodoafrica/" target="_blank" rel="noopener noreferrer" className="sub-button instagram-btn" aria-label="Follow on Instagram">
                                    <Instagram size={14} />
                                </a>
                                <a href="https://www.facebook.com/KadodoAfrica/" target="_blank" rel="noopener noreferrer" className="sub-button facebook-btn" aria-label="Follow on Facebook">
                                    <Facebook size={14} />
                                </a>
                                <a href="https://www.youtube.com/@kadodoafrica764" target="_blank" rel="noopener noreferrer" className="sub-button youtube-btn" aria-label="Follow on YouTube">
                                    <Youtube size={14} />
                                </a>
                            </div>
                        </div>
                        <div className="footer-social-btn">
                            <Mail size={20} />
                        </div>
                    </div>
                </div>

                {/* Solutions Column */}
                <div className="footer-nav-col">
                    <h4>SOLUTIONS</h4>
                    <ul className="footer-links-list">
                        <li><Link to="/business">Business Verification</Link></li>
                        <li><Link to="/solution-individual">Individual Verification</Link></li>
                        <li><Link to="/solution-partners">Partner Solutions</Link></li>
                        <li><Link to="/compliance">Trust Center</Link></li>
                        <li><Link to="/compliance-form">Compliance Form</Link></li>
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
                        <li><Link to="/governance">Governance</Link></li>
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
                        © 2026 Kadodo Africa. All Rights Reserved.
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
