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
        let distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));

        if (distance < this.w / 2 + this.w / 2) {
          let angle = Math.atan2(dy, dx);
          let targetX =
            this.pos.x + Math.cos(angle) * (this.w / 2 + this.w / 2);
          let targetY =
            this.pos.y + Math.sin(angle) * (this.w / 2 + this.w / 2);
          let ax = (targetX - balls[i].pos.x) * 0.01;
          let ay = (targetY - balls[i].pos.y) * 0.01;
          this.xvel += ax;
          this.yvel += ay;
          balls[i].xvel -= ax;
          balls[i].yvel -= ay;
        }
      }
    };

    this.move = function () {
      this.checkBoundary();

      // friction effect
      if (this.speed > 1) {
        this.speed -= 0.05;
      } else {
        this.speed = 1;
      }

      // check if the ball touches the mouse pointer
      if (this.check) {
        let radiusEffect = 110;
        if (
          p.mouseX - radiusEffect < this.pos.x + this.w / 2 &&
          p.mouseX + radiusEffect > this.pos.x - this.w / 2 &&
          p.mouseY - radiusEffect < this.pos.y + this.w / 2 &&
          p.mouseY + radiusEffect > this.pos.y - this.w / 2
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
      // if (this.xvel > 0 && this.xvel > this.minSpeed) {
      //   this.xvel -= 0.1;
      // }
      // if (this.xvel < 0 && this.xvel < -this.minSpeed) {
      //   this.xvel += 0.1;
      // }

      // if (this.yvel > 0 && this.yvel > this.minSpeed) {
      //   this.yvel -= 0.1;
      // }
      // if (this.yvel < 0 && this.yvel < -this.minSpeed) {
      //   this.yvel += 0.1;
      // }
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
    for (var i = 0; i < balls.length; i++) {
      balls[i].show();
      balls[i].move();
      // balls[i].collision(balls);
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
