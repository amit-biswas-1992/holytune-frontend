import React from 'react'
import Link from "next/link";
import WestIcon from '@mui/icons-material/West';

import artist from "../../Assets/image/artist.png"
import Image from 'next/image';
const ArtistViewAll = () => {
    const artistlist = [
        {
            "id": "1",
            "title": "Sayad Ahmed",
            "numOfSongs": "15 Songs",
            "img": artist
        },
        {
            "id": "2",
            "title": "mahammad Badruzzaman",
            "numOfSongs": "25 Songs",
            "img": artist
        },
        {
            "id": "3",
            "title": "Kalarab Sommitto Gojol",
            "numOfSongs": "30 Songs",
            "img": artist
        },
        {
            "id": "4",
            "title": "Sayad Ahmed",
            "numOfSongs": "55 Songs",
            "img": artist
        },
        {
            "id": "5",
            "title": "Sayad Ahmed",
            "numOfSongs": "5 Songs",
            "img": artist
        },
        {
            "id": "6",
            "title": "Sayad Ahmed",
            "numOfSongs": "15 Songs",
            "img": artist
        },
        {
            "id": "7",
            "title": "mahammad Badruzzaman",
            "numOfSongs": "25 Songs",
            "img": artist
        },
        {
            "id": "8",
            "title": "Kalarab Sommitto Gojol",
            "numOfSongs": "30 Songs",
            "img": artist
        },
        {
            "id": "9",
            "title": "Sayad Ahmed",
            "numOfSongs": "55 Songs",
            "img": artist
        },
        {
            "id": "10",
            "title": "Sayad Ahmed",
            "numOfSongs": "5 Songs",
            "img": artist
        },
        {
            "id": "11",
            "title": "Sayad Ahmed",
            "numOfSongs": "15 Songs",
            "img": artist
        },
        {
            "id": "12",
            "title": "mahammad Badruzzaman",
            "numOfSongs": "25 Songs",
            "img": artist
        },
        {
            "id": "13",
            "title": "Kalarab Sommitto Gojol",
            "numOfSongs": "30 Songs",
            "img": artist
        },
        {
            "id": "14",
            "title": "Sayad Ahmed",
            "numOfSongs": "55 Songs",
            "img": artist
        },
        {
            "id": "15",
            "title": "Sayad Ahmed",
            "numOfSongs": "5 Songs",
            "img": artist
        },
        {
            "id": "16",
            "title": "Sayad Ahmed",
            "numOfSongs": "15 Songs",
            "img": artist
        },
        {
            "id": "17",
            "title": "mahammad Badruzzaman",
            "numOfSongs": "25 Songs",
            "img": artist
        },
        {
            "id": "18",
            "title": "Kalarab Sommitto Gojol",
            "numOfSongs": "30 Songs",
            "img": artist
        },
        {
            "id": "19",
            "title": "Sayad Ahmed",
            "numOfSongs": "55 Songs",
            "img": artist
        },
        {
            "id": "20",
            "title": "Sayad Ahmed",
            "numOfSongs": "5 Songs",
            "img": artist
        },

    ];
    return (
        <div className=' p-5 xl:px-20 ' >
            <Link href="../home">
                <a className="  hover:text-sky-600">
                    <WestIcon fontSize="large" />
                </a>
            </Link>
            <div className=" md:px-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 cursor-pointer  py-3 text-center pb-16"  >
                {artistlist.map((artist) => (
                    <div key={artist.id}>
                        <Link href="./all_artist/artist_profile">
                            <a>
                                <div className='grid place-items-center'>

                                    <div className="bg-cmnbg w-32 h-32 md:w-40 md:h-40  rounded-full  overflow-hidden shadow-md border hover:border-sky-500   ">
                                        <Image className=" " src={artist.img} alt="artistimage" />
                                    </div>
                                    <div className=' text-center'>
                                        <h1>{artist.title}</h1>
                                        <h1>{artist.numOfSongs}</h1>
                                    </div>

                                </div>
                            </a>
                        </Link>
                    </div>



                ))}

            </div>


        </div >
    )
}

export default ArtistViewAll