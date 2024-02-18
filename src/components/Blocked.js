import React from "react";
import '../components_css/Blocked.css';

function Blocked({count}){
    return(
        <div className="windowBlocked">
            <p className={count >= 100 ? 'titleBlockedWin' : 'titleBlockedLose'}>
                {count >= 100 ? 
                `Felicidades, ha hecho ${count} clics` :
                `Ha logrado dar ${count} clics`
                }
            </p>
            <p className="messageBlocked">Presiona una tecla para renaudar el juego</p>
        </div>
    )
}

export default Blocked;