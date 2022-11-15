import React from 'react'
import Link from "next/link";
import WestIcon from '@mui/icons-material/West';
import { useRouter } from 'next/router';
import artist from "../../Assets/image/artist.png"
import Image from 'next/image';
import { IMAGE_BASE_URL } from '../../utils/constants';
import { getDataApi } from '../../services/api.service';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { AlbumInfo } from '../../models';
const ArtistViewAll = () => {


    const router = useRouter()
    const [artistData, setArtistData] = useState<AlbumInfo>()
    console.log(artistData, "artistData");



    const myLoader = ({ src, width, quality }: any) => {
        // console.log(src, "src");

        // console.log(`${IMAGE_BASE_URL}${src}`);

        return `${IMAGE_BASE_URL}${src}?w=${width}&q=${quality || 75}`;

    };
    const getArtistData = async () => {
        const url = "/artists";
        try {

            const data = await getDataApi(url);
            if (data.statusCode) {
                console.log('this block')
                // toast.warning("Please Input a correct Number");
                return;
            }
            // console.log("dataforotp", data);
            // localStorage.setItem("msisdn", JSON.stringify(payload.msisdn));
            setArtistData(data.data)
            // navigate.push("../auth/verification");
        } catch (err) {
            toast.warning("somethoing wrong");
        }

    };
    useEffect(() => {
        const callApi = async () => {
            await getArtistData();
        };
        callApi();
    }, []);
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
            <WestIcon onClick={() => router.back()} className=" hover:text-sky-600" fontSize="large" />
            <div className=" md:px-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5 cursor-pointer  py-3 text-center pb-16"  >
                {artistData?.map((artist) => (
                    <div key={artist?.id}>
                        <Link href={`./all_artist/${artist?.id}`}>
                            <a>
                                <div className='grid place-items-center'>

                                    <div className="bg-cmnbg w-32 h-32 md:w-40 md:h-40  rounded-full  overflow-hidden shadow-md border hover:border-sky-500   ">
                                        <Image
                                            className="rounded-2xl"
                                            loader={myLoader}
                                            src={artist?.imageUrl}
                                            width={160}
                                            height={160}
                                            alt=""
                                        />
                                        {/* <Image className=" " src={artist.img} alt="artistimage" /> */}
                                    </div>
                                    <div className=' text-center'>
                                        <h1>{artist?.name}</h1>
                                        <h1>{artist?.medias?.length}</h1>
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