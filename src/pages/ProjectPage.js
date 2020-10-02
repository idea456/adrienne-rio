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
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

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
      "A simple interface to show and analyse data regarding a particular repository in Github",
    techStack: ["react", "redux", "graphql", "javascript"],
    githubLink: "https://github.com/idea456/repo-analyzer",
  },
  {
    title: "🦠 COVID-19 Dashboard",
    description:
      "A simple dashboard to view statistics of the current COVID-19 situation by country.",
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
      "A simple interface to show and analyse data regarding a particular repository in Github",
    techStack: ["react", "javascript"],
    githubLink: "",
  },
  {
    title: "🕹️ Fun Mandarin Games",
    description:
      "A list of games created using React with p5.js to teach Mandarin",
    techStack: ["react", "redux", "javascript"],
    githubLink: "https://github.com/idea456/fun-mandarin-games",
  },
  {
    title: "🗓️ Studify",
    description:
      "A simple interface to show and analyse data regarding a particular repository in Github",
    techStack: ["react", "redux", "firebase", "javascript", "ux-design"],
    githubLink: "https://github.com/idea456/fun-mandarin-games",
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
      "A rogue-like zombie game built with Java based on Object Oriented Programming concepts such as SOLID and DRY principles, encapsulation and other programming practices.",
    techStack: ["java", "oop"],
    githubLink: "",
  },
];

export default function ProjectPage() {
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
        justifyContent: "center",
        alignContent: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <h1
        style={{
          width: 250,
          fontSize: 60,
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
              onClick={(e) => {
                tag.active = !tag.active;
                if (tags[0].active && tag !== tags[0]) {
                  tags[0].active = false;
                  setActiveTags([]);
                }
                if (tag.active) {
                  if (tag.name === "All") {
                    setActiveTags([]);
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
                e.target.style.color = tag.active ? "black" : "#c9d6df";
              }}
            >
              <h1
                className="tag"
                style={{ color: tag.active ? "black" : "#c9d6df" }}
              >
                {tag.name}
              </h1>
            </Button>
          );
        })}
      </div>

      <div>
        {/* <Glider
          hasDots
          hasArrows
          draggable
          dragVelocity={1.5}
          scrollLock={true}
          slidesToShow={2}
          slidesToScroll={1}
          className="glider"
        > */}
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
                // if (checkTechStack(project.techStack)) {
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
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
          </CarouselProvider>
        )}
      </div>
    </div>
  );
}
