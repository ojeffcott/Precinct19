const canvas = document.getElementById("dexterityCanvas");
const ctx = canvas.getContext("2d");
const platformWidth = 100;
const platformHeight = 10;
const skeletonHeadRadius = 10;
let platformX = (canvas.width - platformWidth) / 2;
let platformY = canvas.height - platformHeight;
let skeletonHeadX = canvas.width / 2;
let skeletonHeadY = 30;
let skeletonHeadSpeedX = 3;
let skeletonHeadSpeedY = -3;
let rightArrowPressed = false;
let leftArrowPressed = false;
const platformSpeed = 7;
const gameTime = 30000; // 30 seconds

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightArrowPressed = true;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftArrowPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightArrowPressed = false;
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftArrowPressed = false;
  }
}

function drawPlatform() {
  ctx.beginPath();
  ctx.rect(platformX, platformY, platformWidth, platformHeight);
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.closePath();
}

function drawSkeletonHead() {
  ctx.beginPath();
  ctx.arc(skeletonHeadX, skeletonHeadY, skeletonHeadRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#FFFFFF";
  ctx.fill();
  ctx.closePath();
}

function gameOver() {
  alert("Game Over!");
  document.location.reload();
}

function gameWon() {
  alert("Congratulations! You survived the dexterity challenge.");
  location.href = "luck_puzzle.html";
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlatform();
  drawSkeletonHead();

  if (skeletonHeadX + skeletonHeadRadius > canvas.width || skeletonHeadX - skeletonHeadRadius < 0) {
    skeletonHeadSpeedX = -skeletonHeadSpeedX;
  }

  if (skeletonHeadY - skeletonHeadRadius < 0) {
    skeletonHeadSpeedY = -skeletonHeadSpeedY;
  } else if (
    skeletonHeadY + skeletonHeadRadius > platformY &&
    skeletonHeadX > platformX &&
    skeletonHeadX < platformX + platformWidth
  ) {
    skeletonHeadSpeedY = -Math.abs(skeletonHeadSpeedY);
  } else if (skeletonHeadY + skeletonHeadRadius > canvas.height) {
    gameOver();
    return;
  }

  if (rightArrowPressed && platformX < canvas.width - platformWidth) {
    platformX += platformSpeed;
  } else if (leftArrowPressed && platformX > 0) {
    platformX -= platformSpeed;
  }

  skeletonHeadX += skeletonHeadSpeedX;
  skeletonHeadY += skeletonHeadSpeedY;
  requestAnimationFrame(draw);
}

setTimeout(() => {
  gameWon();
}, gameTime);

draw();
