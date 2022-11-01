import lottie from "lottie-web";
import React, { useEffect } from "react";
import movieWatcher from "../../Lottie/72235-watch-a-movie-with-popcorn.json"

const ManWatchingMovie =() => {

    useEffect( () => {
        lottie.loadAnimation({
            container:document.querySelector("#moviewatcher"),
            animationData:movieWatcher,
        })
    },[]);
    return(
        <div >
            <div id="moviewatcher" style={{ width: 300, height: 300}}/>
        </div>
    );
};
export default ManWatchingMovie;