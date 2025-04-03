
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <a href="/">
            <span className="logo-text">Poopsie Doopsie</span>
            <span className="logo-tag">Pet Waste Removal</span>
          </a>
        </div>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="cta-button">
          <a href="#contact" className="btn btn-primary">Get Started</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;