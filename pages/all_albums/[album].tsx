import React from 'react';
import { useEffect, useState } from 'react';
import SpecificAlbum from '../../Components/AlbumPage/SpecificAlbum';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { getDataApi } from './../../services/api.service';
const Album = () => {
    const router = useRouter();
    let albumId = router.query.album;
    const [albumData, setAlbumData] = useState([])
    console.log(albumData, "albumData");

    console.log(albumId, "albumId");
    const getAlbumData = async () => {

        const url = `/albums/${albumId}`;
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
            setAlbumData(data.data)
            // navigate.push("../auth/verification");
        } catch (err) {
            toast.warning("somethoing wrong");
        }

    };
    useEffect(() => {
        const callApi = async () => {
            await getAlbumData();
        };
        callApi();
    }, [albumId]);
    return (
        <div>
            <SpecificAlbum
                albumData={albumData}
            />
        </div>
    );
}

export default Album;