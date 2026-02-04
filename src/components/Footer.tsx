import React from 'react';
import { Mail, Share2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/kadodo-logo.svg';

const Footer: React.FC = () => {
    const location = useLocation();

    const getLink = (hash: string) => {
        return location.pathname === '/' ? hash : `/${hash}`;
    };

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

                {/* Navigation Column */}
                <div className="footer-nav-col">
                    <h4>NAVIGATION</h4>
                    <ul className="footer-links-list">
                        <li><a href={getLink("#home")}>Home</a></li>
                        <li><Link to="/solutions">Solutions</Link></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/opportunities">Resources</Link></li>
                    </ul>
                </div>

                {/* Company Column */}
                <div className="footer-nav-col">
                    <h4>COMPANY</h4>
                    <ul className="footer-links-list">
                        <li><Link to="/legal">Legal & Privacy</Link></li>
                        <li><Link to="/terms">Terms of Service</Link></li>
                        <li><Link to="/contact-us">Contact</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
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
