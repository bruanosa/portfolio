import React, {useRef} from 'react';
import {useOnScreen} from '../Functions/customHooks.js';


export default function Contact(props) {

    const contactRef = useRef();
    props.setActive(useOnScreen(contactRef, {root: null, rootMargin: "99% 0% 0% 0%", threshold: 1}));

    return (
        <div ref={contactRef} id="contact" className="contact-container">
            CONTACT SECTION
        </div>
    )
}
