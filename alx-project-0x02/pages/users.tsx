import React from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { type UserProps } from '@/interfaces';

interface RawUser {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}

interface UsersPageProps {
  users: UserProps[];
}

export default function UsersPage({ users }: UsersPageProps) {
  return (
    <div style={{ padding: '2rem' }}>
      <Header />
      <h1>Users</h1>

      {users.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          email={user.email}
          address={user.address}
        />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: RawUser[] = await res.json();

  const users: UserProps[] = data.map((user) => ({
    name: user.name,
    email: user.email,
    address: {
      street: user.address.street,
      city: user.address.city,
      zipcode: user.address.zipcode,
    },
  }));

  return {
    props: {
      users,
    },
  };
}
