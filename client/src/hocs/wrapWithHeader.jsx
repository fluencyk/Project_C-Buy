import React from "react";
import { Header } from "../components/Header";

export function wrapWithHeader(Component) {
  return (
    <>
      <Header />
      <Component />
    </>
  );
}
