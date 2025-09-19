// Lesson 6 - Functions / Methods recap

// --------------------------------------
// Section 1: Check if a list includes an item (function, ternary, array)
// --------------------------------------

const shoppingList = ["milk", "bread", "cheese"];
const gamesList = [
  "mario kart",
  "hollow knight",
  "hello kitty island adventure",
  "remnant 2",
  "starcraft broodwar",
  "WoW",
];

const checkItem = (item, list) =>
  `${item} is ${list.includes(item) ? "" : "not"} included in the list`;

console.log(checkItem("milk", shoppingList));
console.log(checkItem("catfood", shoppingList));
console.log(checkItem("remnant 2", gamesList));
console.log(checkItem("Gears of War", gamesList));

//   let isIsNot;

//   if (included) {
//     isIsNot = "is ";
//   } else {
//     isIsNot = "is not ";
//   }

//   return item + " " + isIsNot + "included in the list";

// --------------------------------------
// Section 2: Convert a Sentence into Kebab Case (function, methods)
// --------------------------------------

function toKebabCase(string) {
  //   return string.trim().split(" ").join("-");
  //   return string.trim().replaceAll(" ", "-");
  return string
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, "-");
}

console.log(toKebabCase("   Hello From The Function    "));

// --------------------------------------
// Section 3: Checking if a word is a palindrome (function, methods)
// --------------------------------------

function isPalindrome(word) {
  const lcWord = word.toLowerCase();

  if (lcWord === lcWord.split("").reverse().join("")) {
    return `${word} is a palindrome`;
  } else {
    return `${word} is not a palindrome`;
  }

  // .toLowerCase   makes our words all lowercase
  // .split("")     split our string into an array with each caracter as an element in the array
  // .toReversed    reverses the order of the array
  // .join("")          joins the elements in the array back into a string.
}

console.log(isPalindrome("Racecar")); // Racecar is a palindrome
console.log(isPalindrome("Banana")); // Banana is not a palindrome

// --------------------------------------
// Section 4: Shorten a String and Add “...” at the End (functions, methods)
// --------------------------------------

function shorten(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  } else {
    return text.slice(0, maxLength) + "...";
  }
}

let myText = "This is a long sentence that needs shortening.";

console.log(shorten(myText, 20)); // "This is a long sente..."
console.log(shorten(myText, 10));
console.log(shorten(myText, 30));

// --------------------------------------
// Section 5: Introduction to Math.random
// --------------------------------------

// Math.random() is a built-in JavaScript method that gives you a random number between 0 (inclusive) and 1 (exclusive).
// 0.0000000000000000 - 0.9999999999999999

console.log(Math.random());

// 0-9

// 0.0000000000 - 9.9999999999999

console.log(Math.floor(Math.random() * 10));

// 1-10

console.log(Math.floor(Math.random() * 10) + 1);

// console.log(Math.ceil(Math.random() * 10));

// We can use this random number to target a random element in an array!

const pokemon = [
  "pikachu",
  "diglett",
  "electrode",
  "machop",
  "magikarp",
  "mew",
  "blastoise",
  "vaporeon",
  "psyduck",
  "meowth",
];

// We can use math.random to create a random index.  If we multiply the math.random by pokemon.length then we will be able to add or remove from the array without causing bugs.

const randomIndex = Math.floor(Math.random() * pokemon.length);

console.log(pokemon[randomIndex]);

// --------------------------------------
// Section 6: Remove the Middle Element from an Array (function, methods, Math.floor)
// --------------------------------------

const myArray = ["A", "B", "C", "D", "E", "F", "G", "H"];

function removeMiddle(array) {
  const mid = Math.floor(array.length / 2);
  return array.toSpliced(mid, 1);
}

console.log(removeMiddle(myArray));

// --------------------------------------
// Section 7: Rock, paper scissors (function, switch case, Math.random)
// --------------------------------------

function rockPaperScissors(player1, AI) {
  switch (player1 + AI) {
    case "rock" + "rock":
    case "paper" + "paper":
    case "scissors" + "scissors":
      return "It's a draw";

    case "rock" + "scissors":
    case "scissors" + "paper":
    case "paper" + "rock":
      return "Player 1 wins";

    case "rock" + "paper":
    case "scissors" + "rock":
    case "paper" + "scissors":
      return "AI wins";

    default:
      return "Stop trying to hack the game, muppet!";
  }
}

const possibleAnswers = ["rock", "paper", "scissors"];

const aiAnswer =
  possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];

console.log("The AI answered:", aiAnswer);

console.log(rockPaperScissors("scissors", aiAnswer));
