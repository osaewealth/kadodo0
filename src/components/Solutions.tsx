import React from 'react';
import Section from './Section';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Solutions.css';

// Image Assets for Verification
import bizIcon from '../assets/newimages/Business.png';
import indIcon from '../assets/newimages/Individuals.png';
import partIcon from '../assets/newimages/Partners.png';

// Image Assets for Trust
import trustBizIcon from '../assets/newimages/Verify.png';
import trustIndIcon from '../assets/newimages/Verifyy.png';
import trustEntIcon from '../assets/newimages/SMEs.png';

export const VerificationSolutions: React.FC = () => {
    const solutions = [
        {
            title: "Businesses (SMEs & Informal)",
            desc: "Unlock capital and contracts. Prove your legitimacy to banks and partners with a verified business profile.",
            icon: bizIcon,
            linkText: "Explore Corporate",
            route: "/business"
        },
        {
            title: "Individuals (Professionals)",
            desc: "Your digital trust passport. Authenticate your skills and work history to stand out to employers globally.",
            icon: indIcon,
            linkText: "Explore Professional",
            route: "/individual-verification"
        },
        {
            title: "Partners (Investors, Importers, Development Agencies)",
            desc: "De-risk your African strategy. Access a curated pipeline of verified, investment-ready entities. Ideal for European importers and Development Agencies seeking impact transparency.",
            icon: partIcon,
            linkText: "Explore Institutional",
            route: "/solutions"
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
                            <Link to={item.route || "/solutions"} className="sol-link">
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
            linkText: "Explore Solutions",
            route: "/business"
        },
        {
            title: "Individual Verification",
            desc: "Your digital trust passport. Authenticate your skills and work history to stand out to employers globally.",
            icon: trustIndIcon,
            linkText: "Explore Professional",
            route: "/individual-verification"
        },
        {
            title: "Enterprise Solutions",
            desc: "Customized infrastructure for financial institutions, development agencies, and large-scale importers.",
            icon: trustEntIcon,
            linkText: "Explore Enterprise",
            route: "/solutions"
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
