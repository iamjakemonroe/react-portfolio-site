import React, { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
// import Loaders from "./components/loaders/Loaders";
import NavBar from "./components/navbar/NavBar";
import Dropdown from "./components/navbar/Dropdown";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
// import Projects from "./components/projects/Projects";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <NavBar toggleMenu={toggleMenu} />
      <Dropdown open={menu} toggleMenu={toggleMenu} />
      <Header />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Experience />
      <Contact />
      <Footer />
      {/* <Loaders /> */}
    </>
  );
}

export default App;
