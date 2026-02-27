import React from 'react';
import './PerformanceStats.css';
import backgroundImage from '../assets/frame306.jpg'; // Using the background frame provided

const PerformanceStats: React.FC = () => {
    return (
        <section
            className="performance-stats-section"
            style={{ backgroundImage: `url("${backgroundImage}")` }}
        >
            <div className="performance-overlay"></div>

            <div className="container performance-container">
                <div className="performance-header">
                    <h2>Performance by the<br />Numbers</h2>
                </div>

                <div className="performance-grid">
                    {/* Card 1 */}
                    <div className="performance-card">
                        <div className="card-content">
                            <h3>2.5T</h3>
                            <h4>MARKET POTENTIAL</h4>
                            <p>AfCFTA Market</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="performance-card">
                        <div className="card-content">
                            <h3>10k+</h3>
                            <h4>ENTITIES COVERED</h4>
                            <p>Verified Profiles</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="performance-card">
                        <div className="card-content">
                            <h3>15k+</h3>
                            <h4>TRUST NETWORK</h4>
                            <p>Business Partners</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="performance-card">
                        <div className="card-content">
                            <h3>2</h3>
                            <h4>REGIONS</h4>
                            <p>Africa & Caribbean</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PerformanceStats;
