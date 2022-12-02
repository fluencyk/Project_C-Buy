import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FormGroup,
  ButtonGroup,
  Button,
  Card,
  InputGroup,
} from '@blueprintjs/core';
import { Errors } from '../../components/Error';
import loginImg from '../../res/login.jpg';

export function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function validateForm() {
    const err = {};
    if (password !== confirmPassword) {
      err['Password'] = 'Password and Confirm are not equal.';
    }
    return err;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div
      style={{
        backgroundImage: 'url(' + loginImg + ')',
        backgroundSize: 'cover',
        height: '99vh',
        padding: '20vh 0',
      }}
    >
      <Card className="Login">
        <h2>Sign up</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup label="Email">
            <InputGroup
              autoFocus
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormGroup>

          <FormGroup label="Password">
            <InputGroup
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              onBlur={validateForm}
            />
          </FormGroup>

          <FormGroup label="Confirm Password">
            <InputGroup
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              onBlur={validateForm}
            />
          </FormGroup>

          <ButtonGroup large fill vertical>
            <Button
              intent="primary"
              text="Sign up"
              type="submit"
              disabled={!validateForm()}
            />
            <Button icon="arrow-left">
              <Link to="/login">Login</Link>
            </Button>
          </ButtonGroup>
        </form>
        <Errors errors={validateForm()} />
      </Card>
    </div>
  );
}
