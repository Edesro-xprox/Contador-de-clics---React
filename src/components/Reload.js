import React from "react";
import '../components_css/Reload.css';

function Reload({number}){
    return(
        <div className="windowReload">
            <p className="messageLoad">El juego comienza en...</p>
            <div className = "load"></div>
            <p className="numberReload">
                {number}
            </p>
        </div>
    )
}

export default Reload;