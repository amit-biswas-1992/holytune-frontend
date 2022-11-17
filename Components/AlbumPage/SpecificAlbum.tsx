import React from 'react'
import Link from "next/link";
import WestIcon from '@mui/icons-material/West';
import Image from "next/image";
import albumcover from "../../Assets/image/music.svg";
import { useRouter } from 'next/router';
function SpecificAlbum(albumData: any) {


    const router = useRouter()
    const albumDatas = albumData.albumData
    console.log(albumDatas, "albumDatas");
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
    return (
        <div>
            <div className=" bg-[#252E39] h-64 rounded-b-3xl p-5 xl:px-20 ">
                <WestIcon onClick={() => router.back()} className=" text-white hover:text-sky-600" fontSize="large" />

                <div className=" pt-7">
                    <h1 className="text-xl xl:text-2xl font-bold text-white">
                        {albumDatas?.name}

                    </h1>
                    <p className="text-base xl:text-lg font-medium text-white pt-2"> {albumDatas?.detail}</p>
                    <p className="text-base xl:text-lg  text-white pt-5"> Islamic Song <span className=" text-2xl font-bold px-5">.</span> {albumDatas?.medias?.length} songs</p>

                </div>




            </div>
            <div className='xl:mx-20 '>
                <div>
                    <div className='px-5 xl:px-20 pb-20 pt-5'>
                        {albumDatas?.medias?.map((album: any) => (
                            <Link href={`../../musics/${album.id}`} key={album.id} >
                                <a>
                                    <div className=" w-full my-3 flex gap-3 items-center  rounded-xl border hover:border-sky-500  cursor-pointer shadow-sm  "
                                    >
                                        <div className={` h-full  `} >
                                            <Image src={albumcover} alt="albumcover" width={100} height={100}
                                            />


                                        </div>
                                        <div className=" w-full " >
                                            <h5 className=" text-base md:text-xl font-bold text-left">{album.name}</h5>
                                            <h5 className=" text-sm md:text-lg font-medium text-left" >{album.artistName}</h5>
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
        </div>
    )
}

export default SpecificAlbum