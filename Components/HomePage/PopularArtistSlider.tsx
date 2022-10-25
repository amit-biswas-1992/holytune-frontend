
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import caruselimage from "../../Assets/image/artist.png";

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import style from "./HomePage.module.css";
const PopularArtistSlider = () => {
    const settings = {
        // // dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 5,
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
                    slidesToShow: 3,
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
                    slidesToShow: 2,
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
                <h1 className=" font-bold text-lg md:text-xl 2xl:text-2xl">Popular Artist</h1>
                <Link href="./all_artist">
                    <a>
                        <button className=" font-bold text-xs md:text-base hover:text-sky-500 ">View All</button>
                    </a>
                </Link>

            </div>
            <Slider {...settings}  >
                <div className="px-2" >
                    <div className=" grid place-items-center overflow-hidden  ">
                        <div className="bg-cmnbg w-32 h-32 md:w-40 md:h-40  rounded-full  overflow-hidden  ">
                            <Image className=" " src={caruselimage} alt="artistimage" />
                        </div>
                        <div className=' text-left'>
                            <h1 className=" text-sm xl:text-lg font-bold " >Sayad Ahmed</h1>
                            <h1 className=" text-xs xl:text-base ">19111 Songs</h1>
                        </div>
                    </div>
                </div>
                <div className="px-2" >
                    <div className=" grid place-items-center overflow-hidden  ">
                        <div className="bg-cmnbg w-32 h-32 md:w-40 md:h-40 rounded-full grid place-items-center overflow-hidden  ">
                            <Image className="  " src={caruselimage} alt="artistimage" />
                        </div>
                        <div className=' text-leftr'>
                            <h1 className=" text-sm xl:text-lg font-bold " >Sayad Ahmed</h1>
                            <h1 className=" text-xs xl:text-base ">19 Songs</h1>
                        </div>
                    </div>
                </div>
                <div className="px-2" >
                    <div className=" grid place-items-center overflow-hidden  ">
                        <div className="bg-cmnbg w-32 h-32 md:w-40 md:h-40 rounded-full grid place-items-center overflow-hidden  ">
                            <Image className="  " src={caruselimage} alt="artistimage" />
                        </div>
                        <div className=' text-leftr'>
                            <h1 className=" text-sm xl:text-lg font-bold " >Sayad Ahmed</h1>
                            <h1 className=" text-xs xl:text-base ">19 Songs</h1>
                        </div>
                    </div>
                </div>
                <div className="px-2" >
                    <div className=" grid place-items-center overflow-hidden  ">
                        <div className="bg-cmnbg w-32 h-32 md:w-40 md:h-40 rounded-full grid place-items-center overflow-hidden  ">
                            <Image className="  " src={caruselimage} alt="artistimage" />
                        </div>
                        <div className=' text-leftr'>
                            <h1 className=" text-sm xl:text-lg font-bold " >Sayad Ahmed</h1>
                            <h1 className=" text-xs xl:text-base ">19 Songs</h1>
                        </div>
                    </div>
                </div>
                <div className="px-2" >
                    <div className=" grid place-items-center overflow-hidden  ">
                        <div className="bg-cmnbg w-32 h-32 md:w-40 md:h-40 rounded-full grid place-items-center overflow-hidden  ">
                            <Image className="  " src={caruselimage} alt="artistimage" />
                        </div>
                        <div className=' text-leftr'>
                            <h1 className=" text-sm xl:text-lg font-bold " >Sayad Ahmed</h1>
                            <h1 className=" text-xs xl:text-base ">19 Songs</h1>
                        </div>
                    </div>
                </div>
                <div className="px-2" >
                    <div className=" grid place-items-center overflow-hidden  ">
                        <div className="bg-cmnbg w-32 h-32 md:w-40 md:h-40 rounded-full grid place-items-center overflow-hidden  ">
                            <Image className="  " src={caruselimage} alt="artistimage" />
                        </div>
                        <div className=' text-leftr'>
                            <h1 className=" text-sm xl:text-lg font-bold " >Sayad Ahmed</h1>
                            <h1 className=" text-xs xl:text-base ">19 Songs</h1>
                        </div>
                    </div>
                </div>
                <div className="px-2" >
                    <div className=" grid place-items-center overflow-hidden  ">
                        <div className="bg-cmnbg w-32 h-32 md:w-40 md:h-40 rounded-full grid place-items-center overflow-hidden  ">
                            <Image className="  " src={caruselimage} alt="artistimage" />
                        </div>
                        <div className=' text-leftr'>
                            <h1 className=" text-sm xl:text-lg font-bold " >Sayad Ahmed</h1>
                            <h1 className=" text-xs xl:text-base ">19 Songs</h1>
                        </div>
                    </div>
                </div>
                <div className="px-2" >
                    <div className=" grid place-items-center overflow-hidden  ">
                        <div className="bg-cmnbg w-32 h-32 md:w-40 md:h-40 rounded-full grid place-items-center overflow-hidden  ">
                            <Image className="  " src={caruselimage} alt="artistimage" />
                        </div>
                        <div className=' text-leftr'>
                            <h1 className=" text-sm xl:text-lg font-bold " >Sayad Ahmed</h1>
                            <h1 className=" text-xs xl:text-base ">19 Songs</h1>
                        </div>
                    </div>
                </div>




            </Slider>
        </div>
    );
};

export default PopularArtistSlider;
