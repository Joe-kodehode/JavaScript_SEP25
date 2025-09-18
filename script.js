// Lesson 5: JavaScript Methods (Strings, Arrays, and Numbers)

// A method in JavaScript is a built-in function that you use with a specific type of data, like strings, numbers or arrays. It lets you do something with that data—like change it, check it, copy or access part of it.

// --------------------------------------
// Section 1: String Methods
// --------------------------------------

const text = "     Hello, JavaScript World World!    ";

console.log(text.trim()); // removes whitespace from both ends of the string. Does not alter the original, can be stored in a new variable.
const trimmedText = text.trim();
console.log(trimmedText);
console.log(text.toUpperCase()); // converts the string to uppercase
console.log(text.toLowerCase()); // converts the string to lowercase
console.log(text.indexOf("JavaScript")); // finds the starting index of the given string
const slicedText = text.slice(5, 10);
console.log(slicedText);
console.log(text.replace("World", "Universe")); // replaces the first occurrence of "World" with "Universe"
console.log(text.replaceAll("World", "Universe")); // replaces all occurrences of "World" with "Universe"
console.log(text.charCodeAt(5)); // returns the Unicode value of the character at index 3
console.log(text.trim().length); // returns the legnth of the sting
console.log(text.trim().split(" ")); // converts a sting into an array, splitting into new elements on the given character
console.log(text.repeat(3));

// --------------------------------------
// Section 1.2: Converting a String to a Number
// --------------------------------------

let numericString = "123.45xyz";

console.log(Number(numericString)); // converts entire string to a number; returns NaN if any part is invalid
console.log(parseInt(numericString)); // parses as an integer until an invalid character (such as decimals or text)
console.log(parseFloat(numericString)); // parses as a float until an invalid character (such as text)

// --------------------------------------
// Section 2: Array Methods
// --------------------------------------

const colors = ["Red", "Green", "Blue"];

console.log(colors.indexOf("Green"));
console.log(colors.length);

colors.push("Yellow");
console.log(colors); // push adds to the end of an array

const lastColor = colors.pop();
console.log(lastColor); // removes the last element from the array, can be stored in a new variable.

const firstColor = colors.shift();
console.log(firstColor); // shift removes an element from the beginning of the array

colors.unshift("Purple");
console.log(colors);

console.log(colors.join(" ")); // turns an array into a string, adds the text inside the brackets between each element

console.log(colors.includes("Green")); // Loops over the array and checks each element to see if it matches the text in the brackets.

console.log(colors);

// const newColors = colors.splice(1, 2, "Orange", "Pink"); // Splice returns the deleted elements from the array and alters the orgininal array.

const newColors2 = colors.toSpliced(1, 2, "Orange", "Pink"); // toSpliced returns the array with the changes and does not alter the original array.
console.log(newColors2);
console.log(colors);

let unsortedArray = [3, 1, 4, 1, 5, 9];

unsortedArray.sort(); // sorts the original array
console.log(unsortedArray);

let sortedArray = unsortedArray.toSorted(); // returns a copy of the original, sorted. Does not affect the original array.
console.log(sortedArray);

console.log(sortedArray[0]);
console.log(sortedArray.at(0));
console.log(sortedArray.at(-2));

console.log(sortedArray.reverse()); // alters the original
const reversedArray = sortedArray.toReversed(); // makes a copy of the original

console.log(reversedArray);

// --------------------------------------
// Section 3: Number Methods
// --------------------------------------

const myNum = 3.93457;

console.log(myNum.toFixed(2)); // returns a string representing myNum rounded to 2 decimal places
console.log(myNum.toString()); // converts myNum to a string.
console.log(myNum.toExponential()); // returns a string with myNum in exponential notation

// --------------------------------------
// Section 4: Chaining Methods Together
// --------------------------------------

// Example 1: Chaining string methods

const rawString = "    JavaScript is fun!    ";

const processedString = rawString
  .trim()
  .replace("fun", "awesome")
  .toUpperCase();

console.log(processedString);

// Example 2: Chaining array methods

const words = ["hello", "world"];

const messageFromArray = words.join(" ").toUpperCase();
console.log(messageFromArray);

// Example 3

const chainedNumber = myNum.toFixed(2).toString().repeat(2);
console.log(chainedNumber);
