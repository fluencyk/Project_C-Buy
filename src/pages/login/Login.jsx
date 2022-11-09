import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Card,
  FormGroup,
  InputGroup,
} from '@blueprintjs/core';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

import { useAuth } from '../../context/AuthContext';

export default function Login() {
  const navigate = useNavigate();
  const { signin } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    signin({ email }, () => navigate('/'));
  }

  return (
    <Card className="Login" elevation={2}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <FormGroup label="Email">
          <InputGroup
            large
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>

        <FormGroup labelFor="pass" label="Password">
          <InputGroup
            id="pass"
            type="password"
            value={password}
            large
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>
        <ButtonGroup large fill vertical>
          <Button
            text="Login"
            intent="primary"
            type="submit"
            disabled={!validateForm()}
          />

          <Button>
            <Link to="/signup">Sign up</Link>
          </Button>
        </ButtonGroup>
      </form>
    </Card>
  );
}
