import React from 'react';

const About = () => {
    return (
        <section id="about" style={{ padding: 'var(--spacing-xl) 0', position: 'relative' }}>
            <div className="container">
                <div className="glass" style={{ padding: 'var(--spacing-lg)', maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-md)' }}>About Me</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-sm)', color: '#ccc' }}>
                        I am a Frontend Developer in React and Three.js, and a BSCS student at Iqra University with a passion for building performance-focused frontend experiences.
                    </p>
                    <p style={{ fontSize: '1.1rem', marginBottom: 'var(--spacing-sm)', color: '#ccc' }}>
                        My work bridges the gap between traditional web design and immersive 3D environments. I specialize in React, Three.js, and GSAP to create websites that feel alive.
                    </p>
                    <div style={{ marginTop: 'var(--spacing-md)' }}>
                        <a href="/saad-cv.pdf" className="glass" style={{ padding: '12px 24px', display: 'inline-block', color: 'var(--color-accent)', fontWeight: 600 }} data-hover>
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
