import React from 'react';
import Layout from './components/layout/Layout';
import About from './components/features/About';
import Experience from './components/features/Experience';
import Projects from './components/features/Projects';
import Contact from './components/features/Contact';
import AIWidget from './components/features/AIWidget';
import SkillDNA from './components/features/SkillDNA/SkillDNA';
import RandomizedText from './components/features/RandomizedText';

function App() {
  return (
    <Layout>
      {/* Hero Section */}
      <section id="hero" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div className="container">
          <RandomizedText
            text="MUHAMMAD SAAD"
            className="hero-title"
            style={{
              fontSize: 'clamp(3rem, 8vw, 6rem)',
              marginBottom: '1rem',
              textShadow: '0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.2)',
              color: '#fff',
              fontWeight: 'bold'
            }}
          />
          <p style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', color: 'var(--color-accent)', maxWidth: '600px', textShadow: '0 0 10px rgba(0,0,0,0.5)' }}>
            Frontend Developer — BSCS @ Iqra University
          </p>
          <div style={{ marginTop: 'var(--spacing-md)' }}>
            <a href="#projects" className="glass" style={{ padding: '12px 32px', fontSize: '1.1rem', background: 'rgba(255,255,255,0.1)', fontWeight: 600 }} data-hover>
              View Work
            </a>
          </div>
        </div>
      </section>

      <About />
      <SkillDNA />
      <Experience />
      <Projects />
      <Contact />

      <AIWidget />
    </Layout>
  );
}

export default App;
