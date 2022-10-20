import React from "react";
import Link from "next/link";
import WestIcon from "@mui/icons-material/West";
import Image from "next/image";
import artistimg from "../../Assets/image/artist.png";
export default function Profile() {
  return (
    <div className="py-5 px-2 xl:px-20  ">
      <div className=" flex items-center gap-x-3">
        <Link href="../home">
          <a>
            <WestIcon className="  hover:text-sky-600" fontSize="large" />
          </a>
        </Link>
        <p className="text-lg xl:text-2xl font-bold"> Videos</p>
      </div>
      <div>
        <div>
          <div className="bg-cmnbg w-32 h-32 md:w-40 md:h-40  rounded-full  overflow-hidden shadow-md border hover:border-sky-500   ">
            <Image className=" " src={artistimg} alt="artistimage" />
          </div>
        </div>
      </div>
    </div>
  );
}
