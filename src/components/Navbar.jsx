import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      padding: scrolled ? '15px 0' : '25px 0',
      background: scrolled ? 'rgba(10, 10, 15, 0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
      transition: 'all 0.3s ease',
      zIndex: 1000
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>
          Sri Lutfiya<span className="text-gradient">.</span>
        </a>
        <div style={{ display: 'flex', gap: '30px', fontWeight: 600 }}>
          <a href="#about" style={{ color: '#e2e8f0' }}>About</a>
          <a href="#experience" style={{ color: '#e2e8f0' }}>Experience</a>
          <a href="#projects" style={{ color: '#e2e8f0' }}>Projects</a>
          <a href="#contact" style={{ color: '#e2e8f0' }}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
