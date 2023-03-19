const canvas = document.getElementById('dexterityCanvas');
const ctx = canvas.getContext('2d');
const platformWidth = 100;
const platformHeight = 10;
const skeletonSize = 30;
const gravity = 0.5;
const bounceFactor = -0.5;
let platformX = (canvas.width - platformWidth) / 2;
let skeletonX = Math.random() * (canvas.width - skeletonSize);
let skeletonY = 0;
let skeletonSpeedY = 2;

let timer = 60;
let interval;

function startTimer() {
  interval = setInterval(() => {
    timer--;
    if (timer <= 0) {
      clearInterval(interval);
      alert('Congratulations! You have completed the dexterity puzzle.');
      // Redirect to the next puzzle or game over screen
    }
  }, 1000);
}

function drawPlatform() {
  ctx.beginPath();
  ctx.rect(platformX, canvas.height - platformHeight, platformWidth, platformHeight);
  ctx.fillStyle = '#fff';
  ctx.fill();
  ctx.closePath();
}

function drawSkeleton() {
  ctx.beginPath();
  ctx.arc(skeletonX + skeletonSize / 2, skeletonY + skeletonSize / 2, skeletonSize / 2, 0, Math.PI * 2);
  ctx.fillStyle = '#f00';
  ctx.fill();
  ctx.closePath();
}

function drawTimer() {
  ctx.font = '16px

  // ... (previous code)

  if (
    skeletonY + skeletonSize >= canvas.height - platformHeight &&
    skeletonX + skeletonSize >= platformX &&
    skeletonX <= platformX + platformWidth
  ) {
    skeletonSpeedY *= bounceFactor;
    skeletonY = canvas.height - platformHeight - skeletonSize;
  }

  if (skeletonY + skeletonSize > canvas.height) {
    alert('Game over! You failed to keep the skeleton head in the air.');
    // Redirect to the game over screen or restart the puzzle
  }
}

function keyDownHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    platformX += 10;
    if (platformX + platformWidth > canvas.width) {
      platformX = canvas.width - platformWidth;
    }
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    platformX -= 10;
    if (platformX < 0) {
      platformX = 0;
    }
  }
}

document.addEventListener('keydown', keyDownHandler, false);
startTimer();
setInterval(draw, 10);

