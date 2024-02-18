import React from 'react';
import '../components_css/Count.css';

function Count({numClicks}){
    return(
        <div className='count'>
            {numClicks}
        </div>
    )
}

export default Count;