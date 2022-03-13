import React from "react";
import "../../App.css";
import video from "../../media/backgroundvid.mp4";

function BackgroundVideo () {
    return (
            <video loop autoPlay id="videoBackground">
                <source
                    src={video}
                    type="video/mp4"
                />
            Your browser does not support the video tag.
            </video>
    );
}

export default BackgroundVideo;