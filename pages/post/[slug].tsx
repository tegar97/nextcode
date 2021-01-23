import React,{useEffect} from 'react'
import styles from './../../styles/components/post/post.module.scss'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import Prism from "prismjs";
import ScrollAnimation from 'react-animate-on-scroll';
import { NextSeo } from 'next-seo';

function Post({post}) {
    const {theme,setTheme} = useTheme()
    useEffect(() => {
        Prism.highlightAll();
      }, []);
    return (
        <> 
        <NextSeo 
            title={post.posts[0].meta_title}
            description={post.posts[0].meta_description}
            canonical={post.posts[0].url}
            openGraph={{
            url: 'https://www.nextcode.id/',
            title: `${post.posts[0].og_title}`,
            description: `${post.posts[0].og_description}`,
            images: [
                {
                url: `${post.posts[0].url}`,
                width: 800,
                height: 600,
                alt: `${post.posts[0].og_title}`,
                }
            
            ],
            site_name: `nextcode indonesia`
            }}
            twitter={{
            handle: '@tegar',
            site: '@nextcode',
            cardType: 'summary_large_image',
            }}
        />
   
            <div className={styles.post}>
                <div className={styles.postImage} >
                    <img src="/artikel.jpg" alt="image" style={{width: '100%',height: '100%',objectFit: 'cover'}} />
                </div>
                    <ScrollAnimation animateIn="fadeIn">
                    <div className={styles.postContent}>
                        <div className="text-center">
                        <h1 className="text-4xl dark:color-grey-600 ">{post.posts[0].title}</h1>
                        <div className="flex justify-center mt-4">
                            <span>By Tegar Akmal on November 30, 2020</span>
                        </div>
                        </div>
                        <div dangerouslySetInnerHTML={{__html:post.posts[0].html }} />;
                    </div>
                    </ScrollAnimation>
            </div>
        </>
    )
}

export async function getStaticPaths(){
    const res = await fetch('http://blog-backend.tegar.me/ghost/api/v3/content/posts/?key=adf6d2df02536197acba4f4ef2')
    const posts = await res.json()
    // Get the paths we want to pre-render based on posts
    const paths = posts.posts.map((post) => ({
        params: { slug: post.slug },
    }))

  return { paths, fallback: false }

}

export async function getStaticProps({params}) {
    const res = await fetch(`http://blog-backend.tegar.me/ghost/api/v3/content/posts/slug/${params.slug}/?key=adf6d2df02536197acba4f4ef2`)

    const post = await res.json()

  

    return {
        props:{
            post
        },
        revalidate: 10,

    }
}
export default Post
