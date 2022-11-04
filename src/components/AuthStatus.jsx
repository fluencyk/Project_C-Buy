import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <p>Welcome {auth.user.email}! </p>
      <Link to="/signout">Sign out</Link>
    </div>
  );
}
