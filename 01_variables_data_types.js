// Variables, data types and basic operators

// --------------------------------------
// Section 1: Commenting our code
// --------------------------------------

// hotkey to comment   ctrl + *
// multi-line comments   shift + alt + a
// duplicate current line    shift + alt + down arrow

/* sdfgsdfgsdfg
sdfgsdfgsdfgsdfgd
sdfgsdfgsdfgsdfgddfg
sdfgsdfgsdfgsdfgsdfg */

// commenting is used for ... leaving comments (either to yourself or other programmers)

// testing our code

// --------------------------------------
// Section 2: console log
// --------------------------------------

console.log("hello world");

// --------------------------------------
// Section 3: Variables and Data Types
// --------------------------------------

// camelCase
// this is when we write the first word's letter in lowercase and subsequent first letters of words in upper case. it's used for naming variables in JavaScript.

// Variables store data values. Here we'll see different types of data.

// String (text)
const exampleText = "this is my line of text";

console.log(exampleText);

// Integer (whole numbers)
const myNumber = 5;

console.log(myNumber);

// Boolean (true or false)
const thisIsTrue = true;
const thisIsFalse = false;

console.log(thisIsTrue);
console.log(thisIsFalse);

// Array (list of values)
const exampleArray = ["this is a string", "this is also a string", 60, false];

const shoppingList = ["milk", "cat food", "bread", "snacks"];

shoppingList[1] = "dog food";

console.log(shoppingList);

// Targeting a specific index in the array (remember indexes start at 0)
console.log(shoppingList[0]);

// Object (hold key value pairs)

const person = {
  name: "Joe",
  age: 37,
  location: "Stavanger",
};

console.log(person);

// --------------------------------------
// Section 4: Declaring variables - Let and Const
// --------------------------------------

// using Let (value can be reassigned)
let changeableMessage = "I can change!";
console.log(changeableMessage);

changeableMessage = "I've changed!";
console.log(changeableMessage);

let healthPoints = 100;
healthPoints = 50;
console.log(healthPoints);

// using const (value cannot be reassigned)
const fixedValue = "I cannot be reassigned";
console.log(fixedValue);

// fixedValue = "This will give an error as im trying to reassign a const...";

// Note: When you declare a variable with const, you can't reassign or redeclare it in the same scope. However, if the constant holds a mutable object (like an array or an object), the properties or elements of that object can be changed.

// --------------------------------------
// Section 5: Basic Operators
// --------------------------------------

// Operators perform calculations or comparisons.

// Operators perform calculations or comparisons.

let a = 10;
let b = 5;

console.log(a + b); // Addition: 15
console.log(a - b); // Subtraction: 5
console.log(a * b); // Multiplication: 50
console.log(a / b); // Division: 2
console.log(a % b); // Modulus (remainders): 0

// Using the + operator with strings to concatenate them:
let firstName = "Jane";
let lastName = "Doe";

console.log("Full Name: " + firstName + " " + lastName);

let counter = 0;
// Increment operator (++) increases a number by 1:
counter++;
console.log(counter);

// Decrement operator (--) decreases a number by 1:
counter--;
counter -= 4;

console.log(counter);

// Addition assignment (+=):
let score = 10;
console.log(score);
score += 5; // Equivalent to score = score + 5;
console.log(score); // 15

// The following 2 lines do the same thing, use the 2nd line.
counter = counter + 2;
counter += 2;

// DRY - Don't repeat yourself!
// Don't have multiple identical lines to increase count by 3:
counter++;
counter++;
counter++;

// Do this instead:
counter += 3;
console.log(counter);

// Subtraction assignment (-=):
score -= 3; // Equivalent to score = score - 3;
console.log("After subtracting 3:", score); // 12

// Multiplication assignment (*=):
score *= 2; // Equivalent to score = score * 2;
console.log("After multiplying by 2:", score); // 24

// Division assignment (/=):
score /= 4; // Equivalent to score = score / 4;
console.log("After dividing by 4:", score); // 6

// Remainder assignment (%=):
score %= 5; // Equivalent to score = score % 5;
console.log("After modulus 5:", score); // 6 mod 5 equals 1

// Comparison (doesnt take into account data types)
console.log(10 == 10);
console.log(10 == "10");

// Strict comparison (does take into account data types)
console.log(10 === "10");

// Greater than
console.log(5 > 10);
console.log(50 > 10);

// Greater than or equal to
console.log(10 >= 10);

// Less than
console.log(5 < 10);
console.log(50 < 10);

// Less than or equal to
console.log(10 <= 10);
