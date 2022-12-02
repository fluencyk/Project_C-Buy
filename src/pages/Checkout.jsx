import { Button, ButtonGroup, Card, NonIdealState } from '@blueprintjs/core';
import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export function Checkout() {
  const { removeItemFromCart, cartItems } = useCart();
  const navigate = useNavigate();

  if (!cartItems.length) {
    return (
      <NonIdealState
        title="No Items Added to the cart"
        icon="shopping-cart"
        action={
          <Button
            fill
            intent="primary"
            text="Go Shopping"
            icon="arrow-left"
            onClick={() => navigate('/')}
          />
        }
      />
    );
  }

  return (
    <Card>
      {cartItems.map(item => {
        return (
          <Card
            key={item.url}
            style={{
              display: 'flex',
              placeContent: 'space-between',
              alignItems: 'center',
              padding: 10,
              marginBottom: 20,
            }}
          >
            <img
              style={{
                height: 50,
                width: 50,
                marginRight: 10,
              }}
              src={item.url}
              alt={item.title}
            />
            <strong>{item.title}</strong>

            <ButtonGroup minimal>
              <Button
                intent="danger"
                icon="cross"
                onClick={() => removeItemFromCart(item)}
              />
            </ButtonGroup>
          </Card>
        );
      })}
      <Button
        large
        fill
        intent="primary"
        rightIcon="arrow-right"
        text="Proceed"
      />
    </Card>
  );
}
