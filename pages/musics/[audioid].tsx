import React from 'react';
import { useEffect, useState } from 'react';
import Musics from '../../Components/AudioPlayer/Musics';

import { useRouter } from 'next/router';
import { getDataApi } from '../../services/api.service';
import { toast } from 'react-toastify';

const Audios = (id: any) => {

    const router = useRouter();
    let audioId = router.query.audioid;
    const [audioData, setAudioData] = useState([])
    console.log(audioData, "audioData");

    console.log(audioId, "audioId");
    const getVideoData = async () => {

        const url = `/medias/audio/${audioId}`;
        // console.log(url, "url");

        try {

            const data = await getDataApi(url);
            if (data.statusCode) {
                console.log('this block')
                // toast.warning("Please Input a correct Number");
                return;
            }
            console.log("data", data);
            // localStorage.setItem("msisdn", JSON.stringify(payload.msisdn));
            setAudioData(data.data)
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
    }, [audioId]);
    return (
        <div>
            <Musics
                audioData={audioData}
            />

        </div>

    );
};

export default Audios;