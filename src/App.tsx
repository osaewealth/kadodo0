import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import Contact from './components/Contact';
import Coverage from './components/Coverage';
import AboutUs from './components/AboutUs';
import SolutionsPage from './components/SolutionsPage';
import PagePlaceholder from './components/PagePlaceholder';
import KadodoNumberPage from './components/KadodoNumberPage';
import IndividualVerification from './components/IndividualVerification';
import SolutionIndividual from './components/SolutionIndividual';
import SolutionPartners from './components/SolutionPartners';
import Business from './components/Business';
import Ghana from './components/Ghana';
import TermsOfService from './components/TermsOfService';
import AcceptableUsePolicy from './components/AcceptableUsePolicy';
import BiometricDataPolicy from './components/BiometricDataPolicy';
import CookiePolicy from './components/CookiePolicy';
import DataSharingPolicy from './components/DataSharingPolicy';
import DisclaimerOfLiability from './components/DisclaimerOfLiability';
import LimitationOfLiability from './components/LimitationOfLiability';
import MarketplaceSellerAgreement from './components/MarketplaceSellerAgreement';
import PrivacyPolicy from './components/PrivacyPolicy';
import SubscriptionPolicy from './components/SubscriptionPolicy';
import Compliance from './components/Compliance';
import ComplianceForm from './components/ComplianceForm';
import NDA from './components/NDA';
import Governance from './components/Governance';

import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LandingPage />} />
                    <Route path="solutions" element={<SolutionsPage />} />
                    <Route path="solution-individual" element={<SolutionIndividual />} />
                    <Route path="solution-partners" element={<SolutionPartners />} />
                    <Route path="business" element={<Business />} />
                    <Route path="individual-verification" element={<IndividualVerification />} />
                    <Route path="coverage" element={<Coverage />} />
                    <Route path="about-us" element={<AboutUs />} />
                    <Route path="kadodo-number" element={<KadodoNumberPage />} />
                    <Route path="ghana" element={<Ghana />} />
                    <Route path="contact-us" element={<Contact />} />
                    <Route path="legal" element={<PagePlaceholder title="Legal & Privacy" />} />
                    <Route path="terms" element={<TermsOfService />} />
                    <Route path="acceptable-use-policy" element={<AcceptableUsePolicy />} />
                    <Route path="biometric-data-policy" element={<BiometricDataPolicy />} />
                    <Route path="cookie-policy" element={<CookiePolicy />} />
                    <Route path="data-sharing-policy" element={<DataSharingPolicy />} />
                    <Route path="disclaimer-of-liability" element={<DisclaimerOfLiability />} />
                    <Route path="limitation-of-liability" element={<LimitationOfLiability />} />
                    <Route path="marketplace-seller-agreement" element={<MarketplaceSellerAgreement />} />
                    <Route path="privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="subscription-policy" element={<SubscriptionPolicy />} />
                    <Route path="compliance" element={<Compliance />} />
                    <Route path="compliance-form" element={<ComplianceForm />} />
                    <Route path="governance" element={<Governance />} />
                    <Route path="nda" element={<NDA />} />
                    <Route path="careers" element={<PagePlaceholder title="Careers" />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
