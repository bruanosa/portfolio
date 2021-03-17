import React, {useRef} from 'react';
import {useOnScreen} from '../Functions/customHooks.js';

export default function Work(props) {

    const workRef = useRef();
    props.setActive(useOnScreen(workRef, {root: null, rootMargin: "99% 0% 0% 0%", threshold: 1}));

    return (
        <div ref={workRef} id="work" className="work-container">
            
        </div>
    )
}
