import React from 'react'
import Image from 'next/image';
import Link from "next/link";
import WestIcon from '@mui/icons-material/West';
import musicCover from "../../Assets/image/audiocover.svg"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
function Musics() {
    return (
        <div className='py-5 px-2 xl:px-20  '>
            <div className=' flex items-center gap-x-3'>
                <Link href="../home">
                    <a>
                        <WestIcon className="  hover:text-sky-600" fontSize="large" />

                    </a>
                </Link>
                <p className='text-lg xl:text-2xl font-bold'> Playing Music</p>
            </div>
            <div >
                <div className=' grid place-items-center'>
                    <Image src={musicCover} alt="musicCover" />
                </div>


                <div className='text-left py-10'>
                    <h1 className=' text-lg font-bold'>Pathshala Dao</h1>
                    <p className='text-gray-500 text-sm'>Via Islamic Song</p>
                </div>
                <div className=' pb-10'>
                    <AudioPlayer
                        autoPlay

                        src="https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3"
                        onPlay={e => console.log("onPlay")}
                    
                    />
                </div>
            </div>
        </div>
    )
}

export default Musics