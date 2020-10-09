import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import { Element } from "react-scroll";

import Navbar from "./components/Navbar";
import InProgressPage from "./pages/InProgressPage";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import Background from "./components/Background";
import Footer from "./components/Footer";
import "./css/global.css";

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

function App() {
  let [fall, setFall] = useState(false);
  let [switchPage, setSwitchPage] = useState({
    page: "",
    switched: true,
  });

  return (
    <Router>
      <Helmet>
        <title>Adrienne Rio</title>
        <style>{"body { background-color: #f0f5f9; }"}</style>
      </Helmet>

      <Navbar />

      <Element name="Home">
        <LandingPage />
      </Element>

      <Element name="About">
        <AboutPage name="About" />
      </Element>

      <Element name="Projects">
        <ProjectPage name="Projects" />
      </Element>

      <Footer />
    </Router>
  );
}

export default App;
