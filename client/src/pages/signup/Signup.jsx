import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";
import { Errors } from "../../components/Error";

export function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function validateForm() {
    const err = {};
    if (password !== confirmPassword) {
      err["Password"] = "Password and Confirm are not equal.";
    }
    return err;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Card className="Login">
      <Card.Title style={{ textAlign: "center" }}>Sign up</Card.Title>
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
              onBlur={validateForm}
            />
          </Form.Group>

          <Form.Group size="lg">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={validateForm}
            />
          </Form.Group>

          <Button
            style={{ margin: "10px 0" }}
            size="med"
            type="submit"
            // disabled={!validateForm()}
          >
            Sign up
          </Button>
        </Form>
      </Card.Body>
      <Errors error={validateForm()} />
      <div>
        <Link to="/login">Login</Link>
      </div>
    </Card>
  );
}
