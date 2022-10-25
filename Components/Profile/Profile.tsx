import React from "react";
import Link from "next/link";
import WestIcon from "@mui/icons-material/West";
import Image from "next/image";
import artistimg from "../../Assets/image/artist.png";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
export default function Profile() {
  return (
    <div className="py-5 px-2 xl:px-20  ">
      <div className=" flex items-center gap-x-3">
        <Link href="../home">
          <a>
            <WestIcon className="  hover:text-sky-600" fontSize="large" />
          </a>
        </Link>
        <p className="text-lg xl:text-2xl font-bold"> Profile</p>
      </div>

      <div className=" mx-6 xl:mx-44 ">
        <div className=" grid place-items-center border bg-white rounded-lg py-3 xl:py-10 mt-5  overflow-hidden ">
          <div className=" flex justify-between items-center  gap-5 xl:gap-x-16">
            <div className="  bg-cmnbg w-20 h-20 md:w-28 md:h-28  rounded-full  overflow-hidden shadow-md border hover:border-sky-500   ">
              <Image className=" " src={artistimg} alt="artistimage" />
            </div>
            <div>
              <h1 className=" font-bold text-xl ">Ebrahim Islam</h1>
              <p className=" text-base font-medium">+8801670070109</p>
              <p className=" text-base font-medium">istiahmed@gmail.com</p>
            </div>

          </div>
          <div>
            <button className=" rounded-xl px-10 py-2 mt-5 bg-sky-500 text-white font-medium text-base">Update profile</button>
          </div>


        </div>
      </div>
      <div>
        <h1 className=" py-3 font-medium text-lg">Current Package</h1>
        <div className=" py-3 px-5 rounded-xl border flex justify-between items-center bg-white ">
          <div>
            <p className=" text-sm font-medium">Mini Packages</p>
            <p className=" text-sm font-medium text-gray-500" >15 Days</p>
          </div>
          <h1 className=" text-xl font-bold">29 BDT </h1>
        </div>
      </div>

      <div className=" mt-12 ">

        <div className="flex justify-between items-center hover:bg-white hover:rounded-xl hover:border hover:border-sky-500 py-3 px-5 cursor-pointer text-[#2E3E5C]">
          <div className="flex items-center space-x-8">
            <div className=" p-2 bg-white rounded-2xl">
              <InfoOutlinedIcon />
            </div>

            <h1 className="font-semibold text-lg">FAQ</h1>
          </div>
          < ArrowForwardIosOutlinedIcon />

        </div>
        <div className="flex justify-between items-center hover:bg-white hover:rounded-xl hover:border hover:border-sky-500 py-3 px-5 cursor-pointer text-[#2E3E5C]">
          <div className="flex items-center space-x-8">
            <div className=" p-2 bg-white rounded-2xl">
              <FileDownloadOutlinedIcon />
            </div>

            <h1 className="font-semibold text-lg">Downloads</h1>
          </div>

          < ArrowForwardIosOutlinedIcon />

        </div>

      </div>

    </div>
  );
}
