import { useState } from 'react'; // Import useState hook
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for hamburger and close

import './Navbar.css'; // Your existing CSS file

const Navbar = () => {
  // State to manage whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Logo Section */}
        <div className="logo">
          <Link to="/" onClick={() => setIsMenuOpen(false)}> {/* Close menu on logo click */}
            <span className="logo-text">Poopsie Doopsie</span>
            <span className="logo-tag">Pet Waste Removal</span>
          </Link>
        </div>

        {/* Hamburger/Close Icon for Mobile */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Navigation Links and CTA Button - Conditional Class for Toggling */}
        <div className={`nav-elements ${isMenuOpen ? 'active' : ''}`}>
          <div className="nav-links">
            <Link to="/services" onClick={toggleMenu}>Services</Link> {/* Close menu on link click */}
            <Link to="/pricing" onClick={toggleMenu}>Pricing</Link>
            <Link to="/about" onClick={toggleMenu}>About Us</Link>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </div>
          <div className="cta-button">
            <Link to="/contact" className="btn btn-primary" onClick={toggleMenu}>Get Started</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;