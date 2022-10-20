import React from 'react'
import Image from 'next/image';

function ArtistCard({ img, title, numOfSongs }: any) {
    return (
        <div className='grid place-items-center'>
            {/* <div >
                <Image className=" rounded-full w-20 h-20" src={img} alt="artistimage" />
            </div> */}
            <div className="bg-cmnbg w-32 h-32 md:w-40 md:h-40  rounded-full  overflow-hidden shadow-md border hover:border-sky-500   ">
                <Image className=" " src={img} alt="artistimage" />
            </div>
            <div className=' text-center'>
                <h1>{title}</h1>
                <h1>{numOfSongs}</h1>
            </div>

        </div>
    )
}

export default ArtistCard