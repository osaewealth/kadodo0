import React from 'react';
import Section from './Section';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Solutions.css';

// Image Assets for Verification
import bizIcon from '../assets/laptopstastsicon.png';
import indIcon from '../assets/image1573536412633-mflj-200h.png';
import partIcon from '../assets/image1399075722482-kxcc-200h.png';

// Image Assets for Trust
import trustBizIcon from '../assets/statsicon.png';
import trustIndIcon from '../assets/image1170794722633-dqnq-200h.png';
import trustEntIcon from '../assets/image1011271012633-dph-200h.png';

export const VerificationSolutions: React.FC = () => {
    const solutions = [
        {
            title: "Businesses (SMEs & Informal)",
            desc: "Unlock capital and contracts. Prove your legitimacy to banks and partners with a verified business profile.",
            icon: bizIcon,
            linkText: "Explore Corporate"
        },
        {
            title: "Individuals (Professionals)",
            desc: "Your digital trust passport. Authenticate your skills and work history to stand out to employers globally.",
            icon: indIcon,
            linkText: "Explore Professional"
        },
        {
            title: "Partners (Investors, Importers, Development Agencies)",
            desc: "De-risk your African strategy. Access a curated pipeline of verified, investment-ready entities. Ideal for European importers and Development Agencies seeking impact transparency.",
            icon: partIcon,
            linkText: "Explore Institutional"
        }
    ];

    return (
        <Section id="solutions" title="Verification Solutions" subtitle="Tailored trust frameworks for every player in the trade ecosystem." className="solutions-section">
            <div className="solutions-grid-refined">
                {solutions.map((item, index) => (
                    <motion.div
                        key={index}
                        className="solution-card-refined"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="sol-icon-overlapping">
                            <img src={item.icon} alt={item.title} />
                        </div>
                        <div className="sol-card-content">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <Link to="/solutions" className="sol-link">
                                {item.linkText} <ArrowRight size={18} />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export const TrustSolutions: React.FC = () => {
    const solutions = [
        {
            title: "Business Verification",
            desc: "Progressive verification tiers designed to scale with your business growth and international trade ambitions.",
            icon: trustBizIcon,
            linkText: "Explore Solutions"
        },
        {
            title: "Individual Verification",
            desc: "Your digital trust passport. Authenticate your skills and work history to stand out to employers globally.",
            icon: trustIndIcon,
            linkText: "Explore Professional"
        },
        {
            title: "Enterprise Solutions",
            desc: "Customized infrastructure for financial institutions, development agencies, and large-scale importers.",
            icon: trustEntIcon,
            linkText: "Explore Enterprise"
        }
    ];

    return (
        <Section id="trust-solutions" title="Trust Solutions" subtitle="Comprehensive verification services for businesses, individuals, and partners across Africa and the Caribbean." className="solutions-section bg-light">
            <div className="solutions-grid-refined">
                {solutions.map((item, index) => (
                    <motion.div
                        key={index}
                        className="solution-card-refined"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <div className="sol-icon-overlapping">
                            <img src={item.icon} alt={item.title} />
                        </div>
                        <div className="sol-card-content">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            <Link to="/solutions" className="sol-link">
                                {item.linkText} <ArrowRight size={18} />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
