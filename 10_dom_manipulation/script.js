// DOM Manipulation with JavaScript

// --------------------------------------
// Section 1: What is the DOM?
// --------------------------------------

// The DOM (Document Object Model) is how JavaScript interacts with HTML on a web page.
// It turns your HTML into a structure of objects you can access and change using JS.

// --------------------------------------
// Section 2: Targeting existing HTML Elements in JavaScript
// --------------------------------------

// getElementById / querySelector /  querySelectorAll

const button = document.getElementById("my-button"); // Target element with id="my-button"
console.log(button);

const box1 = document.querySelector("#box1");

//querySelector can target elements directly, or target classes/id's
const heading = document.querySelector("h1");
// const heading = document.querySelector("#my-heading");
// const heading = document.querySelector(".my-heading");
console.log(heading);

// if we want to target multiple elements, we can use querySelectorAll
const listItem = document.querySelectorAll(".list-item");
console.log(listItem);

// --------------------------------------
// Section 3: Changing Text or HTML Content
// --------------------------------------

// textContent sets or gets the plain text inside an element (no HTML tags)
button.textContent = "Okay, don't click me then.";
heading.textContent = "Please leave";

// innerHTML sets or gets the HTML inside an element (can include tags)
heading.innerHTML = "<span style='color:red'>DOM Manipulation</span>";

// ⚠️ Security Warning:
// Be careful when using innerHTML with content that comes from the user or an external source.
// As a general rule, always use textContent where possible.
// It can create a security risk called XSS (Cross-Site Scripting).
// Always use textContent if you're not intentionally adding HTML tags.

// --------------------------------------
// Section 4: Changing Styles
// --------------------------------------

button.style.background = "blue";
heading.style.color = "blue";
heading.style.textTransform = "uppercase";

// --------------------------------------
// Section 5: Creating and Adding Elements
// --------------------------------------

// Create a new <p> tag
const newParagraph = document.createElement("p");
const newParagraph2 = document.createElement("p");

// give our new tag some text content
newParagraph.textContent = "I am a new paragraph";
newParagraph2.textContent = "I am ALSO a new paragraph";

// give our new paragraph a css class
newParagraph.classList.add("fancy-paragraph");
newParagraph2.classList.add("fancy-paragraph");

// append our new tag to the bottom of the body
document.body.append(newParagraph);
// document.body.prepend(newParagraph2);

// prepend our newParagraph2 to the top of the box1 div
box1.prepend(newParagraph2);

// Insert an element somewhere in the middle of our page. (before a specific element)
const midParagraph = document.createElement("p");
midParagraph.textContent = "swag";
document.body.insertBefore(midParagraph, button);

// Create an image element and add attributes to it
const newImage = document.createElement("img");
newImage.src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/320px-Red_Apple.jpg";
newImage.setAttribute("alt", "a red juicy apple");
newImage.setAttribute("width", "200");
document.body.append(newImage);

// 📌 Summary of placement methods:
// append() → adds to the end
// prepend() → adds to the beginning
// insertBefore(newNode, referenceNode) → inserts before a specific node

// 📌 append vs appendChild:
// - appendChild() only accepts **DOM nodes** (elements)
// - append() can accept **DOM nodes OR text**, and also multiple things at once

// 🧠 What is a DOM node?
// A DOM node is any single part of the document tree:
// - An element (like <p> or <div>)
// - A text node (plain text)
// - A comment node (<!-- like this -->)
// Most of the time, when you're working with elements, you're using element nodes.

// Add a new list item to an existing list

// 1 - target our unordered list
const list = document.querySelector("#unordered-list");
// 2- create our new li
const listItem3 = document.createElement("li");
// 3 - add textContent to the li
listItem3.textContent = "Item 3";
// 4- append the new li to our ul
list.append(listItem3);

// --------------------------------------
// Section 6: Removing Elements
// --------------------------------------

const firstListItem = list.firstElementChild;
list.removeChild(firstListItem); // removes the first li from the list

// --------------------------------------
// Section 7: Parent and Child Relationships
// --------------------------------------

console.log(list.parentElement);
console.log(list.children);
console.log(list.firstElementChild);
console.log(list.lastElementChild);

// --------------------------------------
// Section 8: classList Methods
// --------------------------------------

// create a new div
const newBox = document.createElement("div");

// Add a class
newBox.classList.add("container");
newBox.classList.add("ugly-class");

// Remove a class
newBox.classList.remove("ugly-class");

// Toggle a class (remove if present, add if missing)
newBox.classList.toggle("border");

// Append our newBox to the body
document.body.append(newBox);

// Check if an element has a specific class

console.log(newBox.classList.contains("border"));

// --------------------------------------
// Section 9: Creating a List in a Loop
// --------------------------------------

// Let's create a list of favorite movies and display them on the page

const favoriteMovies = [
  "The Matrix",
  "Interstellar",
  "Donnie Darko",
  "Insidious    ",
  "Cars 3",
  "Oppenheimer",
  "    Shutter Island",
  "The Square",
  "Memento",
  "Sinister",
  "The Odyssey    ",
];

// Step 1- Create a ol to hold our movies
const movieList = document.createElement("ol");
document.body.append(movieList);

//Step 2- loop over our favorite movies array and create a list item for each movie, add the text content of each movie and append the movie to the movies list.

for (let movie of favoriteMovies) {
  const listItem = document.createElement("li");
  listItem.textContent = movie.trim();
  listItem.id = movie.trim().replaceAll(" ", "-").toLowerCase();
  listItem.classList.add("movie");

  movieList.append(listItem);
}
