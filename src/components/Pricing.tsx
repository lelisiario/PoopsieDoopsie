const Pricing = () => {
  return (
    <section id="pricing" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 display-5 fw-bold text-success">Our Plans</h2>
        <p className="text-center text-muted mb-5">Simple weekly pricing — or custom quotes for larger needs</p>

        <div className="row g-4">
          {/* Single Pup Plan */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-success">
              <img src="https://source.unsplash.com/400x300/?dog,puppy" className="card-img-top" alt="Single Pup" />
              <div className="card-body">
                <h5 className="card-title text-success fw-bold">Single Pup Plan</h5>
                <h6 className="card-subtitle mb-2 text-muted">$100</h6>
                <p className="card-text">For the solo sniffer. One visit per week to keep your yard clean and stink-free.</p>
              </div>
            </div>
          </div>

          {/* Double Trouble Plan */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-success position-relative">
              <div className="position-absolute top-0 end-0 bg-success text-white px-3 py-1 rounded-start">Most Popular</div>
              <img src="https://source.unsplash.com/400x300/?golden-retriever,puppies" className="card-img-top" alt="Double Trouble" />
              <div className="card-body">
                <h5 className="card-title text-success fw-bold">Double Trouble Plan</h5>
                <h6 className="card-subtitle mb-2 text-muted">$149</h6>
                <p className="card-text">Two tails, no problem! Weekly scoops for your dynamic dog duo.</p>
              </div>
            </div>
          </div>

          {/* Pack Leader Plan */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-success">
              <img src="https://source.unsplash.com/400x300/?puppy-pack,dogs" className="card-img-top" alt="Pack Leader" />
              <div className="card-body">
                <h5 className="card-title text-success fw-bold">Pack Leader Plan</h5>
                <h6 className="card-subtitle mb-2 text-muted">$199</h6>
                <p className="card-text">For homes with 3+ furry friends. Tailored service for a cleaner yard.</p>
              </div>
            </div>
          </div>

          {/* HOA & Gov Plan */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100 border-success">
              <img src="https://source.unsplash.com/400x300/?apartment,park" className="card-img-top" alt="HOA / Government" />
              <div className="card-body">
                <h5 className="card-title text-success fw-bold">Apartments & Gov Contracts</h5>
                <h6 className="card-subtitle mb-2 text-muted">Custom Quote</h6>
                <p className="card-text">Serving apartments, HOAs, parks & government sites. Fully compliant. Contact us for a custom quote.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
