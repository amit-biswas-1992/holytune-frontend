import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import UserInfo from './../../models/userInfo';
import { toast } from "react-toastify";
import { callApi, updateProfileApi } from "../../services/api.service";
import RegisterAnimation from './../AuthPage/RegisterAnimation';
import Updateanimation from './Updateanimation';
import WestIcon from "@mui/icons-material/West";
const UpdateProfile = () => {
    const [userinfo, setUserinfo] = useState<UserInfo>({});
    console.log(userinfo, "userinfo");
    const router = useRouter()
    const [userName, setUserName] = useState("");
    const [img, setImg] = useState(null);
    const apiCall = async () => {

        const url = "/core/get-user-profile/";
        try {
            const ApiCall = await callApi(url);
            // console.log(ApiCall.user, "ApiCall.user");

            setUserinfo(ApiCall.user);

        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        apiCall();
    }, []);
    const updateProfile = async () => {
        // const name = userName ? userName : userinfo.name;
        // const userid = userinfo.id;
        // const userimg = img ? img : userinfo.user_image;
        // const data = { name, userid, userimg };
        // const url = "/core/update-user-profile/";
        // try {
        //     const ApiCall = await updateProfileApi(url, data);
        //     toast.success("Successfully Updated");

        // } catch (err) {
        //     console.log(err);
        // }
        router.push("../profile");
    };

    const onImageChange = (e: any) => {
        const file = e.target.files[0];
        setImg(file);
    };
    return (
        <div className="py-5 px-2 xl:px-20  ">
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
                        className="w-full py-3 my-2  bg-white text-lg  border border-sky-400 hover:border-sky-500 rounded-md hover:shadow-md"
                        type="text"
                        // defaultValue={userinfo.name}
                        onChange={(e) => {
                            setUserName(e.target.value);
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
