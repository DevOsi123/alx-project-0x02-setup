import React from 'react';
import { type PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{content}</p>
      <small><strong>User ID:</strong> {userId}</small>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    marginBottom: '1rem',
    backgroundColor: '#f4f4f4',
  },
};

export default PostCard;
