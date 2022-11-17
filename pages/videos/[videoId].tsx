import React from 'react';
import { useEffect, useState } from 'react';
// import VideoPlayer from './../../Components/VideoPlayer/VideoPlayer';
import AllVideoPlayer from '../../Components/AllVideoPlayer/AllVideoPlayer';
import { useRouter } from 'next/router';
import { getDataApi } from '../../services/api.service';
import { toast } from 'react-toastify';

const Videos = (id: any) => {

    const router = useRouter();
    let videoId = router.query.videoId;
    const [videosData, setVideosData] = useState([])
    console.log(videosData, "videosData");

    console.log(videoId, "videoId");
    const getVideoData = async () => {

        const url = `/medias/videos/${videoId}`;
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
            setVideosData(data.data)
            // navigate.push("../auth/verification");
        } catch (err) {
            toast.warning("somethoing wrong");
        }

    };
    useEffect(() => {
        const callApi = async () => {
            await getVideoData();
        };
        callApi();
    }, [videoId]);
    return (
        <div>
            <AllVideoPlayer
                videosData={videosData}
            />
        </div>

    );
};

export default Videos;