import  React, {useState, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon} from '@fortawesome/free-solid-svg-icons';
import {StaticImage} from 'gatsby-plugin-image';

//components imports
import Navbar from '../Components/Navbar';
import Button from '../Components/Button';
import Menu from '../Components/Menu';
import Stars from '../Components/Stars';

//function imports
import {useEventListener, useOnScreen} from '../Functions/customHooks.js';

export default function Landing(props) {

    //state variables and functions
    const [isMenuOpen, setMenu] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [sliderIsRight, setSlider] = useState(true);

    //lets us know if client's device is a touch screen
    let isTouchDevice = false;
    if(typeof document !== "undefined"){
        isTouchDevice = "ontouchstart" in document.documentElement;
    }
   
    //touch start event listener
    useEventListener("slider-touch-area", 'touchstart', (e) => {
        e.preventDefault();
        setTouchStart(e.touches[0].clientX);
    });

    //touch end event listener
    useEventListener("slider-touch-area",'touchend', (e) => {
        e.preventDefault();
        setTouchEnd(e.changedTouches[0].pageX);
       
        //case when swiped right and slider is currently on the left side
        if(touchEnd - touchStart > 0 && !sliderIsRight){
            setSlider(!sliderIsRight);
            props.switchTheme();
            console.log("swiped right");
        }
        //case when swiped right and slider is currently on the right side
        else if(touchEnd - touchStart < 0 && sliderIsRight){
            setSlider(!sliderIsRight);
            props.switchTheme();
            console.log("swiped left");
        }
        else{
            //case when the user taps roughly in the same area give or take 5 pixels
            if(Math.abs(touchEnd - touchStart) > 0 && Math.abs(touchEnd - touchStart) < 5){
                setSlider(!sliderIsRight);
                props.switchTheme();
            }
        }
    });

    //conditionally renders the appropriate slider component
    function renderSlider(){
        //in the case when it's a touch device we don't want to have an onClick event handler
        if(isTouchDevice){
            return(
                <div class={`slider ${props.getTheme()}`}>
                    <div class="slider-ball"> 
                        <FontAwesomeIcon icon={faMoon} className="moon-icon"/>
                    </div>
                </div>
            );
  
        }
        //in the case when its not a touch device we want to have an onClick event handler
        else{
            return(
                <div onClick={() => props.switchTheme()} class={`slider ${props.getTheme()}`}>
                    <div class="slider-ball"> 
                        <FontAwesomeIcon icon={faMoon} className="moon-icon"/>
                    </div>
                </div>
            );
        }
    }

    const landingRef = useRef();
    props.setLandingActive(useOnScreen(landingRef, {root: null, rootMargin: "99% 0% 0% 0%", threshold: 1}));

    return (
        <div ref={landingRef} class={`landing-container ${props.getTheme()}`}>
            
            <div class="grid-item-nav">
                <Navbar landingActive={props.landingActive} aboutActive={props.aboutActive} skillsActive={props.skillsActive} workActive={props.workActive} contactActive={props.contactActive} isMenuOpen={isMenuOpen} setMenu={setMenu}/>
            </div>
           
            <div class="grid-item-slider">
                <div id="slider-touch-area" className={(isTouchDevice) ? "visible" : "hidden"}/>
                {renderSlider()}
            </div>
            
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
                    <Stars width={props.windowW} height={props.windowH}/>
                </div>
            </div>

            <Menu isMenuOpen={isMenuOpen} setMenu={setMenu}/>

        </div>
    )
}

