import React from 'react';

let CartContext = React.createContext(null);

export function useCart() {
  return React.useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = React.useState([]);

  const addItemToCart = item => {
    setCartItems(items => {
      const ids = items.map(v => v.id);
      return ids.includes(item.id) ? items : items.concat(item);
    });
  };

  const removeItemFromCart = item => {
    setCartItems(items => items.filter(_item => _item.id !== item.id));
  };

  const clearCart = () => setCartItems([]);

  const value = {
    cartItems,
    setCartItems,
    addItemToCart,
    removeItemFromCart,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
