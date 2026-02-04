import React from 'react';
import { ShieldCheck, UserCheck } from 'lucide-react';
import Button from './Button';
import './Hero.css';
import heroGraphic from '../assets/kadodo-logo.svg';

const Hero: React.FC = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="hero-badge">Authenticating The Future</span>
                    <h1> The Future of <span className="text-primary">African Commerce</span> is Built on Trust</h1>
                    <p>We bridge the trust gap for the $2.5 Trillion AfCFTA market. Kadodo profiles, authenticates, and connects credible businesses and individuals across Africa and the Caribbean.</p>
                    <div className="hero-btns">
                        <Button variant="secondary" className="btn-icon">
                            <ShieldCheck size={20} />
                            Verify My Business
                        </Button>
                        <Button variant="outline" className="btn-icon btn-light">
                            <UserCheck size={20} />
                            Verify My Profession
                        </Button>
                    </div>
                </div>
                <div className="hero-graphic">
                    <div className="graphic-outer">
                        <div className="graphic-inner">
                            <img src={heroGraphic} alt="Kadodo Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
