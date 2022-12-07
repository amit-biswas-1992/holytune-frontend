import React from 'react'
import Link from "next/link";
import WestIcon from '@mui/icons-material/West';
import Image from "next/image";
import albumcover from "../../Assets/image/music.svg";
import { useRouter } from 'next/router';
import { IMAGE_BASE_URL } from '../../utils/constants';
import { getDataApi } from '../../services/api.service';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { AlbumInfo } from '../../models';
function AllMusics() {
    {/* */ }
    const router = useRouter()
    const [audioData, setAudioData] = useState<AlbumInfo>()
    console.log(audioData, "audioData");



    const myLoader = ({ src, width, quality }: any) => {
        // console.log(src, "src");

        // console.log(`${IMAGE_BASE_URL}${src}`);

        return `${IMAGE_BASE_URL}${src}?w=${width}&q=${quality || 75}`;

    };
    const getaudioData = async () => {
        const url = "/medias/audio";
        try {

            const data = await getDataApi(url);
            if (data.statusCode) {
                console.log('this block')
                // toast.warning("Please Input a correct Number");
                return;
            }
            // console.log("dataforotp", data);
            // localStorage.setItem("msisdn", JSON.stringify(payload.msisdn));
            setAudioData(data.data)
            // navigate.push("../auth/verification");
        } catch (err) {
            toast.warning("somethoing wrong");
        }

    };
    useEffect(() => {
        const callApi = async () => {
            await getaudioData();
        };
        callApi();
    }, []);

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

    return (
        <div className=' p-5 xl:px-20 '>
            <div className=' flex items-center gap-x-3'>
                <WestIcon onClick={() => router.back()} className=" hover:text-sky-600" fontSize="large" />
                <p className='text-lg xl:text-2xl font-bold'> Trending</p>
            </div>

            <div className='xl:mx-20 '>
                <div>
                    <p className='text-lg xl:text-xl font-semibold pt-10'>Populer Islamic Song</p>

                    <div className='px-5 xl:px-20 pb-20 pt-5'>
                        {audioData?.all?.map((album: any) => (
                            <Link key={album.id} href={`musics/${album.id}`} >
                                <a>
                                    <div className="w-full my-3 flex gap-3 items-center  rounded-xl border hover:border-sky-500  cursor-pointer shadow-sm  "
                                    >


                                        <div className={` h-full  `} >
                                            <Image src={albumcover} alt="albumcover" width={100} height={100}
                                            />


                                        </div>

                                        <div className=" w-full " >
                                            <h5 className=" text-base md:text-xl font-bold text-left ">{album.name}</h5>
                                            <div className=" text-sm md:text-lg font-medium text-left" >{album?.artists?.map((artist: any) => (
                                                <p key={artist.id}>{artist?.name}</p>
                                            ))}</div>
                                        </div>

                                        <div className=" px-4">
                                            <h5 className=" text-sm text-gray-500 md:text-lg font-medium text-center flex justify-center items-center" >{album.duration / 60}min</h5>
                                        </div>


                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AllMusics