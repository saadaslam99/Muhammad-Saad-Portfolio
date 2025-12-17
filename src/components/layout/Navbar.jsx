import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`navbar ${isScrolled ? 'scrolled' : ''}`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                padding: '20px 40px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 100,
                transition: 'background 0.3s, padding 0.3s',
                background: isScrolled ? 'rgba(11, 11, 13, 0.8)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            }}
        >
            <div className="logo" style={{ fontWeight: 700, fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                MS
            </div>
            <div className="nav-links" style={{ display: 'flex', gap: '40px' }}>
                <a href="#about" data-hover>About</a>
                <a href="#experience" data-hover>Experience</a>
                <a href="#projects" data-hover>Projects</a>
                <a href="#contact" data-hover>Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
