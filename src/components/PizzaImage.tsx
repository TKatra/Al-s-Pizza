import type { ReactElement } from 'react';
import type { Pizza, Topping } from '../data/pizzas';

// Spots on the pizza where toppings are placed, shared out between the toppings.
const spots: [number, number][] = [
  [70, 60], [130, 60], [100, 85], [55, 100], [145, 100],
  [80, 125], [120, 125], [100, 150], [65, 145], [135, 145],
  [100, 45], [100, 115],
];

function drawTopping(topping: Topping, x: number, y: number, key: number): ReactElement {
  const rotate = `rotate(${(key * 47) % 360} ${x} ${y})`;
  switch (topping) {
    case 'ham':
      return <rect key={key} x={x - 9} y={y - 7} width={18} height={14} rx={3} fill="#e98a8a" stroke="#c96666" transform={rotate} />;
    case 'shrimp':
      return <path key={key} d={`M${x - 8} ${y} a8 8 0 1 1 8 8`} fill="none" stroke="#f4895f" strokeWidth={5} strokeLinecap="round" transform={rotate} />;
    case 'onion':
      return <circle key={key} cx={x} cy={y} r={7} fill="none" stroke="#e8d9f0" strokeWidth={2.5} />;
    case 'pineapple':
      return <polygon key={key} points={`${x},${y - 8} ${x + 8},${y + 6} ${x - 8},${y + 6}`} fill="#ffd84d" stroke="#d9a400" transform={rotate} />;
    case 'mushroom':
      return (
        <g key={key} transform={rotate}>
          <path d={`M${x - 9} ${y} a9 7 0 0 1 18 0 z`} fill="#c9b49a" />
          <rect x={x - 3} y={y} width={6} height={7} fill="#e6dccb" />
        </g>
      );
    case 'burger':
      return <circle key={key} cx={x} cy={y} r={9} fill="#6b3d22" stroke="#4a2814" />;
    case 'fries':
      return <rect key={key} x={x - 2.5} y={y - 10} width={5} height={20} rx={1.5} fill="#f2c14e" transform={rotate} />;
    case 'oyster':
      return <ellipse key={key} cx={x} cy={y} rx={9} ry={6} fill="#d8d4cc" stroke="#9c958a" transform={rotate} />;
  }
}

export function PizzaImage({ pizza }: { pizza: Pizza }) {
  const toppings = spots.flatMap(([x, y], i) => {
    if (pizza.toppings.length === 0) return [];
    const topping = pizza.toppings[i % pizza.toppings.length];
    return [drawTopping(topping, x, y, i)];
  });

  return (
    <svg viewBox="0 0 200 200" className="pizza-image" role="img" aria-label={`${pizza.name} pizza`}>
      <circle cx={100} cy={100} r={92} fill="#d99a4e" />
      <circle cx={100} cy={100} r={80} fill="#c8361d" />
      <circle cx={100} cy={100} r={74} fill="#f6d27a" />
      {/* Melted cheese spots */}
      <circle cx={75} cy={80} r={14} fill="#fbe3a0" />
      <circle cx={125} cy={115} r={16} fill="#fbe3a0" />
      <circle cx={90} cy={135} r={10} fill="#fbe3a0" />
      {pizza.toppings.length === 0 && (
        <>
          <circle cx={80} cy={70} r={6} fill="#3f8f3a" />
          <circle cx={130} cy={85} r={6} fill="#3f8f3a" />
          <circle cx={100} cy={130} r={6} fill="#3f8f3a" />
        </>
      )}
      {toppings}
    </svg>
  );
}
