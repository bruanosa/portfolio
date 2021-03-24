import  React, {useState, useRef} from 'react';
import {StaticImage} from 'gatsby-plugin-image';

//components imports
import Button from '../Components/Button';
import Stars from '../Components/Stars';

//function imports
import {useOnScreen} from '../Functions/customHooks.js';

export default function Landing(props) {

    //intersection observer setup
    const landingRef = useRef();
    props.setLandingActive(useOnScreen(landingRef, {root: null, rootMargin: "99% 0% 0% 0%", threshold: 1}));

    return (
        <div ref={landingRef} class={`landing-container ${props.getTheme()}`}>
            
            <div class="grid-item-landing-text">
                <h1>Bryan Ruano</h1>
                <h2>Full Stack Developer</h2>
                <p>I develop websites that help business owners improve their digital footprint and online traffic by using aesthetically pleasing and responsive designs. </p>
                <Button href="#about" color="green" text="GET IN TOUCH" getTheme={props.getTheme} />
            </div>

            <div class="grid-item-landing-img"> 
                <StaticImage
                    src="../images/GenesisMockup.png"
                    alt="responsive website design showcase"
                    loading="eager"
                    layout="constrained"
                    placeholder="blurred"
                    className="mockup-img"
                    objectFit="contain"
                />
            </div>

            <div class={`landing-background ${props.getTheme()}`}>
                <svg class="background-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 175.8">
                    <path d="M0,0A1928.51,1928.51,0,0,0,663.3,140.5c346.8,11,620.1-74.5,776.7-137V175.8H0Z"/>
                </svg>
                <div class={`landing-stars ${props.getTheme()}`}>
                    <Stars/>
                </div>
            </div>

        </div>
    )
}

