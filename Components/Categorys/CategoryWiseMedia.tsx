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
import Audiocard from './Audiocard';
import VideoCard from './VideoCard';

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
export default function CategoryWiseMedia() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return (
        <div className=' p-5 xl:px-20 '>
            <div className=' flex items-center gap-x-3'>
                <Link href="../home">
                    <a>
                        <WestIcon className="  hover:text-sky-600" fontSize="large" />

                    </a>
                </Link>
                <p className='text-lg xl:text-2xl font-bold'> Ghazal</p>
            </div>
            <div>
                <div className=" ">

                    <div className="grid place-items-center  pt-7">
                        <div className="  ">
                            <Image className=" " src={specificcategoryimg} alt="artistimage" />
                        </div>
                        <p className="text-base xl:text-lg font-medium  pt-2">Ghazal</p>
                        <p className="text-base xl:text-lg  pt-2"> 1000 Item Ghazal</p>
                        <div>
                            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                                className=" mr-2 ml-2"
                                sx={{
                                    "& .MuiTabs-flexContainer": {
                                        display: "flex",
                                        justifyContent: "space-between",
                                    },
                                    "& button": { padding: "0 20px" },
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
                                <Tab label="Audio Ghazal"  {...a11yProps(0)} />
                                <Tab label="Video Ghazal" {...a11yProps(1)} />

                            </Tabs>

                        </div>
                    </div>

                    <TabPanel value={value} index={0}>
                        <div className='pb-10'>
                            <Audiocard />

                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className='pb-10'>
                            <VideoCard />

                        </div>
                    </TabPanel>
                </div>
            </div>
        </div >
    )
}
