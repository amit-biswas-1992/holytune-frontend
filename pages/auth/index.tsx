import Image from "next/image";
import Link from "next/link";
// import Logo from '../../components/assets/CMV.png';

// import style from '../../components/start.module.css';


const Start = () => {


  return (
    <div >



      <div className="text-white relative">

        <div className="grid place-items-center pt-6 pb-40">
          {/* <Image className="h-8" src={Logo} alt='' /> */}
        </div>


        <div className="pt-44">
          <div className=''>

            <div className="grid  place-items-center px-8 md:px-80">
              <Link href='../auth/register'>
                {/* <button className="rounded-2xl w-full py-4 my-4 mt-8 bg-sky-600 hover:bg-sky-700 text-white text-center">
                  Get Started
                </button> */}
                <button className="custom-btn getStartedBtn  text-xl p-3 "><span>Lets Go!</span><span>  Get Started</span></button>
              </Link>
              {/* <Link href='../auth/login'>
                        <button className="mt-2 grid place-items-center text-center">Log In</button>
                        </Link> */}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Start;
