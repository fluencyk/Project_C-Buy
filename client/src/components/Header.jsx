import React from "react";
import { Outlet } from "react-router-dom";

import { AuthStatus } from "../components/AuthStatus";

export function Header() {
  return (
    <nav>
      <AuthStatus />
      <hr />
      <div style={{ textAlign: "center" }}>
        <h1>C-Buy</h1>
        {/* <p>A place tu buy</p> */}
      </div>
      <hr />
      <Outlet />
    </nav>
  );
}
