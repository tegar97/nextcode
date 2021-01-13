import React from 'react'
import styles from './../../styles/components/hero/hero.module.scss'
import Image from 'next/image'
import { useMediaQuery } from 'react-responsive'

function Hero() {
   
    const dekstopUp = useMediaQuery({ query: '(min-width: 901px)' })
    const tabletLandscapeUp = useMediaQuery({
      query: '(max-width:900px)'
    })
    return (
        <section className={styles.hero}>
            <div className={styles.header }>
                <h1 className="text-xl font-bold text-white sm:text-lg lg:text-6xl md:text-4xl ">YUK BELAJAR NGODING</h1>
                <h2 className="w-11/12 mt-8 font-medium leading-7 tracking-wide text-white">Nextcode indonesia  hadir sebagai wadah para developer muda indonesia yang ingin belajar coding seperti pemograman web,machine learning,pemogramana web GRATIS. </h2>
                <button className="mt-8 btn btn--white">Get Started</button>
            </div>
            {
                dekstopUp &&
                <div className={styles.heroImage}>
                <Image src="/hero.png"  width={600} height={531}/>
                  </div> 
            }
          
        </section>
    )
}

export default Hero
