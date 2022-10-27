import Image from "next/image";
import Link from "next/link";
import Logo from '../../Assets/image/logo.png';

// import style from '../../components/start.module.css';


const Start = () => {


  return (
    <div >



      <div className="text-white relative">

        <div className="grid place-items-center pt-6 pb-10">
          <div className="w-24 h-24 md:w-32 md:h-32 xl:w-44 xl:h-44 pb-5  rounded-full  overflow-hidden shadow-md border hover:border-sky-500    ">
            <Image className=" " src={Logo} alt="Logo" />
          </div>
        </div>


        <div className="pt-20">
          <div className=''>

            <div className="grid  place-items-center  px-8 md:px-80">

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
