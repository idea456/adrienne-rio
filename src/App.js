import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import { spring, AnimatedRoute, AnimatedSwitch } from "react-router-transition";

import Navbar from "./components/Navbar";
import InProgressPage from "./pages/InProgressPage";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import BlogPage from "./pages/BlogPage";
import Background from "./components/Background";
// import "bootstrap/dist/css/bootstrap.min.css";

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

function App() {
  let [absorb, setAbsorb] = useState(false);

  return (
    <Router>
      <Helmet>
        <style>{"body { background-color: #f0f5f9; }"}</style>
      </Helmet>
      <Navbar />

      {/* <LandingPage />
      <AboutPage />
      <ProjectPage /> */}
      <Background absorb={absorb} />
      <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
      >
        <Route path="/about">
          <AboutPage setAbsorb={setAbsorb} />
        </Route>
        <Route path="/projects">
          <ProjectPage />
        </Route>
        <Route path="/projects">
          <ProjectPage />
        </Route>
        <Route path="/blog">
          <InProgressPage />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </AnimatedSwitch>
    </Router>
  );
}

export default App;
