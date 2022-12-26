import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Resume from "./Pages/Resume";
import Skills from "./Pages/Skills";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Mode from "./Components/Mode";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { optionsDarkShadow } from "./Helpers/ParticlesConfig-dark";
import { optionsLightShadow } from "./Helpers/ParticlesConfig-light";
import { optionsDarkSnow } from "./Helpers/ParticlesConfig1-dark";
import { optionsLightSnow } from "./Helpers/ParticlesConfig1-light";
import { changeTheme } from "./Helpers/ChangeTheme";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  const location = useLocation();

  const [background, setBackground] = useState(0);
  const nextBackground = () => {
    if(background === 1){ 
      setBackground(0) }
    else{ 
      setBackground(background+1) 
    }
  };

  const [theme, setTheme] = useState();
  const handleClick = () => {
    setTheme(!theme);
    changeTheme(theme);
  };

  const returnParticles = () => {
    if(location.pathname === "/"){
      console.log(background)
      console.log(background === 0)
      if(background === 0){ //Shadow
        if(theme){ //Light
          return <Particles id="tsparticles" init={particlesInit} options={optionsLightShadow} />
        } else { //Dark
          return <Particles id="tsparticles" init={particlesInit} options={optionsDarkShadow} />
        }
      }else if(background === 1){ //Snow
        if(theme){ //Light
          return <Particles id="tsparticles" init={particlesInit} options={optionsLightSnow} />
        } else { //Dark
          return <Particles id="tsparticles" init={particlesInit} options={optionsDarkSnow} />
        } 
      }
    }
    else{
      return ""
    }
  }

  return (
    <div className="app">
      <React.Fragment>
        { returnParticles() }
        <header className="app-header">
          <Header />
        </header>
        <main className="app-main">
          <Mode
            onChange={handleClick}
            theme={theme}
            toggle={nextBackground}
            background={background}
          />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/about" element={<AboutMe />} exact />
            <Route path="/resume" element={<Resume />} exact />
            <Route path="/skills" element={<Skills />} exact />
            <Route path="/portfolio" element={<Portfolio />} exact />
            <Route path="/contact" element={<Contact />} exact />
          </Routes>
        </main>
      </React.Fragment>
    </div>
  );
}

export default App;
