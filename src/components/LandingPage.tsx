import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Challenges from './Challenges';
import KadodoNumber from './KadodoNumber';
import PerformanceStats from './PerformanceStats';
import { VerificationSolutions } from './Solutions';
import Mission from './Mission';
import RegionGateway from './RegionGateway';
import SecuritySection from './SecuritySection';

const LandingPage: React.FC = () => {
    return (
        <>
            <Hero />
            {/* <Stats /> */}{/* Partner section temporarily hidden */}
            <Challenges />
            <KadodoNumber />
            <PerformanceStats />
            <VerificationSolutions />
            <Mission />
            <RegionGateway />
            <SecuritySection />
        </>
    );
};

export default LandingPage;
