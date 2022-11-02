import React from "react";

export function Errors({ error }) {
  console.log(error);
  return (
    <>
      <ul>
        {Object.values(error).map((v) => {
          return (
            <li style={{ color: "red" }} key={v}>
              {v}
            </li>
          );
        })}
      </ul>
    </>
  );
}
