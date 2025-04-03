
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Professional pet waste removal for every situation</p>
        
        <div className="service-cards">
          <div className="service-card">
            <div className="service-icon">🏠</div>
            <h3>Residential Service</h3>
            <p>Weekly, bi-weekly, or monthly waste removal for your home yard. Perfect for busy families and pet lovers.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🏢</div>
            <h3>Commercial Properties</h3>
            <p>Keep your apartment complexes, businesses, or public spaces clean. Custom schedules available.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🏛️</div>
            <h3>Government Contracts</h3>
            <p>Special rates for parks, schools, and other government facilities. Compliant with all local regulations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;