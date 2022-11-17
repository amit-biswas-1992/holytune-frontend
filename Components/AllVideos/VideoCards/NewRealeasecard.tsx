import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { IMAGE_BASE_URL } from '../../../utils/constants';
import nullimg from "../../../Assets/image/notfound.png"
export default function NewRealeasecard({ videoitemList }: any) {
  // console.log(videoitemList, "videoitemList");
  const myLoader = ({ src, width, quality }: any) => {
    // console.log(src, "src");

    // console.log(`${IMAGE_BASE_URL}${src}`);

    return `${IMAGE_BASE_URL}${src}?w=${width}&q=${quality || 75}`;

  };
  return (
    <div>
      <div >




        <div className=' xl:px-20 pb-20 pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2'>
          {videoitemList?.latests?.map((elem: any) => (
            <div key={elem.id} className=" w-full py-5 hover:border hover:border-sky-300 rounded-xl shadow-sm  "
            >
              <Link href={`./videos/${elem.id}`}>
                <a >

                  <div className={` flex flex-col justify-between md:px-3 `} >
                    {elem?.thumbnailUrl ? (<Image
                      className="rounded-2xl"
                      loader={myLoader}
                      src={elem?.thumbnailUrl}
                      width={350}
                      height={200}
                      alt=""
                    />) : (<Image src={nullimg} alt="caruselimage" width={350} height={200} />)}

                    {/*  */}
                    <p className="text-title text-sm md:text-base xl:text-lg pr-10">{elem?.name}</p>
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
