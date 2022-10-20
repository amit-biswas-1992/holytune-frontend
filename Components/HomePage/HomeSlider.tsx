import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import caruselimage from "../../Assets/image/sliderimg1.png";
import caruselimage2 from "../../Assets/image/sliderimg2.png";
import caruselimage3 from "../../Assets/image/sliderimg3.png";
import caruselimage4 from "../../Assets/image/sliderimg4.png";
import style from "./HomePage.module.css";
const HomeSlider = () => {
  const settings = {
    // // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    // arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
          // // dots: true,
          // arrows: true,


        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
          // dots: true,
          // arrows: true,


        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
          // dots: true,
          // arrows: true,


        }
      }
    ]
  };
  return (
    <div className="">
      <Slider {...settings}  >
        <div >
          <div className={`${style.sliderContent}  px-3 `} >
            <Image src={caruselimage} alt="caruselimage"  width={350} height={200} 
               />
          </div>
        </div>
        <div >
          <div className={`${style.sliderContent}  px-3 `} >
            <Image src={caruselimage2} alt="caruselimage"  width={350} height={200} 
               />
          </div>
        </div>
        <div >
          <div className={`${style.sliderContent}  px-3 `} >
            <Image src={caruselimage3} alt="caruselimage"  width={350} height={200} 
               />
          </div>
        </div>
        <div >
          <div className={`${style.sliderContent}  px-3 `} >
            <Image src={caruselimage4} alt="caruselimage"  width={350} height={200} 
               />
          </div>
        </div>
        <div >
          <div className={`${style.sliderContent}  px-3 `} >
            <Image src={caruselimage} alt="caruselimage"  width={350} height={200} 
               />
          </div>
        </div>
        <div >
          <div className={`${style.sliderContent}  px-3 `} >
            <Image src={caruselimage2} alt="caruselimage"  width={350} height={200} 
               />
          </div>
        </div>
        <div >
          <div className={`${style.sliderContent}  px-3 `} >
            <Image src={caruselimage3} alt="caruselimage"  width={350} height={200} 
               />
          </div>
        </div>
        <div >
          <div className={`${style.sliderContent}  px-3 `} >
            <Image src={caruselimage4} alt="caruselimage"  width={350} height={200} 
               />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HomeSlider;
