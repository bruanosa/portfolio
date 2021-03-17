import React, {useRef} from 'react';
import {useOnScreen} from '../Functions/customHooks.js';

export default function Skills(props) {
    const skillsRef = useRef();
    props.setActive(useOnScreen(skillsRef, {root: null, rootMargin: "99% 0% 0% 0%", threshold: 1}));
    return (
        <div ref={skillsRef} class="skills-container" id="skills">
            
        </div>
    )
}
