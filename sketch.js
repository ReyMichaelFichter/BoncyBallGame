let ball;
let block;
let paddle;
let blocks;

function setup() {
  createCanvas(710, 400);
  frameRate(30);
  ball = new Ball();
  paddle = new Paddle();
  blocks = initialBlocks();
}

function draw() {
  background(100);
  paddle.show();
  if (keyIsDown(37)) {
    paddle.move("l");
  }
  if (keyIsDown(39)) {
    paddle.move("r");
  }
  ball.show();
  for (block of blocks) {
    block.show();
  }
  handleBlockCollision();
  handlePaddleCollision();
  ball.move();
  bounce(ball);
}

function handlePaddleCollision() {
  if (
    collideRectCircle(
      paddle.x,
      paddle.y,
      paddle.w,
      paddle.h,
      ball.pos.x,
      ball.pos.y,
      ball.rad
    )
  ) {
    ball.velocity.y *= -1;
  }
}


function bounce(ball) {
  // Boundary colissions
  if (ball.pos.x > width - ball.rad || ball.pos.x < ball.rad) {
    ball.velocity.x *= -1;
  }
  if (ball.pos.y < ball.rad) {
    ball.velocity.y *= -1;
  }
  if (ball.pos.y >= height - ball.rad) {
    gameOver();
  }
}

function promptPlayAgain() {
  button = createButton('Play again?');
  button.position(width/2, height/2);
}

function gameOver() {
  frameRate(0);
  promptPlayAgain()
}
