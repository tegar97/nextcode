import React from 'react'
import Image from 'next/image'
import moment from 'moment-timezone'
import styles from './../../styles/components/Artikel-card/ArtikelCard.module.scss'
import { useTheme } from 'next-themes'
import Link from 'next/link'
function ArtikelCard({post}) {
    const { theme, setTheme } = useTheme();
    return (
        <div className={`bg-white dark:primary text-left ${styles.artikelCard}`} style={{backgroundColor: theme  === 'light' ? '#fff' : '#141920'}}>
            <Link href="/post/21421">
                <div className={styles.artikelImage}>
                    <Image src="/artikel.jpg" alt="Artikel "  width={500} height={380}/>
                </div>
            </Link>
            <div className="p-5">
                <div className="flex flex-row">
                    {
                        post.tags.map(tag => (
                            <small className={`dark:text-white text-white ${styles.category}`} style={{backgroundColor: `${tag.accent_color}`}}>{tag.name}</small>

                        ))
                    }

                </div>
                <Link href="/post/214">
                    <div>
                        <h2 className="text-lg">{post.title}</h2>
                        <div className="flex flex-row mt-10">
                            <p  className="text-sm">{moment.tz(post.created_at,"Asia/Jakarta").fromNow()}</p>
                            <li className="ml-2 text-sm">{post.reading_time + ' menit baca'}</li>
                        </div>

                    </div>
                </Link>

            </div>
        </div>
    )
}

export default ArtikelCard
