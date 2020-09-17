import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import { AnimatePresence } from "framer";

import Navbar from "./components/Navbar";
import InProgressPage from "./pages/InProgressPage";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";

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
  // const location = useLocation();

  return (
    <Router>
      <Helmet>
        <style>{"body { background-color: #f0f5f9; }"}</style>
      </Helmet>
      <Navbar />

      <AnimatePresence>
        <Switch>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/blog">
            <InProgressPage />
          </Route>
          <Route path="/projects">
            <InProgressPage />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
