let speed = 6;
class Ball {
  constructor() {
    this.pos = createVector(width / 2, height - 30);
    this.velocity = p5.Vector.random2D();
    this.velocity.mult(speed);
    this.rad = 4;
    this.color = color(255);
  }
  show() {
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.rad*2, this.rad*2);
  }
  
  move() {
    this.pos.add(this.velocity);
  }

  setSpeed(s) {
    this.velocity.normalize()
    this.velocity.mult(s)
  }
}
