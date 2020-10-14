import React from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import "../App.css";
import { Link, animateScroll as scroll } from "react-scroll";
import P5Wrapper from "react-p5-wrapper";

function sketch(p) {
  let borders = [];

  function Border(y) {
    this.x = p.random(p.width);
    this.y = y;
    this.w = p.random(p.width / 5, p.width / 3);
    this.h = p.height / 2 - 20;
    this.c = p.random(-1, 1) < 0 ? "#00adb5" : "#fc5185";

    this.show = function () {
      p.fill(this.c);
      p.noStroke();
      p.rect(this.x, this.y, this.w, this.h, 100);
    };

    this.move = function () {
      this.x += 0.1;
      if (this.x > p.width + this.w) {
        this.x = -this.w;
      }
    };
  }

  p.setup = function () {
    p.createCanvas(p.width, p.height);
    for (var i = 0; i < 5; i++) {
      let border = new Border(p.height / 4);
      borders.push(border);
    }

    for (var i = 0; i < 5; i++) {
      let border = new Border((p.height / 4) * 3);
      borders.push(border);
    }
  };

  p.draw = function () {
    for (var i = 0; i < borders.length; i++) {
      borders[i].show();
      borders[i].move();
    }
  };
}
export default function Seperation(props) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "8%",
        backgroundColor: "#fc5185",
        paddingBottom: 10,
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link
          to="About"
          spy={true}
          smooth={true}
          duration={450}
          style={{ cursor: "pointer" }}
        >
          <KeyboardArrowDownIcon
            style={{ fontSize: 60, color: "white" }}
            className="arrow"
          />
        </Link>
      </div>
      {/* <P5Wrapper sketch={sketch} /> */}
      {/* {props.header && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link
            to="About"
            spy={true}
            smooth={true}
            duration={450}
            style={{ cursor: "pointer" }}
          >
            <KeyboardArrowDownIcon
              style={{ fontSize: 60, color: "white" }}
              className="arrow"
            />
          </Link>
        </div>
      )}
      

      {!props.header && (
        <div>
          <P5Wrapper sketch={sketch} />
        </div>
      )} */}
    </div>
  );
}
