var ball;
var player;

function setup() {
  createCanvas(600, 400);
  ball = new Ball();
  player = new Player();
}

function draw() {
  background(51);
  ball.display();
  player.display();
  ball.update();
  player.check();
}

function Ball() {
  this.x = 300;
  this.y = 200;
  this.r = 12;
  this.xSpeed = 25;
  this.ySpeed = 3;
  this.col = color(255);
  this.display = function() {
    fill(this.col);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
  this.update = function() {
    if (this.x < 0 + this.r) {
      this.xSpeed *= -1;
    } else if (this.y < 0 + this.r) {
      this.ySpeed *= -1;
    } else if (this.y > height - this.r) {
      this.ySpeed *= -1;
    } else if (this.x > width - this.r) {
      this.xSpeed *= -1;
    }
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
}

function Player() {
  this.x = 510;
  this.y = 200;
  this.a = 20;
  this.b = 100;
  this.col = color(255);
  this.display = function() {
    rectMode(CENTER);
    fill(this.col);
    rect(this.x, mouseY, this.a, this.b);
  }
  this.check = function() {
    if (ball.x >= this.x - (this.a / 2) && ball.x <= this.x + (this.a / 2) && ball.y >= mouseY - (this.b / 2) && ball.y <= mouseY + (this.b / 2)) {
      ball.xSpeed *= -1;
    }
  }
}
