import React from 'react';

import { motion } from 'framer-motion';

import './Contact.css';



// Import Assets - adjusted paths to use main assets folder
import salesIcon from '../assets/newimages/Sale.png';
import techIcon from '../assets/newimages/Technical.png';
import partnersIcon from '../assets/newimages/Partners.png';
import mediaIcon from '../assets/newimages/Media.png';
import worldMap from '../assets/worldmap.png';
import emailIcon from '../assets/icoutlineemail2686-hy5h.svg';
import phoneIcon from '../assets/solarphonelinear2686-21c5.svg';
import clockIcon from '../assets/carbontime2686-f2ya.svg';
import poly1 from '../assets/polygon12686-onzy.svg';
import poly2 from '../assets/polygon22686-4m9m.svg';
import poly3 from '../assets/polygon32686-7qqh.svg';
import poly4 from '../assets/polygon42686-djwp.svg';



const Contact: React.FC = () => {

    return (

        <div className="contact-page">

            {/* Hero Section */}

            <section id="contact-hero" className="contact-hero">

                <div className="container">

                    <motion.div

                        className="hero-content"

                        initial={{ opacity: 0, y: 20 }}

                        animate={{ opacity: 1, y: 0 }}

                        transition={{ duration: 0.6 }}

                    >

                        <h1>Contact Kadodo Africa</h1>

                        <p>Have questions about our identity verification solutions? Our team in Ghana is here to help you get started.</p>

                        <div className="hero-contact-info">

                            <span>

                                <img src={phoneIcon} alt="Phone" /> +233 302903220

                            </span>

                            <span>

                                <img src={emailIcon} alt="Email" /> support@kadodoafrica.com

                            </span>

                        </div>

                        <div className="hero-navigation">
                            <a href="#contact-inquiries" className="nav-link">Inquiries</a>
                            <a href="#contact-offices" className="nav-link">Offices</a>
                        </div>

                    </motion.div>

                </div>



                {/* Background Decorations (Polygons) */}

                <div className="bg-decorations">

                    <motion.img

                        src={poly1} className="poly poly-top-left" alt=""

                        initial={{ opacity: 0, x: -100, y: -100 }}

                        animate={{ opacity: 0.4, x: 0, y: 0 }}

                        transition={{ duration: 1 }}

                    />

                    <motion.img

                        src={poly2} className="poly poly-top-right" alt=""

                        initial={{ opacity: 0, x: 100, y: -100 }}

                        animate={{ opacity: 0.4, x: 0, y: 0 }}

                        transition={{ duration: 1, delay: 0.1 }}

                    />

                    <motion.img

                        src={poly3} className="poly poly-bottom-left" alt=""

                        initial={{ opacity: 0, x: -100, y: 100 }}

                        animate={{ opacity: 0.4, x: 0, y: 0 }}

                        transition={{ duration: 1, delay: 0.2 }}

                    />

                    <motion.img

                        src={poly4} className="poly poly-bottom-right" alt=""

                        initial={{ opacity: 0, x: 100, y: 100 }}

                        animate={{ opacity: 0.4, x: 0, y: 0 }}

                        transition={{ duration: 1, delay: 0.3 }}

                    />

                </div>

            </section>



            {/* Inquiry Cards Section */}

            <section id="contact-inquiries" className="inquiry-section">

                <div className="container">

                    <div className="inquiry-grid">

                        <motion.div

                            className="inquiry-card"

                            initial={{ opacity: 0, y: 20 }}

                            whileInView={{ opacity: 1, y: 0 }}

                            viewport={{ once: true }}

                            transition={{ delay: 0.1 }}

                        >

                            <div className="card-image">

                                <img src={salesIcon} alt="Sales Inquiries" />

                            </div>

                            <h3>Sales Inquiries</h3>

                            <p>Talk to our sales team about your verification needs</p>

                            <a href="mailto:sales@kadodo.africa" className="card-email">sales@kadodo.africa</a>

                        </motion.div>



                        <motion.div

                            className="inquiry-card"

                            initial={{ opacity: 0, y: 20 }}

                            whileInView={{ opacity: 1, y: 0 }}

                            viewport={{ once: true }}

                            transition={{ delay: 0.2 }}

                        >

                            <div className="card-image">

                                <img src={techIcon} alt="Technical Support" />

                            </div>

                            <h3>Technical Support</h3>

                            <p>Get help with integration and technical issues</p>

                            <a href="mailto:support@kadodo.africa" className="card-email">support@kadodo.africa</a>

                        </motion.div>



                        <motion.div

                            className="inquiry-card"

                            initial={{ opacity: 0, y: 20 }}

                            whileInView={{ opacity: 1, y: 0 }}

                            viewport={{ once: true }}

                            transition={{ delay: 0.3 }}

                        >

                            <div className="card-image">

                                <img src={partnersIcon} alt="Partnerships" />

                            </div>

                            <h3>Partnerships</h3>

                            <p>Explore partnership and integration opportunities</p>

                            <a href="mailto:partners@kadodo.africa" className="card-email">partners@kadodo.africa</a>

                        </motion.div>



                        <motion.div

                            className="inquiry-card"

                            initial={{ opacity: 0, y: 20 }}

                            whileInView={{ opacity: 1, y: 0 }}

                            viewport={{ once: true }}

                            transition={{ delay: 0.4 }}

                        >

                            <div className="card-image">

                                <img src={mediaIcon} alt="Media" />

                            </div>

                            <h3>Media</h3>

                            <p>Media inquiries and press resources</p>

                            <a href="mailto:press@kadodo.africa" className="card-email">press@kadodo.africa</a>

                        </motion.div>

                    </div>

                </div>

            </section>



            {/* Offices Section */}

            <section id="contact-offices" className="offices-section">

                <div className="container">

                    <div className="offices-layout">

                        <motion.div

                            className="offices-info"

                            initial={{ opacity: 0, x: -30 }}

                            whileInView={{ opacity: 1, x: 0 }}

                            viewport={{ once: true }}

                            transition={{ duration: 0.6 }}

                        >

                            <h2>Our Offices</h2>

                            <p className="subtitle">Visit us at one of our offices across Africa.</p>



                            <div className="office-location">

                                <div className="location-header">

                                    <h3>Accra, Ghana</h3>

                                    <span className="badge active">Active</span>

                                </div>

                                <p>Airport City, Terminal 3 Road</p>

                                <div className="location-details">

                                    <span>

                                        <img src={phoneIcon} alt="Phone" /> +233 30 123 4567

                                    </span>

                                    <span>

                                        <img src={emailIcon} alt="Email" /> ghana@kadodo.africa

                                    </span>

                                </div>

                            </div>



                            <div className="office-location">

                                <div className="location-header">

                                    <h3>Caribbean (Online)</h3>

                                    <span className="badge coming-soon">Coming Soon</span>

                                </div>

                                <p>Serving the Caribbean Region</p>

                                <div className="location-details">

                                    <span>

                                        <img src={phoneIcon} alt="Phone" /> +1 868 123 4567

                                    </span>

                                    <span>

                                        <img src={emailIcon} alt="Email" /> caribbean@kadodo.africa

                                    </span>

                                </div>

                            </div>



                            {/* Support Hours Box */}

                            <motion.div

                                className="support-hours"

                                initial={{ opacity: 0, y: 20 }}

                                whileInView={{ opacity: 1, y: 0 }}

                                viewport={{ once: true }}

                                transition={{ delay: 0.3 }}

                            >

                                <div className="hours-icon">

                                    <img src={clockIcon} alt="Clock" />

                                </div>

                                <div className="hours-content">

                                    <h4>Support Hours</h4>

                                    <p>Our support team is available:</p>

                                    <p className="highlight">Monday - Friday: 8:00 AM - 8:00 PM WAT</p>

                                    <p className="subtext">Saturday: 9:00 AM - 5:00 PM WAT</p>

                                </div>

                            </motion.div>

                        </motion.div>



                        <motion.div

                            className="offices-map"

                            initial={{ opacity: 0, scale: 0.9 }}

                            whileInView={{ opacity: 1, scale: 1 }}

                            viewport={{ once: true }}

                            transition={{ duration: 0.8 }}

                        >

                            <img src={worldMap} alt="World Map" />

                        </motion.div>

                    </div>

                </div>

            </section>

        </div>

    );

};



export default Contact;