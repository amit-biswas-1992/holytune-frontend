import React from 'react'
import { useRouter } from "next/router";
import WestIcon from "@mui/icons-material/West";
import Link from 'next/link'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { getDataApi } from "../../services/api.service";
import Loader from './../../Components/Animations/Loader';


const Faqs = () => {
    const router = useRouter();

    const [loading, setloading] = useState(false)
    const [faqsData, setFaqsData] = useState([])
    console.log(faqsData, "faqsData");


    const getfaqsData = async () => {
        const url = "/faqs";
        try {
            setloading(true)
            const data = await getDataApi(url);

            if (data.statusCode) {
                console.log('this block')
                // toast.warning("Please Input a correct Number");
                return;
            }
            // console.log("dataforotp", data);
            // localStorage.setItem("msisdn", JSON.stringify(payload.msisdn));
            setFaqsData(data.data)
            setloading(false)
            // navigate.push("../auth/verification");
        } catch (err) {
            toast.warning("somethoing wrong");
        }

    };
    useEffect(() => {
        const callApi = async () => {
            await getfaqsData();
        };
        callApi();
    }, []);
    if (loading === true) {
        return (
            <div className=" grid place-items-center xl:h-screen ">
                <Loader />
            </div>
        );
    }
    return (
        <div className="pt-5 pb-16 px-2 xl:px-20  ">
            <div className=" flex items-center gap-x-3">
                <WestIcon onClick={() => router.back()} className=" hover:text-sky-600" fontSize="large" />
                <p className="text-lg xl:text-2xl font-bold">FAQS</p>
            </div>
            <div className='mt-4'>
                {faqsData?.map((faqs: any) => (
                    <div key={faqs?.id} className='mb-4 font-body'>
                        <Accordion className='  p-3 mx-4 rounded-2xl'>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon className='text-black' />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                className='rounded-2xl'>
                                <Typography className='text-black'>{faqs?.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails className=''>
                                <Typography className='text-black'>
                                    {faqs?.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                ))}


            </div>
            <div className=''>
            </div>
        </div>
    )
}

export default Faqs