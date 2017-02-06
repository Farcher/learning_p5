var bubbles = [];

function setup() {
  createCanvas(400, 400);
  for (var i = 0; i < 5; i++) {
    bubbles[i] = new Bubble();
  }
}

function draw() {
  background(51);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }
}

function Bubble() {
  this.x = random(width);
  this.y = random(height);
  this.dia = 25;
  this.display = function() {
    strokeWeight(3);
    stroke(255);
    noFill();
    ellipse(this.x, this.y, this.dia, this.dia);
  }

  this.move = function() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }
}