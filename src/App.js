import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Helmet } from "react-helmet";
import Typewriter from "typewriter-effect";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <style>{"body { background-color: #f0f5f9; }"}</style>
        </Helmet>

        <Navbar />

        <div className="mainTitle">
          <h1 style={{ fontSize: 100, margin: 0 }}>Adrienne Rio.</h1>
          <h3 style={{ fontSize: 50, margin: 0 }}>
            <Typewriter
              options={{
                autoStart: true,
                delay: 40,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("I am")
                  .pauseFor(600)
                  .changeDelay(20)
                  .typeString(" aspiring to-become full stack developer 👨‍💻")
                  .pauseFor(900)
                  .changeDeleteSpeed(0.08)
                  .deleteChars(45)
                  .typeString(" currently a Computer Science student 🎓")
                  .pauseFor(1000)
                  .deleteChars(39)
                  .changeDeleteSpeed(2)
                  .typeString(" looking for job opportunities 🖥️")
                  .pauseFor(1200)
                  .deleteAll(5)
                  .start();
              }}
            />
          </h3>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
