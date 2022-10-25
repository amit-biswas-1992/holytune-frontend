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
const NewReleaseVideo = () => {
    const settings = {
        // // dots: true,
        infinite: true,
        speed: 1000,
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
                    slidesToShow: 1,
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
                <h1 className=" font-bold text-lg md:text-xl 2xl:text-2xl">New Release Video</h1>
                <Link href="./all_videos">
                    <a>
                        <button className=" font-bold text-xs md:text-base hover:text-sky-500">View All</button>
                    </a>
                </Link>
            </div>
            <Slider {...settings}  >
                <div >
                    <Link href="./videos">
                        <a >
                            <div className={`${style.sliderContent}  px-3 `} >
                                <Image src={caruselimage} alt="caruselimage" width={350} height={200}
                                />
                                <p className="text-title text-xs md:text-sm xl:text-base pr-10">সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ</p>


                                <p className=" cursor-pointer text-sky-600 text-center text-xs md:text-sm xl:text-base">Click to watch</p>



                            </div>
                        </a>
                    </Link>
                </div>
                <div >
                    <Link href="./videos">
                        <a >
                            <div className={`${style.sliderContent}  px-3 `} >
                                <Image src={caruselimage2} alt="caruselimage" width={350} height={200}
                                />
                                <p className="text-title text-xs md:text-sm xl:text-base pr-10">সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ</p>


                                <p className=" cursor-pointer text-sky-600 text-center text-xs md:text-sm xl:text-base">Click to watch</p>



                            </div>
                        </a>
                    </Link>
                </div>
                <div >
                    <Link href="./videos">
                        <a >
                            <div className={`${style.sliderContent3}  px-3 `} >
                                <Image src={caruselimage} alt="caruselimage" width={350} height={200}
                                />
                                <p className="text-title text-xs md:text-sm xl:text-base pr-10">সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ</p>


                                <p className=" cursor-pointer text-sky-600 text-center text-xs md:text-sm xl:text-base">Click to watch</p>



                            </div>
                        </a>
                    </Link>
                </div>
                <div >
                    <Link href="./videos">
                        <a >
                            <div className={`${style.sliderContent4}  px-3 `} >
                                <Image src={caruselimage} alt="caruselimage" width={350} height={200}
                                />
                                <p className="text-title text-xs md:text-sm xl:text-base pr-10">সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ</p>


                                <p className=" cursor-pointer text-sky-600 text-center text-xs md:text-sm xl:text-base">Click to watch</p>



                            </div>
                        </a>
                    </Link>
                </div>
                <div >
                    <Link href="./videos">
                        <a >
                            <div className={`${style.sliderContent}  px-3 `} >
                                <Image src={caruselimage} alt="caruselimage" width={350} height={200}
                                />
                                <p className="text-title text-xs md:text-sm xl:text-base pr-10">সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ</p>


                                <p className=" cursor-pointer text-sky-600 text-center text-xs md:text-sm xl:text-base">Click to watch</p>



                            </div>
                        </a>
                    </Link>
                </div>
                <div >
                    <Link href="./videos">
                        <a >
                            <div className={`${style.sliderContent}  px-3 `} >
                                <Image src={caruselimage2} alt="caruselimage" width={350} height={200}
                                />
                                <p className="text-title text-xs md:text-sm xl:text-base pr-10">সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ</p>


                                <p className=" cursor-pointer text-sky-600 text-center text-xs md:text-sm xl:text-base">Click to watch</p>



                            </div>
                        </a>
                    </Link>
                </div>
                <div >
                    <Link href="./videos">
                        <a >
                            <div className={`${style.sliderContent}  px-3 `} >
                                <Image src={caruselimage3} alt="caruselimage" width={350} height={200}
                                />
                                <p className="text-title text-xs md:text-sm xl:text-base pr-10">সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ</p>


                                <p className=" cursor-pointer text-sky-600 text-center text-xs md:text-sm xl:text-base">Click to watch</p>



                            </div>
                        </a>
                    </Link>
                </div>
                <div >
                    <Link href="./videos">
                        <a >
                            <div className={`${style.sliderContent4}  px-3 `} >
                                <Image src={caruselimage} alt="caruselimage" width={350} height={200}
                                />
                                <p className="text-title text-xs md:text-sm xl:text-base pr-10">সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ</p>


                                <p className=" cursor-pointer text-sky-600 text-center text-xs md:text-sm xl:text-base">Click to watch</p>



                            </div>
                        </a>
                    </Link>
                </div>

            </Slider>
        </div>
    );
};

export default NewReleaseVideo;
