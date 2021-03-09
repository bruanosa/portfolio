import React from 'react';

import Footer from '../Components/Footer.js';

//this allows us to enable smooth scrolling across the whole app
if(typeof window !== "undefined"){
    require("smooth-scroll")('a[href*="#"')
}

export default function Layout(props) {
    
    return (
        <div class="layout-container">
            {props.children}
            <Footer switchTheme={props.switchTheme} getTheme={props.getTheme}/>
        </div>
    )
}
