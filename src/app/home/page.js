
import Link from 'next/link'
import styles from '../styles/Home.module.css'
export const metadata = {
    title: 'Demo | Home',
    description: 'This is the Home page.',
  };

export default function Home() {
  return (
    <>
    
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
      <Link href="/user">
        <div className={styles.btn}>See user details</div>
      </Link>
    </div>
    </>
  )
}