const symbols = ['□', '△', '○'];
const solution = [1, 0, 2, 1, 0];
const playerInput = [0, 0, 0, 0, 0];
const tumblers = document.querySelectorAll('.tumbler');

function cycleTumbler(index) {
  playerInput[index] = (playerInput[index] + 1) % symbols.length;
  tumblers[index].textContent = symbols[playerInput[index]];
}

function checkSolution() {
  if (playerInput.every((value, index) => value === solution[index])) {
    alert('Congratulations! You solved the puzzle.');
    location.href = "dexterity_puzzle.html";
  } else {
    alert('Incorrect solution. You lose.');
    location.href = 'defeat.html';
  }
}
