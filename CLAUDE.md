# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Demo website for the fictional pizzeria Al's Pizza (React 19, TypeScript, Vite, React Router v8). Purely client-side: no backend, no persistence, no tests.

## Commands

- `npm run dev` — Vite dev server on port 5173 (also configured as the `dev` preview in `.claude/launch.json`)
- `npm run build` — type-check with `tsc -b`, then `vite build` into `dist/`
- `npm run lint` — oxlint (config in `.oxlintrc.json`; not ESLint)
- `npm run preview` — serve the production build

There is no test runner. `npm run build` is the type-check gate; `tsconfig.app.json` enables `noUnusedLocals`/`noUnusedParameters`, `verbatimModuleSyntax` (use `import type` for type-only imports) and `erasableSyntaxOnly` (no enums, namespaces or parameter properties).

## Architecture

- **Routing** (`src/App.tsx`): `CartProvider` wraps `BrowserRouter`; all routes (`/`, `/menu`, `/order`) are children of `components/Layout.tsx`, which renders the header nav (with a cart-count badge on "Order online"), `<Outlet />` and footer. Router imports come from `react-router` (not `react-router-dom`).
- **Data** (`src/data/pizzas.ts`): the single source of truth for the menu. Each `Pizza` has display `ingredients` (strings) and a separate `toppings` array of the `Topping` union used only for drawing. `formatPrice` renders prices in `kr`.
- **Pizza images** (`components/PizzaImage.tsx`): pizzas are drawn as inline SVG, not image files. Toppings are distributed across fixed `spots` and each `Topping` has a case in `drawTopping`. Adding a new `Topping` value requires a matching case there (the switch is exhaustive by return type). A pizza with no toppings gets basil leaves.
- **Cart** (`src/cart/`): split into three files so oxlint's `only-export-components` rule is satisfied — `cartContext.ts` (context + types; cart state is `Record<pizzaId, quantity>`), `CartProvider.tsx` (state and memoized actions; `setQuantity` with ≤0 removes the item), and `useCart.ts` (hook that throws outside the provider). Cart state is in-memory only and lost on reload. The provider uses React 19's `<CartContext value>` form, not `.Provider`.
- **Styling**: a single global stylesheet, `src/index.css`, with plain class names and CSS custom properties on `:root` (`--red`, `--cream`, `--ink`, etc.). No CSS modules or CSS-in-JS.

## Code Style

- Use 2 space indentation
