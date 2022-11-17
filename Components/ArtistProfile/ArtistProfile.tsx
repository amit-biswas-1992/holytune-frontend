import React from 'react'

import Link from "next/link";
import WestIcon from '@mui/icons-material/West';
import Image from "next/image";
import albumcover from "../../Assets/image/music.svg";
import artistimg from "../../Assets/image/artist.png";
import SuggestAlbums from '../SearchPage/SuggestAlbums';

import { useRouter } from 'next/router';
import { getDataApi } from '../../services/api.service';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { AlbumInfo } from '../../models';
import { IMAGE_BASE_URL } from '../../utils/constants';
function ArtistProfile(artistData: any) {

    const router = useRouter()


    const artistDatas = artistData?.artistData
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

            "artistName": "Muhammad Badruzzaman"

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
    const myLoader = ({ src, width, quality }: any) => {
        // console.log(src, "src");

        // console.log(`${IMAGE_BASE_URL}${src}`);

        return `${IMAGE_BASE_URL}${src}?w=${width}&q=${quality || 75}`;

    };

    const [follow, setFollow] = useState(false)
    // console.log(follow);

    return (
        <div className=' p-5 xl:px-20 '>
            <WestIcon onClick={() => router.back()} className=" hover:text-sky-600" fontSize="large" />
            <div className="  rounded-b-3xl ">

                <div className="grid place-items-center  pt-7">
                    <div className="bg-cmnbg w-32 h-32 md:w-40 md:h-40  rounded-full  overflow-hidden shadow-md border hover:border-sky-500   ">
                        <Image
                            className="rounded-2xl"
                            loader={myLoader}
                            src={artistDatas?.imageUrl}
                            width={160}
                            height={160}
                            alt=""
                        />
                        {/* <Image className=" " src={artistimg} alt="artistimage" /> */}
                    </div>
                    <p className="text-base xl:text-lg font-medium  pt-2">{artistDatas?.name}</p>
                    <p className="text-base xl:text-lg  pt-2"> 100.000 Listeners</p>
                    <button className={` ${follow === true ? " bg-green-500" : " bg-sky-500"
                        }  py-3 px-10 mt-3 rounded-[2rem] font-medium text-white `}
                        onClick={() => { setFollow(!follow) }}
                    >
                        {follow === true ? (<>Following</>) : (<>Follow</>)}
                    </button>

                    <p className="text-xs xl:text-sm  pt-2 ">{artistDatas?.detail}.</p>
                </div>


            </div>
            <div className='xl:mx-20 screenscroll'>
                <div>
                    <div className='px-5 xl:px-20 pb-20 pt-5'>
                        {artistDatas?.medias?.map((artist: any) => (
                            <div key={artist.id} className="w-full my-3 flex gap-3 items-center  rounded-xl border hover:border-sky-500  cursor-pointer shadow-sm "

                            >
                                <div className=" h-full">
                                    <Image src={albumcover} className=" w-full h-full" alt="caruselimage" width="100%" height="100%"
                                    />
                                </div>




                                <div className="w-full " >
                                    <h5 className=" text-base md:text-xl font-bold text-left">{artist.name}</h5>
                                    <h5 className=" text-sm md:text-lg font-medium text-left" >artist.artistName</h5>
                                </div>


                                <div className=" px-4">
                                    <h5 className=" text-sm text-gray-500 md:text-lg font-medium text-center flex justify-center items-center" >{artist?.duration / 60}min</h5>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className=' pb-20'>

                <div className=" flex justify-between items-center mb-5 text-heading">
                    <h1 className=" font-bold text-lg md:text-xl 2xl:text-2xl">Albums</h1>
                    {/* <button className=" font-bold text-xs md:text-base hover:text-sky-500 ">View All</button> */}
                </div>
                <SuggestAlbums />
            </div>
        </div>
    )
}

export default ArtistProfile
