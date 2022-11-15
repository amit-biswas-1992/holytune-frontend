import React from 'react'
import albumcover from "../../Assets/image/music.svg";
import Link from "next/link";
import WestIcon from '@mui/icons-material/West';
import Image from "next/image";
import { useRouter } from 'next/router';
import { IMAGE_BASE_URL } from '../../utils/constants';
import { getDataApi } from '../../services/api.service';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { AlbumInfo } from '../../models';
function AlbumViewAll() {

    const router = useRouter()
    const [albumData, setAlbumData] = useState<AlbumInfo>()
    console.log(albumData, "albumData");



    const myLoader = ({ src, width, quality }: any) => {
        // console.log(src, "src");

        // console.log(`${IMAGE_BASE_URL}${src}`);

        return `${IMAGE_BASE_URL}${src}?w=${width}&q=${quality || 75}`;

    };
    const getAlbumData = async () => {
        const url = "/albums";
        try {

            const data = await getDataApi(url);
            if (data.statusCode) {
                console.log('this block')
                // toast.warning("Please Input a correct Number");
                return;
            }
            // console.log("dataforotp", data);
            // localStorage.setItem("msisdn", JSON.stringify(payload.msisdn));
            setAlbumData(data.data)
            // navigate.push("../auth/verification");
        } catch (err) {
            toast.warning("somethoing wrong");
        }

    };
    useEffect(() => {
        const callApi = async () => {
            await getAlbumData();
        };
        callApi();
    }, []);
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
        <div className='p-5  '>
            <div className="text-xl md:text-3xl font-bold flex items-center gap-x-3"  >
                {/* <Link href="./home">
                    <a ></a>
                </Link> */}
                <WestIcon onClick={() => router.back()} className=" hover:text-sky-600" fontSize="large" />

                <h5> Album</h5>
            </div>
            <div className=' grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 px-10 pb-10'>
                {albumData?.map((elem) => (
                    <div key={elem.id} className="px-2" >
                        <div className={` rounded-xl   p-3 `} >
                            <Link href={`../all_albums/${elem.id}`}>
                                <a className=" hover:text-sky-600">
                                    {/* <Image
                                        className="rounded-2xl"
                                        loader={myLoader}
                                        src={elem.imageUrl}
                                        width={120}
                                        height={120}
                                        alt=""
                                    /> */}
                                    <Image width={120} src={albumcover} alt="albumcover" />
                                </a>
                            </Link>

                            <p className="text-base xl:text-xl font-semibold   text-heading">{elem?.name}</p>
                            <p className="text-sm xl:text-lg   text-heading">{elem?.medias?.length}</p>


                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default AlbumViewAll