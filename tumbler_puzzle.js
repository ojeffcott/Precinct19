const symbols = ['□', '■', '○', '△', '★'];
const correctSequence = ['■', '△', '○', '□', '★'];
const playerSequence = new Array(symbols.length).fill(0);

function cycleTumbler(index) {
  playerInput[index] = (playerInput[index] + 1) % symbols.length;
  tumblers[index].textContent = symbols[playerInput[index]];
}

function checkSolution() {
  if (playerInput.every((value, index) => value === solution[index])) {
    alert('Congratulations! You solved the puzzle.');
  } else {
    alert('Incorrect solution. Please try again.');
  }
}
