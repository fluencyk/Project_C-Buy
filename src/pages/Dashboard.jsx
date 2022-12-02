import React, { useState, useEffect } from 'react';
import { Button, Card, NonIdealState } from '@blueprintjs/core';

import { useCart } from '../context/CartContext';

function Dashboard() {
  const [items, setItems] = useState([]);
  const { addItemToCart, cartItems } = useCart();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => {
        const data = json.slice(0, 20);
        setItems(data);
        setLoading(false);
      });
  }, []);

  const handleAddCartItem = item => {
    addItemToCart(item);
  };

  return (
    <div
      style={{
        padding: 15,
        display: 'grid',
        gap: 20,
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      }}
    >
      {items.length ? (
        items.map(item => {
          const alreadyInCart = cartItems.find(_item => _item.url === item.url);
          return (
            <Card
              style={{ textAlign: 'center', borderRadius: 20 }}
              key={item.url}
              onClick={() => handleAddCartItem(item)}
              interactive
            >
              <img
                loading="lazy"
                width="100%"
                style={{ objectFit: 'contain', borderRadius: 20 }}
                alt={item.title}
                src={item.url}
              />
              <h5>{item.title}</h5>
              <Button
                intent="primary"
                fill
                minimal
                rightIcon={alreadyInCart ? 'tick' : 'shopping-cart'}
                onClick={() => handleAddCartItem(item)}
                text={alreadyInCart ? 'Added to Cart' : 'Add to Cart'}
              />
            </Card>
          );
        })
      ) : (
        <NonIdealState
          title="No Items found"
          icon="search"
          action={<Button loading={loading} text="Try Again" icon="refresh" />}
        />
      )}
    </div>
  );
}

export default Dashboard;
