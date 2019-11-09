const w = 30;
const h = 10;
class Block {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color(random(255), random(255), random(255));
    this.hit = false;
  }

  show() {
    fill(this.color);
    noStroke();
    rect(this.x, this.y, this.w, this.h);
  }

  border(b) {
    if (b === "l") {
      return [this.x, this.y, this.x, this.y + this.h];
    } else if (b === "r") {
      return [this.x + this.w, this.y, this.x + this.w, this.y + this.h];
    } else if (b === "t") {
      return [this.x, this.y, this.x + this.w, this.y];
    } else if (b === "b") {
      return [this.x, this.y + this.h, this.x + this.w, this.y + this.h];
    } else {
      throw Error("Invalid argument: Block.border(b) can only be invoked with b being one of l, r t or b ")
    }
  }
}

function initialBlocks() {
  const blocks = [];
  for (x = 5; x <= width - w - 5; x += w + 5) {
    blocks.push(new Block(x, 5));
  }
  return blocks;
}
