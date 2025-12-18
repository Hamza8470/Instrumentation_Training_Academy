import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ITA Portal</h3>
            <p>Empowering instrumentation professionals with quality training.</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/courses">Courses</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="/help">Help Center</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: support@itaportal.com</p>
            <p>Phone: +91 1234567890</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 ITA Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
