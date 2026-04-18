import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="page">
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <span className="drive">Drive</span>
          <span className="with">With</span>
        </div>
      </header>
      <div className="divider"></div>
      {/* HERO */}
      <section className="hero">
        <p className="section-tag">
          ✦ PREMIUM CAR RENTALS · TURO VERIFIED HOST
        </p>

        <h1 className="title">
          Drive Something <span className="highlight">Worth</span>
          <br /> Remembering
        </h1>

        <p className="subtitle">
          Hand-picked, meticulously maintained vehicles available near you. Book
          in minutes, drive in style.
        </p>

        <div className="hero-buttons">
          <button className="outline">Browse the Fleet ↓</button>
          <button className="gold">View on Turo</button>
        </div>

        <div className="stats">
          <div>
            <h3>4.9★</h3>
            <p>Host Rating</p>
          </div>
          <div>
            <h3>120+</h3>
            <p>Happy Renters</p>
          </div>
          <div>
            <h3>6</h3>
            <p>Cars Available</p>
          </div>
        </div>
      </section>

      {/* Fleet */}
      <section className="fleet">
        <p className="fleet-subtitle">✦ THE FLEET</p>

        <h2 className="fleet-title">Choose Your Ride</h2>

        <div className="fleet-filters">
          <button className="filter">All</button>
          <button className="filter">SUV</button>
          <button className="filter">Sedan</button>
          <button className="filter">Luxury</button>
        </div>
      </section>

      {/* WHY US */}
      <section className="why">
        <p className="section-tag">✦ WHY US</p>
        <h2 className="section-title">
          Renting Made Simple, Quality Guaranteed
        </h2>

        <div className="why-grid">
          <div>
            <h3>Flexible Pickup & Delivery</h3>
            <p>
              We offer free delivery within 10 miles. Pick up at your location,
              airport, or hotel — your call.
            </p>
          </div>

          <div>
            <h3>Fully Insured via Turo</h3>
            <p>
              Every booking is protected by Turo's insurance plans. Drive with
              complete peace of mind.
            </p>
          </div>

          <div>
            <h3>Spotless, Maintained Vehicles</h3>
            <p>
              Each car is professionally cleaned and inspected before every
              trip. No surprises.
            </p>
          </div>

          <div>
            <h3>5-Star Responsive Host</h3>
            <p>
              Questions? We respond within minutes, every day. Rated in the top
              1% of Turo hosts.
            </p>
          </div>
        </div>

        <p className="verified">
          All-Star Host · Turo Verified · Top 1% host · 120+ five-star trips
          completed
        </p>
      </section>
      {/* REVIEWS */}
      <section className="reviews">
        <p className="section-tag">✦ REVIEWS</p>
        <h2 className="section-title">What Renters Are Saying</h2>

        <div className="review">
          <div className="stars">★★★★★</div>
          <p>
            Absolutely seamless experience. The car was immaculate and the host
            was incredibly responsive. Will definitely be booking again for my
            next trip!
          </p>
          <strong>Jessica M. — Rented the Tesla Model Y</strong>
        </div>

        <div className="review">
          <div className="stars">★★★★★</div>
          <p>
            The BMW was in perfect condition and drove like a dream. The host
            even dropped it off at my hotel.
          </p>
          <strong>Daniel K. — Rented the BMW 5 Series</strong>
        </div>

        <div className="review">
          <div className="stars">★★★★★</div>
          <p>
            Took the Jeep on a mountain trip and it handled everything
            beautifully. Highly recommend!
          </p>
          <strong>Sarah R. — Rented the Jeep Wrangler</strong>
        </div>
      </section>
      {/* CTA */}
      <section className="cta">
        <h2>Ready to Hit the Road?</h2>
        <button className="gold large">Book on Turo</button>
      </section>
      {/* FOOTER */}
      <footer className="footer">
        <h3 className="brand">DriveWith</h3>
        <p>© 2026 DriveWith · All Rights Reserved</p>
        <p>Turo Profile · Contact · Privacy</p>
        <p className="small">
          Browse available dates and book your perfect car on Turo in just a few
          clicks.
        </p>
      </footer>
    </div>
  );
}
