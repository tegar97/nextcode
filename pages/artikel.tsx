import React from 'react'
import styles from './../styles/components/artikel/artikel-page.module.scss'
import { useTheme } from 'next-themes';
import Link from 'next/link';
import ArtikelCard from '../component/artikel-card/Artikel-card';
import Search from '../component/search/search';
import CategorySlider from '../component/slick/CategorySlider';

function Artikel({posts}) {
    const { theme, setTheme } = useTheme();

    
    return (
        <section className={styles.artikelPage}>
            <div className={theme === 'light' ? styles.artikelPage__hero : styles.artikelPage__heroDark}  >
                <div className="text-center ">
                    <h1 className="text-4xl font-bold text-center text-white">ARTIKEL</h1>
                    <h2 className="mt-3 text-lg font-medium text-center text-white">Baca artikel yang sudah kami buat disini , jika ingin melihat materi yang sudah terstruktur <Link href="/tutorial-series"><span className="cursor-pointer text-blak-50 dark:text-blue-500">klik disini</span></Link></h2>
                </div>
            </div>
            <div className="p-5 mt-10">
                 <h1 className="text-4xl text-center">ARTIKEL</h1>
                <Search/>

                <CategorySlider/>
                 <div className="grid gap-10 mt-3 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
                  {
                      posts.posts.map(post => (
                        <ArtikelCard/>        

                      ))
                  }   
       
                </div>
            </div>
        </section>
    )
}


export async function getStaticProps(context) {
    const res = await fetch(`http://blog-backend.tegar.me/ghost/api/v3/content/posts/?key=adf6d2df02536197acba4f4ef2`)
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
export default Artikel
