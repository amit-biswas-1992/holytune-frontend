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
function VideoPlayer() {

    const router = useRouter()
    const videoRef = useRef();
    const [playing, setPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [videoTime, setVideoTime] = useState(0);
    const [progress, setProgress] = useState(0);

    const videoHandler = (control: any) => {
        if (control === "play") {
            videoRef.current.play();
            setPlaying(true);
            var vid = document.getElementById("video1");
            setVideoTime(vid.duration);
        } else if (control === "pause") {
            videoRef.current.pause();
            setPlaying(false);
        }
    };

    const fastForward = () => {
        videoRef.current.currentTime += 5;
    };

    const revert = () => {
        videoRef.current.currentTime -= 5;
    };
    useEffect(() => {
        window.setInterval(function () {
            setCurrentTime(videoRef.current?.currentTime);
            setProgress((videoRef.current?.currentTime / videoTime) * 100);
        }, 1000);
    }, [])




    return (
        <div className='py-5 px-2 xl:px-20  '>
            <div className=' flex items-center gap-x-3'>
                <WestIcon onClick={() => router.back()} className=" hover:text-sky-600" fontSize="large" />
                <p className='text-lg xl:text-2xl font-bold'> Playing Videos</p>
            </div>
            {/* <div className=' py-10'>
                <ReactPlayer width="100%" height={500} controls={true} config={{
                    youtube: {
                        playerVars: { showinfo: 1 }
                    }
                }} url='https://youtu.be/07EiNTp-dsg' />
                <p className=' text-sm xl:text-base text-heading py-5'>সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ</p>
            </div> */}
            <div className="app">
                <video
                    id="video1"
                    ref={videoRef}
                    className={styles.video}
                    src="http://192.168.7.7/holytune/naat/Abu%20Rayhan%20New%20Song%202018%20%ef%80%a7%20Rasule%20Khoda%20With%20English%20Subtitle%20%ef%80%a7%20Islamic%20Hindi%20Song%20By%20Kalarab.mp4"
                ></video>

                <div className="controlsContainer">
                    <div className="controls">
                        <Image
                            onClick={revert}
                            className={styles.controlsIcon}
                            alt=""

                            src={backwardimg}
                        />
                        {playing ? (
                            <Image
                                onClick={() => videoHandler("pause")}
                                className={styles.controlsIconsmall}
                                alt=""

                                src={pause}
                            />
                        ) : (
                            <Image
                                onClick={() => videoHandler("play")}
                                className={styles.controlsIconsmall}
                                alt=""
                                // width={50}
                                // height={50}
                                src={play}
                            />
                        )}
                        <Image
                            className={styles.controlsIcon}
                            onClick={fastForward}
                            alt=""

                            src={forward}
                        />
                    </div>
                </div>

                <div className={styles.timecontrols}>
                    <p className={styles.controlsTime}>
                        {Math.floor(currentTime / 60) +
                            ":" +
                            ("0" + Math.floor(currentTime % 60)).slice(-2)}
                    </p>
                    <div className={styles.time_progressbarContainer}>
                        <div
                            style={{ width: `${progress}%` }}
                            className={styles.time_progressBar}
                        ></div>
                    </div>
                    <p className={styles.controlsTime}>
                        {Math.floor(videoTime / 60) +
                            ":" +
                            ("0" + Math.floor(videoTime % 60)).slice(-2)}
                    </p>
                </div>
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

export default VideoPlayer