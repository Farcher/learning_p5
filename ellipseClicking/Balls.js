function Balls() {
  this.x = 300;
  this.y = 250;
  this.dia = 30;
  this.col = color(random(255), 0, random(255));
  this.xSpeed = random(1, 10);
  this.ySpeed = random(1, 3);
  this.display = function() {
    fill(this.col);
    ellipse(this.x, this.y, this.dia, this.dia);
  }
  this.move = function() {
    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
    } else if (this.y > height || this.y < 0) {
      this.ySpeed *= -1;
    }
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
  this.clicked = function() {
    this.d = dist(mouseX, mouseY, this.x, this.y);
    if (this.d < this.dia/2) {
      this.col = (255);
    }
  }
}