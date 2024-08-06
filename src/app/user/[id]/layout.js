import { Suspense } from 'react';

export async function generateMetadata({ params }) {
  const { id } = params;
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch user');
    }
    const user = await res.json();

    return {
      title: `Demo | ${user.name}`,
      description: `Details of user ${user.name}`,
    };
  } catch (error) {
    return {
      title: 'Demo | User Not Found',
      description: 'User not found.',
    };
  }
}

export default function UserLayout({ children }) {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        {children}
      </Suspense>
    </div>
  );
}
