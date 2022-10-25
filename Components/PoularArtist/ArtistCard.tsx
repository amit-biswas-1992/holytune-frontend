import React from 'react'
import Image from 'next/image';

function ArtistCard({ img, title, numOfSongs }: any) {
    return (
        <div className='grid place-items-center'>
            {/* <div >
                <Image className=" rounded-full w-20 h-20" src={img} alt="artistimage" />
            </div> */}
            <div className="bg-cmnbg w-24 h-24 md:w-32 md:h-32 xl:w-40 xl:h-40  rounded-full  overflow-hidden shadow-md border hover:border-sky-500   ">
                <Image className=" " src={img} alt="artistimage" />
            </div>
            <div className=' text-center'>
                <h1 className=' text-sm xl:text-lg'>{title}</h1>
                <h1 className=' text-sm xl:text-lg'>{numOfSongs}</h1>
            </div>

        </div>
    )
}

export default ArtistCard