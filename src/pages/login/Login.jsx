import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

import { useAuth } from "../../context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const { signin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    signin({ email }, () => navigate("/"));
  }

  return (
    <Card className="Login">
      <Card.Title style={{ textAlign: "center" }}>Login</Card.Title>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>

            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            style={{ margin: "10px 0" }}
            size="med"
            type="submit"
            disabled={!validateForm()}
          >
            Login
          </Button>
        </Form>
      </Card.Body>
      <div>
        <Link to="/signup">Sign up</Link>
      </div>
    </Card>
  );
}
