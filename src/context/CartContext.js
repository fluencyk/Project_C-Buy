import React from 'react';

let CartContext = React.createContext(null);

export function useCart() {
  return React.useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = React.useState([]);

  const addItemToCart = item => {
    setCartItems(items => {
      const ids = items.map(v => v.url);
      return ids.includes(item.url) ? items : items.concat(item);
    });
  };

  const removeItemFromCart = item => {
    setCartItems(items => items.filter(_item => _item.url !== item.url));
  };

  const value = { cartItems, setCartItems, addItemToCart, removeItemFromCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
