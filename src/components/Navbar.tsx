import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <Link to="/">
          console.log("Poopsie Doopsie Logo")
            <span className="logo-text">Poopsie Doopsie</span>
            <span className="logo-tag">Pet Waste Removal</span>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/services">Services</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/about">About Us</Link>
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