import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTopButton from './ScrollToTopButton';
import CookieConsent from './CookieConsent';

const Layout: React.FC = () => {
    return (
        <div className="app">
            <Navbar />
            <ScrollToTopButton />
            <main>
                <Outlet />
            </main>
            <Footer />
            <CookieConsent />
        </div>
    );
};


export default Layout;
