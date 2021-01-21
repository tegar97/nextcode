import React from "react";
import Slider from "react-slick";
import styles from './../../styles/components/category-slider/category-slider.module.scss'
import useSWR from 'swr'
import { useRouter } from 'next/router'



function fetcher(url) {
  return fetch(url, {
   headers: {
    'Content-Type': 'application/json',
   },
  }).then(response => response.json());
 }
function useCategory (url) {
  const { data, error } = useSWR(url,fetcher)
  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}
 function CategorySlider  ({setTag}) {
  const router = useRouter()
  const { data , isError  ,isLoading} = useCategory('http://blog-backend.tegar.me/ghost/api/v3/content/tags/?key=adf6d2df02536197acba4f4ef2')

    var settings = {
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
    return (
      <div className="p-5 " >
        <Slider  {...settings}>
         {
           isLoading ? 'loading' :
           data.tags.map(tag => (
            <div className={`${styles.categorySlider} border-solid border-black-50 border-2	 bg-white dark:bg-black-50`} style={{borderRadius: '10px',}}>
              <button onClick={() => setTag(tag.slug)} >{tag.name}</button>
            </div>

           ))

         }

            
        
         
     
         
        </Slider>
      </div>
    );
  
}

export default CategorySlider
