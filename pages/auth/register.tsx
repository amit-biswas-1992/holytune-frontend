import { Input } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
// import "react-phone-number-input/style.css";
import { toast } from "react-toastify";

import { generateotp } from './../../services/api.service';
const Register = () => {
  const navigate = useRouter();
  const [num, setNum] = useState("");
  const [isError, setIsError] = useState(false);
  // let number: any = useRef();
  // console.log(number);

  const handleNumChange = (e: any) => {
    // event.preventDefault()

    setNum(e.target.value);
    if (e.target.value.length > 11) {
      setIsError(true);
    } else if (e.target.value.length < 11) {
      setIsError(true);
    } else {
      setIsError(false);
    }
  };

  const loginApp = async () => {
    const datakey = { num };
    const url = "/notification/generate-otp";
    try {

      // const data = await generateotp(url, datakey);
      // if (data.statusCode) {
      //   console.log('this block')
      //   toast.warning("Please Input a correct Number");
      //   return;
      // }
      // // console.log("dataforotp", data);
      // localStorage.setItem("login_response", JSON.stringify(data.receiver));

      navigate.push("../auth/verification");
    } catch (err) {
      toast.warning("Please Input a correct Number");
    }

  };

  return (
    <div className="grid  place-items-center h-screen">
      <div className="m-2 p-2 ">
        <div>
          <h1 className="text-xl">Enter your Mobile Number</h1>

          <Input
            className="w-full py-3 px-3 my-2 bg-white text-lg border hover:border-sky-600 rounded-lg "
            type="number"
            id="num"
            name="num"
            error={isError}
            value={num}
            autoFocus
            // ref={number}
            onChange={handleNumChange}
            placeholder="Please Enter a Valid Number "
          />
          {isError === true ? (
            <p className=" text-xs 2xl:text-lg pt-3 text-red-500">
              Your number is not correct, please enter 11 numbers
            </p>
          ) : (
            <p></p>
          )}

          {/* <div>
              <p className='mt-6 w-full py-4'>By continuing, you agree to our terms and conditions</p>
            
              <button onClick={loginApp} className='w-full py-4 my-4 mt-8 px-10 bg-sky-600 hover:bg-sky-700 text-white text-center'>Continue</button>
    
            </div> */}
          <div className=" mb-6">
            <label className=" block text-gray-400 font-bold">
              <span className="text-sm  md:text-lg text-center font-normal">
                By continuing, you agree to our terms and conditions
              </span>
            </label>
          </div>

          <div className=" mt-16">
            {isError === true ? (
              <button
                disabled
                className="shadow  bg-gray-300  focus:shadow-outline focus:outline-none text-sm 2xl:text-xl text-white font-semibold py-2 px-4 rounded-xl w-full"
                type="button"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={loginApp}
                className="shadow  bg-cyan-500 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-sm 2xl:text-xl text-white font-semibold py-4 px-4 rounded-md w-full"
                type="button"
              >
                Continue
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
