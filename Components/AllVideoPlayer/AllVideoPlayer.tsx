import React from 'react'
import { useRef, useState, useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";
import styles from "./Video.module.css"
import WestIcon from '@mui/icons-material/West';
import { useRouter } from 'next/router';
// import ReactPlayer from 'react-player'
// import ReactPlayer from 'react-player'
import caruselimage from "../../Assets/image/sliderimg1.png";
import caruselimage2 from "../../Assets/image/sliderimg2.png";
import caruselimage3 from "../../Assets/image/sliderimg3.png";
import caruselimage4 from "../../Assets/image/sliderimg4.png";
import backwardimg from "../../Assets/backward-5.svg"
import pause from "../../Assets/pause.svg"
import play from "../../Assets/play.svg"
import forward from "../../Assets/forward-5.svg"
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
function AllVideoPlayer() {

    const router = useRouter()



    const videoEl = useRef(null);
    // useEffect(() => {

    // }, [third])

    // useEffect(() => {

    //     let vid = document.getElementById("myVideo");
    //     console.log(vid.duration, "duration");


    // }, []);

    // const myFunction = () => {
    //     alert(vid.duration);
    // }
    const handleLoadedMetadata = () => {
        const video: any = videoEl.current;
        if (!video) return;
        // console.log(typeof (video.duration));

        console.log(`The video is ${video.duration / 60} seconds long.`);
        console.log(`currentTime is ${video.currentTime} seconds long.`);
        console.log(`end is ${video.end} seconds long.`);
    };
    const attemptPlay = () => {
        const video: any = videoEl.current;
        videoEl &&
            video &&
            video.play()
    };

    useEffect(() => {
        attemptPlay();
    }, []);
    return (
        <div className='py-5 px-2 xl:px-20  '>
            <div className=' flex items-center gap-x-3'>
                <WestIcon onClick={() => router.back()} className=" hover:text-sky-600" fontSize="large" />
                <p className='text-lg xl:text-2xl font-bold'> Playing Videos</p>
            </div>
            <div className=' py-10 player-wrapper'>
                {/* <ReactPlayer width="100%" height={500} className='react-player fixed-bottom' controls={true} url='https://media.w3.org/2010/05/sintel/trailer.mp4' /> */}
                <div className=" grid place-items-center ">
                    {/* <button   >Get video length</button> */}
                    <video id="myVideo" ref={videoEl} onLoadedMetadata={handleLoadedMetadata} controls autoPlay playsInline loop controlsList="nodownload" preload='none' className='w-full xl:w-4/6' >
                        <source id='mp4' src="http://192.168.7.7/holytune/naat/Bangla%20New%20Islamic%20Song%20With%20English%20Subtitle%20%ef%80%a7%20SalliAla%20Muhammad%20%ef%80%a7%20Kalarab%20Shilpigosthi.mp4" type='video/mp4' />



                        {/* <p>Your user agent does not support the HTML5 Video element.</p> */}
                    </video>
                    <div className=" w-full xl:w-4/6 ">
                        <p className=' grid place-content-start z-20 text-sm xl:text-base text-heading py-5 '>সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ</p>
                    </div>
                </div>

                {/* <iframe src="http://192.168.7.7/holytune/naat/Bangla%20New%20Islamic%20Song%20With%20English%20Subtitle%20%ef%80%a7%20SalliAla%20Muhammad%20%ef%80%a7%20Kalarab%20Shilpigosthi.mp4" title='A youtube video on React hooks' sandbox='allow-scripts allow-modal' loading='eager' width={1000} height={500} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture full"></iframe> */}

            </div>


            <div>
                <div className=" flex justify-between items-center mb-5 text-heading">
                    <h1 className=" font-bold text-lg md:text-xl 2xl:text-2xl">More Videos</h1>
                    <Link href="./all_musics">
                        <a >
                            <button className=" font-bold text-xs md:text-base hover:text-sky-500">View All</button>
                        </a>
                    </Link>
                </div>
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 pb-14'>
                <div >
                    <div className={` px-3 `} >

                        <Link href="./videos">
                            <a >
                                <Image src={caruselimage2} alt="caruselimage" width={350} height={200}
                                />
                                <p className="text-title text-xs md:text-sm xl:text-base pr-10">সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ</p>
                                <p className=" cursor-pointer text-sky-600 text-center text-xs md:text-sm xl:text-base">Click to watch</p>
                            </a>
                        </Link>
                    </div>
                </div>
                <div >
                    <div className={` px-3 `} >

                        <Link href="./videos">
                            <a >
                                <Image src={caruselimage3} alt="caruselimage" width={350} height={200}
                                />
                                <p className="text-title text-xs md:text-sm xl:text-base pr-10">সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ</p>
                                <p className=" cursor-pointer text-sky-600 text-center text-xs md:text-sm xl:text-base">Click to watch</p>
                            </a>
                        </Link>
                    </div>
                </div>
                <div >
                    <div className={` px-3 `} >

                        <Link href="./videos">
                            <a >
                                <Image src={caruselimage4} alt="caruselimage" width={350} height={200}
                                />
                                <p className="text-title text-xs md:text-sm xl:text-base pr-10">সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ</p>
                                <p className=" cursor-pointer text-sky-600 text-center text-xs md:text-sm xl:text-base">Click to watch</p>
                            </a>
                        </Link>
                    </div>
                </div>
                <div >
                    <div className={` px-3 `} >

                        <Link href="./videos">
                            <a >
                                <Image src={caruselimage} alt="caruselimage" width={350} height={200}
                                />
                                <p className="text-title text-xs md:text-sm xl:text-base pr-10">সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ</p>
                                <p className=" cursor-pointer text-sky-600 text-center text-xs md:text-sm xl:text-base">Click to watch</p>
                            </a>
                        </Link>
                    </div>
                </div>
                <div >
                    <div className={` px-3 `} >

                        <Link href="./videos">
                            <a >
                                <Image src={caruselimage2} alt="caruselimage" width={350} height={200}
                                />
                                <p className="text-title text-xs md:text-sm xl:text-base pr-10">সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ</p>
                                <p className=" cursor-pointer text-sky-600 text-center text-xs md:text-sm xl:text-base">Click to watch</p>
                            </a>
                        </Link>
                    </div>
                </div>
                <div >
                    <div className={` px-3 `} >

                        <Link href="./videos">
                            <a >
                                <Image src={caruselimage3} alt="caruselimage" width={350} height={200}
                                />
                                <p className="text-title text-xs md:text-sm xl:text-base pr-10">সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ</p>
                                <p className=" cursor-pointer text-sky-600 text-center text-xs md:text-sm xl:text-base">Click to watch</p>
                            </a>
                        </Link>
                    </div>
                </div>
                <div >
                    <div className={` px-3 `} >

                        <Link href="./videos">
                            <a >
                                <Image src={caruselimage4} alt="caruselimage" width={350} height={200}
                                />
                                <p className="text-title text-xs md:text-sm xl:text-base pr-10">সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ</p>
                                <p className=" cursor-pointer text-sky-600 text-center text-xs md:text-sm xl:text-base">Click to watch</p>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllVideoPlayer