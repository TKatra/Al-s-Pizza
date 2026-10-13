import { BrowserRouter, Route, Routes } from 'react-router';
import { CartProvider } from './cart/CartProvider';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { OrderPage } from './pages/OrderPage';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="order" element={<OrderPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
