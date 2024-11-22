import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { headerData } from './HeaderData';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);
    // Set initial dark mode state to true
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const updateHeaderHeight = () => {
            const header = document.getElementById('header');
            if (header) {
                setHeaderHeight(header.clientHeight);
            }
        };

        updateHeaderHeight();
        window.addEventListener('resize', updateHeaderHeight);

        // Check local storage, but default to true if not set
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode === null) {
            // If no preference is saved, set dark mode as default
            localStorage.setItem('darkMode', 'true');
            setIsDarkMode(true);
        } else {
            setIsDarkMode(savedDarkMode === 'true');
        }

        // Apply dark mode class immediately
        if (isDarkMode) {
            document.body.classList.add('theme-dark');
            const toggleMenu = document.querySelector('.toggle-menu');
            if (toggleMenu) {
                toggleMenu.classList.remove('bg-black');
            }
        } else {
            document.body.classList.remove('theme-dark');
            const toggleMenu = document.querySelector('.toggle-menu');
            if (toggleMenu) {
                toggleMenu.classList.add('bg-black');
            }
        }

        return () => {
            window.removeEventListener('resize', updateHeaderHeight);
        };
    }, [isDarkMode]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('darkMode', (!isDarkMode).toString());
    };

    const currentYear = new Date().getFullYear();

    return (
        <div>
            {/* Toggle Menu */}
            <div className={`toggle-menu ${isMenuOpen ? 'show' : ''} ${isDarkMode ? '' : 'bg-black'}`}>
                <button className="toggle-close" onClick={closeMenu}>
                    <i className="bi bi-x"></i>
                </button>
                <div className="mt-4">
                    <h6 className="mono-heading fw-normal mb-2">Email:</h6>
                    <h4 className="fw-medium">{headerData.mainData.email}</h4>
                </div>
                <div className="mt-4 mt-lg-5">
                    <ul className="list-circle">
                        <li>
                            <button className="mono-heading link-decoration" onClick={toggleDarkMode}>
                                {isDarkMode ? 'Light Version' : 'Dark Version'}
                            </button>
                        </li>
                        {headerData.links.map((item, index) => (
                            <li key={index}>
                                <Link href={item.url} className="mono-heading link-decoration">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="tm-bottom">
                    <p>&copy; {currentYear} {headerData.mainData.copywriter}.</p>
                </div>
            </div>
            {/* End Toggle Menu */}

            {/* Header */}
            <div id="header">
                <div className="row">
                    <div className="col-12 col-lg-4 col-xl-3 order-lg-2 text-end">
                        <div className="d-inline-flex align-items-center">
                            {/* Social Links */}
                            <ul className="list-inline d-inline-block mono-heading fw-medium">
                                {headerData.socialLinks.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.url} className="link-decoration">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            {/* Toggle Menu Button */}
                            <button className="menu-dots" aria-label="Menu" onClick={toggleMenu}>
                                <span></span>
                            </button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-8 order-lg-1 col-xl-9">
                        <div className="py-4">
                            <h1 className="display-2 fw-semi-bold m-0">
                                {headerData.mainData.firstName} 
                                <span className="stroke-text">{headerData.mainData.secondName}</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Header */}
        </div>
    );
};

export default Header;