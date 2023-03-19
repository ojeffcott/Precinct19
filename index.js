function submitPuzzle() {
  const inputSequence = document.getElementById("sequence").value;
  const correctSequence = "5-3-1-2-4";
  const isCorrect = inputSequence === correctSequence;

  if (isCorrect) {
    alert("Congratulations! You have successfully completed the puzzle.");
    location.href = "dexterity_puzzle.html";
  } else {
    alert("Incorrect sequence. Please try again.");
  }
}
