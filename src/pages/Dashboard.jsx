import React, { useState, useEffect } from 'react';
import { Button, Card } from '@blueprintjs/core';

function Dashboard() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => {
        const asd = json.slice(0, 20);
        setItems(asd);
      });
  }, []);

  return (
    <div
      style={{
        padding: 15,
        display: 'grid',
        gap: 20,
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      }}
    >
      {items.length &&
        items.map(item => {
          return (
            <Card
              style={{ textAlign: 'center', borderRadius: 20 }}
              key={item.url}
              interactive
            >
              <img
                loading="lazy"
                width="100%"
                style={{ objectFit: 'contain' }}
                alt={item.title}
                src={item.url}
              />
              <h5>{item.title}</h5>
              <Button
                intent="primary"
                fill
                minimal
                rightIcon="shopping-cart"
                text="Add to Cart"
              />
            </Card>
          );
        })}
    </div>
  );
}

export default Dashboard;
