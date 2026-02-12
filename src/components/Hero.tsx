import { ShieldCheck, UserCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import './Hero.css';
import heroGraphic from '../assets/kadodo-logo.svg';

const Hero: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="hero-badge">Authenticating The Future</span>
                    <h1> The Future of <span className="text-primary">African Commerce</span> is Built on Trust</h1>
                    <p>We bridge the trust gap for the $2.5 Trillion AfCFTA market. Kadodo profiles, authenticates, and connects credible businesses and individuals across Africa and the Caribbean.</p>
                    <div className="hero-btns">
                        <Button
                            variant="secondary"
                            className="btn-icon"
                            onClick={() => navigate('/business')}
                        >
                            <ShieldCheck size={20} />
                            Verify My Business
                        </Button>
                        <Button
                            variant="outline"
                            className="btn-icon btn-light"
                            onClick={() => navigate('/individual-verification')}
                        >
                            <UserCheck size={20} />
                            Global individual verification
                        </Button>
                    </div>
                </div>
                <div className="hero-graphic">
                    <div className="graphic-outer">
                        <div className="graphic-inner">
                            <img src={heroGraphic} alt="Kadodo Logo" />
                        </div>
                        <motion.div
                            className="verified-badge-premium"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            <div className="badge-inner">
                                <div className="badge-icon-pulsing">
                                    <CheckCircle2 size={24} color="#00bfa5" fill="#00bfa520" />
                                </div>
                                <span className="badge-text-bold">Verified</span>
                            </div>
                            <div className="badge-shine-effect"></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
