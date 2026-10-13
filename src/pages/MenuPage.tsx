import { formatPrice, pizzas } from '../data/pizzas';

export function MenuPage() {
  return (
    <div>
      <h1>Menu</h1>
      <ul className="menu-list">
        {pizzas.map((pizza) => (
          <li key={pizza.id} className="menu-item">
            <div className="menu-item-header">
              <h2>{pizza.name}</h2>
              <span className="menu-item-dots" aria-hidden="true" />
              <span className="price">{formatPrice(pizza.price)}</span>
            </div>
            <p className="ingredients">{pizza.ingredients.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
