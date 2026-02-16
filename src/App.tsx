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
                    <Route path="careers" element={<PagePlaceholder title="Careers" />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
