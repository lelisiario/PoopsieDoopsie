import "./Services.css";
import oneDogImage from '../assets/1dog.jpg';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Professional pet waste removal for every situation</p>
        
        <div className="about-mission">
          <div className="mission-content">
            <h3 className="mission-title">Our Mission</h3>
            <p>At Poopsie Doopsie, our mission is simple: to make life easier (and cleaner) for pet parents while giving back to the furry friends who need it most.</p>
            <p>We launched our business after realizing that while <strong>everybody loves their pets, nobody likes cleaning up after them</strong> — and that's where we come in. With no other local pooper scooper services active in the area, we knew we had the chance to fill a need, support our community, and lend a hand (or paw) to nearby shelters.</p>
            <p>As a family-owned business, we believe in doing the dirty work so our neighbors don't have to. We use pet-safe products, never lock clients into contracts, and pride ourselves on being extra-thorough, always clean, and always reliable.</p>
            <p>When you hire Poopsie Doopsie, you're not just getting a clean yard — you're getting peace of mind and the satisfaction of supporting a small business with a big heart. Let us take care of the mess so you can focus on the cuddles. 🐶💚</p>
          </div>
          <div className="mission-image">
    <img src={oneDogImage} alt="Happy dog in clean yard" />
  </div>
        </div>

        <div className="services-cards">
          {/* Residential Service */}
          <div className="service-card">
            <div className="service-icon">
              <span className="icon">🏠</span>
            </div>
            <div className="service-content">
              <h3 className="service-title">Residential Service</h3>
              <div className="service-divider"></div>
              <p className="service-description">Weekly, bi-weekly, or monthly waste removal for your home yard. Perfect for busy families and pet lovers.</p>
            </div>
          </div>

          {/* Commercial Properties */}
          <div className="service-card">
            <div className="service-icon">
              <span className="icon">🏢</span>
            </div>
            <div className="service-content">
              <h3 className="service-title">Commercial Properties</h3>
              <div className="service-divider"></div>
              <p className="service-description">Keep your apartment complexes, businesses, or public spaces clean. Custom schedules available.</p>
            </div>
          </div>

          {/* Government Contracts */}
          <div className="service-card">
            <div className="service-icon">
              <span className="icon">🏛️</span>
            </div>
            <div className="service-content">
              <h3 className="service-title">Government Contracts</h3>
              <div className="service-divider"></div>
              <p className="service-description">Parks, public areas, and government facilities. We're fully licensed, insured, and ready to handle municipal needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;