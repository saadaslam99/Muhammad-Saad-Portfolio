import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "E-Commerce Marketing Page",
            desc: "High-performance landing page with scroll animations.",
            tech: ["Next.js", "Tailwind", "Framer Motion"],
            context: "Freelance"
        },
        {
            title: "SaaS Analytics Dashboard",
            desc: "React components and API integration for a SaaS product.",
            tech: ["React", "Redux", "Chart.js"],
            context: "Internship"
        },
        {
            title: "Campus Event Manager",
            desc: "Full-stack event management platform for university.",
            tech: ["React Native", "Firebase", "Node.js"],
            context: "University"
        },
        {
            title: "Tech Blog Platform",
            desc: "Content management system and blog interface.",
            tech: ["React", "Markdown", "Vite"],
            context: "Content Writing"
        }
    ];

    return (
        <section id="projects" style={{ padding: 'var(--spacing-xl) 0' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-lg)' }}>Projects</h2>
                <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-md)' }}>
                    {projects.map((project, index) => (
                        <div key={index} className="glass project-card" style={{ padding: 'var(--spacing-md)', transition: 'transform 0.3s', position: 'relative' }} data-hover>
                            <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'var(--color-accent)', color: '#000', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>
                                {project.context}
                            </div>
                            <h3 style={{ marginBottom: 'var(--spacing-sm)', paddingRight: '20px' }}>{project.title}</h3>
                            <p style={{ marginBottom: 'var(--spacing-md)', color: '#ccc' }}>{project.desc}</p>
                            <div className="tags" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                {project.tech.map(t => (
                                    <span key={t} style={{ fontSize: '0.8rem', padding: '4px 8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px' }}>{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
