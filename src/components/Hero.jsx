import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="section" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      paddingTop: '80px'
    }}>
      <div className="container">
        <div style={{ maxWidth: '800px' }}>
          <p style={{ color: 'var(--accent-color)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '1rem' }}>
            Hi, my name is
          </p>
          <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '1rem' }}>
            Sri Lutfiya Dwiyeni.
          </h1>
          <h2 style={{ fontSize: '3.5rem', color: 'var(--text-secondary)', lineHeight: 1.1, marginBottom: '2rem' }}>
            I build intelligent AI systems.
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px' }}>
            I'm an AI Engineer with production experience in building and deploying large-scale AI systems, specializing in NLP, RAG, and Agentic Pipelines.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="#projects" className="btn-primary">
              Check out my work
            </a>
            <a href="https://github.com/rilufiyy" target="_blank" rel="noreferrer" className="btn-primary" style={{
              background: 'transparent',
              border: '1px solid var(--accent-color)',
              boxShadow: 'none'
            }}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/sri-lutfiya-dwiyeni/" target="_blank" rel="noreferrer" className="btn-primary" style={{
              background: 'transparent',
              border: '1px solid var(--accent-secondary)',
              boxShadow: 'none'
            }}>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
