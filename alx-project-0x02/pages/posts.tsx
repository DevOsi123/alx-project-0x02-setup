import React from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';

interface RawPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div style={{ padding: '2rem' }}>
      <Header />
      <h1>All Posts</h1>

      {posts.length === 0 ? (
        <p>No posts found.</p>
      ) : (
        posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))
      )}
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const data: RawPost[] = await res.json();

  const posts: PostProps[] = data.map((post) => ({
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;
