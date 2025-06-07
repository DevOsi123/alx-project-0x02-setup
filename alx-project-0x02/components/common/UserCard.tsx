import React from 'react';
import { type UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div style={styles.card}>
      <h3>{name}</h3>
      <p><strong>Email:</strong> {email}</p>
      <p>
        <strong>Address:</strong> {address.street}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    backgroundColor: '#f5f5f5',
  },
};

export default UserCard;
