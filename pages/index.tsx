import Head from 'next/head'
import Artikel from '../component/Artikel/Artikel';
import Hero from '../component/hero/Hero';
import SectionCategory from '../component/section-category/SectionCategory';

export default function Home({posts}) {
  return (
   <>
     <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Hero/>
    <Artikel posts={posts}/>

    
    

   </>
  )
}
export async function getStaticProps(context) {
  const res = await fetch(`http://blog-backend.tegar.me/ghost/api/v3/content/posts/?key=adf6d2df02536197acba4f4ef2&limit=4&include=tags`)
  const posts = await res.json()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts
    }, // will be passed to the page component as props
  }
}