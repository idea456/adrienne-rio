import React, { useEffect } from "react";

import Activities from "../components/Activities";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import GetAppIcon from "@material-ui/icons/GetApp";

export default function AboutPage(props) {
  useEffect(() => {
    props.setAbsorb(true);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100vh",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            display: "flex",
            marginTop: 80,
            justifyContent: "center",
            alignSelf: "center",
            marginRight: 40,
            fontSize: 30,
            flex: 1,
          }}
        >
          <Avatar
            style={{ width: 420, height: 420 }}
            src={require("../images/profile.jpg")}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            marginTop: 80,
            paddingRight: 90,
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
            Hi there! I am currently a student at Monash University Malaysia,
            studying Computer Science. My interests are front-end and back-end
            web development.
            <br />
            <br />
            I'm currently doing an internship with IP Serverone as a front-end
            developer.
          </p>
          <Button
            variant="contained"
            startIcon={<GetAppIcon style={{ fontSize: 30 }} />}
            style={{ fontSize: 30 }}
          >
            Resume
          </Button>
        </div>
      </div>

      <div>
        <h1>asdas</h1>
      </div>
    </div>
  );
}
