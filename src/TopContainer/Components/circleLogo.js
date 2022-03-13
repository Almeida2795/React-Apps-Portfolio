import React from "react";
import "../../App.css";

function CircleLogo(){
    return(
        <div className="viewport_header">
            <div className="circleLogo">
               { <img id="profilePic" src={require('../../media/prof.png')} />}
            </div>
            <p>Almeida Solutions</p>
        </div>
    );
}

export default CircleLogo;