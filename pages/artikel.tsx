import React,{useState} from 'react'
import styles from './../styles/components/artikel/artikel-page.module.scss'
import { useTheme } from 'next-themes';
import Link from 'next/link';
import ArtikelCard from '../component/artikel-card/Artikel-card';
import Search from '../component/search/search';
import useSWR from 'swr'
import { useRouter } from 'next/router'
import Slider from "react-slick";



function fetcher(url) {
    return fetch(url, {
     headers: {
      'Content-Type': 'application/json',
     },
    }).then(response => response.json());
   }
  function usePost (url) {
    const { data, error } = useSWR(url,fetcher)
    return {
      data,
      isLoading: !error && !data,
      isError: error
    }
  }
function Artikel({tagData}) {
  const [search,setSearch] = useState('')

  
   const onSearch = e => {
      setSearch(e.target.value.toLowerCase() );
   };
  //  const filteredCountries = countriesList.filter(country => {
  //   return country.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  // });

   const settings  = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    initialSlide: 0,
    adaptiveHeight: true,
    

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    const { theme, setTheme } = useTheme();
    const [tag,setTag]  = useState('')
       

    const { data, isError,isLoading} = usePost(`http://blog-backend.tegar.me/ghost/api/v3/content/posts/?key=adf6d2df02536197acba4f4ef2&${search ? '' : 'limit=6'}&include=tags&${tag ? `filter=tag:${tag}` : ''}`)
    return (
        <section className={styles.artikelPage}>
            <div className={theme === 'light' ? styles.artikelPage__hero : styles.artikelPage__heroDark}  >
                <div className="text-center ">
                    <h1 className="text-4xl font-bold text-center text-white">ARTIKEL</h1>
                    <h2 className="mt-3 text-lg font-medium text-center text-white">Baca artikel yang sudah kami buat disini , jika ingin melihat materi yang sudah terstruktur <Link href="/tutorial-series"><span className="cursor-pointer text-blak-50 dark:text-blue-500">klik disini</span></Link></h2>
                </div>
            </div>
            <div className="p-5 mt-10">
                 <h1 className="text-4xl text-center">ARTIKEL</h1>
                <Search onSearch={onSearch}/>
            
                <div className="p-5 " >
                  <Slider  {...settings}>
                  <div className={`${styles.categorySlider} border-solid border-black-50 border-2	 bg-white dark:bg-black-50`} style={{borderRadius: '10px',}}>
                          <button onClick={() => setTag('')} >Semua Kategori</button>
                    </div>
                    
           
                    {
                      
                      tagData.tags.map(tag => (
                        <div key={tag.id}  className={`${styles.categorySlider} border-solid border-black-50 border-2	 bg-white dark:bg-black-50`} style={{borderRadius: '10px',}}>
                          <button onClick={() => setTag(tag.slug)} >{tag  .name}</button>
                        </div>
                      ))
                    }
                  </Slider>
               </div>

                    
                
                 <div className="grid gap-10 mt-3 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ">
                  {
                      isLoading ? 'loading' : data.posts.filter(post => {
                        if(search == "") {
                          return post
                        }else if(post.title.toLowerCase().includes(search.toLowerCase())) {
                          return post
                        }
                      }).map((post,key) => (
                        <ArtikelCard post={post} key={post.id}/>
                      ))
                  }   
       
                </div>
            </div>
        </section>
    )
}

export async function getStaticProps(context) {
  const res = await fetch(`http://blog-backend.tegar.me/ghost/api/v3/content/tags/?key=adf6d2df02536197acba4f4ef2`)
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
  }
}

export default Artikel
