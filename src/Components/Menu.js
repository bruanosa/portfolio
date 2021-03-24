import React from 'react';
import {Link} from 'gatsby';

export default function Menu(props) {
    function handleClick(){
        props.setMenu(!props.isMenuOpen);
    }
    return (
        <div class={`drop-down-menu ${props.isMenuOpen ? "open" : "closed"}`}>
            <nav>
                <ul>
                    <li><Link className={`nav-link ${props.landingActive ? 'active' : ''}`} activeClassName="active-link" to="/">Home</Link></li>
                    <li><Link className={`nav-link ${props.aboutActive ? 'active' : ''}`} activeClassName="active-link" to="/#about">About</Link></li>
                    <li><Link className={`nav-link ${props.skillsActive ? 'active' : ''}`} activeClassName="active-link" to="/#skills">Skills</Link></li>
                    <li><Link className={`nav-link ${props.workActive ? 'active' : ''}`} activeClassName="active-link" to="/#work">Work</Link></li>
                    <li><Link class={`nav-link ${props.contactActive ? 'active' : ''}`} activeClassName="active-link" to="#contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}