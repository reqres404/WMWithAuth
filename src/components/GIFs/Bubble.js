import lottie from "lottie-web";
import React, { useEffect } from "react";
import bubbleAnimation from '../../Lottie/31162-movie-engagement.json' 

const Bubble = () => {
    
    useEffect( () => {
        lottie.loadAnimation({
            container:document.querySelector("#man-watching-movie"),
            animationData:bubbleAnimation,
        })
    },[]);

    return(
        <div >
            <div id="man-watching-movie" style={{ width: 200, height: 200}}/>
        </div>
    );
};


export default Bubble;
