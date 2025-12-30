// components/Hero/Hero.js
import { Link } from 'react-router-dom';
import '../Styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Welcome to <span className="highlight">Gusto Italiano</span>
          </h1>
          <p className="hero-subtitle">
            Authentic Italian cuisine crafted with passion and the finest ingredients. 
            Family recipes passed down through generations.
          </p>
          <div className="hero-buttons">
            <Link to="/menu" className="btn btn-primary">
              Explore Our Menu
            </Link>
            <Link to="/reservations" className="btn btn-secondary">
              Book a Table
            </Link>
          </div>
        </div>
        
        <div className="hero-features">
          <div className="feature">
            <span className="feature-icon">🍝</span>
            <span>Fresh Pasta Daily</span>
          </div>
          <div className="feature">
            <span className="feature-icon">🍷</span>
            <span>Extensive Wine List</span>
          </div>
          <div className="feature">
            <span className="feature-icon">👨‍🍳</span>
            <span>Expert Chefs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;