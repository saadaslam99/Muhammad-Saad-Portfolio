import React from 'react';

const Experience = () => {
    return (
        <section id="experience" style={{ padding: 'var(--spacing-xl) 0' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-lg)' }}>Experience</h2>
                <div className="timeline" style={{ borderLeft: '2px solid var(--color-glass-border)', paddingLeft: 'var(--spacing-md)' }}>

                    <div className="timeline-item" style={{ marginBottom: 'var(--spacing-lg)' }}>
                        <h3 style={{ color: 'var(--color-accent)' }}>Freelance Frontend Developer</h3>
                        <span style={{ fontSize: '0.9rem', color: '#888' }}>2025 – Present</span>
                        <p style={{ marginTop: 'var(--spacing-xs)', color: '#ccc' }}>
                            Building responsive marketing pages and product demos for various clients. Focusing on performance and animation.
                        </p>
                    </div>

                    <div className="timeline-item" style={{ marginBottom: 'var(--spacing-lg)' }}>
                        <h3 style={{ color: 'var(--color-accent)' }}>Web Developer Intern</h3>
                        <span style={{ fontSize: '0.9rem', color: '#888' }}>Summer 2024</span>
                        <p style={{ marginTop: 'var(--spacing-xs)', color: '#ccc' }}>
                            Developed React components and integrated APIs.
                        </p>
                    </div>

                    <div className="timeline-item" style={{ marginBottom: 'var(--spacing-lg)' }}>
                        <h3 style={{ color: 'var(--color-accent)' }}>Student Team Lead</h3>
                        <span style={{ fontSize: '0.9rem', color: '#888' }}>2023 – 2024</span>
                        <p style={{ marginTop: 'var(--spacing-xs)', color: '#ccc' }}>
                            Led a team of 4 students to build a Campus Event App. Managed git workflow and UI/UX design.
                        </p>
                    </div>

                    <div className="timeline-item">
                        <h3 style={{ color: 'var(--color-accent)' }}>Content Writer</h3>
                        <span style={{ fontSize: '0.9rem', color: '#888' }}>2022</span>
                        <p style={{ marginTop: 'var(--spacing-xs)', color: '#ccc' }}>
                            Writing blogs for two companies and creating posting material for them.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Experience;
