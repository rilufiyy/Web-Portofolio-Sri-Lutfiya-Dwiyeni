import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <p className="footer-text">
        Designed & built by <span>Sri Lutfiya Dwiyeni</span> &nbsp;·&nbsp; {new Date().getFullYear()}
      </p>
    </div>
  </footer>
);

export default Footer;
