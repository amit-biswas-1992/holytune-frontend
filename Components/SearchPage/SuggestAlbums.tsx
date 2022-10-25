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
import styles from "./Search.module.css";
const SuggestAlbums = () => {
    const settings = {
        // // dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
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
                    slidesToShow: 2,
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


            <Slider {...settings}  >
                <div className="px-2" >
                    <div className={` ${styles.albumdiv}  rounded-xl`} >
                        <Image className={` ${styles.imgalbum}`} src={caruselimage} alt="caruselimage" layout="responsive" width={350} height={200}
                        />
                        <div className="-mt-5 md:-mt-10 px-3  text-white z-50 absolute text-center">
                            <p className=" text-xs md:text-sm xl:text-lg flex items-center justyfy-center   text-center  font-semibold  ">Album Name</p>
                        </div>


                    </div>
                </div>
                <div className="px-2" >
                    <div className={` ${styles.albumdiv}  rounded-xl`} >
                        <Image className={` ${styles.imgalbum}`} src={caruselimage2} alt="caruselimage" layout="responsive" width={350} height={200}
                        />
                        <div className="-mt-5 md:-mt-10 px-3  text-white z-50 absolute text-center">
                            <p className=" text-xs md:text-sm xl:text-lg flex items-center justyfy-center   text-center  font-semibold  ">Album Name</p>
                        </div>


                    </div>
                </div>
                <div className="px-2" >
                    <div className={` ${styles.albumdiv}  rounded-xl`} >
                        <Image className={` ${styles.imgalbum}`} src={caruselimage} alt="caruselimage" layout="responsive" width={350} height={200}
                        />
                        <div className="-mt-5 md:-mt-10 px-3  text-white z-50 absolute text-center">
                            <p className=" text-xs md:text-sm xl:text-lg flex items-center justyfy-center   text-center  font-semibold  ">Album Name</p>
                        </div>


                    </div>
                </div>
                <div className="px-2" >
                    <div className={` ${styles.albumdiv}  rounded-xl`} >
                        <Image className={` ${styles.imgalbum}`} src={caruselimage2} alt="caruselimage" layout="responsive" width={350} height={200}
                        />
                        <div className="-mt-5 md:-mt-10 px-3  text-white z-50 absolute text-center">
                            <p className=" text-xs md:text-sm xl:text-lg flex items-center justyfy-center   text-center  font-semibold  ">Album Name</p>
                        </div>


                    </div>
                </div>
                <div className="px-2" >
                    <div className={` ${styles.albumdiv}  rounded-xl`} >
                        <Image className={` ${styles.imgalbum}`} src={caruselimage} alt="caruselimage" layout="responsive" width={350} height={200}
                        />
                        <div className="-mt-5 md:-mt-10 px-3  text-white z-50 absolute text-center">
                            <p className=" text-xs md:text-sm xl:text-lg flex items-center justyfy-center   text-center  font-semibold  ">Album Name</p>
                        </div>


                    </div>
                </div>
                <div className="px-2" >
                    <div className={` ${styles.albumdiv}  rounded-xl`} >
                        <Image className={` ${styles.imgalbum}`} src={caruselimage2} alt="caruselimage" layout="responsive" width={350} height={200}
                        />
                        <div className="-mt-5 md:-mt-10 px-3   text-white z-50 absolute text-center">
                            <p className=" text-xs md:text-sm xl:text-lg flex items-center justyfy-center   text-center  font-semibold  ">Album Name</p>
                        </div>


                    </div>
                </div>

            </Slider>
        </div>
    );
};

export default SuggestAlbums;
