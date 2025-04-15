import "./Pricing.css";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <h2 className="section-title">Our Plans</h2>
        <p className="section-subtitle">Simple weekly pricing — or custom quotes for larger needs</p>

        <div className="pricing-cards">
          {/* Single Pup Plan */}
          <div className="pricing-card">
            <div className="card-image">
              <img src="/src/assets/1dog.jpg" alt="Single Pup" />
            </div>
            <div className="card-content">
              <h3 className="plan-title">Single Pup Plan</h3>
              <div className="price">$100</div>
              <p className="plan-description">For the solo sniffer. One visit per week to keep your yard clean and stink-free.</p>
            </div>
          </div>

          {/* Double Trouble Plan */}
          <div className="pricing-card popular">
            <div className="popular-tag">Most Popular</div>
            <div className="card-image">
              <img src="/src/assets/2dogs.jpg" alt="Double Trouble" />
            </div>
            <div className="card-content">
              <h3 className="plan-title">Double Trouble Plan</h3>
              <div className="price">$149</div>
              <p className="plan-description">Two tails, no problem! Weekly scoops for your dynamic dog duo.</p>
            </div>
          </div>

          {/* Pack Leader Plan */}
          <div className="pricing-card">
            <div className="card-image">
              <img src="/src/assets/Multi-dog.jpg" alt="Pack Leader" />
            </div>
            <div className="card-content">
              <h3 className="plan-title">Pack Leader Plan</h3>
              <div className="price">$199</div>
              <p className="plan-description">For homes with 3+ furry friends. Tailored service for a cleaner yard.</p>
            </div>
          </div>

          {/* HOA & Gov Plan */}
          <div className="pricing-card">
            <div className="card-image">
              <img src="/src/assets/Multi-dog2.jpg" alt="HOA / Government" />
            </div>
            <div className="card-content">
              <h3 className="plan-title">Apartments & Gov Contracts</h3>
              <div className="price">Custom Quote</div>
              <p className="plan-description">Serving apartments, HOAs, parks & government sites. Fully compliant. Contact us for a custom quote.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
