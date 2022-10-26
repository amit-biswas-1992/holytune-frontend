import React from 'react'
import Link from "next/link";
import WestIcon from '@mui/icons-material/West';
import Image from "next/image";
import albumcover from "../../Assets/image/music.svg";
export default function Audiocard() {
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
                        {albumlist.map((album) => (
                            <Link href="../../musics" key={album.id}>
                                <a>
                                    <div className=" my-3  grid grid-cols-3  rounded-xl hover:border hover:border-sky-500  cursor-pointer shadow-sm "
                                    >
                                        <div className={` col-span-2 flex items-center  justify-start   rounded-xl overflow-hidden pr-2  gap-x-5 `} >
                                            <Image src={album.img} alt="caruselimage" width={100} height={100} />

                                            <div className=" col-span-2 flex justify-center items-start flex-col  " >
                                                <h5 className=" text-base md:text-xl font-bold text-left ">{album.title}</h5>
                                                <h5 className=" text-sm md:text-lg font-medium text-left" >{album.artistName}</h5>
                                            </div>
                                        </div>
                                        <h5 className=" text-sm text-gray-500 md:text-lg font-medium text-center flex justify-center items-center" >{album.duration}</h5>
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
