import { createContext } from 'react';

/** Highest quantity of a single pizza that the cart accepts. */
export const MAX_QUANTITY_PER_PIZZA = 20;

/** Maps pizza id to the quantity in the cart. */
export type CartItems = Record<string, number>;

export interface CartContextValue {
  items: CartItems;
  /** Total number of pizzas in the cart (sum of all quantities). */
  totalCount: number;
  /** Adds one of the pizza. Ignored for unknown ids or when the pizza is at the maximum. */
  addPizza: (pizzaId: string) => void;
  /** Removes the pizza from the cart entirely. */
  removePizza: (pizzaId: string) => void;
  /**
   * Sets the quantity of a pizza. Non-integers are rounded down, values above
   * MAX_QUANTITY_PER_PIZZA are capped, 0 or less removes the pizza, and
   * non-finite values (NaN, Infinity) and unknown ids are ignored.
   */
  setQuantity: (pizzaId: string, quantity: number) => void;
}

export const CartContext = createContext<CartContextValue | null>(null);
