import React, {useState} from "react";
import "../SCSS/Main.scss";

import Layout from "../Components/Layout";
// import Landing from '../Components/Landing';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Work from '../Components/Work';
import Contact from '../Components/Contact';
import SEO from '../Components/SEO';

export default function IndexPage(){

  const [isDark, setDark] = useState(true);
  const [landingActive, setLandingActive] = useState(false);
  const [aboutActive, setAboutActive] = useState(false);
  const [skillsActive, setSkillsActive] = useState(false);
  const [workActive, setWorkActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);
  
  
  const getTheme = () =>{
    return isDark ? "dark" : "light";
  }

  const switchTheme = () => {
    setDark(!isDark)
  }

  return (
    <Layout switchTheme={switchTheme} getTheme={getTheme}>
      <SEO/>
      {/* <Landing setLandingActive={setLandingActive} landingActive={landingActive} aboutActive={aboutActive} skillsActive={skillsActive} workActive={workActive} contactActive={contactActive} switchTheme={switchTheme} getTheme={getTheme} /> */}
      <About setActive={setAboutActive} getTheme={getTheme} />
      <Skills setActive={setSkillsActive} getTheme={getTheme} />
      <Work setActive={setWorkActive} getTheme={getTheme} /> 
      <Contact setActive={setContactActive} getTheme={getTheme} />
    </Layout>
  )
}

