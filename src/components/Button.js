import React from 'react';
import '../components_css/Button.css';

function Button({text, handleClick}){
    return (
        <button type='button' className='buttonClick' onClick={handleClick}>
            {text}
        </button>
    )
}

export default Button;