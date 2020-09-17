import React from "react";

import Activities from "../components/Activities";

export default function AboutPage() {
  return (
    <div style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 80,
          paddingLeft: 70,
          paddingRight: 40,
          fontSize: 30,
          flex: 1,
        }}
      >
        <h1
          style={{
            margin: 0,
            fontFamily: "IBM Plex Sans",
          }}
        >
          <span role="img" style={{ fontSize: 55 }}>
            ✌️
          </span>
          Profile
        </h1>
        <p
          style={{
            marginTop: 15,
            fontSize: 25,
            fontFamily: "IBM Plex Sans",
            fontWeight: "normal",
          }}
        >
          I am currently a student at Monash University Malaysia, studying
          Computer Science. My interests are front-end and back-end web
          development.
          <br />
          <br />
          Currently doing an internship with IP Serverone as a front-end
          developer.
        </p>

        <h1
          style={{
            margin: 0,
            fontFamily: "IBM Plex Sans",
          }}
        >
          <span role="img" style={{ fontSize: 55 }}>
            🗒️
          </span>
          &nbsp;Activities
        </h1>
        <div
          style={{
            fontSize: 25,
            fontFamily: "IBM Plex Sans",
            fontWeight: "normal",
          }}
        >
          <Activities />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 80,
          paddingLeft: 20,
          paddingRight: 70,
          fontSize: 30,
          flex: 1,
        }}
      >
        <h1
          style={{
            margin: 0,
            fontFamily: "IBM Plex Sans",
          }}
        >
          <span role="img" style={{ fontSize: 55 }}>
            📚
          </span>
          Tech Stack
        </h1>
        <div
          style={{
            marginTop: 15,
            fontSize: 25,
            display: "flex",
            flexDirection: "row",
            fontFamily: "IBM Plex Sans",
            fontWeight: "normal",
          }}
        >
          <div>
            <h4 style={{ margin: 0, fontStyle: "italic" }}>Language</h4>
            <ul>
              <li>C</li>
              <li>Python</li>
              <li>Java</li>
              <li>Javascript</li>
            </ul>
          </div>
          <div style={{ marginLeft: 20 }}>
            <h4 style={{ margin: 0, fontStyle: "italic" }}>Front-end</h4>
            <ul>
              <li>React</li>
              <li>Vue</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div style={{ marginLeft: 20 }}>
            <h4 style={{ margin: 0, fontStyle: "italic" }}>Back-end</h4>
            <ul>
              <li>Node</li>
              <li>Firebase</li>
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div style={{ marginLeft: 20 }}>
            <h4 style={{ margin: 0, fontStyle: "italic" }}>Services</h4>
            <ul>
              <li>Git</li>
              <li>Docker</li>
              <li>AWS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
