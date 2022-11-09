import React, { useState, useEffect } from 'react';
import { Card } from '@blueprintjs/core';

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
            <Card key={item.url} interactive>
              <img
                loading="lazy"
                onError={'asd'}
                width="100%"
                style={{ objectFit: 'contain' }}
                alt={item.title}
                src={item.url}
              />
              {item.title}
            </Card>
          );
        })}
    </div>
  );
}

export default Dashboard;
