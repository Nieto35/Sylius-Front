import Header from './../components/layout/Header';
import Footer from './../components/layout/Footer';
import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
