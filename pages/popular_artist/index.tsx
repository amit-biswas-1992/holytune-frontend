import PopularArtist from "../../Components/PoularArtist/PopularArtist";
import Link from "next/link";
import WestIcon from '@mui/icons-material/West';
function index() {
    return (
        <div className=" p-5" >
            <div className="text-xl md:text-3xl font-bold flex items-center gap-x-3"  >
                <Link href="./home">
                    <a className=" hover:text-sky-600">
                        <WestIcon fontSize="large" />
                    </a>
                </Link>
                <h5>  Populer Artists</h5>
            </div>
            <PopularArtist />
        </div>
    );
}

export default index;