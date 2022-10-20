import React from 'react'
import Link from "next/link";
import WestIcon from '@mui/icons-material/West';
import Image from "next/image";
import specificcategoryimg from "../../Assets/image/specificCategory.svg";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import NewRealeasecard from './VideoCards/NewRealeasecard';
import HolytuneExclusiveCard from './VideoCards/HolytuneExclusiveCard';
import SyedAhmedExclusiveCard from './VideoCards/SyedAhmedExclusiveCard';
import { fontWeight } from '@mui/system';
import img1 from "../../Assets/image/sliderimg1.png";
import img2 from "../../Assets/image/sliderimg2.png";
import img3 from "../../Assets/image/sliderimg3.png";
import img4 from "../../Assets/image/sliderimg4.png";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
export default function AllVideoCards() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const videoitemList = [
        {
            "id": "1",
            "img": img1,
            "title": "সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ",


        },
        {
            "id": "2",
            "img": img2,
            "title": "সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ",



        },
        {
            "id": "3",
            "img": img3,
            "title": "সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ",



        },
        {
            "id": "4",
            "img": img4,
            "title": "সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ",



        },
        {
            "id": "5",
            "img": img2,
            "title": "সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ",



        },
        {
            "id": "6",
            "img": img1,
            "title": "সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ",


        },
        {
            "id": "7",
            "img": img4,
            "title": "সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ",


        },
        {
            "id": "8",
            "img": img3,
            "title": "সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ",


        },
        {
            "id": "9",
            "img": img2,
            "title": "সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ",


        },
        {
            "id": "10",
            "img": img4,
            "title": "সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ",


        },
        {
            "id": "11",
            "img": img2,
            "title": "সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ",


        },
        {
            "id": "12",
            "img": img1,
            "title": "সময়ের সেরা নতুন গজল । Ishq E Nabi Jindabad । ইশকে নাবী জিন্দাবাদ",


        },
    ];

    return (
        <div className='py-5 px-2 xl:px-20  '>
            <div className=' flex items-center gap-x-3'>
                <Link href="../home">
                    <a>
                        <WestIcon className="  hover:text-sky-600" fontSize="large" />

                    </a>
                </Link>
                <p className='text-lg xl:text-2xl font-bold'> Videos</p>
            </div>
            <div>
                <div className=" ">

                    <div className=" grid place-items-center font-bold pt-7">

                        <div>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                                className=" mr-2 ml-2"
                                sx={{
                                    "& .MuiTabs-flexContainer": {
                                        display: "flex",
                                        justifyContent: "space-between",
                                    },
                                    "& button": { padding: "0 20px", fontWeight: "bold" },
                                    // "& .Mui-selected": {
                                    //     color: "#ffff",
                                    //     background: " rgb(2 132 199)",
                                    //     border- radius:" 30px"},

                                }}

                                variant="scrollable"
                                // scrollButtons="auto"
                                scrollButtons
                                allowScrollButtonsMobile


                            >
                                <Tab label="New Realease"  {...a11yProps(0)} />
                                <Tab label="Holy Tune Exclusive" {...a11yProps(1)} />
                                <Tab label="Sayed Ahmad Exclusive"  {...a11yProps(2)} />
                                {/* <Tab label="Video Ghazal" {...a11yProps(3)} /> */}

                            </Tabs>

                        </div>
                    </div>

                    <TabPanel value={value} index={0}>
                        <div className='pb-10'>
                            <NewRealeasecard
                                videoitemList={videoitemList}
                            />

                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className='pb-10'>
                            <NewRealeasecard
                                videoitemList={videoitemList}
                            />

                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div className='pb-10'>
                            <NewRealeasecard
                                videoitemList={videoitemList}
                            />

                        </div>
                    </TabPanel>
                </div>
            </div>
        </div >
    )
}
