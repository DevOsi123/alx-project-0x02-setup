import React from 'react';
import Card from '@/components/common/Card'; // Use @ if alias is working

const HomePage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to the Home Page!</h1>

      <Card title="Card 1" content="This is the first card!" />
      <Card title="Card 2" content="This is another card with different info." />
      <Card title="Card 3" content="Cards are reusable and cool!" />
    </div>
  );
};

export default HomePage;
