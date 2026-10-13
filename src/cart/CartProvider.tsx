import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { CartContext, type CartItems } from './cartContext';

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItems>({});

  const addPizza = useCallback((pizzaId: string) => {
    setItems((prev) => ({ ...prev, [pizzaId]: (prev[pizzaId] ?? 0) + 1 }));
  }, []);

  const removePizza = useCallback((pizzaId: string) => {
    setItems((prev) => {
      const next = { ...prev };
      delete next[pizzaId];
      return next;
    });
  }, []);

  const setQuantity = useCallback(
    (pizzaId: string, quantity: number) => {
      if (quantity <= 0) {
        removePizza(pizzaId);
        return;
      }
      setItems((prev) => ({ ...prev, [pizzaId]: quantity }));
    },
    [removePizza],
  );

  const value = useMemo(
    () => ({ items, addPizza, removePizza, setQuantity }),
    [items, addPizza, removePizza, setQuantity],
  );

  return <CartContext value={value}>{children}</CartContext>;
}
