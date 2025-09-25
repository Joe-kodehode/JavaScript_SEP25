// Lesson 8: JavaScript Objects

// --------------------------------------
// Section 1: What is an Object?
// --------------------------------------

// An object stores related data using key-value pairs.

const person = {
  name: "Alice",
  age: 28,
  job: "Designer",
};

console.log(person); // logs the entire object
console.log(person.name); // accessing value with dot notation
console.log(person["age"]); // access with bracket notation

// Dot vs bracket:
// - Use dot when you know the key name at code time: person.name
// - Use brackets when the key is dynamic or not a valid identifier: person[key]

// --------------------------------------
// Section 2: Creating, Modifying and Deleting keys in Objects
// --------------------------------------

person.country = "Norway"; // add a new key
person.job = "Coder"; // modify existing key
delete person.age; // remove existing key

console.log(person);

// --------------------------------------
// Section 3: Looping Through an Object using 'for in' loop
// --------------------------------------

const user = {
  name: "Joe",
  age: 37,
  location: "Stavanger",
  hobby: "gaming",
  address: "homeless",
};

for (let key in user) {
  console.log(key); // logs the key

  console.log(user.key); // returns undefined so we use bracket notation instead!

  user[key] += "."; // modifies the value and add a . to the end of each

  console.log(user[key]); // loops through values using bracket notation
}

// --------------------------------------
// Section 4: Nested Objects and Arrays
// --------------------------------------

const userData = {
  firstName: "Olav",
  lastName: "Hansen",
  age: 31,
  isMale: true,
  hobbies: ["Golf", "Hiking", "Cinema"],
  address: {
    streetName: "Solskinnsgaten",
    streetNumber: 38,
    postCode: 4050,
  },
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },

  addMiddleName: function (middle) {
    this.middleName = middle;
  },
};
console.log(userData.fullName());

userData.addMiddleName("Trond");

console.log(userData.middleName);

userData.hobbies.push("Fishing");

console.log(userData.hobbies);

console.log(userData.address.streetNumber);

// --------------------------------------
// Section 5: Arrays of Objects
// --------------------------------------

const products = [
  { productName: "Shirt", productId: 746352, stock: 32 },
  { productName: "Pants", productId: 745642, stock: 5 },
  { productName: "Socks", productId: 749345, stock: 22 },
];

console.log(products);

for (let product of products) {
  console.log(
    `The product: ${product.productName}, has the productID of: ${product.productId} and has ${product.stock} in stock`
  );
}

// --------------------------------------
// Section 6: Descriptive Sentences with Objects
// --------------------------------------

const people = [
  {
    name: "Thomas",
    isMale: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    isMale: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    isMale: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    isMale: true,
    age: 28,
    hobbies: ["coding", "games", "memes"],
  },
  {
    name: "Phillip",
    isMale: true,
    age: 24,
    hobbies: ["boxing", "wrestling"],
  },
  {
    name: "Otto",
    isMale: true,
    age: 36,
    hobbies: ["movies", "cinema", "music"],
  },
  {
    name: "Annabelle",
    isMale: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping", "gaming"],
  },
  {
    name: "Cathy",
    isMale: false,
    age: 18,
    hobbies: ["design", "drawing", "css", "gaming"],
  },
];

// console.log(people);

// Stretch goal:
// Cathy is 18 years old and enjoys *insert random hobby from their hobby array here*

// Cathy is female, 18 years old and enjoys css
// Thomas is male, 23 years old and enjoys css

for (let person of people) {
  const hobbyLength = Math.floor(Math.random() * person.hobbies.length);

  console.log(
    `${person.name} is ${person.isMale ? "male" : "female"}, ${
      person.age
    } years old and enjoys ${person.hobbies[hobbyLength]}`
  );
}

// --------------------------------------
// Section 7: Working with Object Data
// --------------------------------------

// Calculate total age of all people

let totalAge = 0;

for (let person of people) {
  totalAge += person.age;
}

console.log(`Total combined age: ${totalAge}`);

// --------------------------------------
// Section 8: Combining Hobbies with Spread Syntax
// --------------------------------------

// Put all hobbies into one array.

const allHobbies = [];

for (let person of people) {
  allHobbies.push(...person.hobbies);
}

// See if you can make hobbies unique

console.log(allHobbies);

// --------------------------------------
// Section 9: Adding New Properties to Objects in an Array
// --------------------------------------

//   add a new key called title

// if person.isMale = true   title = "Mr."
// if person.isMale = false   title = "Ms."

for (let person of people) {
  person.title = person.isMale ? "Mr." : "Ms.";
}

console.log(people);

// --------------------------------------
// Summary
// --------------------------------------

// ✅ Objects use key-value pairs to store data.
// ✅ Dot and bracket notation let you access or update values.
// ✅ Objects can contain arrays, other objects, or even functions.
// ✅ You can loop through objects with for...in loops.
// ✅ Arrays can contain objects and be used with loops.
// ✅ Spread syntax can flatten nested arrays.
// ✅ You can dynamically add or modify object properties.
