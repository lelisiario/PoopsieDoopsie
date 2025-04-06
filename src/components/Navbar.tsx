import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <Link to="/">
            <span className="logo-text">Poopsie Doopsie</span>
            <span className="logo-tag">Pet Waste Removal</span>
          </Link>
        </div>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About Us</a>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="cta-button">
          <Link to="/contact" className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;