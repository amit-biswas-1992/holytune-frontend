import React from 'react'
import Image from "next/image";
import Link from "next/link";

export default function NewRealeasecard({ videoitemList }: any) {

  return (
    <div>
      <div >




        <div className=' xl:px-20 pb-20 pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2'>
          {videoitemList.map((elem: any) => (
            <div key={elem.id} className=" w-full py-5 hover:border hover:border-sky-300 rounded-xl shadow-sm  "
            >
              <Link href="./videos">
                <a >

                  <div className={` md:px-3 `} >
                    <Image src={elem.img} alt="caruselimage" width={350} height={200}
                    />
                    <p className="text-title text-sm md:text-base xl:text-lg pr-10">{elem?.title}</p>
                    <p className=" cursor-pointer text-sky-600 text-center text-sm md:text-base xl:text-lg pt-3">Click to watch</p>
                  </div>
                </a>

              </Link>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
