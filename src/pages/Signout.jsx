import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export function Signout() {
  const navigate = useNavigate();
  const { signout } = useAuth();

  useEffect(() => {
    signout(() => {
      navigate("/");
    });
  }, [signout, navigate]);

  return <div>Signing out...</div>;
}
