import React, {useState} from "react";
import "../SCSS/Main.scss";

import Layout from "../Components/Layout";
import Landing from '../Components/Landing';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Work from '../Components/Work';
import Contact from '../Components/Contact';
import SEO from '../Components/SEO';

export default function IndexPage(){

  const [width, setWidth] = useState(window.innerWidth); //remove when done debugging
  const [height, setHeight] = useState(window.innerHeight); //remove when done debugging
  //remove when done debugging
  const reportWindowSize = () =>{
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  //remove when done debugging
  window.onresize = reportWindowSize;

  const [isDark, setDark] = useState(true);
  
  const getTheme = () =>{
    return isDark ? "dark" : "light";
  }

  const switchTheme = () => {
    setDark(!isDark)
  }

  return (
    <Layout switchTheme={switchTheme} getTheme={getTheme}>
      <SEO/>
      <Landing windowW={width} windowH={height} switchTheme={switchTheme} getTheme={getTheme} />
      <div style={{color: 'white', display: "flex", position: 'absolute', "z-index" : 100}}> {width} X {height}</div>
      <About getTheme={getTheme} />
      <Skills getTheme={getTheme} />
      <Work getTheme={getTheme} />
      <Contact getTheme={getTheme} />
    </Layout>
  )
}

