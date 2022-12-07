import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  FormGroup,
  InputGroup,
  NonIdealState,
} from '@blueprintjs/core';

import { useCart } from '../context/CartContext';

function Dashboard() {
  const { addItemToCart, cartItems } = useCart();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/products/category/groceries')
      .then(res => res.json())
      .then(data => {
        setItems(data.products);
        setFilteredItems(data.products);
        setLoading(false);
      });
  }, []);

  const handleAddCartItem = item => {
    addItemToCart(item);
  };

  return (
    <div>
      <FormGroup style={{ margin: 20 }}>
        <InputGroup
          style={{ width: '50%' }}
          large
          type="search"
          fill
          value={searchText}
          onChange={e => {
            const text = e.target.value;
            setSearchText(text);
            if (!text.length) {
              setFilteredItems(items);
              return;
            }
            if (text.length >= 3) {
              const filteredItems = items.filter(i => {
                return i.title.toLowerCase().includes(text.toLowerCase());
              });
              setFilteredItems(filteredItems);
            }
          }}
          leftIcon="search"
          placeholder="Search Products.."
        />
      </FormGroup>
      <div
        style={{
          padding: 15,
          display: 'grid',
          gap: 20,
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        }}
      >
        {filteredItems.length ? (
          filteredItems.map(item => {
            const alreadyInCart = cartItems.find(_item => _item.id === item.id);
            return (
              <Card
                style={{ textAlign: 'center', borderRadius: 20 }}
                key={item.id}
                onClick={() => handleAddCartItem(item)}
                interactive
              >
                <img
                  loading="lazy"
                  width={200}
                  height={200}
                  style={{ objectFit: 'contain', borderRadius: 20 }}
                  alt={item.title}
                  src={item.images[0]}
                />
                <h5>{item.title}</h5>
                <p>{item.description}</p>
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
            action={
              <Button loading={loading} text="Try Again" icon="refresh" />
            }
          />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
