import React from "react";
import {Element} from 'react-scroll'

import Hero from "./Hero.jsx";
import Ekip from "./Ekip.jsx";
import Contact from "./Contact.jsx";
import About from "./About.jsx";

function Home() {
  return (
    <div className="App">
      <Hero />
      <Element name="aboutUsElement" />
      <About />
      <Element name="ekipElement" />
      <Ekip />
      <Element name="contactElement" />
      <Contact />

    </div>
  );
}

export default Home;
