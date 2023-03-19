function chooseDoor(doorNumber) {
  const randomOutcome = Math.floor(Math.random() * 3) + 1;

  if (randomOutcome === 1) {
    alert('Congratulations! You have completed Precinct 19.');
    // Redirect to the victory screen or main menu
    location.href = 'victory.html';
  
  } else if (randomOutcome === 2) {
    alert('You have been sent back to the beginning. Try again!');
    // Redirect to the homepage
    location.href = 'index.html';
  } else {
    alert('You have met a terrible fate. Game over!');
    // Redirect to the game over screen or disable game access
    location.href = 'defeat.html';
  }
}
