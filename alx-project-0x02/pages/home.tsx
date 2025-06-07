// pages/home.tsx

import React, { useState } from 'react';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';
import { type CardProps } from '@/interfaces';

const HomePage = () => {
  const [cards, setCards] = useState<CardProps[]>([
    { title: "Card 1", content: "This is the first card!" },
    { title: "Card 2", content: "This is another card with different info." },
    { title: "Card 3", content: "Cards are reusable and cool!" },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCard = (newCard: CardProps) => {
    setCards((prev) => [...prev, newCard]);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to the Home Page!</h1>

      <button onClick={() => setIsModalOpen(true)} style={{ marginBottom: '1rem' }}>
        ➕ Add New Post
      </button>

      {cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddCard}
      />
    </div>
  );
};

export default HomePage;
