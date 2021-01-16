import Head from 'next/head'
import "tailwindcss/tailwind.css";
import Artikel from '../component/Artikel/Artikel';
import DarkMode from '../component/dark-mode/Dark-Mode';
import Hero from '../component/hero/Hero';
import SectionCategory from '../component/section-category/SectionCategory';

export default function Home() {
  return (
   <>
     <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Hero/>
    <Artikel/>
    <DarkMode/>
    
    

   </>
  )
}
