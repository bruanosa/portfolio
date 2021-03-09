import  React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon} from '@fortawesome/free-solid-svg-icons';
import Mockup from "../images/GenesisMockUp.png";

import Navbar from '../Components/Navbar';
import Button from '../Components/Button';
import Menu from '../Components/Menu';
import Stars from '../Components/Stars';

export default function Landing(props) {

    const [isMenuOpen, setMenu] = useState(false);

    return (
        <div class={`landing-container ${props.getTheme()}`}>
            
            <div class="grid-item-nav">
                <Navbar isMenuOpen={isMenuOpen} setMenu={setMenu}/>
            </div>
           
            <div class="grid-item-slider">
                <div onClick={() => props.switchTheme()} class={`slider ${props.getTheme()}`}>
                    <div class="slider-ball"> 
                        <FontAwesomeIcon icon={faMoon} className="moon-icon"/>
                    </div>
                </div>
            </div>
            
            <div class="grid-item-landing-text">
                <h1>Bryan Ruano</h1>
                <h2>Full-stack Developer</h2>
                <p>I develop websites that help business owners improve their digital footprint and online traffic by using aesthetically pleasing and responsive designs. </p>
            </div>

            <div class="grid-item-landing-btn"> 
               <Button href="#about" color="green" text="GET IN TOUCH" getTheme={props.getTheme} />
            </div>

            <div class="grid-item-landing-img"> 
                <img class="mockup-img" src={Mockup} alt="responsive website showcase"/>
            </div>


            <div class={`landing-background ${props.getTheme()}`}>
                <svg class="background-bottom" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 175.8">
                    <path d="M0,0A1928.51,1928.51,0,0,0,663.3,140.5c346.8,11,620.1-74.5,776.7-137V175.8H0Z"/>
                </svg>
                <div class={`landing-stars ${props.getTheme()}`}>
                    <Stars width={props.windowW} height={props.windowH}/>
                </div>
            </div>

            <Menu isMenuOpen={isMenuOpen}/>

        </div>
    )
}
