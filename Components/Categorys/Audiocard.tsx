import React from 'react'
import Link from "next/link";

import Image from "next/image";
import albumcover from "../../Assets/image/music.svg";
import { IMAGE_BASE_URL } from '../../utils/constants';
export default function Audiocard(audios: any) {

    const audio = audios.audios
    // console.log(audio, "audio");
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
    return (
        <div>
            <div className='xl:mx-20 screenscroll'>
                <div>
                    <div className='px-5 xl:px-20 pb-20 pt-5'>
                        {audio?.map((album: any) => (
                            <Link href="../../musics" key={album.id}>
                                <a>
                                    <div className=" my-3  grid grid-cols-3  rounded-xl hover:border hover:border-sky-500  cursor-pointer shadow-sm "
                                    >
                                        <div className={` col-span-2 flex items-center  justify-start   rounded-xl overflow-hidden pr-2  gap-x-5 `} >
                                            <div>
                                                {/* <Image src={album.img} alt="caruselimage" width={100} height={100} /> */}
                                                {album?.thumbnailUrl ? (<Image
                                                    className="rounded-2xl"
                                                    loader={myLoader}
                                                    src={album?.thumbnailUrl}
                                                    width={100}
                                                    height={100}
                                                    alt=""
                                                />) : (<Image src={albumcover} alt="caruselimage" width={100} height={100} />)}
                                            </div>

                                            <div className=" col-span-2 flex justify-center items-start flex-col  " >
                                                <h5 className=" text-sm md:text-lg font-bold text-left ">{album?.name}</h5>
                                                <h5 className=" text-xs md:text-base font-medium text-left" >{album?.artistName}</h5>
                                            </div>
                                        </div>
                                        <h5 className=" text-sm text-gray-500 md:text-lg font-medium text-center flex justify-center items-center" >{album?.duration}</h5>
                                    </div>
                                </a>
                            </Link>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
