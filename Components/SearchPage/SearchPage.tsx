import React, { useEffect, useState } from "react";
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Link from "next/link";
import WestIcon from '@mui/icons-material/West';
import categoryimg1 from "../../Assets/image/category1.svg";
import categoryimg2 from "../../Assets/image/category2.svg";
import categoryimg3 from "../../Assets/image/category3.svg";
import categoryimg4 from "../../Assets/image/category4.svg";
import SuggestAlbums from './SuggestAlbums';
import PopularArtist from '../PoularArtist/PopularArtist';
import { useRouter } from 'next/router';
import { toast } from "react-toastify";
import { getDataApi } from "../../services/api.service";
import { IMAGE_BASE_URL } from "../../utils/constants";
import style from "../HomePage/HomePage.module.css";
import nullimg from "../../Assets/image/notfound.png"
import { HomeInfo, CategoryMediaInfo } from './../../models';
const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,

    // marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));
function SearchPage() {

    const router = useRouter()
    const [searchvalue, setSearchvalue] = useState("");
    const [searchData, setSearchData] = useState<HomeInfo>();
    const [categoryData, setCategoryData] = useState<CategoryMediaInfo>()
    const [isLoading, setIsLoading] = useState(false);
    const getCategoryData = async () => {
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
            await getCategoryData();
        };
        callApi();
    }, []);
    const serachapicall = async () => {
        // const getdata = {
        //     profileType: "religion",
        //     subType: "ইসলাম",
        //     name: searchvalue,
        //     nid: searchvalue,
        //     tin: searchvalue,
        //     phone1: searchvalue,
        //     phone2: searchvalue,
        // };
        try {
            setIsLoading(true);
            // //console.log("try er moddhe");
            const data = await getDataApi(`/search?name=${searchvalue}`);
            console.log(data, "searchdata");
            setSearchData(data?.data)
            if (data.error === true) {
                toast.warning(data.message);
                return null;
            }

            setIsLoading(false);
        } catch (err) {
            //console.log(err);
        }
    };
    const myLoader = ({ src, width, quality }: any) => {
        // console.log(src, "src");

        // console.log(`${IMAGE_BASE_URL}${src}`);

        return `${IMAGE_BASE_URL}${src}?w=${width}&q=${quality || 75}`;

    };
    const id = "2"
    return (
        <div className='p-5 '>

            <div className="text-xl md:text-3xl font-bold flex items-center gap-x-3"  >
                <WestIcon onClick={() => router.back()} className=" hover:text-sky-600" fontSize="large" />

            </div>
            <div className=' px-10 md:px-52 xl:px-72'>
                <div className=" flex ">
                    <input
                        type="text"
                        className="w-full p-3  bg-transparent border border-purple-600 text-sm xl:text-lg  rounded-xl"
                        placeholder="Search Your Medias"
                        onChange={(e) => {
                            setSearchvalue(e.target.value);
                        }}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") {
                                serachapicall();
                            }
                        }}
                    />

                    <button
                        className="whitespace-nowrap text-left xl:text-center -ml-8 p-1 rounded-r-xl text-white bg-purple-600 hover:bg-purple-700  overflow-hidden"
                        onClick={serachapicall}
                    >
                        {" "}
                        <SearchIcon fontSize="medium" />
                    </button>
                </div>
            </div>
            {/* <Link href={` ../testid/${id}`}>
                <a>
                    <button>Test id btn</button>
                </a>
            </Link> */}
            {searchData && <div className="p-10">

                {searchData?.videos?.length !== 0 ? <div>
                    <h1 className="text-lg md:text-xl  font-semibold ">
                        Searches Videos
                    </h1>
                    <div className={`${style.podcast}  md:p-10`}>
                        {searchData?.videos?.map((elem: any) => (
                            <div key={elem.id}>
                                <Link href={`./videos/${elem?.id}`}>
                                    <a>
                                        <div className="  w-full my-3 flex gap-x-3 items-center  rounded-xl border hover:border-sky-500  cursor-pointer shadow-sm"
                                        >
                                            <div className={`h-full  `} >
                                                {elem?.thumbnailUrl ? (<Image
                                                    className="rounded-lg"
                                                    loader={myLoader}
                                                    src={elem?.thumbnailUrl}
                                                    width={100}
                                                    height={100}
                                                    alt=""
                                                />) : (<Image src={nullimg} alt="caruselimage" width={100} height={100} />)}
                                                {/* <Image src={elem.img} alt="caruselimage" width={100} height={100} /> */}


                                            </div>
                                            <div className=" w-full " >
                                                <h5 className=" text-base md:text-xl font-bold text-left">{elem?.name}</h5>
                                                {/* <h5 className=" text-sm md:text-lg font-medium text-left" >{elem?.artists[0]?.name}</h5> */}
                                            </div>

                                            <h5 className=" text-sm pr-5 text-gray-500 md:text-lg font-medium text-center flex justify-center items-center" >{(elem.duration / 60).toFixed(2)}min</h5>
                                        </div>
                                    </a>
                                </Link>

                            </div>

                        ))}
                    </div>
                </div> : <div className="">
                    <h1 className="text-lg md:text-xl  font-semibold ">
                        Searches Videos
                    </h1>
                    <h1 className="grid place-items-center py-16 text-lg  font-semibold"> No Data Found</h1>
                </div>}

                {searchData?.audio?.length !== 0 ? <div>
                    <h1 className="text-lg md:text-xl  font-semibold ">
                        Searches Audios
                    </h1>
                    <div className={`${style.podcast}  md:px-10`}>
                        {searchData?.audio?.map((elem: any) => (
                            <div key={elem.id}>
                                <Link href={`./musics/${elem?.id}`}>
                                    <a>
                                        <div className="  w-full my-3 flex gap-x-3 items-center  rounded-xl border hover:border-sky-500  cursor-pointer shadow-sm"
                                        >
                                            <div className={`h-full  `} >
                                                {elem?.thumbnailUrl ? (<Image
                                                    className="rounded-lg"
                                                    loader={myLoader}
                                                    src={elem?.thumbnailUrl}
                                                    width={100}
                                                    height={100}
                                                    alt=""
                                                />) : (<Image src={nullimg} alt="caruselimage" width={100} height={100} />)}
                                                {/* <Image src={elem.img} alt="caruselimage" width={100} height={100} /> */}


                                            </div>
                                            <div className=" w-full " >
                                                <h5 className=" text-base md:text-xl font-bold text-left">{elem?.name}</h5>
                                                {/* <h5 className=" text-sm md:text-lg font-medium text-left" >{elem?.artists[0]?.name}</h5> */}
                                            </div>

                                            <h5 className=" text-sm pr-5 text-gray-500 md:text-lg font-medium text-center flex justify-center items-center" >{elem.duration / 60}min</h5>
                                        </div>
                                    </a>
                                </Link>

                            </div>

                        ))}
                    </div>
                </div> : <div className="">
                    <h1 className="text-lg md:text-xl  font-semibold ">
                        Searches Audios
                    </h1>
                    <h1 className="grid place-items-center py-16 text-lg font-semibold"> No Data Found</h1>
                </div>}
            </div>}



            <div className=' px-10 py-5'>
                <h1 className=' text-lg xl:text-xl font-semibold'>Explore</h1>
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
                                            width={300}
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
            <div className=' px-10 py-5' >

                <div className=" flex justify-between items-center mb-5 text-heading">
                    <h1 className=" font-bold text-lg md:text-xl 2xl:text-2xl">Suggest Albums</h1>
                    {/* <button className=" font-bold text-xs md:text-base hover:text-sky-500 ">View All</button> */}
                </div>
                <SuggestAlbums />
            </div>
            {/* <div className=' px-10 py-5'>
                <div className=" flex justify-between items-center mb-5 text-heading">
                    <h1 className=" font-bold text-lg md:text-xl 2xl:text-2xl">Top Artist</h1>
                  
                </div>
                <PopularArtist />
            </div> */}
        </div>
    )
}

export default SearchPage