import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Button from './Button';
import './Navbar.css';
import logo from '../assets/mainkadodologo.png';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [regionOpen, setRegionOpen] = useState(false);
    const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
    const regionRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (regionRef.current && !regionRef.current.contains(event.target as Node)) {
                setRegionOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper to check if a link is active
    const isActive = (path: string) => location.pathname === path;

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="container navbar-container">
                <Link to="/" className="logo">
                    <img src={logo} alt="Kadodo Logo" />
                </Link>

                <button className={`mobile-menu-toggle ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/solutions" className={isActive('/solutions') ? 'active' : ''} onClick={() => setIsOpen(false)}>Solutions</Link>
                    <Link to="/coverage" className={isActive('/coverage') ? 'active' : ''} onClick={() => setIsOpen(false)}>Coverage</Link>
                    <Link to="/about-us" className={isActive('/about-us') ? 'active' : ''} onClick={() => setIsOpen(false)}>About Us</Link>
                    <Link to="/contact-us" className={isActive('/contact-us') ? 'active' : ''} onClick={() => setIsOpen(false)}>Contact Us</Link>
                </div>

                <div className="nav-actions">
                    <Button variant="secondary" size="sm" className="btn-get-started">Get Started</Button>

                    {/* Region Selector */}
                    <div className="region-selector" ref={regionRef}>
                        <button
                            className={`region-btn ${regionOpen ? 'open' : ''} ${selectedRegion ? 'selected' : ''}`}
                            onClick={() => setRegionOpen(!regionOpen)}
                        >
                            {selectedRegion === 'Ghana' && (
                                <div className="flag-gh-nav">
                                    <div className="flag-gh-red"></div>
                                    <div className="flag-gh-gold"><div className="black-star"></div></div>
                                    <div className="flag-gh-green"></div>
                                </div>
                            )}
                            {selectedRegion === 'Caricom' && (
                                <div className="flag-caricom-nav">
                                    <div className="flag-cc-top"></div>
                                    <div className="flag-cc-bottom"></div>
                                    <div className="flag-cc-circle"></div>
                                </div>
                            )}
                            <span className="region-text">
                                {selectedRegion ? selectedRegion : 'Choose Region'}
                            </span>
                            <ChevronDown size={16} className={`chevron ${regionOpen ? 'rotate' : ''}`} />
                        </button>

                        <div className={`region-dropdown ${regionOpen ? 'show' : ''}`}>
                            <div
                                className="region-option"
                                onClick={() => { setSelectedRegion('Ghana'); setRegionOpen(false); }}
                            >
                                <div className="flag-gh-nav">
                                    <div className="flag-gh-red"></div>
                                    <div className="flag-gh-gold"><div className="black-star"></div></div>
                                    <div className="flag-gh-green"></div>
                                </div>
                                <span>Ghana</span>
                            </div>
                            <div
                                className="region-option"
                                onClick={() => { setSelectedRegion('Caricom'); setRegionOpen(false); }}
                            >
                                <div className="flag-caricom-nav">
                                    <div className="flag-cc-top"></div>
                                    <div className="flag-cc-bottom"></div>
                                    <div className="flag-cc-circle"></div>
                                </div>
                                <span>Caricom</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
