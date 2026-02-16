import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import './ScrollToTopButton.css';

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Logic: Show button only after scrolling past 30% ofViewport Height
            // This ensures it stays hidden while the Hero section is dominant
            // Robust detection across all scroll models
            const currentScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
            const threshold = window.innerHeight * 0.3;

            if (currentScroll > threshold) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility, { passive: true });
        toggleVisibility();

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        // Multi-target reset for maximum compatibility
        const scrollOptions: ScrollToOptions = {
            top: 0,
            behavior: 'smooth'
        };

        window.scrollTo(scrollOptions);
        document.documentElement.scrollTo(scrollOptions);
        document.body.scrollTo(scrollOptions);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    className="scroll-to-top-btn"
                    onClick={scrollToTop}
                    initial={{ opacity: 0, y: 20, scale: 0.5 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="Scroll to top"
                >
                    <ArrowUp size={24} />
                    <div className="btn-glow"></div>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTopButton;
