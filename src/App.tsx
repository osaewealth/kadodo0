import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import PagePlaceholder from './components/PagePlaceholder';
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<LandingPage />} />
                    <Route path="solutions" element={<PagePlaceholder title="Solutions" />} />
                    <Route path="coverage" element={<PagePlaceholder title="Coverage" />} />
                    <Route path="opportunities" element={<PagePlaceholder title="Opportunities" />} />
                    <Route path="about-us" element={<PagePlaceholder title="About Us" />} />
                    <Route path="contact-us" element={<PagePlaceholder title="Contact Us" />} />
                    <Route path="legal" element={<PagePlaceholder title="Legal & Privacy" />} />
                    <Route path="terms" element={<PagePlaceholder title="Terms of Service" />} />
                    <Route path="careers" element={<PagePlaceholder title="Careers" />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
