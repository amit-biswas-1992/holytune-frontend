import React from "react";
import Lottie from "react-lottie";
import animationData from "../../Assets/animations/loading.json"
export default function Loader() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,

        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div className=" w-[300px] h-[300px] xl:w-[500px] xl:h-[500px]  overflow-hidden">
            <Lottie options={defaultOptions} />
        </div>
    );
}
