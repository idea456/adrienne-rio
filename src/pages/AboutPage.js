import React from "react";

import "../css/About.css";
import cv from "../files/cv.pdf";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Activity from "../components/Activity";
import GetAppIcon from "@material-ui/icons/GetApp";

import TextSection from "../components/TextSection";
import Skills from "../components/Skills";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import "../css/Links.css";
import { Link } from "react-router-dom";

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function AboutPage(props) {
  const classes = styles();
  return (
    <Container maxWidth="lg" style={{ paddingTop: 100 }}>
      <Grid
        container
        alignItems="stretch"
        justify="flex-start"
        style={{ marginBottom: 20, marginRight: 50 }}
      >
        <Grid item xs={12} md={4}>
          <div style={{ marginRight: 50 }}>
            <div className="myImage" />
          </div>
        </Grid>

        <Grid item xs={12} md={8}>
          <div style={{ alignSelf: "center" }}>
            <h1
              style={{
                margin: 0,
                fontSize: 60,
              }}
            >
              <span
                role="img"
                style={{ fontSize: 60, fontFamily: "TT Commons Bold" }}
              >
                ✌️
              </span>
              A bit about me
            </h1>
            <p
              style={{
                marginTop: 15,
                fontSize: 25,
                fontFamily: "TT Commons Regular",
                fontWeight: "normal",
                color: "#40424b",
              }}
            >
              Hi there! I am a Computer Science student currently studying at
              Monash University Malaysia. I am a passionate coder who loves to
              invent applications to solve simple or even complex problems. I
              mostly spend most of my free time making fun projects with React
              or Vue. I also love working with great teams and always give my
              best when contributing something.
              <br />
              <br />
              Now I am hungry for a real-world experience and currently seeking
              internships for software-based works.
            </p>

            <div style={{ display: "flex", alignItems: "center" }}>
              <a href={cv} target="_blank" style={{ textDecoration: "none" }}>
                <Button
                  variant="contained"
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.4vw",
                    height: "7vh",
                    backgroundColor: "#00adb5",
                    color: "white",
                    width: "15vw",
                    marginRight: 20,
                    borderRadius: 100,
                  }}
                >
                  <GetAppIcon style={{ fontSize: 30, marginRight: 10 }} />
                  CV
                </Button>
              </a>
              <Link
                style={{ color: "#1e2022" }}
                onClick={() =>
                  window.open("https://github.com/idea456", "_blank")
                }
              >
                <GitHubIcon
                  className="styledIcon"
                  style={{ fontSize: "3.5vw", marginRight: 20, paddingTop: 2 }}
                />
              </Link>
              <Link
                style={{ color: "#0072b1" }}
                onClick={() =>
                  window.open("https://linkedin.com/in/adrienne-rio", "_blank")
                }
              >
                <LinkedInIcon
                  className="styledIcon"
                  style={{ fontSize: "4vw", marginRight: 20 }}
                />
              </Link>

              <a
                href="mailto:riowongsoatmojo@gmail.com"
                style={{ color: "#1e2022" }}
              >
                <MailIcon className="styledIcon" style={{ fontSize: "4vw" }} />
              </a>
            </div>
          </div>
        </Grid>
      </Grid>

      <TextSection emoji="📝" title="Activities">
        <Grid container direction="row" justify="space-between" spacing={5}>
          <Activity
            title="Volunteer work at Fun Mandarin"
            date="November 2019 - January 2020"
            description="On November 2019, I spent my summer break helping a local Mandarin
        tuition center back at my hometown in Jakarta to create several fun
        games for young children to learn Mandarin as a fun activity. It was a
        really, really fun experience working with the staff and teachers! I
        learned so much from them, from interacting with the locals and also
        learning a bit of Mandarin along the way! I also created the games with
        React and p5js, with my knowledge from my coding bootcamp React
        training. From this experience, I'm proud to be able to use my knowledge
        to create something that benefits someone!"
          />

          <Activity
            title="Hacktiv8 React Bootcamp"
            date="October 2019 - January 2020"
            description="During my summer break, I also decided to participate a React
              coding bootcamp. After learning Bootstrap from Coursera, I decided
              to step up and learn React as my next stepping stone in front-end
              web development. Overall it was one of the best decisions of my
              life! I learned so much, from state management using Redux to a
              gentle introduction into React Native. I also made a Github
              repository statistical dashboard as my final project."
          />
        </Grid>

        <Grid container direction="row" justify="space-between" spacing={6}>
          <Activity
            title="Garudahacks Hackathon"
            date="14 August 2020 - 16 August 2020"
            description="This was my very first hackathon, and although it was virtual, it
              was really fun! Me and my friends gathered together and built a
              Zoom scheduler, using React and Firebase. Although we didn't win
              any cool prizes or anything, the experience and connections I made
              was very valuable. I learned so much from this hackathon: I
              stepped up my communication skills and gained a leadership
              personality by leading the team with a list of ideas and
              inspiration, all in within a tight schedule!"
          />

          <Activity
            title="Monash Mini Hackathon"
            date="27 August 2020 - 30 August 2020"
            description="Another hackathon I participated in was a small one, hosted by
              Soft-Skills. My team and I was tasked in creating an algorithm
              using Python with speed and time complexity being the priority, to
              match a list of candidates in a company with the best and cost
              efficient skills. I used hash tables, performed white-box testing
              to ensure all test cases are handled, and also used decorators to
              calculate runtime performance. In the end, we won and came first
              in the hackathon!"
          />
        </Grid>
      </TextSection>

      <TextSection emoji="🛠️" title="Skills">
        <Grid container justify="space-between" spacing={5}>
          <Grid item xs={12} md={2}>
            <Skills
              title="Front-End"
              skills={[
                "React",
                "Redux",
                "Vue",
                "CSS",
                "HTML",
                "Bootstrap",
                "React Native",
              ]}
            />
          </Grid>

          <Grid item xs={12} md={2}>
            <Skills
              title="Back-End"
              skills={["MySQL", "Firebase", "NodeJS", "Git"]}
            />
          </Grid>

          <Grid item xs={12} md={2}>
            <Skills
              title="Languages"
              skills={["Python", "Java", "Javascript", "Typescript", "Haskell"]}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <Skills
              title="Practices"
              skills={[
                "Algorithms/Data Structures",
                "Object Oriented Programming",
                "UX Design",
                "Black and white box testing",
                "Functional Programming",
              ]}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <Skills
              title="Currently learning"
              skills={["scikit-learn", "C Language", "Amazon Web Services"]}
            />
          </Grid>
        </Grid>
      </TextSection>
    </Container>
  );
}
