import React,{useEffect} from 'react'
import styles from './../../styles/components/post/post.module.scss'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import Prism from "prismjs";

function Post({post}) {
    const {theme,setTheme} = useTheme()
    useEffect(() => {
        Prism.highlightAll();
      }, []);
    return (
        <div className={styles.post}>
            <div className={styles.postImage} >
                <img src="/artikel.jpg" alt="image" style={{width: '100%',height: '100%',objectFit: 'cover'}} />
            </div>
            <div className={styles.postContent}>
                <div className="text-center">
                  <h1 className="text-4xl dark:color-grey-600 ">{post.posts[0].title}</h1>
                  <div className="flex justify-center mt-4">
                    <span>By Tania Rascia on November 30, 2020</span>
                   

                  </div>
                </div>
                <div dangerouslySetInnerHTML={{__html:post.posts[0].html }} />;

               <div className="mt-5">
                   <span className="text-lg">TAG</span>
                   <span className="block mt-5 text-md"><Link href="/tag">Reactjs</Link></span>
               </div>
            </div>
        </div>
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
