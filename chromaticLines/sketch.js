var straightLine = [];

function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 5; i++) {
    straightLine[i] = new StraightLine();
  }
}

function draw() {
  background(255);
  for (var i = 0; i < straightLine.length; i++) {
    straightLine[i].drawLine();
    straightLine[i].move();
  }
}

function StraightLine() {
  this.x = random(600);
  this.y = random(400);
  this.r = random(255);
  this.g = 0;
  this.b = random(255);
  this.moveX = 3;
  this.drawLine = function() {
    stroke(this.r, this.g, this.b);
    line(this.x, this.y, 300, 200);
  }
  this.move = function() {
    this.x += this.moveX;
    if (this.x > width || this.x < 0) {
      print(this.moveX);
      this.moveX *= -1;
    }
  }
}