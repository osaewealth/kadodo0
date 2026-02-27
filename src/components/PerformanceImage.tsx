import React from 'react';
import './PerformanceImage.css';
import performanceImg from '../assets/Frame 305.png';

const PerformanceImage: React.FC = () => {
    return (
        <section className="performance-image-section">
            <div className="pi-container">
                <img
                    src={performanceImg}
                    alt="Performance by the Numbers"
                    className="pi-image"
                />
            </div>
        </section>
    );
};

export default PerformanceImage;
