import { Callout } from '@blueprintjs/core';
import React from 'react';

export function Errors({ errors }) {
  if (Object.values(errors).length) {
    return (
      <Callout intent="danger" title="Errors">
        <ul>
          {Object.values(errors).map(val => (
            <li key={val}>{val}</li>
          ))}
        </ul>
      </Callout>
    );
  }
}
