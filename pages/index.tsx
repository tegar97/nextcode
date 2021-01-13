import Head from 'next/head'
import "tailwindcss/tailwind.css";
import Hero from '../component/hero/Hero';

export default function Home() {
  return (
   <>
     <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Hero/>
   </>
  )
}
