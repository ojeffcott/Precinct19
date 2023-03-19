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
let timeLeft = gameTime / 1000;

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

const skullImage = new Image();
skullImage.src = 'skull.png';

function drawSkeletonHead() {
  ctx.drawImage(skullImage, skeletonHeadX - skeletonHeadRadius, skeletonHeadY - skeletonHeadRadius, skeletonHeadRadius * 2, skeletonHeadRadius * 2);
}

function drawTimer() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#FFFFFF";
  ctx.fillText("Time left: " + timeLeft, 8, 20);
}

function gameOver() {
  alert("Game Over!");
  location.href = 'defeat.html';
}

function gameWon() {
  alert("Congratulations! You survived the dexterity challenge.");
  location.href = "luck_puzzle.html";
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlatform();
  drawSkeletonHead();
  drawTimer();

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

function updateTimer() {
  timeLeft--;
  if (timeLeft < 0) {
    gameWon();
  }
}

setInterval(updateTimer, 1000);
setTimeout(() => {
  clearInterval(updateTimer);
}, gameTime);

draw();
