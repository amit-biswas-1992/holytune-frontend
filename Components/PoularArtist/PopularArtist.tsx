import React from 'react'
import Link from "next/link";
import WestIcon from '@mui/icons-material/West';
import ArtistCard from './ArtistCard';
import artist from "../../Assets/image/artist.png"
const PopularArtist = () => {
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
            "id": "11",
            "title": "Sayad Ahmed",
            "numOfSongs": "15 Songs",
            "img": artist
        },
        {
            "id": "21",
            "title": "mahammad Badruzzaman",
            "numOfSongs": "25 Songs",
            "img": artist
        },
        {
            "id": "31",
            "title": "Kalarab Sommitto Gojol",
            "numOfSongs": "30 Songs",
            "img": artist
        },
        {
            "id": "41",
            "title": "Sayad Ahmed",
            "numOfSongs": "55 Songs",
            "img": artist
        },
        {
            "id": "51",
            "title": "Sayad Ahmed",
            "numOfSongs": "5 Songs",
            "img": artist
        },
        {
            "id": "111",
            "title": "Sayad Ahmed",
            "numOfSongs": "15 Songs",
            "img": artist
        },
        {
            "id": "211",
            "title": "mahammad Badruzzaman",
            "numOfSongs": "25 Songs",
            "img": artist
        },
        {
            "id": "311",
            "title": "Kalarab Sommitto Gojol",
            "numOfSongs": "30 Songs",
            "img": artist
        },
        {
            "id": "411",
            "title": "Sayad Ahmed",
            "numOfSongs": "55 Songs",
            "img": artist
        },
        {
            "id": "19815",
            "title": "Sayad Ahmed",
            "numOfSongs": "5 Songs",
            "img": artist
        },
        {
            "id": "13211",
            "title": "Sayad Ahmed",
            "numOfSongs": "15 Songs",
            "img": artist
        },
        {
            "id": "217651",
            "title": "mahammad Badruzzaman",
            "numOfSongs": "25 Songs",
            "img": artist
        },
        {
            "id": "3211",
            "title": "Kalarab Sommitto Gojol",
            "numOfSongs": "30 Songs",
            "img": artist
        },
        {
            "id": "114",
            "title": "Sayad Ahmed",
            "numOfSongs": "55 Songs",
            "img": artist
        },
        {
            "id": "115",
            "title": "Sayad Ahmed",
            "numOfSongs": "5 Songs",
            "img": artist
        },

    ];
    return (
        <div  >

            <div className=" md:px-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 cursor-pointer  py-3 text-center pb-16"  >
                {artistlist.map((artist) => (
                    <div key={artist.id}>
                        <Link href="../home">
                            <a>
                                <ArtistCard


                                    img={artist.img}
                                    title={artist.title}
                                    numOfSongs={artist.numOfSongs}

                                />
                            </a>
                        </Link>
                    </div>



                ))}

            </div>


        </div >
    )
}

export default PopularArtist