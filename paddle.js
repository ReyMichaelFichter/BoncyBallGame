const paddlewidth = 50;
const paddleheight = 10;

class Paddle {
  constructor() {
    this.x = width / 2 - paddlewidth / 2;
    this.y = height - 2 * paddleheight;
    this.w = paddlewidth;
    this.h = paddleheight;
    this.spd = 5;
    this.color = color(255);
  }

  show() {
    fill(this.color);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  }

  move(dir) {
    if (dir === "r") {
      this.x += this.x <= width - paddlewidth - this.spd ? this.spd : 0;
    }
    if (dir === "l") {
      this.x -= this.x >= this.spd ? this.spd : 0;
    }
  }

  setSpeed(s) {
    this.spd = s
  }
}
