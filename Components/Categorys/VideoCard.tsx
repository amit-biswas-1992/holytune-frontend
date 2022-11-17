
import Link from "next/link";
import WestIcon from '@mui/icons-material/West';
import Image from "next/image";
import albumcover from "../../Assets/image/videoplayimg.svg";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useRouter } from 'next/router';
import { IMAGE_BASE_URL } from '../../utils/constants';
export default function VideoCard(videos: any) {
    const router = useRouter()
    const video = videos.videos
    console.log(video, "video");
    const myLoader = ({ src, width, quality }: any) => {
        // console.log(src, "src");

        // console.log(`${IMAGE_BASE_URL}${src}`);

        return `${IMAGE_BASE_URL}${src}?w=${width}&q=${quality || 75}`;

    };
    const albumlist = [
        {
            "id": "1",
            "img": albumcover,
            "title": "Ishq E Nabi Jindabad",

            "artistName": "Muhammad Badruzzaman", "duration": "5:10"
        },
        {
            "id": "2",
            "img": albumcover,
            "title": "Ishq E Nabi Jindabad",

            "artistName": "Muhammad Badruzzaman", "duration": "5:10"

        },
        {
            "id": "3",
            "img": albumcover,
            "title": "Ishq E Nabi Jindabad",

            "artistName": "Muhammad Badruzzaman", "duration": "5:10"

        },
        {
            "id": "4",
            "img": albumcover,
            "title": "Ishq E Nabi Jindabad",

            "artistName": "Muhammad Badruzzaman", "duration": "5:10"

        },
        {
            "id": "5",
            "img": albumcover,
            "title": "Ishq E Nabi Jindabad",

            "artistName": "Muhammad Badruzzaman", "duration": "5:10"

        },
        {
            "id": "6",
            "img": albumcover,
            "title": "Ishq E Nabi Jindabad",

            "artistName": "Muhammad Badruzzaman", "duration": "5:10"
        },
        {
            "id": "7",
            "img": albumcover,
            "title": "Ishq E Nabi Jindabad",

            "artistName": "Muhammad Badruzzaman", "duration": "5:10"
        },
        {
            "id": "8",
            "img": albumcover,
            "title": "Ishq E Nabi Jindabad",

            "artistName": "Muhammad Badruzzaman", "duration": "5:10"
        },
        {
            "id": "9",
            "img": albumcover,
            "title": "Ishq E Nabi Jindabad",

            "artistName": "Muhammad Badruzzaman", "duration": "5:10"
        },
        {
            "id": "10",
            "img": albumcover,
            "title": "Ishq E Nabi Jindabad",

            "artistName": "Muhammad Badruzzaman", "duration": "5:10"
        },
        {
            "id": "11",
            "img": albumcover,
            "title": "Ishq E Nabi Jindabad",

            "artistName": "Muhammad Badruzzaman", "duration": "5:10"
        },
        {
            "id": "12",
            "img": albumcover,
            "title": "Ishq E Nabi Jindabad",

            "artistName": "Muhammad Badruzzaman", "duration": "5:10"
        },
    ];

    const myRedirectFunction = function (id: string) {
        if (typeof window !== 'undefined') {
            router.push({
                pathname: '/videos/[videoId]',
                query: { ...router.query, videoId: id },
            });
        }
    }

    return (
        <div>
            <div className='xl:mx-20 screenscroll'>
                <div>
                    <div className='px-5 xl:px-20 pb-20 pt-5'>
                        {video?.map((album: any) => (

                            //  href={{
                            //                                     pathname: `/videos`,
                            //                                     query: { videoid: `${album?.id}` },
                            //                                 }}  
                            // href={`../../videos/${album?.id}`} 

                            // 

                            <div key={album.id}>
                                <Link href={`../../videos/${album?.id}`}  >
                                    <a>
                                        <div className=" my-3 flex justify-between items-center  rounded-xl hover:border hover:border-sky-500  cursor-pointer shadow-sm place-items-start "
                                        >
                                            <div className={` col-span-2 flex items-center  justify-start  rounded-xl overflow-hidden pr-2 gap-x-5 `} >
                                                {/* <Image src={album.img} alt="caruselimage" /> */}
                                                {album?.thumbnailUrl ? (<Image
                                                    className="rounded-2xl"
                                                    loader={myLoader}
                                                    src={album?.thumbnailUrl}
                                                    width={100}
                                                    height={100}
                                                    alt=""
                                                />) : (<Image src={albumcover} alt="caruselimage" width={100} height={100} />)}

                                                <div className=" col-span-2 flex justify-center items-start flex-col " >
                                                    <h5 className=" text-sm md:text-lg font-bold text-left">{album.name}</h5>
                                                    <h5 className=" text-xs md:text-base font-medium text-left" >{album.artistName}</h5>
                                                </div>
                                            </div>

                                            <div className=" grid place-items-center pr-5 xl:pr-10 ">
                                                <PlayArrowIcon className=' w-12 h-12 text-right bg-sky-500 hover:bg-sky-600 rounded-full  text-white ' fontSize="large" />
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>


                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}
