var ball = {
  x: 450,
  y: 200,
  r: 255,
  g: 0,
  b: 255,
  dia: 20,
  xSpeed: -8,
  ySpeed: -2,
  display: function() {
    fill(random(this.r), this.g, random(this.b));
    ellipse(this.x, this.y, this.dia, this.dia);
    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
    } else if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
    }
    if (this.x >= 500) {
      this.xSpeed *= -1;
    }
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
};

var player = {
  x: 500,
  y: 150,
  w: 20,
  h: 100,
  display: function() {
    fill(255);
    rect(this.x, ball.y - this.h / 2, this.w, this.h);
  }
};

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(51);
  ball.display();
  player.display();
}