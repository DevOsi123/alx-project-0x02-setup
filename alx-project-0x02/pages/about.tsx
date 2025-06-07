// pages/about.tsx

import React from 'react';
import Button from '@/components/common/Button';

const AboutPage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>About Us</h1>
      <p>Click some fancy buttons below:</p>

      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
        <Button size="small" shape="rounded-sm" label="Small Button" />
        <Button size="medium" shape="rounded-md" label="Medium Button" />
        <Button size="large" shape="rounded-full" label="Large Button" />
      </div>
    </div>
  );
};

export default AboutPage;
