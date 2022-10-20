import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import caruselimage from "../../Assets/image/music.svg";

import style from "./HomePage.module.css";
const Album = () => {
    const settings = {
        // // dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 6,
        slidesToScroll: 3,
        initialSlide: 0,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // pauseOnHover: true,
        // arrows: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    // autoplay: true,
                    // autoplaySpeed: 3000,
                    // pauseOnHover: true,
                    // // dots: true,
                    // arrows: true,


                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    infinite: true,
                    // autoplay: true,
                    // autoplaySpeed: 3000,
                    // pauseOnHover: true,
                    // dots: true,
                    // arrows: true,


                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    // autoplay: true,
                    // autoplaySpeed: 3000,
                    // pauseOnHover: true,
                    // dots: true,
                    // arrows: true,


                }
            }
        ]
    };
    return (
        <div className="">

            <div className=" flex justify-between items-center mb-5 text-heading">
                <h1 className=" font-bold text-lg md:text-xl 2xl:text-2xl">Album</h1>
                <Link href="/all_albums">
                    <a>
                        <button className=" font-bold text-xs md:text-base hover:text-sky-500 ">View All</button>
                    </a>
                </Link>

            </div>
            <Slider {...settings}  >
                <div className="px-2" >
                    <div className={`${style.sliderContent}  rounded-xl   p-3 `} >
                        <Image width={120} src={caruselimage} alt="caruselimage"
                        />
                        <p className="text-sm xl:text-lg   text-heading">Islamic Gazal</p>
                        <p className="text-xs xl:text-sm   text-heading">50 Songs</p>


                    </div>
                </div>
                <div className="px-2" >
                    <div className={`${style.sliderContent}  rounded-xl   p-3 `} >
                        <Image width={120} src={caruselimage} alt="caruselimage"
                        />
                        <p className="text-sm xl:text-lg   text-heading">Surah</p>
                        <p className="text-xs xl:text-sm   text-heading">50 Songs</p>

                    </div>
                </div>
                <div className="px-2" >
                    <div className={`${style.sliderContent}  rounded-xl   p-3 `} >
                        <Image width={120} src={caruselimage} alt="caruselimage"
                        />
                        <p className="text-sm xl:text-lg   text-heading">Islamic Story</p>
                        <p className="text-xs xl:text-sm   text-heading">50 Songs</p>

                    </div>
                </div>
                <div className="px-2" >
                    <div className={`${style.sliderContent}  rounded-xl   p-3 `} >
                        <Image width={120} src={caruselimage} alt="caruselimage"
                        />
                        <p className="text-sm xl:text-lg   text-heading">Islamic Gazal</p>
                        <p className="text-xs xl:text-sm   text-heading">50 Songs</p>

                    </div>
                </div>
                <div className="px-2" >
                    <div className={`${style.sliderContent}  rounded-xl   p-3 `} >
                        <Image width={120} src={caruselimage} alt="caruselimage"
                        />
                        <p className="text-sm xl:text-lg   text-heading">Surah</p>
                        <p className="text-xs xl:text-sm   text-heading">50 Songs</p>

                    </div>
                </div>
                <div className="px-2" >
                    <div className={`${style.sliderContent}  rounded-xl   p-3 `} >
                        <Image width={120} src={caruselimage} alt="caruselimage"
                        />
                        <p className="text-sm xl:text-lg   text-heading">Islamic Story</p>
                        <p className="text-xs xl:text-sm   text-heading">50 Songs</p>

                    </div>
                </div>
                <div className="px-2" >
                    <div className={`${style.sliderContent}  rounded-xl   p-3 `} >
                        <Image width={120} src={caruselimage} alt="caruselimage"
                        />
                        <p className="text-sm xl:text-lg   text-heading">Islamic Gazal</p>
                        <p className="text-xs xl:text-sm   text-heading">50 Songs</p>

                    </div>
                </div>
                <div className="px-2" >
                    <div className={`${style.sliderContent}  rounded-xl   p-3 `} >
                        <Image width={120} src={caruselimage} alt="caruselimage"
                        />
                        <p className="text-sm xl:text-lg   text-heading">Surah</p>
                        <p className="text-xs xl:text-sm   text-heading">50 Songs</p>

                    </div>
                </div>
                <div className="px-2" >
                    <div className={`${style.sliderContent}  rounded-xl   p-3 `} >
                        <Image width={120} src={caruselimage} alt="caruselimage"
                        />
                        <p className="text-sm xl:text-lg   text-heading">Islamic Story</p>
                        <p className="text-xs xl:text-sm   text-heading">50 Songs</p>

                    </div>
                </div>






            </Slider>
        </div>
    );
};

export default Album;
