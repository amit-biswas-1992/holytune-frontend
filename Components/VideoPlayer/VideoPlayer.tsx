import React from 'react'
import Image from 'next/image';
import Link from "next/link";
import WestIcon from '@mui/icons-material/West';
// import ReactPlayer from 'react-player'
// import ReactPlayer from 'react-player'
import caruselimage from "../../Assets/image/sliderimg1.png";
import caruselimage2 from "../../Assets/image/sliderimg2.png";
import caruselimage3 from "../../Assets/image/sliderimg3.png";
import caruselimage4 from "../../Assets/image/sliderimg4.png";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
function VideoPlayer() {
    return (
        <div className='py-5 px-2 xl:px-20  '>
            <div className=' flex items-center gap-x-3'>
                <Link href="../home">
                    <a>
                        <WestIcon className="  hover:text-sky-600" fontSize="large" />

                    </a>
                </Link>
                <p className='text-lg xl:text-2xl font-bold'> Playing Videos</p>
            </div>
            <div className=' py-10'>
                <ReactPlayer width="100%" height={500} controls={true} config={{
                    youtube: {
                        playerVars: { showinfo: 1 }
                    }
                }} url='https://youtu.be/07EiNTp-dsg' />
                <p className=' text-sm xl:text-base text-heading py-5'>সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ</p>
            </div>


            <div>
                <div className=" flex justify-between items-center mb-5 text-heading">
                    <h1 className=" font-bold text-lg md:text-xl 2xl:text-2xl">Islamic Video</h1>
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
                        <Image src={caruselimage2} alt="caruselimage" width={350} height={200}
                        />
                        <p className="text-title text-xs md:text-sm xl:text-base pr-10">সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ</p>
                        <Link href="./videos">
                            <a >
                                <p className=" cursor-pointer text-sky-600 text-center text-xs md:text-sm xl:text-base">Tap to watch</p>
                            </a>
                        </Link>
                    </div>
                </div>
                <div >
                    <div className={` px-3 `} >
                        <Image src={caruselimage3} alt="caruselimage" width={350} height={200}
                        />
                        <p className="text-title text-xs md:text-sm xl:text-base pr-10">সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ</p>
                        <Link href="./videos">
                            <a >
                                <p className=" cursor-pointer text-sky-600 text-center text-xs md:text-sm xl:text-base">Tap to watch</p>
                            </a>
                        </Link>
                    </div>
                </div>
                <div >
                    <div className={` px-3 `} >
                        <Image src={caruselimage4} alt="caruselimage" width={350} height={200}
                        />
                        <p className="text-title text-xs md:text-sm xl:text-base pr-10">সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ</p>
                        <Link href="./videos">
                            <a >
                                <p className=" cursor-pointer text-sky-600 text-center text-xs md:text-sm xl:text-base">Tap to watch</p>
                            </a>
                        </Link>
                    </div>
                </div>
                <div >
                    <div className={` px-3 `} >
                        <Image src={caruselimage} alt="caruselimage" width={350} height={200}
                        />
                        <p className="text-title text-xs md:text-sm xl:text-base pr-10">সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ</p>
                        <Link href="./videos">
                            <a >
                                <p className=" cursor-pointer text-sky-600 text-center text-xs md:text-sm xl:text-base">Tap to watch</p>
                            </a>
                        </Link>
                    </div>
                </div>
                <div >
                    <div className={` px-3 `} >
                        <Image src={caruselimage2} alt="caruselimage" width={350} height={200}
                        />
                        <p className="text-title text-xs md:text-sm xl:text-base pr-10">সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ</p>
                        <Link href="./videos">
                            <a >
                                <p className=" cursor-pointer text-sky-600 text-center text-xs md:text-sm xl:text-base">Tap to watch</p>
                            </a>
                        </Link>
                    </div>
                </div>
                <div >
                    <div className={` px-3 `} >
                        <Image src={caruselimage3} alt="caruselimage" width={350} height={200}
                        />
                        <p className="text-title text-xs md:text-sm xl:text-base pr-10">সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ</p>
                        <Link href="./videos">
                            <a >
                                <p className=" cursor-pointer text-sky-600 text-center text-xs md:text-sm xl:text-base">Tap to watch</p>
                            </a>
                        </Link>
                    </div>
                </div>
                <div >
                    <div className={` px-3 `} >
                        <Image src={caruselimage4} alt="caruselimage" width={350} height={200}
                        />
                        <p className="text-title text-xs md:text-sm xl:text-base pr-10">সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ</p>
                        <Link href="./videos">
                            <a >
                                <p className=" cursor-pointer text-sky-600 text-center text-xs md:text-sm xl:text-base">Tap to watch</p>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoPlayer