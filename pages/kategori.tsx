import React,{useState} from 'react'
import styles from './../styles/components/kategori-page/category-page.module.scss'
import { useTheme } from 'next-themes';
import Link from 'next/link';
import Image from 'next/image'
import { NextSeo } from 'next-seo';



function Category({tagData}) {
    
    const { theme, setTheme } = useTheme();
    return (
        <>
        <NextSeo 
            title={'Kumpulan  Materi Pembelajaran Nextcode indonesia'}
            description={'Baca materi yang sudah kami buat disini , jika ingin melihat materi yang sudah terstruktur klik disini'}
            canonical={'https://www.nextcode.id/artikel'}
            openGraph={{
            url: 'https://www.nextcode.id/artikel',
            title:'Kumpulan Artikel Materi Pembelajaran Nextcode indonesia',
            description: 'Baca artikel yang sudah kami buat disini , jika ingin melihat materi yang sudah terstruktur klik disini',
            images: [
                {
                url: ``,
                width: 800,
                height: 600,
                alt: `Kumpulan  Materi Pembelajaran Nextcode indonesia`,
                }
            
            ],
            site_name: 'Kumpulan  Materi Pembelajaran Nextcode indonesia'
            }}
            twitter={{
            handle: '@tegar',
            site: '@nextcode',
            cardType: 'summary_large_image',
        }}
    
        />
        <section className={styles.categoryPage}>
            <div className={theme === 'light' ? styles.categoryPage__hero : styles.categoryPage__heroDark}  >
                <div className="text-center ">
                    <h1 className="text-4xl font-bold text-center text-white">KATEGORI</h1>
                    <h2 className="mt-3 text-lg font-medium text-center text-white">Baca materi berdasarkan kategori yang kamu butuhkan</h2>
                </div>
            </div>
            <div className="p-5 mt-10">
                <h1 className="text-4xl text-center">Kategori</h1>
                <div className="grid grid-cols-2 gap-10 mt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 ">
                    {
                        tagData.tags.map(tag => (
                            <Link href={`/kategori/${tag.name}`}>
                                <div key={tag.id} className={`${styles.categoryBox} bg-white dark:bg-black-50 shadow-lg`}>
                                    
                                    <img className="text-center" src={tag.feature_image} alt={tag.name}  style={{height: '80px',width: "118px"}} />
                                    <span className="mt-4 ">{tag.name}</span>
                                </div>
                            </Link>

                        ))
                    }
                </div>
            </div>
         
        </section>
        </>
    )
}

export async function getStaticProps(context) {
  const res = await fetch(`https://blog-backend.tegar.me/ghost/api/v3/content/tags/?key=adf6d2df02536197acba4f4ef2`)
  const tagData = await res.json()

  if (!tagData) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      tagData
    }, // will be passed to the page component as props
    revalidate: 10
  }
}

export default Category
