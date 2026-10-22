import { Link } from 'react-router';

export function NotFoundPage() {
  return (
    <section className="not-found">
      <title>Page not found · Al's Pizza</title>
      <h1 className="not-found-title">Page not found</h1>
      <p className="not-found-message">Your pizza is in a different castle.</p>
      <Link to="/" className="button">
        Back to Home
      </Link>
    </section>
  );
}
