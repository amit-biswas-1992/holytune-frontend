import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import UserInfo from './../../models/userInfo';
import { toast } from "react-toastify";
import { getDataApi, updateProfileApi } from "../../services/api.service";
import RegisterAnimation from './../AuthPage/RegisterAnimation';
import Updateanimation from './Updateanimation';
import WestIcon from "@mui/icons-material/West";
import { IMAGE_BASE_URL } from '../../utils/constants';
const UpdateProfile = () => {

    const router = useRouter()

    const [userinfo, setUserinfo] = useState<UserInfo>({});
    console.log(userinfo, "userinfo");

    const [userName, setUserName] = useState("");
    const [userEmail, setuserEmail] = useState("");
    const [img, setImg] = useState(null);

    const [loading, setloading] = useState(false)
    const myLoader = ({ src, width, quality }: any) => {
        // console.log(src, "src");
        // console.log(`${IMAGE_BASE_URL}${src}`);
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
            setUserinfo(data.data)
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
    const updateProfile = async () => {
        // const name = userName ? userName : userinfo?.fullName;
        // const email = userEmail ? userEmail : userinfo?.email;

        // const userimg = img ? img : userinfo.user_image;
        console.log(userName, userEmail, "user");

        const data = {
            fullName: userName ? userName : userinfo?.fullName,
            email: userEmail ? userEmail : userinfo?.email,
            // userImage: "",
        };
        const url = "/users/profile";
        try {
            const ApiCall = await updateProfileApi(url, JSON.stringify(data));
            console.log(ApiCall, "ApiCall")
            toast.success("Successfully Updated");
            // router.push("../profile");
        } catch (err) {
            console.log(err);
        }

    };

    const onImageChange = (e: any) => {
        const file = e.target.files[0];
        setImg(file);
    };
    return (
        <div className="pt-5 pb-16 px-2 xl:px-20   ">
            <div className=" flex items-center gap-x-3">
                <WestIcon onClick={() => router.back()} className=" hover:text-sky-600" fontSize="large" />
                <p className="text-lg xl:text-2xl font-bold">Update Profile</p>
            </div>
            <div className=" p-2  grid place-items-center h-screen ">
                <Updateanimation />
                <div className="mx-4">
                    {/* <Link href="../profile/profile">
            <a> */}

                    <label className=" font-semibold text-lg">Enter your Name</label>
                    <input
                        className="w-full py-3 px-2 my-2  bg-white text-lg  border border-sky-400 hover:border-sky-500 rounded-md hover:shadow-md"
                        type="text"
                        defaultValue={userinfo?.fullName}
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                    />
                    <label className=" font-semibold text-lg">Enter your Email</label>
                    <input
                        className="w-full py-3 px-2 my-2  bg-white text-lg  border border-sky-400 hover:border-sky-500 rounded-md hover:shadow-md"
                        type="text"
                        defaultValue={userinfo?.email}
                        onChange={(e) => {
                            setuserEmail(e.target.value);
                        }}
                    />
                    <p className=" font-semibold text-lg pb-2" >Enter Image</p>
                    {/* <input
              className="w-full py-3 my-2 text-xl text-black"
              type="file"
              onChange={onImageChange}
            /> */}
                    <br />
                    <label htmlFor="profileimg">
                        <input
                            style={{ display: "none" }}
                            id="profileimg"
                            name="profileimg"
                            onChange={onImageChange}
                            type="file"
                        />
                        <Button
                            // color="secondary"
                            variant="contained"
                            component="span"
                            className=" hover:text-white  hover:bg-sky-600"
                            style={{
                                width: "100%",
                                padding: "10px",
                                // color: "#ffffff"
                            }}
                        >
                            Upload Your Profile Image
                        </Button>
                    </label>
                    {/* <input
              onClick={updateProfile}
              value="Submit"
              className="w-full py-4 my-4 mt-8 px-10 bg-sky-600 hover:bg-sky-700  text-center"
            /> */}
                    <button

                        onClick={updateProfile}
                        className="w-full py-4 my-4 mt-8 px-10 text-lg font-bold bg-sky-600 hover:bg-sky-700 text-white  text-center"
                    >
                        Update
                    </button>
                    {/* </a>
            </Link> */}

                    {/* </a>
          </Link> */}
                </div>
                <div className="mx-4"></div>
            </div>
        </div>
    );
};
export default UpdateProfile;
