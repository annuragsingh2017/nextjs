'use client';

import Head from 'next/head';
import Link from 'next/link'
import  {useRouter}  from 'next/navigation';
import { useEffect } from 'react';

const NotFound = () => {
  const router= useRouter()
  useEffect (()=>{
    setTimeout(()=>{
      router.push('/home')
    },3000)
  },[])
  return (
    <>
    <Head> <title>Demo | Not Found</title></Head>
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That page cannot be found :</h2>
      <p>Go back to the <Link href="/home"><div>Homepage</div></Link></p>
    </div>
    </>
  );
}
 
export default NotFound;