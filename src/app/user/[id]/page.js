'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function UserProfile({ params }) {
  const router = useRouter();
  const { id } = params;
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!res.ok) {
          throw new Error('Failed to fetch user');
        }
        const data = await res.json();
        setUser(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchUser();
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <button onClick={() => router.push('/user')}>Back</button>
      <h1>User Profile</h1>
      <p>User ID: {id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
      <p>Website: {user.website}</p>
    </div>
  );
}
