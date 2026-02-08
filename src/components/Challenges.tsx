import React from 'react';
import Section from './Section';
import { motion } from 'framer-motion';
import './Challenges.css';

// Image Assets
import cashIcon from '../assets/newimages/cash.png';
import globeIcon from '../assets/newimages/Globe.png';
import idIcon from '../assets/newimages/ID.png';
import costIcon from '../assets/newimages/high cost.png';

const challenges = [
    {
        title: "Financial Exclusion",
        challenge: "Banks classify 90% of SMEs as \"High Risk\" due to a lack of verifiable data, denying them capital.",
        solution: "We provide the authenticated profiles banks need to de-risk lending and unlock credit.",
        icon: cashIcon,
        color: "yellow"
    },
    {
        title: "The \"Black Box\" Risk",
        challenge: "European and global partners cannot verify local African suppliers, stalling cross-border trade.",
        solution: "We offer definitive proof of existence and compliance, acting as the \"Trust Bridge\" for imports/exports.",
        icon: globeIcon,
        color: "navy"
    },
    {
        title: "The Identity Gap",
        challenge: "Millions of skilled professionals in the informal sector have no \"paper trail\" to prove their worth.",
        solution: "We turn informal reputation into a formal digital identity, creating a portable Trust Passport.",
        icon: idIcon,
        color: "navy"
    },
    {
        title: "High Cost of Compliance",
        challenge: "Manual due diligence is slow, expensive, and prone to error.",
        solution: "Our API and dual-check system reduce verification time from weeks to minutes.",
        icon: costIcon,
        color: "yellow"
    }
];

const Challenges: React.FC = () => {
    return (
        <Section
            id="challenges"
            title="The Challenges We Solve"
            className="challenges-section"
        >
            <motion.div
                className="challenges-grid"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {challenges.map((item, index) => (
                    <div key={index} className="challenge-card">
                        <div className="card-icon-overlapping">
                            <img src={item.icon} alt={item.title} />
                        </div>
                        <div className="card-content">
                            <h3>{item.title}</h3>

                            <div className="challenge-block">
                                <span className="block-label">THE CHALLENGE</span>
                                <p>{item.challenge}</p>
                            </div>

                            <div className="solution-block-refined" style={{ borderLeftColor: item.color === 'yellow' ? '#a49945' : '#2e2b4f' }}>
                                <span className="block-label" style={{ color: item.color === 'yellow' ? '#a49945' : '#2e2b4f' }}>OUR SOLUTION</span>
                                <p>{item.solution}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </Section>
    );
};

export default Challenges;
