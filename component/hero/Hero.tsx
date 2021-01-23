import React,{useState,useEffect} from 'react'
import styles from './../../styles/components/hero/hero.module.scss'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'
import { useTheme } from 'next-themes';
import { Console } from 'console';

function Hero({mode}) {


    const dekstopUp = useMediaQuery({ query: '(min-width: 992px)' })
  
    const tabletLandscapeUp = useMediaQuery({
      query: '(max-width:900px)'
    })


    return (
        <section className={mode === 'light' ? styles.light : styles.dark}>
            <div className={styles.header }>
                <h1 className={`${styles.header__main} text-4xl font-bold text-white sm:text-4xl lg:text-6xl md:text-4xl`}>BELAJAR SEPUTAR IT </h1>
                <h2 className={`${styles.header__secondary} w-11/12 mt-8 font-medium leading-7 tracking-wide text-white`}>Nextcode indonesia  hadir sebagai wadah para developer muda indonesia yang ingin belajar coding seperti pemograman web,machine learning,pemogramana web GRATIS. </h2>
                <button className={`${styles.header__button}  mt-8 text-black-50 btn btn--white`} style={{color: '#141920' }}>Get Started</button>
            </div>
            {
                dekstopUp &&
                <div className={styles.heroImage}>
                <Image src={mode === "light" ? '/hero.png' : '/hero2.png'} alt="Hero image" width={600} height={531}/>
                  </div> 
            }
          
        </section>
    )
}

export default Hero
