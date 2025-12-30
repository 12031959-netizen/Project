// src/components/Footer/Footer.js
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section brand-section">
            <Link to="/" className="footer-logo">
              <h3>Gusto Italiano</h3>
            </Link>
            <p className="footer-description">
              Authentic Italian cuisine crafted with passion and the finest ingredients. 
              Family recipes passed down through generations.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://tripadvisor.com" aria-label="TripAdvisor">
                <i className="fab fa-tripadvisor"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/specials">Specials</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Hamra<br />Beirut , B </span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>(+961) 01-123-456</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>info@gustoitaliano.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <span>Mon-Sun: 11AM - 10PM</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p className="newsletter-text">
              Subscribe to receive updates on special offers and events.
            </p>
            <form className="newsletter-form">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; 2026 Gusto Italiano. All rights reserved.</p>
            </div>
            <div className="footer-bottom-links">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;