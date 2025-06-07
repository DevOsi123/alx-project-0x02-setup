import React from 'react';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const AboutPage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <Header />
      <h1>About Us</h1>
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <Button size="small" shape="rounded-sm" label="Small" />
        <Button size="medium" shape="rounded-md" label="Medium" />
        <Button size="large" shape="rounded-full" label="Large" />
      </div>
    </div>
  );
};

export default AboutPage;
