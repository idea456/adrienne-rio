import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import { Element } from "react-scroll";
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";

import Navbar from "./components/Navbar";
import InProgressPage from "./pages/InProgressPage";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import Background from "./components/Background";
import Avatar from "@material-ui/core/Avatar";
import Footer from "./components/Footer";
import Seperation from "./components/Seperation";
import "./css/global.css";
import GA from "./utils/GoogleAnalytics";

const defaultTheme = createMuiTheme();
const theme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "1.2em",
        color: "#3b444b",
        padding: 20,
        fontFamily: "TT Commons Bold",
        backgroundColor: "white",
        borderRadius: 10,
      },
    },
  },
});

function App() {
  const [resized, setResized] = useState(false);
  const [totalHeight, setTotalHeight] = useState(null);

  const body = useRef(null);

  useEffect(() => {
    if (body.current) {
      setTotalHeight(body.current.scrollHeight);
      console.log(totalHeight);
    }
  }, [body]);

  return (
    <Router>
      {GA.init() && <GA.RouteTracker />}
      <MuiThemeProvider theme={defaultTheme}>
        <Helmet>
          <title>Adrienne Rio</title>
          <style>{"body { background-color: #f0f5f9; }"}</style>
        </Helmet>

        <Navbar />
        <div style={{ position: "relative", overflow: "hidden" }} ref={body}>
          <Background
            resized={resized}
            totalHeight={totalHeight}
            setResized={setResized}
          />
          <Element name="Home">
            <LandingPage />
          </Element>

          <MuiThemeProvider theme={theme}>
            <Element name="About">
              <AboutPage name="About" />
            </Element>
          </MuiThemeProvider>

          <Element name="Projects">
            <ProjectPage setResized={setResized} />
          </Element>

          <Footer />
        </div>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
