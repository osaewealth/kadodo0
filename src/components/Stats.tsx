import React from 'react';
import { motion } from 'framer-motion';
import './Stats.css';

const stats = [
    { label: "Market Potential", value: "2.5", suffix: "T", desc: "AfCFTA Market" },
    { label: "Entities Covered", value: "10", suffix: "k+", desc: "Verified Profiles" },
    { label: "Trust Network", value: "15", suffix: "k+", desc: "Business Partners" },
    { label: "Regions", value: "2", suffix: "", desc: "Africa & Caribbean" }
];

const Stats: React.FC = () => {
    return (
        <section className="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="stat-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="stat-value-container">
                                <motion.span
                                    className="stat-value"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                >
                                    {stat.value}{stat.suffix}
                                </motion.span>
                            </div>
                            <div className="stat-info">
                                <p className="stat-label">{stat.label}</p>
                                <p className="stat-desc">{stat.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
