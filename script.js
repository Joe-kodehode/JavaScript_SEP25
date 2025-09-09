// Lesson 2: Conditionals and Related Operators in JavaScript

// --------------------------------------
// Section 1: The typeof Operator
// --------------------------------------

let myVariable = "hello world";

console.log(typeof myVariable);

myVariable = 100;

console.log(typeof myVariable);

// --------------------------------------
// Section 2: Comparison Operators
// --------------------------------------

// These operators compare values and return a boolean (true or false).

console.log(15 > 20); // Greater than (>) operator

console.log(15 < 20); // Less than (<) operator

console.log(15 >= 20); // Greater than or equal to (>=) operator
console.log(15 >= 15);

console.log(15 <= 20); // Less than or equal to (<=) operator
console.log(15 <= 15);

// The equality (==) operator checks if values are equal (with type conversion):
console.log(15 == "15"); // true due to type coercion

// Strict equality (===) operator checks for both value and type:
console.log(15 === "15"); // false, because the types differ (number vs string)

console.log(15 != 20);
console.log(15 != "15");

console.log(15 !== "15");

// --------------------------------------
// Section 3: Conditionals with if, if...else, if...else if...else
// --------------------------------------

// basic if / else if / else statement

let temperature = 3;

if (temperature > 25) {
  console.log("It's a hot day!");
} else if (temperature > 5) {
  console.log("It's a typical day");
} else if (temperature > 0) {
  console.log("it's a cold day!");
} else {
  console.log("It's a freezing day!");
}

// --------------------------------------
// Section 4: Logical Operators: AND (&&) and OR (||)
// --------------------------------------

// Break until 13:05

let age = 18;
let hasLicence = true;
let suspended = false;

if (age >= 18 && hasLicence && !suspended) {
  console.log("You are allowed to drive");
}

console.log(hasLicence);

let day = "Sunday";
if (day === "Saturday" || day === "Sunday") {
  console.log("It's the weekend! Yipee");
} else if (
  day === "Monday" ||
  day === "Tuesday" ||
  day === "Wednesday" ||
  day === "Thursday" ||
  day === "Friday"
) {
  console.log("It's a weekday! boo.");
} else {
  console.log("you've typed in something stupid, havent you?");
}

// --------------------------------------
// Section 5: Ternary Operator
// --------------------------------------

// The ternary operator is a useful for simple if...else statements.

const isMember = true;

// let fee = "";

// if (isMember) {
//   fee = "$5";
// } else {
//   fee = "$10";
// }

let fee = isMember ? "$5" : "$10";

console.log(fee);

// You can 'nest' ternary's, but it's usually better to use if/else
// let fee = isVip ? "$0" : isMember ? "$5" : "$10";

// --------------------------------------
// Section 6: Switch Statement
// --------------------------------------

// A switch statement checks a value against multiple cases.

const fruit = "kiwi";

switch (fruit) {
  case "apple":
    console.log("Apples are delicious!");
    break;
  case "banana":
    console.log("Bananas are a great source of energy!");
    break;
  case "orange":
    console.log("Oranges are orange");
    break;
  default:
    console.log("Unknown fruit detected");
}

// --------------------------------------
// Section 7: Truthy and Falsey Values
// --------------------------------------

let value = null;

console.log(value);

if (value) {
  console.log("this value was truthy");
} else {
  console.log("this value was falsey");
}

// Truthy data types:
// A string with value
// A positive number
// A negative number
// An array with values
// An empty array
// An object with values
// An empty object

// Falsey data types:
// An empty string
// 0
// undefined
// null

// --------------------------------------
// Section 8: Template literal // Template strings
// --------------------------------------

// Example 1
const firstName = "Ola";
const lastName = "Nordmann";

// Bad way of doing it 👎
const greeting1 =
  firstName + " " + lastName + " " + ", welcome to the website!";

// Good way of doing it with a template literal 🎉
const greeting2 = `${firstName} ${lastName}, welcome to the website`;

console.log(greeting1);
console.log(greeting2);

// Example 2
const user1 = {
  name: "Joe",
  location: "Stavanger",
};

const user2 = {
  name: "Gabriel",
  location: "Kristiansund",
};

userGreeting = `Welcome ${user2.name} from ${user2.location} to the webpage`;

console.log(userGreeting);
