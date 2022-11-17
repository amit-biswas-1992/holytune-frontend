import React from 'react'
import Image from 'next/image';
import Link from "next/link";
import WestIcon from '@mui/icons-material/West';
import musicCover from "../../Assets/image/audiocover.svg"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useRouter } from 'next/router';
import { IMAGE_BASE_URL } from '../../utils/constants';
import nullimg from "../../Assets/image/notfound.png"
function Musics(audioData: any) {
    const router = useRouter()
    console.log(audioData, "audioData");
    const myLoader = ({ src, width, quality }: any) => {
        // console.log(src, "src");

        // console.log(`${IMAGE_BASE_URL}${src}`);

        return `${IMAGE_BASE_URL}${src}?w=${width}&q=${quality || 75}`;

    };
    return (
        <div className='py-5 px-2 xl:px-20  '>
            <div className=' flex items-center gap-x-3'>
                {/* <Link href="../home">
                    <a>     </a>
                </Link> */}
                <WestIcon onClick={() => router.back()} className="  hover:text-sky-600" fontSize="large" />


                <p className='text-lg xl:text-2xl font-bold'> Playing Music</p>
            </div>
            <div >
                <div className=' grid place-items-center'>
                    {/* <Image src={musicCover} alt="musicCover" /> */}
                    <div>

                        {audioData?.audioData?.media?.thumbnailUrl ? (<Image
                            className="rounded-2xl"
                            loader={myLoader}
                            src={audioData?.audioData?.media?.thumbnailUrl}

                            width={300}
                            height={250}
                            alt=""
                        />) : (<Image src={nullimg} alt="caruselimage" />)}
                    </div>
                </div>


                <div className='text-left py-10'>
                    <h1 className=' text-lg font-bold'>{audioData?.audioData?.media?.name}</h1>
                    <p className='text-gray-500 text-sm'>Via Islamic Song</p>
                </div>
                <div className=' pb-10'>
                    <AudioPlayer
                        autoPlay

                        src={audioData?.audioData?.media?.mediaUrl}
                        // src="http://192.168.7.7/Holytune/holy-tune-audio/Gazal/%e0%a6%86%e0%a6%87%e0%a6%a8%e0%a7%81%e0%a6%a6%e0%a7%8d%e0%a6%a6%e0%a7%80%e0%a6%a8%20%e0%a6%86%e0%a6%b2%20%e0%a6%86%e0%a6%9c%e0%a6%be%e0%a6%a6%e0%a7%87%e0%a6%b0%20%e0%a6%b8%e0%a7%87%e0%a6%b0%e0%a6%be%20%e0%a6%97%e0%a6%9c%e0%a6%b2%20%e0%a5%a4%20Podma%20Meghna%20%e0%a5%a4%20%e0%a6%aa%e0%a6%a6%e0%a7%8d%e0%a6%ae%e0%a6%be%20%e0%a6%ae%e0%a7%87%e0%a6%98%e0%a6%a8%e0%a6%be%20%e0%a5%a4%20Mahfuzul%20Alam%20%e0%a5%a4%20Azad%20Song%206.mp3"
                        // src="https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3"
                        onPlay={e => console.log("onPlay")}

                    />
                </div>
            </div>
        </div>
    )
}

export default Musics