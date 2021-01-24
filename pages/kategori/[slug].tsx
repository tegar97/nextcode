import React,{useState} from 'react'
import styles from './../../styles/components/kategori-page/category-page.module.scss'
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image'
import ArtikelCard from '../../component/artikel-card/Artikel-card';
import Post from '../post/[slug]';



function Category({posts,category}) {
    const { theme, setTheme } = useTheme();
    return (
  
        <section className={styles.categoryPage}>
            <div className={theme === 'light' ? styles.categoryPage__hero : styles.categoryPage__heroDark}  >
                <div className="text-center ">
                    <h1 className="text-4xl font-bold text-center text-white">{category.tags[0].name}</h1>
                    <h2 className="mt-3 text-lg font-medium text-center text-white">{category.tags[0].description}</h2>
                </div>
            </div>
            <div className="p-5 mt-10">
                <h1 className="mb-10 text-4xl text-center">ARTIKEL DENGAN KATEGORI "{category.tags[0].name}" </h1>
                <div className="grid gap-10 mt-3 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
                    {posts.posts.map(post => (
                        <ArtikelCard key={post.id} post={post}/>
                    ))}
                </div>
            </div>
         
        </section>
    )
}

export async function getStaticPaths(){
    const res = await fetch('https://blog-backend.tegar.me/ghost/api/v3/content/tags/?key=adf6d2df02536197acba4f4ef2')
    const tags = await res.json()
    // Get the paths we want to pre-render based on posts
    const paths = tags.tags.map((tag) => ({
        params: { slug: tag.slug },
    }))

  return { paths, fallback: false }
}
export async function getStaticProps({params}) {
  const res = await fetch( `https://blog-backend.tegar.me/ghost/api/v3/content/posts/?key=adf6d2df02536197acba4f4ef2&limit=6&include=tags&${params.slug ? `filter=tag:${params.slug}` : ''}`)
  const resCategory = await fetch(`https://blog-backend.tegar.me/ghost/api/v3/content/tags/slug/${params.slug}?key=adf6d2df02536197acba4f4ef2`)

  const posts = await res.json()
  const category = await resCategory.json()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts,
      category
    }, // will be passed to the page component as props
    revalidate: 10
  }
}

export default Category
