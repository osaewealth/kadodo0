import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTopButton from './ScrollToTopButton';

const Layout: React.FC = () => {
    return (
        <div className="app">
            <Navbar />
            <ScrollToTopButton />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};


export default Layout;
