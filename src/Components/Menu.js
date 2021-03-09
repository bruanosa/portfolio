import React from 'react';
import {Link} from 'gatsby';

export default function Menu(props) {
    return (
        <div class={`drop-down-menu ${props.isMenuOpen ? "open" : "closed"}`}>
            <nav>
                <ul>
                    <li><Link class="nav-link"  activeClassName="active-link" to="/">Home</Link></li>
                    <li><Link class="nav-link" activeClassName="active-link" to="/#about">About</Link></li>
                    <li><Link class="nav-link" activeClassName="active-link" to="/#skills">Skills</Link></li>
                    <li><Link class="nav-link" activeClassName="active-link" to="/#work">Work</Link></li>
                    <li><Link class="nav-link" activeClassName="active-link" to="/#contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
}