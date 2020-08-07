import React from 'react';
import NavBar from "./Components/NavBar";
import Section1 from "./Components/Section1";
import About from "./Components/About";
import Services from "./Components/Services";
import Career from "./Components/Career";
import Footer from "./Components/Footer";
import "./styles.css";


function App() {
  return (
    <>
      <NavBar />
      <Section1 />
      <About />
      <Services />
      <Career />
      <Footer />
    </>
  );
}

export default App;
