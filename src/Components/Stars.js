import React from 'react'

export default function Stars() 
{
    // Random numbers from 0-65
    const randomPosition1 = Math.random()*33; 
    const randomPosition2 = Math.random()*33;
    const randomPosition3 = Math.random()*33;

    return (
        <div class="stars-container">
            
            <div class='shooting-star-container'>
                <div id="ss0" style={{top: `${randomPosition1}%`}}></div> 
                <div id="ss1" style={{top: `${randomPosition1}%`}}></div>            
                <div id="ss2" style={{top: `${randomPosition2}%`}}></div>
                <div id="ss3" style={{top: `${randomPosition3}%`}}></div>
            </div>
          
            {/** THIS FUNCTION CREATES AND RETURNS BACKGROUND STARS WITH RANDOM SIZES AND ANIMATION */}
            {Array(50).fill(null).map((value, index) => {
                let randomSize = Math.floor(((Math.random() * 10) + 1));
                let randomTop = Math.floor((Math.random() * 101));
                let randomRight = Math.floor((Math.random() * 101));
   
                return(
                    <div 
                        id={`s${index}`}
                        class={`star ${randomSize > 6 ? "regular" : "small"} ${index % 5 == 0 ? "animate" : ""}`} 
                        key={`s${index}`} 
                        style={{top: `${randomTop}%`, right: `${randomRight}%` }}
                    />
                );
            })}

        </div>
    )
}
