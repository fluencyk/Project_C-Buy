import { Card, NonIdealState } from '@blueprintjs/core';

export default function ErrorPage() {
  return (
    <Card>
      <NonIdealState
        icon="search"
        title="Not Found"
        description="Sorry, The page you're looking for doesn't exist"
      />
    </Card>
  );
}
