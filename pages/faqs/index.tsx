import React from 'react'
import { useRouter } from "next/router";
import WestIcon from "@mui/icons-material/West";
import Link from 'next/link'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Faqs = () => {
    const router = useRouter();
    return (
        <div className="py-5 px-2 xl:px-20  ">
            <div className=" flex items-center gap-x-3">
                <WestIcon onClick={() => router.back()} className=" hover:text-sky-600" fontSize="large" />
                <p className="text-lg xl:text-2xl font-bold">FAQS</p>
            </div>
            <div className='mt-4'>
                <div className='mb-4 font-body'>
                    <Accordion className='  p-3 mx-4 rounded-2xl'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className='text-black' />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            className='rounded-2xl'>
                            <Typography className='text-black'>What is Drama Buzz?</Typography>
                        </AccordionSummary>
                        <AccordionDetails className=''>
                            <Typography className='text-black'>
                                Drama Buzz is the streaming channel where user can enjoy drama.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className='mb-4'>
                    <Accordion className='  p-3 mx-4 rounded-2xl'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className='text-black' />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            className='rounded-2xl'>
                            <Typography className='text-black'>How to subscribe?</Typography>
                        </AccordionSummary>
                        <AccordionDetails className=''>
                            <Typography className='text-black'>
                                To subscribe packages user have to download this apps first. After that they can buy any packages out of 2. Select any package -- go to the payment procedure – complete payment to subscribe.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className='mb-4'>
                    <Accordion className='  p-3 mx-4 rounded-2xl'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className='text-black ml-auto' />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                            className='rounded-2xl'>
                            <Typography className='text-black'>How to unsubscribe this service?</Typography>
                        </AccordionSummary>
                        <AccordionDetails className=''>
                            <Typography className='text-black'>
                                Please follow the step- (Profile – unsubscribe – confirm)
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className='mb-4'>
                    <Accordion className='  p-3 mx-4 rounded-2xl'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className='text-black ml-auto' />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                            className='rounded-2xl'>
                            <Typography className='text-black'>Is there any cost for watching drama?</Typography>
                        </AccordionSummary>
                        <AccordionDetails className=''>
                            <Typography className='text-black'>
                                Only need to subscriptions fee will be charged, after that it’s free to watch. Only consume date of internet to watch.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className='mb-4'>
                    <Accordion className='  p-3 mx-4 rounded-2xl'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon className='text-black ml-auto' />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                            className='rounded-2xl'>
                            <Typography className='text-black'>How much money I have to pay to subscribe? </Typography>
                        </AccordionSummary>
                        <AccordionDetails className=''>
                            <Typography className='text-black'>
                                There are 2 kinds of subscribe module <br />
                                -	15 days package- 29 taka only<br />
                                -	30 days package- 39 taka only

                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
            <div className=''>
            </div>
        </div>
    )
}

export default Faqs