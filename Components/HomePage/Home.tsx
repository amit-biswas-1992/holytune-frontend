import React from 'react'
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import userimg from "../../Assets/image/artist.png"
import HomeSlider from './HomeSlider';
import ExploreCategory from './ExploreCategory';
import NewReleaseVideo from './NewReleaseVideo';
import AudioPlayer from './AudioPlayer';
import PopularArtistSlider from './PopularArtistSlider';
import Mood from './Mood';
import Album from './Album';
import SuggestVideos from './SuggestVideos';
import Podcast from './Podcast';

import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IMAGE_BASE_URL } from '../../utils/constants';
import { getDataApi } from '../../services/api.service';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { HomeInfo } from './../../models';

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,

    marginRight: theme.spacing(2),
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


const Home = () => {


    const [homeData, setHomeData] = useState<HomeInfo>()
    console.log(homeData, "homeData");



    const myLoader = ({ src, width, quality }: any) => {
        // console.log(src, "src");

        // console.log(`${IMAGE_BASE_URL}${src}`);

        return `${IMAGE_BASE_URL}${src}?w=${width}&q=${quality || 75}`;

    };
    const gethomeData = async () => {
        const url = "/dashboard/home";
        try {

            const data = await getDataApi(url);
            if (data.statusCode) {
                console.log('this block')
                // toast.warning("Please Input a correct Number");
                return;
            }
            // console.log("dataforotp", data);
            // localStorage.setItem("msisdn", JSON.stringify(payload.msisdn));
            setHomeData(data.data)
            // navigate.push("../auth/verification");
        } catch (err) {
            toast.warning("somethoing wrong");
        }

    };
    useEffect(() => {
        const callApi = async () => {
            await gethomeData();
        };
        callApi();
    }, []);
    return (
        <div className="p-5 md:p-10">
            <div>
                <div className=' flex justify-between items-center'>
                    <div className=" flex items-center gap-5 ">

                        <div className=' w-10 h-10 border border-heading cursor-pointer  hover:border-sky-600 rounded-full'>
                            <Link href="/profile">
                                <a> <Image className=" rounded-full" src={userimg} alt="artistimage" /></a>
                            </Link>

                        </div>


                        <div >
                            <h1 className=' text-xl font-bold'>Hi There !</h1>
                            <p className=' text-sm'>Subscribe for Premium experience</p>
                        </div>
                    </div>
                    <Link href="/search">

                        <a>
                            <div>
                                <div className='block md:hidden'>
                                    <SearchIcon fontSize='large' />
                                </div>
                                <div className='hidden md:block'>
                                    <Search className='bg-cmnbg w-full' >
                                        <SearchIconWrapper>
                                            <SearchIcon />
                                        </SearchIconWrapper>
                                        <StyledInputBase
                                            placeholder="Search…"
                                            inputProps={{ "aria-label": "search" }}
                                        />
                                    </Search>
                                </div>

                            </div>
                        </a>
                    </Link>

                </div>
                <div className="px-3">
                    <div className=' mt-10 mb-5'>
                        <HomeSlider
                            homeSlider={homeData?.randomVideos}
                        />
                    </div>
                    <div className=' mb-5'>
                        <ExploreCategory
                            exploreCategory={homeData?.allCategories}
                        />
                    </div>
                    <div className=' mb-5'>
                        <NewReleaseVideo
                            newReleaseVideo={homeData?.latestVideos}
                        />
                    </div>
                    <div className=' mb-5'>
                        <AudioPlayer
                            audioPlayer={homeData?.allAudio}
                        />
                    </div>
                    <div className=' mb-5'>
                        <PopularArtistSlider
                            popularArtistSlider={homeData?.popularArtists}
                        />
                    </div>
                    <div className=' mb-5'>
                        <Mood />
                    </div>
                    <div className=' mb-5'>
                        <Podcast />
                    </div>
                    <div className=' mb-5'>
                        <Album
                            albumslider={homeData?.allAlbums}
                        />
                    </div>
                    <div className=' mb-5 pb-10'>
                        <SuggestVideos
                            suggestVideos={homeData?.suggestedVideos}
                        />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Home