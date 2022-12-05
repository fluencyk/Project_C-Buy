import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  ButtonGroup,
  Card,
  Text,
  NonIdealState,
  Drawer,
  FormGroup,
  InputGroup,
  Dialog,
  Icon,
} from '@blueprintjs/core';
import { useCart } from '../context/CartContext';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';

export function Checkout() {
  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    meta,
  } = usePaymentInputs();
  const navigate = useNavigate();
  const [showPayment, setShowPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const { removeItemFromCart, cartItems, clearCart } = useCart();

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
    <div style={{ margin: '2em auto', width: '70%' }}>
      <Card>
        {cartItems.map(item => {
          return (
            <Card
              key={item.id}
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
                src={item.images[0]}
                alt={item.title}
              />
              <strong>{item.title}</strong>

              <ButtonGroup minimal>
                <Button icon="trash" onClick={() => removeItemFromCart(item)} />
              </ButtonGroup>
            </Card>
          );
        })}
        <Button
          large
          fill
          intent="primary"
          rightIcon="arrow-right"
          onClick={() => setShowPayment(true)}
          text="Proceed"
        />
        <Drawer
          icon="credit-card"
          onClose={() => setShowPayment(false)}
          title="Payment"
          isOpen={showPayment}
        >
          <Card>
            <FormGroup
              helperText="Please Enter your Name"
              label="Name"
              labelFor="text-input"
              labelInfo="(required)"
              intent="primary"
            >
              <InputGroup id="text-input" placeholder="Enter Name.." />
            </FormGroup>

            <FormGroup
              helperText="Please enter your address"
              label="Address Line 1"
              labelFor="text-input"
              labelInfo="(required)"
              intent="primary"
            >
              <InputGroup id="text-input" placeholder="Placeholder text" />
            </FormGroup>

            <FormGroup
              helperText="Please Enter your address Line 2"
              label="Address Line 2"
              labelFor="text-input"
              intent="primary"
              labelInfo="(optional)"
            >
              <InputGroup id="text-input" placeholder="Placeholder text" />
            </FormGroup>

            <FormGroup
              helperText="Please Enter your Payment Info"
              label="Payment"
              labelFor="text-input"
              intent="primary"
              labelInfo="(required)"
            >
              <PaymentInputsWrapper {...wrapperProps}>
                <svg {...getCardImageProps({ images })} />
                <input {...getCardNumberProps()} />
                <input {...getExpiryDateProps()} />
                <input {...getCVCProps()} />
              </PaymentInputsWrapper>
            </FormGroup>
            <Button
              fill
              large
              disabled={meta.error}
              onClick={() => {
                setPaymentSuccess(true);
              }}
              intent="success"
              text="Pay"
            />
          </Card>
        </Drawer>
      </Card>

      <Dialog
        title="Payment Success"
        isOpen={paymentSuccess}
        onClose={() => setPaymentSuccess(false)}
        icon="credit-card"
      >
        <div style={{ textAlign: 'center' }}>
          <Icon icon="tick-circle" intent="success" size={150} />

          <Text tagName="p">
            Thank you for shopping, Your goods will be delivered within a week!{' '}
          </Text>
          <Button
            fill
            large
            intent="primary"
            text="Continue Shopping"
            onClick={() => {
              navigate('/');
              clearCart();
            }}
          />
        </div>
      </Dialog>
    </div>
  );
}
