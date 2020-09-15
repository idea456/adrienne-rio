import React from "react";
import Typewriter from "typewriter-effect";
import "../App.css";

export default function Introduction() {
  return (
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
              .typeString(" team compatible ⚙️")
              .pauseFor(900)
              .deleteChars(19)
              .changeDeleteSpeed(2)
              .typeString(" a UX practitioner 📱")
              .pauseFor(900)
              .deleteChars(23)
              .changeDeleteSpeed(2)
              .typeString(" looking for job opportunities 📝")
              .pauseFor(1200)
              .deleteChars(36)
              .typeString(" like to make things with React 🖥️")
              .pauseFor(900)
              .deleteAll(5)
              .start();
          }}
        />
      </h3>
    </div>
  );
}
