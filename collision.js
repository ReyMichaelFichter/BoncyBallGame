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

function handleBlockCollision() {
  blocks = blocks
    .map(block => {
      if (
        collideRectCircle(
          block.x,
          block.y,
          block.w,
          block.h,
          ball.pos.x,
          ball.pos.y,
          ball.rad
        )
      ) {
        makeReflection(ball, block);
      }
      return block;
    })
    .filter(
      block =>
        !collideRectCircle(
          block.x,
          block.y,
          block.w,
          block.h,
          ball.pos.x,
          ball.pos.y,
          ball.rad
        )
    );
}

function makeReflection(ball, block) {
  const colissionBorder = getColissionBorder(block);
  if (colissionBorder==='b' || colissionBorder==='t') {
    ball.velocity.y *= -1;
  } else {
    ball.velocity.x *= -1;
  }
  speed *= 1.05;
  ball.setSpeed(speed);
  paddle.setSpeed(speed);
}

function getColissionBorder(block) {
  const intersections = {
    r: getIntersectionDistance(ball, block, "r"),
    l: getIntersectionDistance(ball, block, "l"),
    t: getIntersectionDistance(ball, block, "t"),
    b: getIntersectionDistance(ball, block, "b")
  };
  const colissionBorder = Object.keys(intersections)
    .map(k => [k, intersections[k]])
    .reduce((a, b) => (b[1] < a[1] ? b : a));
  return colissionBorder[0]
}

function getBallPath() {
  x1 = ball.pos.x + ball.velocity.x * -5;
  y1 = ball.pos.y + ball.velocity.y * -5;
  x2 = ball.pos.x + ball.velocity.x * 5;
  y2 = ball.pos.y + ball.velocity.y * 5;
  return [x1, y1, x2, y2];
}

function getIntersectionDistance(ball, block, b) {
  const border = block.border(b);
  const ballPath = getBallPath();

  const intersection = collideLineLine(...ballPath, ...border, true);
  return intersection.x
    ? dist(ball.pos.x, ball.pos.y, intersection.x, intersection.y)
    : Infinity;
}
