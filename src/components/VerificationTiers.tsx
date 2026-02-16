import React from 'react';
import './VerificationTiers.css';
import tier1Icon from '../assets/newimages/tier1.png';
import tier2Icon from '../assets/newimages/tier2location.png';

const VerificationTiers: React.FC = () => {
    return (
        <section className="verification-tiers-section">
            <div className="vt-container-full">
                <div className="vt-grid">
                    {/* Tier 1 Card */}
                    <div className="vt-card tier-1">
                        <div className="vt-card-header">
                            <div className="vt-icon-wrapper">
                                <img src={tier1Icon} alt="Tier 1 Source of Truth" className="vt-icon" />
                            </div>
                            <div className="vt-header-text">
                                <span className="vt-tier-label">TIER 1</span>
                                <h3>Source of Truth</h3>
                            </div>
                        </div>
                        <p className="vt-desc">
                            Direct, real-time integration with government databases to ensure the legality of entities and identities.
                        </p>
                        <div className="vt-tags-grid">
                            <span className="vt-tag">ORC (Registrar)</span>
                            <span className="vt-tag">NIA (Ghana Card)</span>
                            <span className="vt-tag">GRA (Tax/TIN)</span>
                            <span className="vt-tag">SSNIT (Employee)</span>
                        </div>
                    </div>

                    {/* Plus Sign */}
                    <div className="vt-separator">
                        <span>+</span>
                    </div>

                    {/* Tier 2 Card */}
                    <div className="vt-card tier-2">
                        <div className="vt-card-header">
                            <div className="vt-icon-wrapper">
                                <img src={tier2Icon} alt="Tier 2 Liveness & Location" className="vt-icon" />
                            </div>
                            <div className="vt-header-text">
                                <span className="vt-tier-label">TIER 2</span>
                                <h3>Liveness & Location</h3>
                            </div>
                        </div>
                        <p className="vt-desc">
                            Ground-truth validation performed by on-site officers to eliminate the risk of "ghost" companies through physical presence.
                        </p>
                        <div className="vt-tags-grid tier-2-grid">
                            <span className="vt-tag">Site Inspections</span>
                            <span className="vt-tag">Liveness Check</span>
                            <span className="vt-tag proof-tag">Proof of Address</span>
                            <div className="vt-note-box">
                                Physical verification with regulator (in case there are no API access available)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VerificationTiers;
