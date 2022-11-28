import React from "react";
import Link from "next/link";
import WestIcon from "@mui/icons-material/West";
import Image from "next/image";
import userimg from "../../Assets/image/userimg.png";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useRouter } from 'next/router';
import { IMAGE_BASE_URL } from '../../utils/constants';
import { getDataApi } from '../../services/api.service';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { HomeInfo } from './../../models';
import Loader from '../Animations/Loader';
export default function Profile() {

  const router = useRouter()
  const [profileData, setProfileData] = useState<HomeInfo>()
  const [loading, setloading] = useState(false)
  console.log(loading, "homeloading");

  console.log(profileData, "profileData");



  const myLoader = ({ src, width, quality }: any) => {
    console.log(src, "src");

    console.log(`${IMAGE_BASE_URL}${src}`);

    return `${IMAGE_BASE_URL}${src}?w=${width}&q=${quality || 75}`;

  };
  const getprofileData = async () => {
    const url = "/users/profile";
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
      setProfileData(data.data)
      setloading(false)
      // navigate.push("../auth/verification");
    } catch (err) {
      toast.warning("somethoing wrong");
    }

  };
  useEffect(() => {
    const callApi = async () => {
      await getprofileData();
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
    <div className="py-5 px-2 xl:px-20  ">
      <div className=" flex items-center gap-x-3">
        <WestIcon onClick={() => router.push("../home")} className=" hover:text-sky-600" fontSize="large" />
        <p className="text-lg xl:text-2xl font-bold"> Profile</p>
      </div>

      <div className=" mx-3 xl:mx-44 ">
        <div className=" grid place-items-center border bg-white rounded-lg py-3 xl:py-10 mt-5  overflow-hidden ">
          <div className=" flex justify-between items-center  gap-5 xl:gap-x-16">
            <div className="  bg-cmnbg w-20 h-20 md:w-28 md:h-28  rounded-full  overflow-hidden shadow-md border hover:border-sky-500   ">
              {profileData?.userImage ? (<Image
                // className="rounded-2xl"
                loader={myLoader}
                src={profileData?.userImage}
                width={112}
                height={112}
                alt=""
              />) : (<Image className=" " src={userimg} width={112}
                height={112} alt="userimage" />)}

              {/* <Image className=" " src={userimg} alt="artistimage" /> */}
            </div>
            {/* <p>{profileData?.userImage}</p> */}
            <div>
              <h1 className=" font-bold text-xl first-letter:uppercase ">{profileData?.fullName}</h1>
              <p className=" text-base font-medium">{profileData?.msisdn}</p>
              <p className=" text-base font-medium">{profileData?.email}</p>
            </div>

          </div>
          <div>
            <Link href="../profile/updateProfile">
              <a>
                <button className=" rounded-xl px-10 py-2 mt-5 bg-sky-500 text-white font-medium text-base">Update profile</button>
              </a>
            </Link>

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
        <Link href="../faqs">
          <a>
            <div className="flex justify-between items-center hover:bg-white hover:rounded-xl hover:border hover:border-sky-500 py-3 px-5 cursor-pointer text-[#2E3E5C]">
              <div className="flex items-center space-x-8">
                <div className=" p-2 bg-white rounded-2xl">
                  <InfoOutlinedIcon />
                </div>

                <h1 className="font-semibold text-lg">FAQ</h1>
              </div>
              < ArrowForwardIosOutlinedIcon />

            </div>
          </a>
        </Link>

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
