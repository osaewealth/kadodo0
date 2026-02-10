import React from 'react';

interface FlagProps {
    country: string;
    className?: string;
}

const Flag: React.FC<FlagProps> = ({ country, className = "w-10 h-6" }) => {
    // Normalizing country string for simpler matching
    const code = country.toLowerCase().replace(/[^a-z]/g, '');

    switch (code) {
        case 'antiguabarbuda':
        case 'antigua':
            return (
                <svg className={className} viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
                    <rect width="900" height="600" fill="#ce1126" />
                    <path d="M0,0 V600 L450,300 L900,600 V0 Z" fill="#000" />
                    <path d="M450,230 L370,300 L530,300 Z M450,170 L345,300 L555,300 Z M450,300 L395,300 L505,300 Z" fill="#fcd116" />
                    <circle cx="450" cy="255" r="95" fill="#fcd116" clipPath="inset(0 0 50% 0)" />
                    <path d="M0,600 L450,300 L900,600" fill="#fff" />
                    <path d="M0,600 L450,400 L900,600" fill="#0072c6" />
                </svg>
            );

        case 'barbados':
            return (
                <svg className={className} viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg">
                    <rect width="3" height="2" fill="#00267f" />
                    <rect x="1" width="1" height="2" fill="#ffc726" />
                    <path d="M1.5,1.2 L1.5,0.4 M1.3,0.5 L1.5,0.8 L1.7,0.5" fill="none" stroke="#000" strokeWidth="0.1" />
                    {/* Simplified Trident representation - a full svg path is complex, using a recognizable shape */}
                    <path d="M1.5 1.25 V 0.6 M 1.35 0.5 Q 1.35 0.8 1.5 0.8 Q 1.65 0.8 1.65 0.5" fill="none" stroke="#000" strokeWidth="0.08" />
                    <path d="M1.35 0.5 L 1.35 0.35 L 1.42 0.45 L 1.5 0.3 L 1.58 0.45 L 1.65 0.35 L 1.65 0.5" fill="#000" />
                </svg>
            );

        case 'belize':
            return (
                <svg className={className} viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
                    <rect width="900" height="600" fill="#ce1126" />
                    <rect x="0" y="60" width="900" height="480" fill="#003f87" />
                    <circle cx="450" cy="300" r="140" fill="#fff" />
                    {/* Emblem approximation */}
                    <circle cx="450" cy="300" r="120" fill="none" stroke="#4a9542" strokeWidth="10" />
                </svg>
            );

        case 'bahamas':
            return (
                <svg className={className} viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="600" height="300" fill="#00778b" />
                    <rect y="100" width="600" height="100" fill="#ffc726" />
                    <path d="M0,0 L260,150 L0,300 Z" fill="#000" />
                </svg>
            );

        case 'dominica':
            return (
                <svg className={className} viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="600" height="300" fill="#006b3f" />
                    <rect x="270" width="60" height="300" fill="#fcd116" />
                    <rect y="120" width="600" height="60" fill="#fcd116" />
                    <rect x="290" width="20" height="300" fill="#000" />
                    <rect y="140" width="600" height="20" fill="#000" />
                    <rect x="250" width="20" height="300" fill="#fff" />
                    <rect y="100" width="600" height="20" fill="#fff" />
                    <circle cx="300" cy="150" r="60" fill="#ce1126" />
                    {/* Simplified Parrot/Stars */}
                    <circle cx="300" cy="150" r="40" fill="#006b3f" />
                </svg>
            );

        case 'dominicanrepublic':
            return (
                <svg className={className} viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
                    <rect width="900" height="600" fill="#fff" />
                    <rect width="390" height="240" fill="#002d62" />
                    <rect x="510" width="390" height="240" fill="#ce1126" />
                    <rect y="360" width="390" height="240" fill="#ce1126" />
                    <rect x="510" y="360" width="390" height="240" fill="#002d62" />
                </svg>
            );

        case 'grenada':
            return (
                <svg className={className} viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg">
                    <rect width="600" height="360" fill="#ce1126" />
                    <rect x="60" y="60" width="480" height="240" fill="#fcd116" />
                    <path d="M60,60 L300,180 L60,300 Z M540,60 L300,180 L540,300 Z" fill="#006b3f" />
                    <circle cx="300" cy="180" r="40" fill="#ce1126" />
                    <path d="M300,150 L310,170 L330,170 L315,185 L320,205 L300,195 L280,205 L285,185 L270,170 L290,170 Z" fill="#fcd116" />
                </svg>
            );

        case 'guyana':
            return (
                <svg className={className} viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg">
                    <rect width="600" height="360" fill="#009e49" />
                    <path d="M0,0 L600,180 L0,360 Z" fill="#fefefe" />
                    <path d="M0,15 L530,180 L0,345 Z" fill="#fcd116" />
                    <path d="M0,0 L300,180 L0,360 Z" fill="#000" />
                    <path d="M0,15 L260,180 L0,345 Z" fill="#ce1126" />
                </svg>
            );

        case 'haiti':
            return (
                <svg className={className} viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg">
                    <rect width="600" height="180" fill="#00209f" />
                    <rect y="180" width="600" height="180" fill="#d21034" />
                    {/* Coat of arms bg */}
                    <rect x="250" y="130" width="100" height="100" fill="#fff" />
                </svg>
            );

        case 'jamaica':
            return (
                <svg className={className} viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,0 L600,300 M600,0 L0,300" stroke="#fcd116" strokeWidth="60" />
                    <polygon points="0,0 270,150 0,300" fill="#000" />
                    <polygon points="600,0 330,150 600,300" fill="#000" />
                    <polygon points="0,0 600,0 300,150" fill="#009b3a" />
                    <polygon points="0,300 600,300 300,150" fill="#009b3a" />
                </svg>
            );

        case 'stkitts':
        case 'stkittsnevis':
            return (
                <svg className={className} viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0,0 L600,0 L600,400 L0,400 Z" fill="#009e49" />
                    <path d="M0,400 L600,0 L600,400 Z" fill="#ce1126" />
                    <path d="M0,400 L600,0" stroke="#000" strokeWidth="160" />
                    <path d="M0,400 L600,0" stroke="#fcd116" strokeWidth="130" />
                    <path d="M0,400 L600,0" stroke="#000" strokeWidth="100" />
                    <path d="M180,260 L200,300 L160,300 Z" fill="#fff" />
                    <path d="M400,100 L420,140 L380,140 Z" fill="#fff" />
                </svg>
            );

        case 'stlucia':
            return (
                <svg className={className} viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="600" height="300" fill="#65cfff" />
                    <path d="M300,20 L370,260 L230,260 Z" fill="#fff" />
                    <path d="M300,60 L350,260 L250,260 Z" fill="#000" />
                    <path d="M300,140 L370,260 L230,260 Z" fill="#fcd116" />
                </svg>
            );

        case 'stvincent':
        case 'stvincentgrenadines':
            return (
                <svg className={className} viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                    <rect width="150" height="400" fill="#0072c6" />
                    <rect x="150" width="300" height="400" fill="#fcd116" />
                    <rect x="450" width="150" height="400" fill="#009e49" />
                    <path d="M300,120 L330,180 L270,180 Z" fill="#009e49" />
                    <path d="M250,220 L280,280 L220,280 Z" fill="#009e49" />
                    <path d="M350,220 L380,280 L320,280 Z" fill="#009e49" />
                </svg>
            );

        case 'suriname':
            return (
                <svg className={className} viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg">
                    <rect width="600" height="400" fill="#377e3f" />
                    <rect y="80" width="600" height="240" fill="#fff" />
                    <rect y="120" width="600" height="160" fill="#ce1126" />
                    <path d="M300,140 L325,220 L245,170 L355,170 L275,220 Z" fill="#fcd116" />
                </svg>
            );

        case 'trinidadtobago':
        case 'trinidad':
            return (
                <svg className={className} viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg">
                    <rect width="600" height="360" fill="#ce1126" />
                    <path d="M-20,0 L140,0 L620,360 L460,360 Z" fill="#fff" />
                    <path d="M0,0 L100,0 L600,360 L500,360 Z" fill="#000" />
                </svg>
            );

        case 'ghana':
            return (
                <svg className={className} viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
                    <rect width="900" height="600" fill="#fff" />
                    <rect width="900" height="200" fill="#ce1126" />
                    <rect y="200" width="900" height="200" fill="#fcd116" />
                    <rect y="400" width="900" height="200" fill="#006b3f" />
                    <polygon points="450,225 491,353 382,274 518,274 409,353" fill="#000" />
                </svg>
            );

        default:
            return (
                <svg className={className} viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
                    {/* Placeholder removed as requested */}
                </svg>
            );
    }
};

export default Flag;
