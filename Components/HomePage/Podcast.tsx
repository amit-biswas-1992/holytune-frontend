import Image from "next/image";
import Link from "next/link";
import React from "react";

import img1 from "../../Assets/image/sliderimg1.png";
import img2 from "../../Assets/image/sliderimg2.png";
import img3 from "../../Assets/image/sliderimg3.png";
import img4 from "../../Assets/image/sliderimg4.png";
import style from "./HomePage.module.css";
const Podcast = () => {
    const podcastlist = [
        {
            "id": "1",
            "img": img1,
            "name": "Ishq E Nabi Jindabad",
            "arrtistName": "Shuvo Rahman",
            "duration": "5:32"
        },
        {
            "id": "2",
            "img": img2,
            "name": "Ishq E Nabi Jindabad",
            "arrtistName": "Shuvo Rahman",
            "duration": "5:32"

        },
        {
            "id": "3",
            "img": img3,
            "name": "Ishq E Nabi Jindabad",
            "arrtistName": "Shuvo Rahman",
            "duration": "5:32"

        },
        {
            "id": "4",
            "img": img4,
            "name": "Ishq E Nabi Jindabad",
            "arrtistName": "Shuvo Rahman",
            "duration": "5:32"

        },
        {
            "id": "5",
            "img": img2,
            "name": "Ishq E Nabi Jindabad",
            "arrtistName": "Shuvo Rahman",
            "duration": "5:32"

        },
        {
            "id": "6",
            "img": img1,
            "name": "Ishq E Nabi Jindabad",
            "arrtistName": "Shuvo Rahman",
            "duration": "5:32"
        },
        {
            "id": "7",
            "img": img3,
            "name": "Ishq E Nabi Jindabad",
            "arrtistName": "Shuvo Rahman",
            "duration": "5:32"
        },
        {
            "id": "8",
            "img": img2,
            "name": "Ishq E Nabi Jindabad",
            "arrtistName": "Shuvo Rahman",
            "duration": "5:32"
        },
        {
            "id": "9",
            "img": img4,
            "name": "Ishq E Nabi Jindabad",
            "arrtistName": "Shuvo Rahman",
            "duration": "5:32"
        },
        {
            "id": "10",
            "img": img1,
            "name": "Ishq E Nabi Jindabad",
            "arrtistName": "Shuvo Rahman",
            "duration": "5:32"
        },
        {
            "id": "11",
            "img": img3,
            "name": "Ishq E Nabi Jindabad",
            "arrtistName": "Shuvo Rahman",
            "duration": "5:32"
        },
        {
            "id": "12",
            "img": img2,
            "name": "Ishq E Nabi Jindabad",
            "arrtistName": "Shuvo Rahman",
            "duration": "5:32"
        },
    ];
    return (
        <div className="">

            <div className=" flex justify-between items-center mb-5 text-heading">
                <h1 className=" font-bold text-lg md:text-xl 2xl:text-2xl">Podcast</h1>
                <Link href="./all_videos">
                    <a>
                        <button className=" font-bold text-xs md:text-base hover:text-sky-500">View All</button>
                    </a>
                </Link>
            </div>
            <div className={`${style.podcast}  md:px-10`}>
                <div>
                    {podcastlist.map((podcast) => (
                        <div key={podcast.id} className=" my-3  grid grid-cols-3  rounded-xl border hover:border-sky-500  cursor-pointer shadow-sm "
                        >
                            <div className={`${style.sliderContent} col-span-2 flex items-center  justify-start gap-x-5 rounded-xl overflow-hidden pr-2 `} >
                                <Image src={podcast.img} alt="caruselimage" width={100} height={100}
                                />
                                <div className=" col-span-2 flex justify-center items-start flex-col " >
                                    <h5 className=" text-base md:text-xl font-bold text-left">{podcast.name}</h5>
                                    <h5 className=" text-sm md:text-lg font-medium text-left" >{podcast.arrtistName}</h5>
                                </div>

                            </div>

                            <h5 className=" text-sm text-gray-500 md:text-lg font-medium text-center flex justify-center items-center" >{podcast.duration}</h5>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default Podcast;
