import React from 'react';
import './RegionGateway.css';
import ghanaheritage from '../assets/ghanaheritage.png';
import caribeanheritage from '../assets/caribeanheritage.jpg';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RegionGateway: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section className="region-gateway-section">
            <div className="container">
                <div className="gateway-header">
                    <h2 className="gateway-title">Regional Trade Gateways </h2>
                    <p className="gateway-subtitle">
                        Select a region to explore our dedicated verification services
                    </p>
                </div>

                <div className="gateway-grid">
                    {/* Ghana Card */}
                    <div className="gateway-card ghana-card">
                        <div className="gateway-bg" style={{ backgroundImage: `url(${ghanaheritage})` }}></div>
                        <div className="gateway-overlay"></div>
                        <div className="gateway-content">
                            <div className="gateway-text-wrap">
                                <div className="gateway-region-badge">Active</div>
                                <h3>Kadodo Ghana</h3>
                                <p>The leading gateway for West African trade and business verification services.</p>
                            </div>
                            <button className="gateway-btn" onClick={() => navigate('/ghana')}>
                                Visit Ghana <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Caricom Card */}
                    <div className="gateway-card caricom-card">
                        <div className="gateway-bg" style={{ backgroundImage: `url(${caribeanheritage})` }}></div>
                        <div className="gateway-overlay"></div>
                        <div className="gateway-content">
                            <div className="gateway-text-wrap">
                                <div className="gateway-region-badge coming-soon">Coming Soon</div>
                                <h3>CARICOM</h3>
                                <p>Unlocking trade between the Caribbean region and the African continent.</p>
                            </div>
                            <button className="gateway-btn outline">
                                Learn More <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegionGateway;
