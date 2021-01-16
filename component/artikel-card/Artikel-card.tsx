import React from 'react'
import Image from 'next/image'

import styles from './../../styles/components/Artikel-card/ArtikelCard.module.scss'
function ArtikelCard() {
    return (
        <div className={`bg-white dark:bg-grey-800 text-left ${styles.card}`}>
            <div className={styles.artikelImage}>
                <Image src="/artikel.jpg" alt="Artikel "  width={500} height={500}/>
            </div>
            <small>React js</small>
            <h2>Tutorial Java 21</h2>
            <div className="flex flex-row mt-10">
                <p  className="text-sm">11 menit lalu</p>
                <li className="ml-2 text-sm">5 menit baca</li>
            </div>
        </div>
    )
}

export default ArtikelCard
