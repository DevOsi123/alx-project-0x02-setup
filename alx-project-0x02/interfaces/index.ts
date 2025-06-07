// interfaces/index.ts

// Interface for a user
export interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

// Interface for a blog post
export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
}
