// components/common/PostModal.tsx

import React, { useState } from 'react';
import { type CardProps } from '@/interfaces';

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CardProps) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && content) {
      onSubmit({ title, content });
      setTitle('');
      setContent('');
      onClose();
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Create a New Post</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
            required
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={styles.textarea}
            required
          />
          <div style={styles.buttons}>
            <button type="submit">Add</button>
            <button type="button" onClick={onClose} style={{ marginLeft: '1rem' }}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0,
    width: '100%', height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    width: '400px',
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem',
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '0.5rem',
    marginBottom: '1rem',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
};

export default PostModal;
