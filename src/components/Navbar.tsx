import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import './Navbar.css';
import logo from '../assets/mainkadodologo.png';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

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

                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
                    <Link to="/solutions" className={isActive('/solutions') ? 'active' : ''}>Solutions</Link>
                    <Link to="/coverage" className={isActive('/coverage') ? 'active' : ''}>Coverage</Link>
                    <Link to="/opportunities" className={isActive('/opportunities') ? 'active' : ''}>Opportunities</Link>
                    <Link to="/about-us" className={isActive('/about-us') ? 'active' : ''}>About Us</Link>
                    <Link to="/contact-us" className={isActive('/contact-us') ? 'active' : ''}>Contact Us</Link>
                </div>

                <div className="nav-actions">
                    <Button variant="secondary" size="sm" className="btn-get-started">Get Started</Button>
                </div>

                <button className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </motion.nav>
    );
};

export default Navbar;
