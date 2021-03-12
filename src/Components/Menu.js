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
                    <li onClick={handleClick}><Link class="nav-link" activeClassName="active-link" to="/">Home</Link></li>
                    <li onClick={handleClick}><Link class="nav-link" activeClassName="active-link" to="/#about">About</Link></li>
                    <li onClick={handleClick}><Link class="nav-link" activeClassName="active-link" to="/#skills">Skills</Link></li>
                    <li onClick={handleClick}><Link class="nav-link" activeClassName="active-link" to="/#work">Work</Link></li>
                    <li onClick={handleClick}><Link class="nav-link" activeClassName="active-link" to="/#contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}