import React from "react";

const animate = () => {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

  canvas.width = innerWidth;
  canvas.height = innerHeight;

  const colors = ["#2185C5", "#7ECEFD", "#FFF6E5"];

  //Random range
  function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //random color in array
  function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  //create a object particle
  function Particles(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = randomColor(colors);
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = Math.random() * 0.03;
    this.distanceFromCenter = randomIntFromRange(canvas.width, 10);

    this.update = () => {
      let lastPoint = { x: this.x, y: this.y };
      this.color = this.color;
      //console.log(c);
      this.radians += this.velocity;
      this.x = x + Math.cos(this.radians) * this.distanceFromCenter;
      this.y = y + Math.sin(this.radians) * this.distanceFromCenter;

      let changedColorDecimal = parseInt(randomColor(colors).substr(1), 16);
      //this.color = this.color;
      let colorDecimal = parseInt(this.color.substr(1), 16);
      let Diff = colorDecimal - changedColorDecimal;
      //console.log(Math.abs(Diff));

      if (colorDecimal > changedColorDecimal) {
        colorDecimal -= 100;
      } else if (colorDecimal < changedColorDecimal) {
        colorDecimal += 100;
      }

      let c = "#" + colorDecimal.toString(16);
      this.color = c;

      this.draw(lastPoint);
    };
    this.change = () => {
      this.x = x + Math.cos(this.radians) * this.distanceFromCenter;
      this.y = y + Math.sin(this.radians) * this.distanceFromCenter;
    };

    this.draw = lastPoint => {
      ctx.beginPath();
      ctx.strokeStyle = this.color;
      ctx.lineWidth = this.radius;
      ctx.moveTo(lastPoint.x, lastPoint.y);
      ctx.lineTo(this.x, this.y);
      ctx.stroke();
      ctx.closePath();
    };
  }

  // Create particles
  let particles;
  function init() {
    particles = [];

    for (let i = 0; i < 400; i++) {
      let radius = Math.random() * 2 + 1;
      particles.push(
        new Particles(
          canvas.width / 2,
          canvas.height / 2,
          radius,
          randomColor(colors)
        )
      );
    }
  }

  // Animation Loop
  function animate() {
    requestAnimationFrame(animate);

    ctx.fillStyle = "rgba(0, 0, 0,0.2 )";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //c.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
      particle.update();
    });
  }
  init();
  animate();
};

export default animate;
