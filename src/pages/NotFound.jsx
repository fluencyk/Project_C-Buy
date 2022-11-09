import { Callout } from '@blueprintjs/core';

export default function ErrorPage() {
  return (
    <Callout title="Oops" intent="warning">
      <p>Sorry, The page you're looking for doesn't exist</p>
    </Callout>
  );
}
