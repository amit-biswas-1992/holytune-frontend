import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { getDataApi } from './../../services/api.service';
import ArtistProfile from '../../Components/ArtistProfile/ArtistProfile';
const Artist_profile = () => {
    const router = useRouter();
    let artistId = router.query.artist_profile;
    const [artistData, setArtistData] = useState([])
    console.log(artistData, "artistData");

    console.log(artistId, "artistId");
    const getArtistData = async () => {

        const url = `/artists/${artistId}`;
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
            setArtistData(data.data)
            // navigate.push("../auth/verification");
        } catch (err) {
            toast.warning("somethoing wrong");
        }

    };
    useEffect(() => {
        const callApi = async () => {
            await getArtistData();
        };
        callApi();
    }, [artistId]);
    return (
        <div>
            <ArtistProfile
                artistData={artistData}
            />
        </div>
    );
}

export default Artist_profile;

// export default artist_profile;<ArtistProfile />