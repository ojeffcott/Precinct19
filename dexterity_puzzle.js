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
  ctx.font = '16px Arial';
  ctx.fillStyle = '#fff';
  ctx.fillText('Time remaining: ' + timer, 10, 20);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlatform();
  drawSkeleton();
  drawTimer();

  skeletonY += skeletonSpeedY;
  skeletonSpeedY += gravity;

  if (
    skeletonY + skeletonSize >= canvas.height - platformHeight &&
    skeletonX + skeletonSize >= platformX &&
    skeletonX <= platformX + platformWidth
  ) {
    skeletonSpeedY *= bounceFactor;
  }

  if (skeletonY + skeletonSize > canvas.height) {
    alert('Game Over! The skeleton head hit the ground.');
    // Redirect to the game over screen
  }

  requestAnimationFrame(draw);
}

function movePlatform(e) {
  if (e.key === 'ArrowLeft') {
    platformX -= 7;
    if (platformX < 0) platformX = 0;
  } else if (e.key === 'ArrowRight') {
    platformX += 7;
    if (platformX + platformWidth > canvas.width) platformX = canvas.width - platformWidth;
  }
}

document.addEventListener('keydown', movePlatform);
startTimer();
draw();
