import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import caruselimage from "../../Assets/image/audioImg.png";
import play from "../../Assets/image/play.svg";
import nullimg from "../../Assets/image/notfound.png"
import { IMAGE_BASE_URL } from "../../utils/constants";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import style from "./HomePage.module.css";
const AudioPlayer = (audioPlayer: any) => {

    const audioPlayerInfo = audioPlayer?.audioPlayer;
    const myLoader = ({ src, width, quality }: any) => {
        // console.log(src, "src");

        // console.log(`${IMAGE_BASE_URL}${src}`);

        return `${IMAGE_BASE_URL}${src}?w=${width}&q=${quality || 75}`;

    };
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
                breakpoint: 1424,
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
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
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
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    initialSlide: 0,
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
                    slidesToShow: 1.04,
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
                <h1 className=" font-bold text-lg md:text-xl 2xl:text-2xl">Audio Player</h1>
                <Link href="./all_musics">
                    <a >
                        <button className=" font-bold text-xs md:text-base hover:text-sky-500">View All</button>
                    </a>
                </Link>
            </div>
            <Slider {...settings}  >
                {audioPlayerInfo?.map((elem: any) => (
                    <div className="px-2" key={elem?.id} >
                        <div className={`${style.sliderContent} bg-cmnbg rounded-xl flex items-center justify-around w-full p-3 `} >
                            <div className="">
                                <Image src={caruselimage} alt="caruselimage"
                                />
                            </div>


                            <div className=" text-center w-full">
                                <p className="text-sm xl:text-lg  font-bold  text-heading">{elem?.name.slice(0, 20)}...</p>
                                <p className="  text-sky-600 text-sm xl:text-lg  font-bold ">Islamic Song</p>
                                <p className="text-xs xl:text-sm  text-heading">2022 | {elem?.duration / 60} min</p>
                            </div>
                            <Link href={`./musics/${elem?.id}`}>
                                <a>
                                    <div className=" text-center bg-sky-500  hover:bg-sky-600 rounded-full  text-white">
                                        <PlayArrowIcon className="" fontSize="large" />
                                    </div>
                                </a>
                            </Link>

                        </div>
                    </div>
                ))}

                {/* <div className="px-2" >
                    <div className={`${style.sliderContent} bg-cmnbg rounded-xl flex items-center justify-around  p-3 `} >
                        <Image src={caruselimage} alt="caruselimage"
                        />
                        <div className=" text-center">
                            <p className="text-sm xl:text-lg  font-bold  text-heading">Pathshala Dao</p>
                            <p className="  text-sky-600 text-sm xl:text-lg  font-bold ">Islamic Song</p>
                            <p className="text-xs xl:text-sm  text-heading">2022 | 6:06 min</p>
                        </div>

                        <Link href="./musics">
                            <a>
                                <div className=" text-center bg-sky-500  hover:bg-sky-600 rounded-full  text-white">
                                    <PlayArrowIcon className="" fontSize="large" />
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="px-2" >
                    <div className={`${style.sliderContent} bg-cmnbg rounded-xl flex items-center justify-around  p-3 `} >
                        <Image src={caruselimage} alt="caruselimage"
                        />
                        <div className=" text-center">
                            <p className="text-sm xl:text-lg  font-bold  text-heading">Pathshala Dao</p>
                            <p className="  text-sky-600 text-sm xl:text-lg  font-bold ">Islamic Song</p>
                            <p className="text-xs xl:text-sm  text-heading">2022 | 6:06 min</p>
                        </div>

                        <Link href="./musics">
                            <a>
                                <div className=" text-center bg-sky-500  hover:bg-sky-600 rounded-full  text-white">
                                    <PlayArrowIcon className="" fontSize="large" />
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="px-2" >
                    <div className={`${style.sliderContent} bg-cmnbg rounded-xl flex items-center justify-around  p-3 `} >
                        <Image src={caruselimage} alt="caruselimage"
                        />
                        <div className=" text-center">
                            <p className="text-sm xl:text-lg  font-bold  text-heading">Pathshala Dao</p>
                            <p className="  text-sky-600 text-sm xl:text-lg  font-bold ">Islamic Song</p>
                            <p className="text-xs xl:text-sm  text-heading">2022 | 6:06 min</p>
                        </div>

                        <Link href="./musics">
                            <a>
                                <div className=" text-center bg-sky-500  hover:bg-sky-600 rounded-full  text-white">
                                    <PlayArrowIcon className="" fontSize="large" />
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="px-2" >
                    <div className={`${style.sliderContent} bg-cmnbg rounded-xl flex items-center justify-around  p-3 `} >
                        <Image src={caruselimage} alt="caruselimage"
                        />
                        <div className=" text-center">
                            <p className="text-sm xl:text-lg  font-bold  text-heading">Pathshala Dao</p>
                            <p className="  text-sky-600 text-sm xl:text-lg  font-bold ">Islamic Song</p>
                            <p className="text-xs xl:text-sm  text-heading">2022 | 6:06 min</p>
                        </div>

                        <Link href="./musics">
                            <a>
                                <div className=" text-center bg-sky-500  hover:bg-sky-600 rounded-full  text-white">
                                    <PlayArrowIcon className="" fontSize="large" />
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="px-2" >
                    <div className={`${style.sliderContent} bg-cmnbg rounded-xl flex items-center justify-around  p-3 `} >
                        <Image src={caruselimage} alt="caruselimage"
                        />
                        <div className=" text-center">
                            <p className="text-sm xl:text-lg  font-bold  text-heading">Pathshala Dao</p>
                            <p className="  text-sky-600 text-sm xl:text-lg  font-bold ">Islamic Song</p>
                            <p className="text-xs xl:text-sm  text-heading">2022 | 6:06 min</p>
                        </div>

                        <Link href="./musics">
                            <a>
                                <div className=" text-center bg-sky-500  hover:bg-sky-600 rounded-full  text-white">
                                    <PlayArrowIcon className="" fontSize="large" />
                                </div>
                            </a>
                        </Link>
                    </div>
                </div> */}


            </Slider>
        </div>
    );
};

export default AudioPlayer;
