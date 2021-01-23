import React from 'react'
import Image from 'next/image'
import moment from 'moment-timezone'
import styles from './../../styles/components/Artikel-card/ArtikelCard.module.scss'
import { useTheme } from 'next-themes'
import Link from 'next/link'
function ArtikelCard({post}) {
    const { theme, setTheme } = useTheme();
    return (
        <div className={`bg-white dark:primary text-left ${styles.artikelCard} dark:bg-black-50`} >
            <Link href={`/post/${post.slug}`}>
                <div className={styles.artikelImage}>
                    <Image src={post.feature_image} alt="Artikel "  width={500} height={380}/>
                </div>
            </Link>
            <div className="p-5">
                <div className="flex flex-row">
                    {
                        post.tags.map(tag => (
                            <Link href={`kategori/${tag.name}`}><small className={`dark:text-white text-white ${styles.category}`} style={{backgroundColor: `${tag.accent_color}`}}>{tag.name}</small></Link>

                        ))
                    }

                </div>
                <Link href={`/post/${post.slug}`}>
                    <div>
                        <h2 className="text-lg">{post.title}</h2>
                        <div className="flex flex-row mt-10">
                            <p  className="text-sm">{moment.tz(post.created_at,"Asia/Jakarta").fromNow()}</p>
                            <li className="ml-2 text-sm">{post.reading_time === 0 ? 'kurang dari 1 menit baca' : post.reading_time + ' menit baca'}</li>
                        </div>

                    </div>
                </Link>

            </div>
        </div>
    )
}

export default ArtikelCard
