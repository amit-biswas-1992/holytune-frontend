import React, { useEffect, useState } from 'react';
import CategoryWiseMedia from "../../Components/Categorys/CategoryWiseMedia";
import { useRouter } from 'next/router';
import { getDataApi } from '../../services/api.service';
import { toast } from 'react-toastify';
const Category_wise_media = () => {
    const router = useRouter();
    let catid = router.query.catid;
    const [catData, setCatData] = useState([])
    // console.log(catData, "catData");


    const getCategoryData = async () => {

        const url = `/categories/${catid}/medias`;
        console.log(url, "url");

        try {

            const data = await getDataApi(url);
            if (data.statusCode) {
                console.log('this block')
                // toast.warning("Please Input a correct Number");
                return;
            }
            console.log("data", data);
            // localStorage.setItem("msisdn", JSON.stringify(payload.msisdn));
            setCatData(data.data)
            // navigate.push("../auth/verification");
        } catch (err) {
            toast.warning("somethoing wrong");
        }

    };
    useEffect(() => {
        const callApi = async () => {
            await getCategoryData();
        };
        callApi();
    }, [catid]);
    return (
        <div>
            <CategoryWiseMedia
            catData={catData}
            />
        </div>
    );
}

export default Category_wise_media;