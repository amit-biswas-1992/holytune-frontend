import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
// import 'react-phone-number-input/style.css';

import { toast } from "react-toastify";

import { createUserProfile } from './../../services/api.service';
import RegisterAnimation from './../../Components/AuthPage/RegisterAnimation';
const Register = () => {
  const navigate = useRouter();
  const [userName, setUserName] = useState('');
  console.log(userName);

  const [userNum, setUserNum] = useState("");
  console.log(userNum);

  // useEffect(() => {
  //   const loginData = JSON.parse(localStorage.getItem('login_response'));

  //   setUserNum(loginData);

  // }, []);
  const handleValueChange = (event: any) => {

    setUserName(event.target.value)
  };

  const createProfile = async () => {

    const datakey = { userNum, userName };
    console.log(datakey, "datakey");

    const url = "/core/create-user-profile";
    navigate.push("../popular_artist");
    // try {
    //   const data = await createUserProfile(url, datakey);
    //   if (data.statusCode) {
    //     console.log('this block')
    //     toast.warning("Please Input Your Name")
    //     return;
    //   }

    //   localStorage.setItem("user_token", data.token);

    //   navigate.push("../home");
    //   toast.success("Login Successfull");
    // } catch (error: any) {
    //   toast.warning("Please Input Your Name")

    // }


  };

  return (
    <div className=' grid place-items-center  font-body'>
      <div >
        {/* <Image className=" w-full" src={varificationimg} alt="" /> */}
        <RegisterAnimation />
      </div>
      <div className='m-2 p-2 '>
        <div className='mx-4'>
          <form action="/send-data-here" method="post">
            <label>Enter your Name</label>
            <input autoFocus className='w-full py-3 px-3 my-2 bg-white text-xl text-black border-2 border-sky-600' type="text" id="text" name="text"
              placeholder='Please Input your name '
              required
              onChange={handleValueChange}
            />


          </form>
        </div>
        <div className='mx-4'>
          {/* <Link href='../home'>  </Link> */}
          <button onClick={createProfile} type="submit" className='w-full py-4 my-4 mt-8 px-10 bg-sky-600 hover:bg-sky-700 text-white text-center text-lg'>Continue</button>

        </div>

      </div>

    </div>
  )
}

export default Register
