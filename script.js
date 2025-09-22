// Lesson 7: JavaScript Loops

// A loop is a way to repeat code without writing it multiple times.

// --------------------------------------
// Section 1: Why We Use Loops
// --------------------------------------

const names = ["Joe", "Jimbo", "Dexter"];

// Without a loop
// console.log(`Hei ${names[0]}`);
// console.log(`Hei ${names[1]}`);
// console.log(`Hei ${names[2]}`);
// console.log(`Hei ${names[3]}`);

// DRY - Don't repeat yourself

// --------------------------------------
// Section 2: The for Loop
// --------------------------------------

// Where does the loop start - Where/when does the loop end - How much does the loop go up by each time.

for (let i = 0; i < names.length; i++) {
  console.log(`Hei ${names[i]}`);
}

// Going backwards over the array
for (let i = names.length - 1; i >= 0; i--) {
  console.log(`Hei ${names[i]}`);
}

// Console log 1-5 using i
for (let i = 1; i <= 5; i++) {
  console.log(`Counting ${i}`);
}

// --------------------------------------
// Section 3: Combining Loops with Functions and Methods
// --------------------------------------

// Creating a function with a loop to clean and greet names in an array

const people = ["alice", " BOB ", "charlie", "dEbBy"];

function greetEveryone(nameArray) {
  const cleanNames = [];

  for (let i = 0; i < nameArray.length; i++) {
    const name = nameArray[i];
    cleanNames.push(
      name.trim().charAt(0).toUpperCase() + name.trim().slice(1).toLowerCase()
    );
  }
  return cleanNames;
}

console.log(greetEveryone(people));

let words = ["Loops", "are", "really", "useful"];

// Creating a function with a loop to combine elements in an array to a string

// function makeSentence(wordsArray) {
//   let sentence = "";
//   for (let i = 0; i < wordsArray.length; i++) {
//     sentence += wordsArray[i];
//     if (i < wordsArray.length - 1) {
//       sentence += " ";
//     }
//   }
//   return sentence + ".";
// }

// console.log(makeSentence(words));

// Some methods have an inbuilt loop, these few lines of code do exactly what we just did above!
function makeSentence(wordsArray) {
  return wordsArray.join(" ") + ".";
}

console.log(makeSentence(words));

// --------------------------------------
// Section 4: The for...of Loop
// --------------------------------------

const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}

let cleanedNames = [];
for (let person of people) {
  cleanedNames.push(
    person.trim().charAt(0).toUpperCase() + person.trim().slice(1).toLowerCase()
  );
}
console.log(cleanedNames);

// --------------------------------------
// Section 5: The while Loop
// --------------------------------------

let count = 1;

while (count <= 5) {
  console.log(`Our While count is at ${count}`);
  count++;
}

// Guessing game with a while loop

const secretNum = Math.floor(Math.random() * 10);

let guess = 0;

console.log(secretNum);

while (guess !== secretNum) {
  guess++;
  console.log(`Guessing: ${guess}`);

  if (guess === secretNum) {
    console.log(`Correct! The secret number was: ${guess}`);
  }
}

// --------------------------------------
// Section 6: Creating Arrays with Loops
// --------------------------------------

function makeRandomArray(length, max) {
  const result = [];

  for (let i = 0; i < length; i++) {
    result.push(Math.floor(Math.random() * max) + 1);
  }

  return result;
}

// console.log(makeRandomArray(10, 50));
const randomNumbers = makeRandomArray(40, 1000);
console.log(randomNumbers);

// --------------------------------------
// Section 7: Finding the Biggest Number
// --------------------------------------

function findMax(numbers) {
  let highestNum = 0;

  for (let num of numbers) {
    if (num > highestNum) {
      highestNum = num;
    }
  }

  return `The biggest number is: ${highestNum}`;
}

console.log(findMax(randomNumbers));

// --------------------------------------
// Section 8: Using break and continue
// --------------------------------------

const moreNames = [
  "Tom",
  "Eric",
  "Jessica",
  "Scott",
  "Anna",
  "Carl",
  "Elisabeth",
  "Benny",
  "Oliver",
  "Andy",
  "Jenny",
  "Ashley",
  "Erin",
  "Patrick",
];

// Skip "Andy"

for (let name of moreNames) {
  if (name === "Andy" || name === "Scott") continue;

  //   console.log(name);
}

// Stop when you reach "Benny"
for (let i = 0; i < moreNames.length; i++) {
  if (moreNames[i] === "Benny") break;
  console.log(moreNames[i]);
}

// --------------------------------------
// Summary
// --------------------------------------

// for        → best when using an index or counting
// for...of   → great for looping through entire arrays
// while      → useful when you don’t know how many times to repeat
// break      → stops the loop early
// continue   → skips to the next loop cycle
