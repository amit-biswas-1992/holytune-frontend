import React from 'react'
import Link from "next/link";
import WestIcon from '@mui/icons-material/West';
import categoryimg1 from "../../Assets/image/category1.svg";
import categoryimg2 from "../../Assets/image/category2.svg";
import categoryimg3 from "../../Assets/image/category3.svg";
import categoryimg4 from "../../Assets/image/category4.svg";
import { useRouter } from 'next/router';
import artist from "../../Assets/image/artist.png"
import Image from 'next/image';
import { IMAGE_BASE_URL } from '../../utils/constants';
import { getDataApi } from '../../services/api.service';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import CategoryMediaInfo from './../../models/categoryInfo';
export default function CategoryViewAll() {
    const [categoryData, setCategoryData] = useState<CategoryMediaInfo>()
    console.log(categoryData, "categoryData");

    const router = useRouter()

    const myLoader = ({ src, width, quality }: any) => {
        // console.log(src, "src");

        // console.log(`${IMAGE_BASE_URL}${src}`);

        return `${IMAGE_BASE_URL}${src}?w=${width}&q=${quality || 75}`;

    };
    const getVideoData = async () => {
        const url = "/categories";
        try {

            const data = await getDataApi(url);
            if (data.statusCode) {
                console.log('this block')
                // toast.warning("Please Input a correct Number");
                return;
            }
            // console.log("dataforotp", data);
            // localStorage.setItem("msisdn", JSON.stringify(payload.msisdn));
            setCategoryData(data.data)
            // navigate.push("../auth/verification");
        } catch (err) {
            toast.warning("somethoing wrong");
        }

    };
    useEffect(() => {
        const callApi = async () => {
            await getVideoData();
        };
        callApi();
    }, []);
    return (
        <div className=' p-5 xl:px-20 '>
            <div className=' flex items-center gap-x-3'>
                <WestIcon onClick={() => router.back()} className=" hover:text-sky-600" fontSize="large" />
                <p className='text-lg xl:text-2xl font-bold'> Catagory</p>
            </div>
            <div>
                <div className=' px-10 py-20'>
                    <h1 className=' text-lg xl:text-xl font-semibold'>Catagory List</h1>
                    <div className='grid grid-cols-2  xl:grid-cols-4 gap-x-3  md:px-10'>
                        {categoryData?.map((elem) => (
                            <div key={elem.id}>
                                <div className=" w-full   ">

                                    <Link href={`../categories/${elem.id}`}>
                                        <a>
                                            <Image
                                                className="rounded-2xl"
                                                loader={myLoader}
                                                src={elem.imageUrl}
                                                width={350}
                                                height={200}
                                                alt=""
                                            />

                                            {/* <Image width={250} height={150} src={categoryimg1} alt="categoryimg" /> */}



                                        </a>
                                    </Link>

                                </div>
                            </div>))}


                    </div>
                </div>
            </div>

        </div>
    )
}
