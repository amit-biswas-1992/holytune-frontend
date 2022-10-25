import React from 'react'
import Link from "next/link";
import WestIcon from '@mui/icons-material/West';
import categoryimg1 from "../../Assets/image/category1.svg";
import categoryimg2 from "../../Assets/image/category2.svg";
import categoryimg3 from "../../Assets/image/category3.svg";
import categoryimg4 from "../../Assets/image/category4.svg";
import artist from "../../Assets/image/artist.png"
import Image from 'next/image';
export default function CategoryViewAll() {
    return (
        <div className=' p-5 xl:px-20 '>
            <div className=' flex items-center gap-x-3'>
                <Link href="../home">
                    <a>
                        <WestIcon className="  hover:text-sky-600" fontSize="large" />

                    </a>
                </Link>
                <p className='text-lg xl:text-2xl font-bold'> Catagory</p>
            </div>
            <div>
                <div className=' px-10 py-20'>
                    <h1 className=' text-lg xl:text-xl font-semibold'>Catagory List</h1>
                    <div className='grid grid-cols-2  xl:grid-cols-4 gap-x-3 md:gap-x-0 md:px-10'>
                        <div className=" w-full   ">

                            <Link href="../categories/category_wise_media">
                                <a>
                                    <Image width={250} height={150} src={categoryimg1} alt="categoryimg" />

                                </a>
                            </Link>

                        </div>
                        <div className=" w-full   ">
                            <Link href="../categories/category_wise_media">
                                <a>

                                    <Image width={250} height={150} src={categoryimg2} alt="categoryimg" />
                                </a>
                            </Link>

                        </div>
                        <div className=" w-full   ">
                            <Link href="../categories/category_wise_media">
                                <a>

                                    <Image width={250} height={150} src={categoryimg3} alt="categoryimg" />
                                </a>
                            </Link>

                        </div>
                        <div className=" w-full   ">
                            <Link href="../categories/category_wise_media">
                                <a>

                                    <Image width={250} height={150} src={categoryimg4} alt="categoryimg" />
                                </a>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
