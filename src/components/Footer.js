import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer-links">
          <li className="footer-link-item">
            <a href="/">SPACEX © 2023</a>
          </li>
          <li className="footer-link-item">
            <a href="/">TWITTER</a>
          </li>
          <li className="footer-link-item">
            <a href="/">YOUTUBE</a>
          </li>
          <li className="footer-link-item">
            <a href="/">INSTAGRAM</a>
          </li>
          <li className="footer-link-item">
            <a href="/">FLICKR</a>
          </li>
          <li className="footer-link-item">
            <a href="/">LINKEDIN</a>
          </li>
          <li className="footer-link-item">
            <a href="/">PRIVACY POLICY</a>
          </li>
          <li className="footer-link-item">
            <a href="/">SUPPLIERS</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;