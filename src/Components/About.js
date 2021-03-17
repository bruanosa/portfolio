import React, {useRef} from 'react';
import {useOnScreen} from '../Functions/customHooks.js';

export default function About(props) {
    
    const aboutRef = useRef();
    props.setActive(useOnScreen(aboutRef, {root: null, rootMargin: "99% 0% 0% 0%", threshold: 1}));

    return (
        <div ref={aboutRef} id="about" class={`background ${props.getTheme()}`}>

        </div>
    )
}
