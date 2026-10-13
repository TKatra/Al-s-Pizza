import { Link } from 'react-router';

const address = 'DootStreet 404B, Demo Town';

export function HomePage() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Al's Pizza</h1>
        <p className="tagline">Stone-baked pizza, made the way Al likes it.</p>
        <div className="hero-actions">
          <Link to="/menu" className="button button-secondary">
            See the menu
          </Link>
          <Link to="/order" className="button">
            Order online
          </Link>
        </div>
      </section>

      <section className="card directions">
        <h2>How to find us</h2>
        <p className="address">
          <strong>Address:</strong> {address}
        </p>
        <ul>
          <li>Head to the centre of Demo Town and follow the signs towards DootStreet.</li>
          <li>Walk down DootStreet until you reach number 404 — we're in building B, on the ground floor.</li>
          <li>Look for the red awning and follow the smell of fresh pizza.</li>
        </ul>
      </section>
    </div>
  );
}
