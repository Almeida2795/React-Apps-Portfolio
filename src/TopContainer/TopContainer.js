import React from 'react';
import "../App.css";
import BackgroundVideo from './Components/video';
import CircleLogo from "./Components/circleLogo";

function TopContainer(){
    return(
        <div className='TopContainer'>
                <BackgroundVideo />
                <CircleLogo />
        </div>
    );
}

export default TopContainer;