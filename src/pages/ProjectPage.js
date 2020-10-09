import React, { useState, useEffect } from "react";
import "bootstrap/scss/bootstrap.scss";
import ProjectCard from "../components/ProjectCard";
import Button from "@material-ui/core/Button";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Footer from "../components/Footer";

import "../css/Slider.css";
import "../css/ProjectList.css";
import "glider-js/glider.min.css";

const dict = {
  All: "all",
  React: "react",
  Vue: "vue-dot-js",
  Redux: "redux",
  Firebase: "firebase",
  Javascript: "javascript",
  Typescript: "typescript",
  Java: "java",
  Python: "python",
  Haskell: "haskell",
  "UX Design": "ux-design",
  OOP: "oop",
};
const projects = [
  {
    title: "📈 Repo Analyzer",
    description:
      "A simple interface to show and analyse data regarding a particular repository in Github. This application was created as a final project during my coding bootcamp at Hacktiv8 Indonesia.",
    techStack: ["react", "redux", "graphql", "javascript"],
    githubLink: "https://github.com/idea456/repo-analyzer",
  },
  {
    title: "🦠 COVID-19 Dashboard",
    description:
      "A dashboard to view statistics of the current COVID-19 situation by country, created with Vue and Material UI.",
    techStack: ["vue-dot-js", "vuetify", "javascript"],
    githubLink: "https://github.com/idea456/covid19-dashboard",
  },
  {
    title: "♥️ Hearts AI",
    description:
      "An intelligent agent developed with Haskell to compete against other players in the game of Hearts.",
    techStack: ["haskell"],
    githubLink: "https://github.com/idea456/hearts",
  },
  {
    title: "☄️ Asteroids",
    description:
      "An implementation of the original Asteroids game in the browser using functional programming concepts of Observables from RxJS with Typescript and Javascript.",
    techStack: ["typescript", "reactivex"],
    githubLink: "https://github.com/idea456/asteroids",
  },
  {
    title: "😎 This website!",
    description:
      "My personal website! I used purely React for development, and for the cool balls in the background I used MatterJS. ",
    techStack: ["react", "javascript"],
    githubLink: "https://github.com/idea456/my-website",
  },
  {
    title: "🕹️ Fun Mandarin Games",
    description:
      "A list of games created using React with p5.js to teach Mandarin. These games are created for Fun Mandarin tuition center when I was helping the teaching team to create a game suitable for teaching children Mandarin.",
    techStack: ["react", "redux", "javascript"],
    githubLink: "https://github.com/idea456/fun-mandarin-games",
  },
  {
    title: "🗓️ Studify",
    description:
      "Studify is a Zoom scheduler that allows students or teachers to manage Zoom online classes all in one platform.",
    techStack: ["react", "redux", "firebase", "javascript", "ux-design"],
    githubLink: "https://github.com/GarudaHacks-Hackathon/Studify",
  },
  {
    title: "📚 Tango List",
    description:
      "An app that acts like a to-do list to store everyday vocabulary encounters in Japanese. ",
    techStack: ["vue-dot-js", "vuetify", "javascript"],
    githubLink: "https://github.com/idea456/tango-list",
  },
  {
    title: "⭕ TicTacPro",
    description:
      "A game created with Javascript involving a 10 x 10 grid (list of lists) which has the same goal as regular tic-tac-toe, that is to connect a sequence of crosses or circles in either a column, row or diagonal",
    techStack: ["javascript"],
    githubLink: "https://github.com/idea456/TicTacPro",
  },
  {
    title: "🧟 Zombie Game",
    description:
      "A rogue-like zombie game built with Java based on Object Oriented Programming concepts such as SOLID and DRY principles, encapsulation and polymorphism.",
    techStack: ["java", "oop"],
    githubLink: "",
  },
  {
    title: "🔖 Candidate Skill-sorting algorithm",
    description:
      "A skill sorting algorithm that sorts a list of candidates according to their highest skill points and most cost efficient skill.",
    techStack: ["python", "oop"],
    githubLink: "https://github.com/song2311/monash-mini-hackathon/tree/master",
  },
];

export default function ProjectPage(props) {
  const [list, setList] = useState(projects);

  const [activeTags, setActiveTags] = useState([]);

  const [tags, setTags] = useState([
    { name: "All", active: true },
    { name: "React", active: false },
    { name: "Redux", active: false },
    { name: "Vue", active: false },
    { name: "Firebase", active: false },
    { name: "Javascript", active: false },
    { name: "Typescript", active: false },
    { name: "Java", active: false },
    { name: "Python", active: false },
    { name: "Haskell", active: false },
    { name: "UX Design", active: false },
    { name: "OOP", active: false },
  ]);

  // // true, check if activeTags is subset of techStack
  // techStack: ["react", "redux", "firebase"];
  // activeTags: ["react", "redux"];

  // // true,
  // techStack: ["react", "redux", "firebase"];
  // activeTags: ["react", "redux"];

  const checkTechStack = (techStack) => {
    // check if the active tags are a subset of the tech stack in the project
    return activeTags.every((tag) => techStack.includes(tag));
  };

  useEffect(() => {
    setList(projects.filter((p) => checkTechStack(p.techStack)));
    if (activeTags.length === 0) {
      tags[0].active = true;
    }
  }, [activeTags]);

  return (
    <div
      style={{
        display: "flex",
        marginLeft: 90,
        marginRight: 90,
        marginTop: 100,
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
        fontFamily: "TT Commons Bold",
      }}
    >
      <h1
        style={{
          width: 250,
          fontSize: 75,
          margin: 0,
          marginLeft: 12,
          // borderBottom: "8px solid #faed27",
        }}
      >
        PROJECTS
      </h1>

      <div
        style={{
          marginBottom: 15,
          marginLeft: 12,
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {tags.map((tag) => {
          return (
            <Button
              disableRipple
              style={{
                textTransform: "none",
                padding: 0,
                fontSize: 16,
                elevation: 0,
                backgroundColor: "transparent",
              }}
              className="tag"
              onClick={(e) => {
                tag.active = !tag.active;
                if (tags[0].active && tag !== tags[0]) {
                  tags[0].active = false;
                  setActiveTags([]);
                }
                if (tag.active) {
                  if (tag.name === "All") {
                    setActiveTags([]);
                    tags.map((t) => {
                      if (t.name !== "All") {
                        t.active = false;
                      }
                    });
                  } else {
                    setActiveTags([...activeTags, dict[tag.name]]);
                  }
                } else {
                  if (tag.name === "All") {
                    setActiveTags([
                      "react",
                      "redux",
                      "graphql",
                      "vue-dot-js",
                      "vuetify",
                      "firebase",
                      "javascript",
                      "typescript",
                      "reactivex",
                      "java",
                      "python",
                      "haskell",
                      "ux-design",
                      "oop",
                    ]);
                  } else {
                    setActiveTags(
                      activeTags.filter((t) => t !== dict[tag.name])
                    );
                  }
                }
              }}
            >
              <h1
                style={{
                  fontFamily: "TT Commons Bold",
                  margin: 0,
                  fontSize: 35,
                  marginRight: 18,
                }}
                className={tag.active ? "tagActive" : "tag"}
              >
                {tag.name}
              </h1>
            </Button>
          );
        })}
      </div>

      <div>
        {list.length === 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              fontSize: 20,
              height: 0.48 * window.innerHeight,
            }}
          >
            <h1>No projects found 🤷‍♂️</h1>
          </div>
        )}
        {list.length !== 0 && (
          <CarouselProvider
            naturalSlideWidth={400}
            naturalSlideHeight={0.3 * window.innerHeight}
            totalSlides={list.length}
            visibleSlides={2}
            isIntrinsicHeight
          >
            <Slider>
              {list.map((project, i) => {
                return (
                  <Slide index={i}>
                    <ProjectCard
                      key={i}
                      style="projectCard"
                      title={project.title}
                      description={project.description}
                      techStack={project.techStack}
                      githubLink={project.githubLink}
                    />
                  </Slide>
                );
              })}
            </Slider>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              {list.map((p, i) => {
                if (i % 2 === 0) {
                  return <Dot slide={i} />;
                }
              })}
            </div>
          </CarouselProvider>
        )}
      </div>
    </div>
  );
}
