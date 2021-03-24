import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon} from '@fortawesome/free-solid-svg-icons';

export default function Slider(props) {
    return (
        <div onClick={() => props.switchTheme()} class={`slider ${props.getTheme()}`}>
            <div class="slider-ball"> 
                <FontAwesomeIcon icon={faMoon} className="moon-icon"/>
            </div>
        </div>
    )
}
