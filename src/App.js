import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Background from "./components/Background";
import Introduction from "./components/Introduction";

import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <style>{"body { background-color: #f0f5f9; }"}</style>
        </Helmet>

        <Navbar />
        <Background />
        <Introduction />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
