import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import caruselimage from "../../Assets/image/category1.svg";
import caruselimage2 from "../../Assets/image/category2.svg";
import caruselimage3 from "../../Assets/image/category3.svg";
import caruselimage4 from "../../Assets/image/category4.svg";
import nullimg from "../../Assets/image/notfound.png"
import { IMAGE_BASE_URL } from "../../utils/constants";
import style from "./HomePage.module.css";
const ExploreCategory = (exploreCategory: any) => {
    // console.log(exploreCategory, "exploreCategory")
    const exploreCategoryInfo = exploreCategory?.exploreCategory;
    const myLoader = ({ src, width, quality }: any) => {
        // console.log(src, "src");

        // console.log(`${IMAGE_BASE_URL}${src}`);

        return `${IMAGE_BASE_URL}${src}?w=${width}&q=${quality || 75}`;

    };
    const settings = {
        // // dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
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

            <div className=" flex justify-between items-center  text-heading">
                <h1 className=" font-bold text-lg md:text-xl 2xl:text-2xl">Explore Catagory</h1>
                <Link href="./categories">
                    <a >
                        <button className=" font-bold text-xs md:text-base hover:text-sky-500">View All</button>
                    </a>
                </Link>

            </div>
            <Slider {...settings}  >
                {exploreCategoryInfo?.map((elem: any) => (
                    <div key={elem?.id} >
                        <Link href={`../categories/${elem.id}`}>
                            <a>
                                <div className={` w-full px-2 `} >
                                    {elem?.imageUrl ? (<Image
                                        className="rounded-2xl"
                                        loader={myLoader}
                                        src={elem?.imageUrl}
                                        width={300} height={200}
                                        alt=""
                                    />) : (<Image src={nullimg} alt="caruselimage" width={300} height={200} />)}

                                </div>
                            </a>
                        </Link>

                    </div>
                ))}
                {/* <div >
                    <Link href="../categories/category_wise_media">
                        <a>
                            <div className=" w-full px-2  ">
                                <Image width={300} height={200} src={caruselimage} alt="caruselimage" />
                            </div>
                        </a>
                    </Link>

                </div> */}


            </Slider>
        </div>
    );
};

export default ExploreCategory;
