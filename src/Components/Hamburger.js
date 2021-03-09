import React from 'react';

export default function Hamburger(props) 
{   
    const handleHamClick = () =>{
        props.setMenu(!props.isMenuOpen);
    }

    return (
        <div class="hamburger-btn" onClick={handleHamClick}>
            <div class={`hamburger ${props.isMenuOpen ? "open" : "closed"}`}/>
        </div>
    )
}
