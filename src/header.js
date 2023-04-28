import React from 'react';
import './index.css';
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Company Logo" />
      </div>
      <nav className="nav">
        <ul className="social-media">
          <li><a href="https://www.instagram.com/sellersquare_in" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a></li>
          <li><a href="https://www.linkedin.com/company/seller-square" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="https://www.facebook.com/sellersquare" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a></li>
          <li><a href="https://www.youtube.com/@sellersquare" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a></li>
          <li><a href="https://twitter.com/sellersquare_in" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a></li>
          <li><a href="mailto:support@sellersquare.in" target="_blank" rel="noreferrer"><i className="fas fa-envelope"></i></a></li>
        </ul>
        <button className="cta" target="_blank" onclick="window.location.href='tel:8073881393'" rel="noreferrer">Call Us</button>
      </nav>
    </header>
  );
}

export default Header;
