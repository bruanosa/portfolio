import React, {useState, useEffect} from 'react';
import {Link} from 'gatsby';
import Hamburger from '../Components/Hamburger';
import Slider from '../Components/Slider';
import Menu from '../Components/Menu';

function Navbar(props) {

    const [hideNav, setHideNav] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        let currScroll = window.scrollY;

        if(Math.abs(scrollY - currScroll) > 80){
            if(scrollY > currScroll){
                setHideNav(false);
            }
            else{
                setHideNav(true);
            }
            setScrollY(currScroll);
        }
    };

    if(typeof window !== 'undefined'){
        window.addEventListener('scroll', handleScroll)
    }

    return (
        <div className={`navbar-container ${hideNav ? "hide" : ""}`}>
            <nav>
                <Link id="logo-link" to="/">
                    <svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.65 109.67">
                        <g>
                            <g>
                            <path d="M50.91,5.1l-2.6,2.34H39.7c-.33.11-2.57.89-3,2.69a2.79,2.79,0,0,0-.05.73V99.78A3.35,3.35,0,0,0,40,102.34h8.21l2.7,2.4H39.07A6,6,0,0,1,33.94,100V9.65a6.25,6.25,0,0,1,5.2-4.55Z" fill="#fff"/>
                            <path d="M79.78,5.1l2.6,2.34H91c.34.11,2.57.89,3,2.69a2.79,2.79,0,0,1,0,.73V99.78a3.34,3.34,0,0,1-3.31,2.56H82.48l-2.7,2.4H91.63A6,6,0,0,0,96.75,100V9.65a6.25,6.25,0,0,0-5.2-4.55Z" fill="#fff"/>
                            <path d="M40.61,22,63.2,3.13a4.35,4.35,0,0,1,4.31,0L90,22.05V18.6L69.58,1.52a6.74,6.74,0,0,0-8.53,0l-20.44,17Z" fill="#fff"/>
                            <path d="M40.61,87.67,63.2,106.54a4.35,4.35,0,0,0,4.31,0L90,87.62v3.46L69.58,108.16a6.76,6.76,0,0,1-8.53,0l-20.44-17Z" fill="#fff"/>
                            <path d="M100.69,27.57V31l26.43,22.22a2.54,2.54,0,0,1,0,3.49l-26.43,22.2V82.3l28.72-24.16a4.67,4.67,0,0,0,0-6.33Z" fill="#fff"/>
                            <path d="M30,27.16v3.39L3.53,52.78a2.54,2.54,0,0,0,0,3.49L30,78.47v3.42L1.24,57.73a4.66,4.66,0,0,1,0-6.33Z" fill="#fff"/>
                            </g>
                            <g>
                            <path d="M53.32,70.11H45.84a2.71,2.71,0,0,1-2.32-.92,4.93,4.93,0,0,1-.69-2.94V42.89a4.86,4.86,0,0,1,.71-3,2.75,2.75,0,0,1,2.3-.9h7.93a14.24,14.24,0,0,1,3,.28,5.55,5.55,0,0,1,2.31,1.06A6.44,6.44,0,0,1,60.65,42a7.68,7.68,0,0,1,1,2.23A9,9,0,0,1,62,46.83a7.34,7.34,0,0,1-3.67,6.83q4.83,2,4.83,7.59A10.19,10.19,0,0,1,62.12,66,6.94,6.94,0,0,1,59.28,69a8.18,8.18,0,0,1-2.57.84A21.07,21.07,0,0,1,53.32,70.11ZM47.79,43.76v8h4.54a7.28,7.28,0,0,0,2.87-.44,3,3,0,0,0,1.54-1.7,4.57,4.57,0,0,0,.42-2c0-1.57-.44-2.61-1.32-3.13a8.24,8.24,0,0,0-4-.77ZM53,56.31H47.79v9.08h5.33q5,0,5-4.61a4.18,4.18,0,0,0-1.3-3.41A6.07,6.07,0,0,0,53,56.31Z" fill="#fff"/>
                            <path d="M74.14,56.82H72.4v10a4.9,4.9,0,0,1-.69,2.9,2.11,2.11,0,0,1-1.78.93,2.07,2.07,0,0,1-1.84-1,5.13,5.13,0,0,1-.65-2.86V42.89a4.86,4.86,0,0,1,.71-3A2.79,2.79,0,0,1,70.48,39h8.07a19.32,19.32,0,0,1,2.85.18,6,6,0,0,1,2.14.73,6.39,6.39,0,0,1,2,1.76,8.12,8.12,0,0,1,1.34,2.66,10.9,10.9,0,0,1,.46,3.22,9.09,9.09,0,0,1-1.54,5.55,8.36,8.36,0,0,1-4.69,2.95,9.81,9.81,0,0,1,2.52,2.63,26.47,26.47,0,0,1,2.15,3.7A29.32,29.32,0,0,1,87.29,66a8.48,8.48,0,0,1,.53,2.17,2.73,2.73,0,0,1-.31,1.22,2.5,2.5,0,0,1-.84,1,2.17,2.17,0,0,1-1.24.35,2,2,0,0,1-1.4-.49,4.52,4.52,0,0,1-1-1.27c-.27-.51-.64-1.25-1.11-2.24l-2-4.2A23.78,23.78,0,0,0,78,58.92a5.11,5.11,0,0,0-1.72-1.66A4.8,4.8,0,0,0,74.14,56.82ZM77,43.76H72.4V52.3h4.44a10,10,0,0,0,3-.39,3.48,3.48,0,0,0,1.86-1.33,4.57,4.57,0,0,0,.65-2.6,4.91,4.91,0,0,0-.52-2.28,3.41,3.41,0,0,0-1.44-1.47A8.1,8.1,0,0,0,77,43.76Z" fill="#fff"/>
                            </g>
                        </g>
                    </svg>
                </Link> 
                <ul class="link-list">
                    <li><Link className={`nav-link ${props.landingActive ? 'active' : ''}`} activeClassName="active-link" to="/">Home</Link></li>
                    <li><Link className={`nav-link ${props.aboutActive ? 'active' : ''}`} activeClassName="active-link" to="/#about">About</Link></li>
                    <li><Link className={`nav-link ${props.skillsActive ? 'active' : ''}`} activeClassName="active-link" to="/#skills">Skills</Link></li>
                    <li><Link className={`nav-link ${props.workActive ? 'active' : ''}`} activeClassName="active-link" to="/#work">Work</Link></li>
                    <li><Link class={`nav-link ${props.contactActive ? 'active' : ''}`} activeClassName="active-link" to="#contact">Contact</Link></li>
                </ul>
                
                <div className="ham-slider-container">
                    <div className="ham-container">
                        <Hamburger className="ham" isMenuOpen={props.isMenuOpen} setMenu={props.setMenu}/> 
                    </div>
                    <Slider switchTheme={props.switchTheme} getTheme={props.getTheme}/>
                </div>
            </nav>
            
            <Menu 
                isMenuOpen={props.isMenuOpen} 
                setMenu={props.setMenu}
                landingActive={props.landingActive} 
                aboutActive={props.aboutActive} 
                skillsActive={props.skillsActive} 
                workActive={props.workActive} 
                contactActive={props.contactActive}
            />
        </div>
    )
}

export default Navbar
