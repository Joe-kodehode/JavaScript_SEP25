// Lesson 4: Functions in JavaScript

// A function is a block of code designed to do one specific task. It lets you write code once and reuse it, keeping your program clean and organized. However, the function won't do anything until you call it.

// ---------------------------------------------------
// Section 1: Function Declarations (aka function statements) and Hoisting
// ---------------------------------------------------

// This function prints a simple greeting to the console.
function sayHello() {
  console.log("hello");
}

// We call the function by using it's name followed by ()
sayHello();

// ---------------------------------------------------
// Section 2: Arrow Functions (introduced in ES6, great for short, inline functions)
// ---------------------------------------------------

const arrowFunction = () => {
  console.log("Hello from the arrow function");
};

arrowFunction();

// ---------------------------------------------------
// Section 3: Return Statements and Scope
// ---------------------------------------------------

function logMessage() {
  console.log("This function logs a message without returning a value");
}

logMessage();

function returnsValue() {
  const myMessage = "This is my message";
  return myMessage;

  // Any code below the first return is unreachable. As soon as we return, we exit the funcion.
  return myMessage;
  const myVar = 45;
  return myVar;
}

console.log(returnsValue());

const returnedMessage = returnsValue();

console.log(returnedMessage);

// ---------------------------------------------------
// Section 4: Functions with Parameters
// ---------------------------------------------------

// Example 1 - hard coding

function add() {
  return 3 + 4;
}

console.log(add());

// Example 2 - soft coding

function minus(num1, num2) {
  const variableNum = 100;

  return num1 - variableNum;
}

console.log(minus(20, 10));
console.log(minus(150, 43));
console.log(minus(2345, 678));

// Function to order t-shirts

let blueShirtOrders = 0;
let redShirtOrders = 0;

function orderShirt(color) {
  if (color === "blue") {
    blueShirtOrders++;
  } else if (color === "red") {
    redShirtOrders++;
  }
}

orderShirt("blue");
orderShirt("red");
orderShirt("red");

console.log(blueShirtOrders);
console.log(redShirtOrders);

// A greeter function that uses parameters and template literals

const greeter = (name, time) => {
  return `Good ${time} ${name} to my website`;
};

console.log(greeter("Joe", "morning"));

console.log(greeter("Anders", "evening"));

console.log(greeter("Maksym", "afternoon"));

// ---------------------------------------------------
// Section 5: Implicit Return in Arrow Functions
// ---------------------------------------------------

// const adder = (num1, num2) => {
//   return num1 + num2;
// };

// Arrow function with an implicit return (no curly brackets or return statemet needed, only works in arrow funcion, only works with one line of code in the {})

const adder = (num1, num2) => num1 + num2;
console.log(adder(5, 10));

// ---------------------------------------------------
// Section 6: Calculator Function Using Switch Statement
// ---------------------------------------------------

function calculator(operator, num1, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operator";
  }
}

console.log(calculator("+", 5, 10));
console.log(calculator("-", 100, 20));
console.log(calculator("*", 20, 20));
console.log(calculator("/", 100, 2));
console.log(calculator("yes", 100, 2));

// ---------------------------------------------------
// Section 7: Updating a Global Variable via a Function
// ---------------------------------------------------

let hp = 100;

const maxHp = 200;
// Let's say we're making a game and adjusting the player's health.

const updateHp = (gainLose, amount) => {
  if (gainLose === "gain") {
    hp += amount;

    if (hp > maxHp) {
      hp = maxHp;
    }
  } else if (gainLose === "lose") {
    hp -= amount;
  }

  if (hp <= 0) {
    console.log("You died!");
    hp = 100;
  }
};

updateHp("gain", 10);
console.log(hp);
updateHp("gain", 50);
console.log(hp);
updateHp("lose", 200);
console.log(hp);

// the health needs to go up or down.  I decide how much by.

// the hp variable will move up IF we say up, and down IF we say down

// ---------------------------------------------------
// Section 8: Using Template Literals and Ternary Operator in a Function
// ---------------------------------------------------

const fruits = ["Banana", "Apple", "Pear", "Kiwi"];

// Make a function which checks if an array includes an item. It then console logs if it is or isn't included.

const checkItem = (fruit) => {
  //   let included;

  //   if (fruits.includes(fruit)) {
  //     included = "is";
  //   } else {
  //     included = "isn't";
  //   }

  return `${fruit} ${
    fruits.includes(fruit) ? "is" : "isn't"
  } included in the array`;
};

console.log(checkItem("Apple"));
console.log(checkItem("Cherry"));

// console.log("Apple is included in the array.")
// console.log("Cherry is not included in the array.")
