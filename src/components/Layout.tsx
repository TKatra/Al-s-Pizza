import { Link, NavLink, Outlet } from 'react-router';
import { useCart } from '../cart/useCart';

const links = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/order', label: 'Order online' },
];

export function Layout() {
  const { items } = useCart();
  const cartCount = Object.values(items).reduce((sum, qty) => sum + qty, 0);

  return (
    <>
      <header className="site-header">
        <nav className="site-nav">
          <Link to="/" className="brand">
            🍕 Al's Pizza
          </Link>
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end>
                  {link.label}
                  {link.to === '/order' && cartCount > 0 && (
                    <span className="nav-badge" aria-label={`${cartCount} in cart`}>
                      {cartCount}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
      <footer className="site-footer">© Al's Pizza · DootStreet 404B, Demo Town</footer>
    </>
  );
}
