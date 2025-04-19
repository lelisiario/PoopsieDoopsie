
import './hero.css';
import Logo from '../assets/Logo.jpg'; // Assuming you have a logo image in the assets folder

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>We Clean Up<br />The Mess So<br />You Don't Have To!</h1>
          <p>Professional dog waste removal service in Vacaville, CA. Keeping your yard clean, healthy, and enjoyable.</p>
          <div className="hero-buttons">
            <a href="#pricing" className="btn btn-secondary">See Our Pricing</a>
            <a href="#contact" className="btn btn-primary">Contact Us</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={Logo} alt="Poopsie Doopsie Logo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
