var balls = [];

function setup() {
  createCanvas(600, 600);
  for (var i = 0; i < 10; i++) {
    balls[i] = new Balls();
  }
}

function mousePressed() {
  for (var i = 0; i < balls.length; i++) {
    balls[i].clicked();
  }
}

function draw() {
  background(51);
  for (var i = 0; i < balls.length; i++) {
    balls[i].display();
    balls[i].move();
  }
}