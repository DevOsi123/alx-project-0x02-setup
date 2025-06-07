// components/common/Button.tsx

import React from 'react';
import { type ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ size, shape, label, onClick }) => {
  const getSizeStyle = () => {
    switch (size) {
      case 'small':
        return { padding: '0.3rem 0.6rem', fontSize: '0.8rem' };
      case 'medium':
        return { padding: '0.5rem 1rem', fontSize: '1rem' };
      case 'large':
        return { padding: '0.75rem 1.5rem', fontSize: '1.2rem' };
    }
  };

  const getShapeStyle = () => {
    switch (shape) {
      case 'rounded-sm':
        return { borderRadius: '4px' };
      case 'rounded-md':
        return { borderRadius: '12px' };
      case 'rounded-full':
        return { borderRadius: '999px' };
    }
  };

  const style: React.CSSProperties = {
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    ...getSizeStyle(),
    ...getShapeStyle(),
  };

  return <button style={style} onClick={onClick}>{label}</button>;
};

export default Button;
