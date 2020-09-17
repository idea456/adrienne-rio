import React from "react";
import P5Wrapper from "react-p5-wrapper";

function sketch(p) {
  let balls = [];

  function Ball() {
    this.pos = p.createVector(p.random(p.width), p.random(p.height));
    this.w = 20;
    this.boundary = 20;
    this.yvel = p.random(-0.5, 0.5);
    this.xvel = p.random(-0.5, 0.5);
    this.i = p.random(-1, 1);
    this.check = true;
    this.speed = 1;
    this.minSpeed = 0.5;

    this.show = function () {
      p.noStroke();
      if (this.i < 0) {
        p.fill("#3fc1c9");
      } else {
        p.fill("#fc5185");
      }

      p.ellipse(this.pos.x, this.pos.y, this.w, this.w);
    };

    this.checkBoundary = function () {
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
    };

    this.collision = function (balls) {
      for (var i = 0; i < balls.length; i++) {
        let dx = balls[i].pos.x - this.pos.x;
        let dy = balls[i].pos.y - this.pos.y;
        // use Eucledian distance formula to calculate distance between the two balls
        let distance = p.sqrt(dx * dx + dy * dy);

        if (distance < this.w) {
          let angle = Math.atan2(dy, dx);
          let targetX = this.pos.x + Math.cos(angle) * this.w;
          let targetY = this.pos.y + Math.sin(angle) * this.w;
          let ax = (targetX - balls[i].pos.x) * 0.01;
          let ay = (targetY - balls[i].pos.y) * 0.01;
          this.xvel -= ax;
          this.yvel -= ay;
          balls[i].xvel += ax;
          balls[i].yvel += ay;
        }
      }
    };

    this.limitSpeed = function () {
      if (this.xvel < 1 && this.xvel < -0.5) {
        this.xvel = -0.5;
      }
      if (this.xvel > 1 && this.xvel > 0.5) {
        this.xvel = 0.5;
      }
      if (this.yvel < 1 && this.yvel < -0.5) {
        this.yvel = -0.5;
      }
      if (this.yvel > 1 && this.yvel > 0.5) {
        this.yvel = 0.5;
      }
    };

    this.move = function () {
      this.checkBoundary();
      // check if the ball touches the mouse pointer
      if (this.check) {
        let radiusEffect = 120;
        let dx = p.mouseX - this.pos.x;
        let dy = p.mouseY - this.pos.y;
        // use Eucledian distance formula to calculate distance between the two balls
        let distance = p.sqrt(dx * dx + dy * dy);

        let checkDistance = this.w / 2 + radiusEffect / 2;
        if (distance < checkDistance) {
          let angle = p.atan2(dy, dx);
          let targetX = p.mouseX + p.cos(angle) * checkDistance;
          let targetY = p.mouseY + p.sin(angle) * checkDistance;
          let ax = (targetX - this.pos.x) * 0.01;
          let ay = (targetY - this.pos.y) * 0.01;
          this.xvel -= ax;
          this.yvel -= ay;
          this.speed = 5;
          this.check = false;
          setTimeout(() => (this.check = true), 500);
        }
      }
      // friction effect
      if (this.speed > 1) {
        this.speed -= 0.05;
      } else {
        this.speed = 1;
      }

      this.limitSpeed();
      this.pos.x += this.xvel * this.speed;
      this.pos.y += this.yvel * this.speed;
    };
  }

  p.setup = function () {
    p.createCanvas(window.innerWidth, window.innerHeight);
    // limit the amount of balls based on the screen width
    let ballCount = 0.07 * window.innerWidth;
    for (var i = 0; i < ballCount; i++) {
      let ball = new Ball();
      balls.push(ball);
    }
  };

  p.draw = function () {
    p.background("#f0f5f9");
    // p.pop();
    // p.ellipse(p.mouseX, p.mouseY, 110, 110);
    // p.noFill();
    // p.stroke(0);
    // p.push();
    for (var i = 0; i < balls.length; i++) {
      balls[i].show();
      balls[i].move();
      balls[i].collision(balls);
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
