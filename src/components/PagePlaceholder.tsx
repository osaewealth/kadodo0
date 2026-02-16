import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

interface PagePlaceholderProps {
    title: string;
}

const PagePlaceholder: React.FC<PagePlaceholderProps> = ({ title }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section style={{ padding: '160px 0', textAlign: 'center', backgroundColor: '#ffffff' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '24px', color: 'var(--color-secondary)' }}>
                        {title}
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
                        This page is currently under development. Please check back soon as we build out more features for the Kadodo platform.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default PagePlaceholder;