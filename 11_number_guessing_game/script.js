// Declare global variables
let randomNumber, guessesLeft, guessedNumbers;

// Targeting DOM elements

const guessInput = document.getElementById("guessInput");
const feedback = document.getElementById("feedback");
const guessesLeftDisplay = document.getElementById("guessesLeft");
const previousGuessesElement = document.getElementById("previousGuesses");
const restartButton = document.getElementById("restartButton");
const guessButton = document.getElementById("guessButton");

// Function to initialize or restart the game

function initGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  guessesLeft = 10;
  guessesLeftDisplay.textContent = `Guesses left: ${guessesLeft}`;
  guessedNumbers = [];
  previousGuessesElement.textContent = "";
  feedback.textContent = "";
  restartButton.style.display = "none";
  guessInput.disabled = false;
  guessButton.disabled = false;
  guessInput.value = null;
  // We'll come back to this when we get issues
}

// Adding an event listener to our guess button, runs the checkGuess function.
guessButton.addEventListener("click", checkGuess);

// Adding an event listener so we can press "Enter" on our keyboard to also run the checkGuess function
guessInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") checkGuess();
});

// Adding an event listener on our restart button to run initGame function
restartButton.addEventListener("click", initGame);

// Function that runs when the user clicks guess button. It will update the game based on the users guess.

function checkGuess() {
  const userGuess = Number(guessInput.value);

  // Validate the user's guess
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedback.textContent = "Please enter a valid number between 1 and 100";
    return;
  }

  // check if user has already guessed this number
  for (prevGuess of guessedNumbers) {
    if (prevGuess === userGuess) {
      alert("You already guessed that, you silly head!");
      return;
    }
  }

  // Record the guess and update the previous guesses display

  guessedNumbers.push(userGuess);
  previousGuessesElement.textContent = `
    Guessed numbers: ${guessedNumbers.join(", ")}`;

  // reduce guesses left by 1
  guessesLeft--;

  // change guessesLeft paragraph to display current amount of guesses left
  guessesLeftDisplay.textContent = `Guesses left: ${guessesLeft}`;

  // check if correct
  // if it is correct, change feedback to "you win" and enable restart button
  if (randomNumber === userGuess) {
    feedback.textContent = `You win! The random number was ${randomNumber}`;
    endGame();
    return;
  }

  // if they are within 5, change feedback to "you're close"
  // else if it is too low, change feedback to "too low"
  // else if it is too high, change feedback to "too high"
  const difference = Math.abs(userGuess - randomNumber);

  if (difference <= 5) {
    feedback.textContent = `You're close!`;
  } else if (userGuess < randomNumber) {
    feedback.textContent = `Too low!`;
  } else if (userGuess > randomNumber) {
    feedback.textContent = `Too high!`;
  }

  // check if user has used up all guesses
  // change feedback to "you lose"
  // enable restart button
  if (guessesLeft === 0) {
    feedback.textContent = `You lose, try again! The number was ${randomNumber}`;
    endGame();
  }
}

// function that runs when the game ends
function endGame() {
  restartButton.style.display = "inline-block";
  guessInput.disabled = true;
  guessButton.disabled = true;
}
