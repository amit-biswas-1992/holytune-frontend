import React from 'react'
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
    return (
        <div className='p-5 '>

            <div className="text-xl md:text-3xl font-bold flex items-center gap-x-3"  >
                <Link href="../home">
                    <a className=" hover:text-sky-600">
                        <WestIcon fontSize="large" />
                    </a>
                </Link>

            </div>
            <div className='grid place-items-center px-5 md:px-16'>
                <Search className='  w-full rounded-2xl border border-slate-200 bg-slate-100 ' >
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search Here"
                        inputProps={{ "aria-label": "Search" }}
                    />
                </Search>
            </div>
            <div className=' px-10 py-5'>
                <h1 className=' text-lg xl:text-xl font-semibold'>Explore</h1>
                <div className='grid grid-cols-2  xl:grid-cols-4 gap-x-3 md:gap-x-0 md:px-10'>
                    <div className=" w-full   ">
                        <Image width={250} height={150} src={categoryimg1} alt="categoryimg" />
                    </div>
                    <div className=" w-full   ">
                        <Image width={250} height={150} src={categoryimg2} alt="categoryimg" />
                    </div>
                    <div className=" w-full   ">
                        <Image width={250} height={150} src={categoryimg3} alt="categoryimg" />
                    </div>
                    <div className=" w-full   ">
                        <Image width={250} height={150} src={categoryimg4} alt="categoryimg" />
                    </div>
                </div>
            </div>
            <div className=' px-10 py-5' >

                <div className=" flex justify-between items-center mb-5 text-heading">
                    <h1 className=" font-bold text-lg md:text-xl 2xl:text-2xl">Suggest Albums</h1>
                    {/* <button className=" font-bold text-xs md:text-base hover:text-sky-500 ">View All</button> */}
                </div>
                <SuggestAlbums />
            </div>
            <div className=' px-10 py-5'>
                <div className=" flex justify-between items-center mb-5 text-heading">
                    <h1 className=" font-bold text-lg md:text-xl 2xl:text-2xl">Top Artist</h1>
                    {/* <button className=" font-bold text-xs md:text-base hover:text-sky-500 ">View All</button> */}
                </div>
                <PopularArtist />
            </div>
        </div>
    )
}

export default SearchPage