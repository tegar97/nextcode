import React, { Component } from "react";
import Slider from "react-slick";

export default class CategorySlider extends Component {
  render() {
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
      <div className="p-5 " style={{height: '10rem'}}>
        <Slider  {...settings}>
          <div className="cursor-pointer hover:translate-y-0.5	 content-center justify-center p-2 mr-5 text-center bg-white shadow-xl flexflex-row dark:bg-black-50" style={{borderRadius: '10px',}}>
            <h3>REACT JS</h3>
          </div>
          <div className="content-center justify-center p-2 mr-5 text-center bg-white flexflex-row dark:bg-black-50" style={{borderRadius: '10px'}}>
            <h3>Laravel</h3>
          </div>
          <div className="content-center justify-center p-2 text-center bg-white flexflex-row dark:bg-black-50" style={{borderRadius: '10px'}}>
            <h3>Tailwind</h3>
          </div>
         
     
         
        </Slider>
      </div>
    );
  }
}