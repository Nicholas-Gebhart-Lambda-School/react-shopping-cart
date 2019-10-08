import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Context
import ProductContext from './contexts/ProductContext';
import CartContext from './contexts/CartContext';

// Hooks
import useLocalStorage from './hooks/useLocalStorage';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useLocalStorage('cart', []);

  const addItem = item => {
    setCart(currentCart => [...currentCart, item]);
  };

  const deleteItem = id => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{ cart, deleteItem }}>
          <Navigation />

          {/* Routes */}

          <Route exact path="/" component={Products} />

          <Route path="/cart" component={ShoppingCart} />
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
