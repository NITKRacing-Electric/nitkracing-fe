import * as React from "react";
import { ReactP5Wrapper } from "@p5-wrapper/react";

const num = 1000;
const noiseScale = 2000,
  noiseStrength = 1;
const particles = [num];

function sketch(p5) {
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL);
    p5.noStroke();
    for (let i = 0; i < num; i++) {
      //x value start slightly outside the right of canvas, z value how close to viewer
      var loc = p5.createVector(
        p5.random(p5.windowWidth * 1.2),
        p5.random(p5.windowHeight),
        2
      );
      var angle = 0; //any value to initialize
      var dir = p5.createVector(p5.cos(angle), p5.sin(angle));
      var speed = p5.random(0.5, 2);
      // var speed = random(5,map(mouseX,0,width,5,20));   // faster
      particles[i] = new Particle(loc, dir, speed, p5);
    }
  };

  p5.windowRezied = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  p5.draw = () => {
    console.log(p5.windowHeight, p5.windowWidth);
    p5.fill(0, 10);
    p5.noStroke();
    p5.translate(-p5.windowWidth / 2, -p5.windowHeight / 2);
    p5.rect(0, 0, p5.windowWidth, p5.windowHeight);
    // p5.circle(0, 0, 200)

    for (let i = 0; i < particles.length; i++) {
      particles[i].run();
    }
  };

  class Particle {
    constructor(_loc, _dir, _speed, p5) {
      this.loc = _loc;
      this.dir = _dir;
      this.speed = _speed;
      this.p5 = p5;
      // var col;
    }
    run() {
      this.move();
      this.checkEdges();
      this.update();
    }
    move() {
      let angle =
        p5.noise(
          this.loc.x / noiseScale,
          this.loc.y / noiseScale,
          p5.frameCount / noiseScale
        ) *
        p5.TWO_PI *
        noiseStrength; //0-2PI
      this.dir.x = p5.cos(angle);
      this.dir.y = p5.sin(angle);
      var vel = this.dir.copy();
      var d = 1; //direction change
      vel.mult(this.speed * d); //vel = vel * (speed*d)
      this.loc.add(vel); //loc = loc + vel
    }
    checkEdges() {
      //float distance = dist(width/2, height/2, loc.x, loc.y);
      //if (distance>150) {
      if (
        this.loc.x < 0 ||
        this.loc.x > p5.width ||
        this.loc.y < 0 ||
        this.loc.y > p5.height
      ) {
        this.loc.x = p5.random(p5.width * 1.2);
        this.loc.y = p5.random(p5.height);
      }
    }
    update() {
      p5.fill("rgba(255,0,0,0.2)");
      p5.ellipse(this.loc.x, this.loc.y, this.loc.z);
    }
  }
}

function FlowFieldCanvas() {
  return <ReactP5Wrapper sketch={sketch} />;
}

export default FlowFieldCanvas;
