// src/app/user/page.js

import Link from 'next/link';
import styles from '../styles/User.module.css'

export const metadata = {
    title: 'Demo | User',
    description: 'This is the User Listing page.',
  };
async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }
  
  export default async function UserPage() {
    const users = await fetchUsers();
  
    return (
      <div>
        <div style={{display:'flex',justifyContent:'space-around',alignItems:'baseline'}}> <h1>Users</h1> <Link href={'user/userForm'}><button >Add User</button></Link></div>
        
        <ul >
          {users.map(user => (
            <Link href={"/user/"+user.id}className={styles?.single} key={user.id}>{user.name}</Link>
          ))}
        </ul>
      </div>
    );
  }
  