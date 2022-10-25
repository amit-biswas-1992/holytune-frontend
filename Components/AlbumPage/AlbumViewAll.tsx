import React from 'react'
import albumcover from "../../Assets/image/music.svg";
import Link from "next/link";
import WestIcon from '@mui/icons-material/West';
import Image from "next/image";
function AlbumViewAll() {
    const albumlist = [
        {
            "id": "1",
            "img": albumcover,
            "albumName": "Album Name",

            "valueOfSongs": "50"
        },
        {
            "id": "2",
            "img": albumcover,
            "albumName": "Album Name",

            "valueOfSongs": "50"

        },
        {
            "id": "3",
            "img": albumcover,
            "albumName": "Album Name",

            "valueOfSongs": "50"

        },
        {
            "id": "4",
            "img": albumcover,
            "albumName": "Album Name",

            "valueOfSongs": "50"

        },
        {
            "id": "5",
            "img": albumcover,
            "albumName": "Album Name",

            "valueOfSongs": "50"

        },
        {
            "id": "6",
            "img": albumcover,
            "albumName": "Album Name",

            "valueOfSongs": "50"
        },
        {
            "id": "7",
            "img": albumcover,
            "albumName": "Album Name",

            "valueOfSongs": "50"
        },
        {
            "id": "8",
            "img": albumcover,
            "albumName": "Album Name",

            "valueOfSongs": "50"
        },
        {
            "id": "9",
            "img": albumcover,
            "albumName": "Album Name",

            "valueOfSongs": "50"
        },
        {
            "id": "10",
            "img": albumcover,
            "albumName": "Album Name",

            "valueOfSongs": "50"
        },
        {
            "id": "11",
            "img": albumcover,
            "albumName": "Album Name",

            "valueOfSongs": "50"
        },
        {
            "id": "12",
            "img": albumcover,
            "albumName": "Album Name",

            "valueOfSongs": "50"
        },
    ];
    return (
        <div className='p-5 '>
            <div className="text-xl md:text-3xl font-bold flex items-center gap-x-3"  >
                <Link href="./home">
                    <a className=" hover:text-sky-600">
                        <WestIcon fontSize="large" />
                    </a>
                </Link>
                <h5> Album</h5>
            </div>
            <div className=' grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 px-10'>
                {albumlist.map((elem) => (
                    <div key={elem.id} className="px-2" >
                        <div className={` rounded-xl   p-3 `} >
                            <Link href="../all_albums/album">
                                <a className=" hover:text-sky-600">
                                    <Image width={120} src={elem.img} alt="albumcover" />
                                </a>
                            </Link>

                            <p className="text-base xl:text-xl font-semibold   text-heading">{elem.albumName}</p>
                            <p className="text-sm xl:text-lg   text-heading">{elem.valueOfSongs}</p>


                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default AlbumViewAll