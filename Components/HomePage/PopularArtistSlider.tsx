
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import caruselimage from "../../Assets/image/artist.png";
import { IMAGE_BASE_URL } from "../../utils/constants";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import style from "./HomePage.module.css";
import nullimg from "../../Assets/image/notfound.png"
const PopularArtistSlider = (popularArtistSlider: any) => {
    const popularArtistInfo = popularArtistSlider?.popularArtistSlider;
    const myLoader = ({ src, width, quality }: any) => {
        // console.log(src, "src");

        // console.log(`${IMAGE_BASE_URL}${src}`);

        return `${IMAGE_BASE_URL}${src}?w=${width}&q=${quality || 75}`;

    };

    const settings = {
        // // dots: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 5,
        slidesToScroll: 3,
        initialSlide: 0,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // pauseOnHover: true,
        // arrows: true,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    // autoplay: true,
                    // autoplaySpeed: 3000,
                    // pauseOnHover: true,
                    // // dots: true,
                    // arrows: true,


                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    infinite: true,
                    // autoplay: true,
                    // autoplaySpeed: 3000,
                    // pauseOnHover: true,
                    // dots: true,
                    // arrows: true,


                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    // autoplay: true,
                    // autoplaySpeed: 3000,
                    // pauseOnHover: true,
                    // dots: true,
                    // arrows: true,


                }
            }
        ]
    };
    return (
        <div className="">

            <div className=" flex justify-between items-center mb-5 text-heading">
                <h1 className=" font-bold text-lg md:text-xl 2xl:text-2xl">Popular Artist</h1>
                <Link href="./all_artist">
                    <a>
                        <button className=" font-bold text-xs md:text-base hover:text-sky-500 ">View All</button>
                    </a>
                </Link>

            </div>
            <Slider {...settings}  >
                {popularArtistInfo?.map((elem: any) => (
                    <div className="px-2" key={elem.id} >
                        <Link href="./all_artist/artist_profile">
                            <a>
                                <div className=" grid place-items-center overflow-hidden  ">
                                    <div className="bg-cmnbg w-32 h-32 md:w-40 md:h-40  rounded-full  overflow-hidden  ">
                                        {elem?.imageUrl ? (<Image
                                            className="rounded-2xl"
                                            loader={myLoader}
                                            src={elem?.imageUrl}
                                            width={160} height={160}
                                            alt="artistimage"
                                        />) : (<Image src={nullimg} alt="artistimage" width={160} height={160} />)}
                                        {/* <Image className=" " src={caruselimage} alt="artistimage" /> */}
                                    </div>
                                    <div className=' text-left'>
                                        <h1 className=" text-sm xl:text-lg font-bold " >{elem?.name}</h1>
                                        <h1 className=" text-xs xl:text-base ">{elem?.medias?.length} Songs</h1>
                                    </div>
                                </div>
                            </a>
                        </Link>

                    </div>
                ))}

                {/* // <div className="px-2" >
                //     <Link href="./all_artist/artist_profile">
                //         <a>
                //             <div className=" grid place-items-center overflow-hidden  ">
                //                 <div className="bg-cmnbg w-32 h-32 md:w-40 md:h-40  rounded-full  overflow-hidden  ">
                //                     <Image className=" " src={caruselimage} alt="artistimage" />
                //                 </div>
                //                 <div className=' text-left'>
                //                     <h1 className=" text-sm xl:text-lg font-bold " >Sayad Ahmed</h1>
                //                     <h1 className=" text-xs xl:text-base ">191 Songs</h1>
                //                 </div>
                //             </div>
                //         </a>
                //     </Link>

                // </div>
                // <div className="px-2" >
                //     <Link href="./all_artist/artist_profile">
                //         <a>
                //             <div className=" grid place-items-center overflow-hidden  ">
                //                 <div className="bg-cmnbg w-32 h-32 md:w-40 md:h-40  rounded-full  overflow-hidden  ">
                //                     <Image className=" " src={caruselimage} alt="artistimage" />
                //                 </div>
                //                 <div className=' text-left'>
                //                     <h1 className=" text-sm xl:text-lg font-bold " >Sayad Ahmed</h1>
                //                     <h1 className=" text-xs xl:text-base ">191 Songs</h1>
                //                 </div>
                //             </div>
                //         </a>
                //     </Link>

                // </div>
                // <div className="px-2" >
                //     <Link href="./all_artist/artist_profile">
                //         <a>
                //             <div className=" grid place-items-center overflow-hidden  ">
                //                 <div className="bg-cmnbg w-32 h-32 md:w-40 md:h-40  rounded-full  overflow-hidden  ">
                //                     <Image className=" " src={caruselimage} alt="artistimage" />
                //                 </div>
                //                 <div className=' text-left'>
                //                     <h1 className=" text-sm xl:text-lg font-bold " >Sayad Ahmed</h1>
                //                     <h1 className=" text-xs xl:text-base ">191 Songs</h1>
                //                 </div>
                //             </div>
                //         </a>
                //     </Link>

                // </div>
                // <div className="px-2" >
                //     <Link href="./all_artist/artist_profile">
                //         <a>
                //             <div className=" grid place-items-center overflow-hidden  ">
                //                 <div className="bg-cmnbg w-32 h-32 md:w-40 md:h-40  rounded-full  overflow-hidden  ">
                //                     <Image className=" " src={caruselimage} alt="artistimage" />
                //                 </div>
                //                 <div className=' text-left'>
                //                     <h1 className=" text-sm xl:text-lg font-bold " >Sayad Ahmed</h1>
                //                     <h1 className=" text-xs xl:text-base ">191 Songs</h1>
                //                 </div>
                //             </div>
                //         </a>
                //     </Link>

                // </div>
                // <div className="px-2" >
                //     <Link href="./all_artist/artist_profile">
                //         <a>
                //             <div className=" grid place-items-center overflow-hidden  ">
                //                 <div className="bg-cmnbg w-32 h-32 md:w-40 md:h-40  rounded-full  overflow-hidden  ">
                //                     <Image className=" " src={caruselimage} alt="artistimage" />
                //                 </div>
                //                 <div className=' text-left'>
                //                     <h1 className=" text-sm xl:text-lg font-bold " >Sayad Ahmed</h1>
                //                     <h1 className=" text-xs xl:text-base ">191 Songs</h1>
                //                 </div>
                //             </div>
                //         </a>
                //     </Link>

                // </div>
                // <div className="px-2" >
                //     <Link href="./all_artist/artist_profile">
                //         <a>
                //             <div className=" grid place-items-center overflow-hidden  ">
                //                 <div className="bg-cmnbg w-32 h-32 md:w-40 md:h-40  rounded-full  overflow-hidden  ">
                //                     <Image className=" " src={caruselimage} alt="artistimage" />
                //                 </div>
                //                 <div className=' text-left'>
                //                     <h1 className=" text-sm xl:text-lg font-bold " >Sayad Ahmed</h1>
                //                     <h1 className=" text-xs xl:text-base ">191 Songs</h1>
                //                 </div>
                //             </div>
                //         </a>
                //     </Link>

                // </div>
                // <div className="px-2" >
                //     <Link href="./all_artist/artist_profile">
                //         <a>
                //             <div className=" grid place-items-center overflow-hidden  ">
                //                 <div className="bg-cmnbg w-32 h-32 md:w-40 md:h-40  rounded-full  overflow-hidden  ">
                //                     <Image className=" " src={caruselimage} alt="artistimage" />
                //                 </div>
                //                 <div className=' text-left'>
                //                     <h1 className=" text-sm xl:text-lg font-bold " >Sayad Ahmed</h1>
                //                     <h1 className=" text-xs xl:text-base ">191 Songs</h1>
                //                 </div>
                //             </div>
                //         </a>
                //     </Link>

                // </div>
                // <div className="px-2" >
                //     <Link href="./all_artist/artist_profile">
                //         <a>
                //             <div className=" grid place-items-center overflow-hidden  ">
                //                 <div className="bg-cmnbg w-32 h-32 md:w-40 md:h-40  rounded-full  overflow-hidden  ">
                //                     <Image className=" " src={caruselimage} alt="artistimage" />
                //                 </div>
                //                 <div className=' text-left'>
                //                     <h1 className=" text-sm xl:text-lg font-bold " >Sayad Ahmed</h1>
                //                     <h1 className=" text-xs xl:text-base ">191 Songs</h1>
                //                 </div>
                //             </div>
                //         </a>
                //     </Link>

                // </div>
                // <div className="px-2" >
                //     <Link href="./all_artist/artist_profile">
                //         <a>
                //             <div className=" grid place-items-center overflow-hidden  ">
                //                 <div className="bg-cmnbg w-32 h-32 md:w-40 md:h-40  rounded-full  overflow-hidden  ">
                //                     <Image className=" " src={caruselimage} alt="artistimage" />
                //                 </div>
                //                 <div className=' text-left'>
                //                     <h1 className=" text-sm xl:text-lg font-bold " >Sayad Ahmed</h1>
                //                     <h1 className=" text-xs xl:text-base ">191 Songs</h1>
                //                 </div>
                //             </div>
                //         </a>
                //     </Link>

                // </div>
                // <div className="px-2" >
                //     <Link href="./all_artist/artist_profile">
                //         <a>
                //             <div className=" grid place-items-center overflow-hidden  ">
                //                 <div className="bg-cmnbg w-32 h-32 md:w-40 md:h-40  rounded-full  overflow-hidden  ">
                //                     <Image className=" " src={caruselimage} alt="artistimage" />
                //                 </div>
                //                 <div className=' text-left'>
                //                     <h1 className=" text-sm xl:text-lg font-bold " >Sayad Ahmed</h1>
                //                     <h1 className=" text-xs xl:text-base ">191 Songs</h1>
                //                 </div>
                //             </div>
                //         </a>
                //     </Link>

                // </div>
                // <div className="px-2" >
                //     <Link href="./all_artist/artist_profile">
                //         <a>
                //             <div className=" grid place-items-center overflow-hidden  ">
                //                 <div className="bg-cmnbg w-32 h-32 md:w-40 md:h-40  rounded-full  overflow-hidden  ">
                //                     <Image className=" " src={caruselimage} alt="artistimage" />
                //                 </div>
                //                 <div className=' text-left'>
                //                     <h1 className=" text-sm xl:text-lg font-bold " >Sayad Ahmed</h1>
                //                     <h1 className=" text-xs xl:text-base ">191 Songs</h1>
                //                 </div>
                //             </div>
                //         </a>
                //     </Link>

                // </div> */}





            </Slider>
        </div>
    );
};

export default PopularArtistSlider;
