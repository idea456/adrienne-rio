import React from "react";
import P5Wrapper from "react-p5-wrapper";

function sketch(p) {
  let circles = [];

  function Circle() {
    this.pos = p.createVector(p.random(p.width), p.random(p.height));
    this.w = 15;
    this.boundary = 20;
    this.yvel = p.random(-0.5, 0.5);
    this.xvel = p.random(-0.5, 0.5);
    this.i = p.random(-1, 1);
    this.check = true;
    this.speed = 1;

    this.show = function () {
      p.noStroke();
      if (this.i < 0) {
        p.fill("#3fc1c9");
      } else {
        p.fill("#fc5185");
      }

      p.ellipse(this.pos.x, this.pos.y, this.w, this.w);
    };

    this.move = function () {
      if (this.pos.x > p.width + this.boundary) {
        this.pos.x = 0;
      }
      if (this.pos.x < -this.boundary) {
        this.pos.x = p.width;
      }
      if (this.pos.y > p.height + this.boundary) {
        this.pos.y = 0;
      }
      if (this.pos.y < -this.boundary) {
        this.pos.y = p.height;
      }

      if (this.speed > 1) {
        this.speed -= 0.05;
      }

      if (this.check) {
        if (
          p.mouseX < this.pos.x + this.w &&
          p.mouseX > this.pos.x - p.mouseX &&
          p.mouseY < this.pos.y + this.w &&
          p.mouseY > this.pos.y - this.w
        ) {
          this.yvel = p.random(-0.5, 0.5);
          this.xvel = p.random(-0.5, 0.5);
          this.speed = 5;
          this.check = false;
          setTimeout(() => (this.check = true), 500);
        }
      }
      this.pos.x += this.xvel * this.speed;
      this.pos.y += this.yvel * this.speed;
    };
  }

  p.setup = function () {
    p.createCanvas(window.innerWidth, window.innerHeight);
    for (var i = 0; i < 120; i++) {
      let circle = new Circle();
      circles.push(circle);
    }
  };

  p.draw = function () {
    p.background("#f0f5f9");
    for (var i = 0; i < circles.length; i++) {
      circles[i].show();
      circles[i].move();
    }
  };
}

export default function Background() {
  return (
    <div style={{ position: "absolute", zIndex: -1 }}>
      <P5Wrapper sketch={sketch} />;
    </div>
  );
}
