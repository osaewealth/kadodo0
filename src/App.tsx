import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import Contact from './components/Contact';
import Coverage from './components/Coverage';
import AboutUs from './components/AboutUs';
import SolutionsPage from './components/SolutionsPage';
import PagePlaceholder from './components/PagePlaceholder';
import KadodoNumberPage from './components/KadodoNumberPage';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LandingPage />} />
                    <Route path="solutions" element={<SolutionsPage />} />
                    <Route path="coverage" element={<Coverage />} />
                    <Route path="about-us" element={<AboutUs />} />
                    <Route path="kadodo-number" element={<KadodoNumberPage />} />
                    <Route path="contact-us" element={<Contact />} />
                    <Route path="legal" element={<PagePlaceholder title="Legal & Privacy" />} />
                    <Route path="terms" element={<PagePlaceholder title="Terms of Service" />} />
                    <Route path="careers" element={<PagePlaceholder title="Careers" />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
