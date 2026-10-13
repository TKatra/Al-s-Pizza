import { createContext } from 'react';

/** Maps pizza id to the quantity in the cart. */
export type CartItems = Record<string, number>;

export interface CartContextValue {
  items: CartItems;
  addPizza: (pizzaId: string) => void;
  removePizza: (pizzaId: string) => void;
  setQuantity: (pizzaId: string, quantity: number) => void;
}

export const CartContext = createContext<CartContextValue | null>(null);
