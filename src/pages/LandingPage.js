import React from "react";
import Footer from "../components/Footer";
import Background from "../components/Background";
import Introduction from "../components/Introduction";
import "../App.css";

export default function LandingPage() {
  return (
    <div className="App">
      {/* <Background /> */}
      <Introduction />
      <Footer />
    </div>
  );
}
