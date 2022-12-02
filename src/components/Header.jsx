import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  Navbar,
  Button,
  Alignment,
  Menu,
  MenuItem,
  Card,
  NonIdealState,
} from '@blueprintjs/core';
import { Popover2 } from '@blueprintjs/popover2';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

export function Header() {
  const auth = useAuth();
  const { removeItemFromCart, cartItems } = useCart();
  const navigate = useNavigate();

  const renderShoppingCart = () => {
    if (!cartItems.length) {
      return (
        <NonIdealState
          title="No Items Added to the cart"
          icon="shopping-cart"
        />
      );
    }
    return (
      <React.Fragment>
        {cartItems.map(item => {
          return (
            <div
              style={{
                display: 'flex',
                placeContent: 'center space-between',
                alignItems: 'center',
                padding: 10,
              }}
            >
              <img
                style={{
                  height: 20,
                  width: 20,
                  marginRight: 10,
                  borderRadius: 20,
                }}
                src={item.url}
                alt={item.title}
              />
              <strong>{item.title}</strong>
              <Button
                minimal
                intent="danger"
                style={{ marginLeft: 10 }}
                icon="delete"
                onClick={() => removeItemFromCart(item)}
              />
            </div>
          );
        })}
        <Button
          fill
          intent="primary"
          text="Checkout"
          rightIcon="arrow-right"
          onClick={() => navigate('/checkout')}
        />
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <Navbar style={{ position: 'sticky', top: 0 }}>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>
            <Button
              intent="primary"
              text="C-Buy"
              large
              minimal
              onClick={() => navigate('/')}
            />
          </Navbar.Heading>
        </Navbar.Group>

        {auth.user && (
          <Navbar.Group align={Alignment.RIGHT}>
            <Popover2
              interactionKind="click"
              placement="bottom"
              content={
                <Card style={{ borderRadius: 20 }}>{renderShoppingCart()}</Card>
              }
              renderTarget={({ isOpen, ref, ...targetProps }) => (
                <Button
                  {...targetProps}
                  intent="primary"
                  large
                  elementRef={ref}
                  minimal
                  icon="shopping-cart"
                  rightIcon="chevron-down"
                />
              )}
            />
            <Navbar.Divider />
            <Popover2
              interactionKind="click"
              placement="bottom"
              content={
                <Menu>
                  <MenuItem
                    icon="log-out"
                    onClick={() => navigate('/signout')}
                    text="Sign out"
                  />
                </Menu>
              }
              renderTarget={({ isOpen, ref, ...targetProps }) => (
                <Button
                  {...targetProps}
                  elementRef={ref}
                  minimal
                  intent="primary"
                  large
                  icon="user"
                  rightIcon="chevron-down"
                />
              )}
            />
          </Navbar.Group>
        )}
        <Outlet />
      </Navbar>
    </React.Fragment>
  );
}
