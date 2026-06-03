import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" style={{ padding: '40px 0', textAlign: 'center', borderTop: '1px solid var(--surface-border)', marginTop: '50px' }}>
      <div className="container">
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Get In Touch</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 30px' }}>
          Currently open for new opportunities in AI Engineering. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a href="mailto:srilutfiyadwiy@gmail.com" className="btn-primary" style={{ marginBottom: '40px' }}>
          Say Hello
        </a>
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          <p>&copy; {new Date().getFullYear()} Sri Lutfiya Dwiyeni. Built with React & Vite.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
