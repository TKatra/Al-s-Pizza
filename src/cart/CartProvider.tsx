import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { pizzas } from '../data/pizzas';
import { CartContext, MAX_QUANTITY_PER_PIZZA, type CartItems } from './cartContext';

const knownPizzaIds = new Set(pizzas.map((pizza) => pizza.id));

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItems>({});

  const addPizza = useCallback((pizzaId: string) => {
    if (!knownPizzaIds.has(pizzaId)) return;
    setItems((prev) => {
      const current = prev[pizzaId] ?? 0;
      if (current >= MAX_QUANTITY_PER_PIZZA) return prev;
      return { ...prev, [pizzaId]: current + 1 };
    });
  }, []);

  const removePizza = useCallback((pizzaId: string) => {
    setItems((prev) => {
      if (!(pizzaId in prev)) return prev;
      const next = { ...prev };
      delete next[pizzaId];
      return next;
    });
  }, []);

  const setQuantity = useCallback(
    (pizzaId: string, quantity: number) => {
      if (!knownPizzaIds.has(pizzaId) || !Number.isFinite(quantity)) return;
      const clamped = Math.min(Math.floor(quantity), MAX_QUANTITY_PER_PIZZA);
      if (clamped <= 0) {
        removePizza(pizzaId);
        return;
      }
      setItems((prev) => ({ ...prev, [pizzaId]: clamped }));
    },
    [removePizza],
  );

  const totalCount = useMemo(
    () => Object.values(items).reduce((sum, quantity) => sum + quantity, 0),
    [items],
  );

  const value = useMemo(
    () => ({ items, totalCount, addPizza, removePizza, setQuantity }),
    [items, totalCount, addPizza, removePizza, setQuantity],
  );

  return <CartContext value={value}>{children}</CartContext>;
}
