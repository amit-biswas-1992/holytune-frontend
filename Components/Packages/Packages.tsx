import Link from "next/link";
import WestIcon from '@mui/icons-material/West';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import HdOutlinedIcon from '@mui/icons-material/HdOutlined';
const Packages = () => {
    const packageplan = [
        {
            "id": "1",
            "name": "Mini Packages",
            "validity": "15 Days",
            "price": "29 BDT"
        },
        {
            "id": "2",
            "name": "Standard Packages",
            "validity": "30 Days",
            "price": "39 BDT"
        }
    ];
    return (
        <div className=" p-5" >
            <div className="text-xl md:text-3xl font-bold flex items-center gap-x-3"  >
                <Link href="./">
                    <a className=" hover:text-sky-600">
                        <WestIcon fontSize="large" />
                    </a>
                </Link>    <h5>  Packages</h5>
            </div>
            <div className=" md:px-20">
                <div className="py-4">
                    <h5 className=" text-lg md:text-2xl font-bold" >Enjoy Unlimited Music & Videos</h5>
                    <div className="my-4" >
                        <h5 className="px-4 text-sm md:text-lg p-2" ><LockOutlinedIcon color="warning" fontSize="medium" /> Unlock premium Natok and dramas</h5>
                        <h5 className="px-4 text-sm  md:text-lg p-2"  ><FileDownloadOutlinedIcon color="info" fontSize="medium" /> Unlimited download</h5>
                        <h5 className="px-4 text-sm  md:text-lg p-2" ><HdOutlinedIcon color="secondary" fontSize="medium" /> Watch in HD to 4K resolution</h5>


                    </div>
                </div>
                <div>
                    <div>
                        <h6 className=" text-lg md:text-xl font-bold" >Select Premium Plan</h6>
                        <p className=" text-sm md:text-lg py-2" >Ad-Free, Unlimited offline Downloads and playlist</p>
                    </div>
                    <div>
                        {packageplan.map((pkg) => (
                            <div key={pkg.id} className=" flex justify-between items-center rounded-xl border hover:border-sky-500  cursor-pointer shadow-sm py-3 md:py-5 px-5 md:px-14 my-4"
                            >
                                <div >
                                    <h5 className=" text-base md:text-xl">{pkg.name}</h5>
                                    <h5 className=" text-sm md:text-lg text-sky-700 font-semibold" >{pkg.validity}</h5>
                                </div>
                                <h5 className=" text-xl md:text-2xl font-bold" >{pkg.price}</h5>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </div >

    );
}
export default Packages;