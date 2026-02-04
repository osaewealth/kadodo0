import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Challenges from './Challenges';
import KadodoNumber from './KadodoNumber';
import { VerificationSolutions, TrustSolutions } from './Solutions';
import Mission from './Mission';

const LandingPage: React.FC = () => {
    return (
        <>
            <Hero />
            <Stats />
            <Challenges />
            <KadodoNumber />
            <VerificationSolutions />
            <TrustSolutions />
            <Mission />
        </>
    );
};

export default LandingPage;
