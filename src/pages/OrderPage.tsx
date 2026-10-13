import { useCart } from '../cart/useCart';
import { PizzaImage } from '../components/PizzaImage';
import { formatPrice, pizzas } from '../data/pizzas';

function Cart() {
  const { items, removePizza, setQuantity } = useCart();
  const cartPizzas = pizzas.filter((pizza) => items[pizza.id]);
  const total = cartPizzas.reduce((sum, pizza) => sum + pizza.price * items[pizza.id], 0);

  return (
    <section className="card cart" aria-labelledby="cart-heading">
      <h2 id="cart-heading">Your cart</h2>
      {cartPizzas.length === 0 ? (
        <p className="cart-empty">Your cart is empty. Add a pizza below!</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartPizzas.map((pizza) => {
              const quantity = items[pizza.id];
              return (
                <li key={pizza.id} className="cart-row">
                  <span className="cart-name">{pizza.name}</span>
                  <div className="quantity" role="group" aria-label={`Quantity of ${pizza.name}`}>
                    <button
                      type="button"
                      onClick={() => setQuantity(pizza.id, quantity - 1)}
                      aria-label={`Remove one ${pizza.name}`}
                    >
                      −
                    </button>
                    <span className="quantity-value">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(pizza.id, quantity + 1)}
                      aria-label={`Add one ${pizza.name}`}
                    >
                      +
                    </button>
                  </div>
                  <span className="cart-line-price">{formatPrice(pizza.price * quantity)}</span>
                  <button
                    type="button"
                    className="cart-remove"
                    onClick={() => removePizza(pizza.id)}
                    aria-label={`Remove ${pizza.name} from cart`}
                  >
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
          <p className="cart-total">
            Total: <strong>{formatPrice(total)}</strong>
          </p>
        </>
      )}
    </section>
  );
}

export function OrderPage() {
  const { addPizza } = useCart();

  return (
    <div>
      <h1>Order online</h1>
      <Cart />
      <div className="pizza-grid">
        {pizzas.map((pizza) => (
          <article key={pizza.id} className="pizza-card">
            <PizzaImage pizza={pizza} />
            <h3>{pizza.name}</h3>
            <button type="button" className="button" onClick={() => addPizza(pizza.id)}>
              Add to cart
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
