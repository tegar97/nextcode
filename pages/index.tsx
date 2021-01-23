import Head from 'next/head'
import Artikel from '../component/Artikel/Artikel';
import Hero from '../component/hero/Hero';
import SectionCategory from '../component/section-category/SectionCategory';
import {useEffect,useState} from 'react'
import { useTheme } from 'next-themes';
import { NextSeo } from 'next-seo';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Home({posts,setting}) {
  const {theme,setTheme} = useTheme()
  const [mode,setMode] = useState('')
  useEffect(function() {
    setMode(localStorage.getItem('theme'));
  },[theme]);
  return (
   <>
    <NextSeo 
    
          title={setting.settings.meta_title}
          description={setting.settings.meta_description}
          canonical={setting.url}
          openGraph={{
            url: 'https://www.nextcode.id/',
            title: `${setting.settings.og_title}`,
            description: `${setting.settings.og_description}`,
            images: [
              {
                url: `${setting.settings.og_image}`,
                width: 800,
                height: 600,
                alt: `${setting.settings.og_title}`,
              }
          
            ],
            site_name: `${setting.settings.og_title}`
          }}
          twitter={{
            handle: '@tegar',
            site: '@nextcode',
            cardType: 'summary_large_image',
          }}
        
          />
     
    <Hero mode={mode}/>
    {
      <ScrollAnimation  animateIn="fadeIn">
            <Artikel posts={posts} />

    </ScrollAnimation>
      
    }

    
    

   </>
  )
}
export async function getStaticProps(context) {
  const res = await fetch(`http://blog-backend.tegar.me/ghost/api/v3/content/posts/?key=adf6d2df02536197acba4f4ef2&limit=4&include=tags`)
  const res_setting = await fetch(`http://blog-backend.tegar.me/ghost/api/v3/content/settings/?key=adf6d2df02536197acba4f4ef2`)
  const posts = await res.json()
  const setting = await res_setting.json()

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts,
      setting
    }, // will be passed to the page component as props
  }
}