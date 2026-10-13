export type Topping =
  | 'ham'
  | 'shrimp'
  | 'onion'
  | 'pineapple'
  | 'mushroom'
  | 'burger'
  | 'fries'
  | 'oyster';

export interface Pizza {
  id: string;
  name: string;
  ingredients: string[];
  price: number;
  toppings: Topping[];
}

export const pizzas: Pizza[] = [
  {
    id: 'margarita',
    name: 'Margarita',
    ingredients: ['Tomato sauce', 'Cheese'],
    price: 95,
    toppings: [],
  },
  {
    id: 'vesuvio',
    name: 'Vesuvio',
    ingredients: ['Tomato sauce', 'Cheese', 'Ham'],
    price: 105,
    toppings: ['ham'],
  },
  {
    id: 'als-special',
    name: "Al's Special",
    ingredients: ['Tomato sauce', 'Cheese', 'Shrimps', 'Ham', 'Onion'],
    price: 125,
    toppings: ['shrimp', 'ham', 'onion'],
  },
  {
    id: 'the-crime',
    name: 'The Crime',
    ingredients: ['Tomato sauce', 'Cheese', 'Pineapple', 'Mushrooms'],
    price: 115,
    toppings: ['pineapple', 'mushroom'],
  },
  {
    id: 'smash',
    name: 'Smash',
    ingredients: ['Tomato sauce', 'Cheese', 'Smash burger', 'French fries', 'Onions'],
    price: 135,
    toppings: ['burger', 'fries', 'onion'],
  },
  {
    id: 'jumper',
    name: 'Jumper',
    ingredients: ['Tomato sauce', 'Cheese', 'Mushrooms', 'Oysters', 'Shrimps'],
    price: 145,
    toppings: ['mushroom', 'oyster', 'shrimp'],
  },
];

export const formatPrice = (price: number) => `${price} kr`;
