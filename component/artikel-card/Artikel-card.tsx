import React from 'react'
import Image from 'next/image'

import styles from './../../styles/components/Artikel-card/ArtikelCard.module.scss'
import { useTheme } from 'next-themes'
import Link from 'next/link'
function ArtikelCard() {
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
                    <small className={`dark:text-white text-white ${styles.category}`} style={{backgroundColor: 'crimson'}}>React js</small>
                    <small className={`dark:text-white text-white ${styles.category}`} style={{backgroundColor: 'blue'}}>Redux</small>

                </div>
                <Link href="/post/214">
                    <div>
                        <h2 className="text-lg">Tutorial Java 21</h2>
                        <div className="flex flex-row mt-10">
                            <p  className="text-sm">11 menit lalu</p>
                            <li className="ml-2 text-sm">5 menit baca</li>
                        </div>

                    </div>
                </Link>

            </div>
        </div>
    )
}

export default ArtikelCard
