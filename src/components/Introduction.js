import React from "react";
import Typewriter from "typewriter-effect";
import "../App.css";

export default function Introduction() {
  return (
    <div className="mainTitle">
      <h1
        style={{
          fontSize: "8vw",
          margin: 0,
          fontStyle: "bold",
          fontFamily: "TT Commons Bold",
        }}
      >
        Adrienne Rio.
      </h1>
      <div style={{ display: "relative" }}>
        <h3 style={{ fontSize: "3.5vw", margin: 0, fontStyle: "bold" }}>
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
                .typeString(" interested in full stack development 👨‍💻")
                .pauseFor(900)
                .changeDeleteSpeed(1)
                .deleteChars(43)
                .typeString(" currently a Computer Science student 🎓")
                .pauseFor(1000)
                .deleteChars(39)
                .changeDeleteSpeed(2)
                .typeString(" team compatible 💖")
                .pauseFor(900)
                .deleteChars(19)
                .changeDeleteSpeed(2)
                .typeString(" a UX practitioner 📱")
                .pauseFor(900)
                .deleteChars(22)
                .changeDeleteSpeed(2)
                .typeString(" looking for job opportunities 📝")
                .pauseFor(1200)
                .deleteChars(33)
                .typeString(" equipped with algorithmic knowledge ⚙")
                .pauseFor(900)
                .deleteChars(40)
                .typeString(" love make things with React 🖥️")
                .pauseFor(900)
                .deleteAll(20)
                .changeDelay(70)
                .typeString("日本語はわかるけど、まだ勉強中です。")
                .pauseFor(1500)
                .deleteAll(20)
                .start();
            }}
          />
        </h3>
      </div>
    </div>
  );
}
