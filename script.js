// Lesson 9: Recap — Loops & Objects

// --------------------------------------
// Section 1: Looping Through Arrays
// --------------------------------------

const fruitNames = ["Apple", "Banana", "Mango", "Grapes", "Pear"];

// 'for' loop, allows the possibility to change starting index, when we end and how we increment.
for (let i = 0; i < fruitNames.length; i++) {
  console.log(fruitNames[i]);
}

// 'for... of' loop, works like a standard 'for' loop, will loop through each element in the array. No access to i.
for (let fruit of fruitNames) {
  console.log(fruit);
}

// --------------------------------------
// Section 2: Looping with Conditions
// --------------------------------------

const numbers = [12, 5, 8, 13, 44, 300, 22];

// Loop through the array,
// if the number is < 10 jump to the next loop.
// if the number is > 100 break.
// otherwise console log the number.

for (let number of numbers) {
  if (number < 10) continue;
  if (number > 100) break;
  console.log(number);
}

// --------------------------------------
// Section 3: The while Loop (Guessing Game)
// --------------------------------------

// generate a random number between 1-10

const randomNumber = Math.floor(Math.random() * 10) + 1;
let guess = 1;

// Use a while loop to increment a guess variable.  When the guess and the randomNumber match, end the loop and console log that we guessed correctly.

while (randomNumber !== guess) {
  console.log(`Guessing: ${guess}`);
  guess++;
}
if (guess === randomNumber) {
  console.log(`Correct! The number was: ${guess}`);
}

// --------------------------------------
// Section 4: Basic Object Review
// --------------------------------------

const book = {
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  pages: 310,
};

// Add year 'published' (1937)
book.published = 1937;

// Change pages to 320
book.pages = 320;

// Remove author
delete book.author;

// Target title using dot notation
console.log(book.title);

// Target pages using bracket notation
console.log(book["pages"]);

// --------------------------------------
// Section 5: Looping Through an Object and using Dynamic keys
// --------------------------------------

for (let key in book) {
  console.log(key);
  console.log(book[key]);
}

// --------------------------------------
// Section 6: Array of Objects – Fruit Data
// --------------------------------------

const fruits = [
  {
    name: "Apple",
    color: "Red",
    calories: 52,
    pricePerKg: 3.5,
    countryOfOrigin: "USA",
  },
  {
    name: "Banana",
    color: "Yellow",
    calories: 89,
    pricePerKg: 1.2,
    countryOfOrigin: "Ecuador",
  },
  {
    name: "Orange",
    color: "Orange",
    calories: 47,
    pricePerKg: 2.8,
    countryOfOrigin: "Spain",
  },
  {
    name: "Strawberry",
    color: "Red",
    calories: 32,
    pricePerKg: 6.0,
    countryOfOrigin: "Mexico",
  },
  {
    name: "Mango",
    color: "Orange",
    calories: 60,
    pricePerKg: 4.0,
    countryOfOrigin: "India",
  },
  {
    name: "Grapes",
    color: "Green",
    calories: 69,
    pricePerKg: 3.5,
    countryOfOrigin: "Italy",
  },
  {
    name: "Pineapple",
    color: "Brown",
    calories: 50,
    pricePerKg: 3.0,
    countryOfOrigin: "Costa Rica",
  },
];

for (let fruit of fruits) {
  console.log(
    `${fruit.name} is a ${fruit.color.toLowerCase()} fruit from ${
      fruit.countryOfOrigin
    }`
  );
}

// Task 2: Find the cheapest fruit.
// Console.log: 'The cheapest fruit is X, costing X kr. per kg.'

let lowestPrice = Infinity;
let fruitName = "";

for (let fruit of fruits) {
  if (fruit.pricePerKg < lowestPrice) {
    lowestPrice = fruit.pricePerKg;
    fruitName = fruit.name;
  }
}

console.log(
  `The lowest priced fruit is ${fruitName}, costing ${lowestPrice} kr. per kg.`
);

// --------------------------------------
// Section 8: Adding and Removing Properties in a Loop
// --------------------------------------

// Add a "good" property to every fruit

for (let fruit of fruits) {
  fruit.good = true;
}

for (let fruit of fruits) {
  delete fruit.good;
  console.log(fruit);
}

// --------------------------------------
// Section 9: Object in Function
// --------------------------------------

function describeFruit(fruit) {
  return `${fruit.name} contains ${fruit.calories} calories per 100g.`;
}

console.log(describeFruit(fruits[0]));
console.log(describeFruit(fruits[5]));

// --------------------------------------
// Section 10: Summary
// --------------------------------------

// ✅ Use loops to repeat tasks or go through arrays and objects.
// ✅ for...of is great for typical arrays;
// ✅ for...in is used for object keys.
// ✅ Objects store data in key-value pairs.
// ✅ Arrays can contain multiple objects. (Object arrays)
// ✅ Loops can combine with logic, conditions, and functions.
// ✅ You can add, modify, or delete properties dynamically.

// Bonus topic - JSON - JavaScript Object Notation. JSON is received from API (you'll learn this in JS advanced!) it's similar to an object array, but it's a string and the keys are surrounded by ""

// we can 'parse' the JSON using JSON.parse() to turn it into a useable object array.

// prettier-ignore
let rawJsonData = `{
"abilities": [
{
"ability": {
"name": "limber",
"url": "https://pokeapi.co/api/v2/ability/7/"
},
"is_hidden": false,
"slot": 1
},
{
"ability": {
"name": "imposter",
"url": "https://pokeapi.co/api/v2/ability/150/"
},
"is_hidden": true,
"slot": 3
}
]
}`

let parsedData = JSON.parse(rawJsonData);

console.log(parsedData);

console.log(parsedData.abilities[0].ability.name);
