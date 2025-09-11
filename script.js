// Lesson 3: Recap of JavaScript Basics with New Examples

// ------------------------------
// Section 1: Variables, Data Types, and Operators
// ------------------------------

// Scenario: An online store managing product details.

const storeName = "Tech Haven"; // String
const productName = "Wireless Earbuds"; // String
let productPrice = 75; // Integer (number)
let productQuantity = 20; // Integer
let onSale; // Undefined
const isInStock = true; // Boolean
const productTags = ["audio", "wireless", "accessory"]; // Array

console.log("Store name:", storeName);
console.log("Product name:", productName);
console.log("Product Price:", productPrice);
console.log("Product Quantity:", productQuantity);
console.log("In Stock?", isInStock);
console.log("Product Tags:", productTags[0], productTags[1], productTags[2]);

// see the contents of the array using spread syntax (will learn this more later!)
console.log("Product Tags:", ...productTags);

// Calculate the total cost for the available quantity.

const totalValue = productPrice * productQuantity;

console.log("Total value of in stock wireless earbuds is", totalValue);

// Increase the product price by 10.

// productPrice = productPrice + 10;
productPrice += 10;
console.log(productPrice);

// increase productQuantity by 1

// productQuantity += 1;
productQuantity++;

// decrease productQuantity by 1
productQuantity--;

console.log(productQuantity);

// ------------------------------
// Section 2: Conditionals and Logical Operators
// ------------------------------

// Example: Decide promotion messages based on basket size.

let basketSize = 200;

if (basketSize > 300) {
  console.log("You qualify for free delivery!");
} else if (basketSize >= 250) {
  console.log("You're close to free delivery! spend over 300 to qualify!");
} else {
  console.log("If you spend over 300, you'll get free delivery");
}

// Logical operators: Using AND (&&) and OR (||)
// Scenario: Show a discount message if the product is in stock and either it's on sale or the quantity is over 10.

onSale = false;

if (isInStock && (onSale || productQuantity > 10)) {
  console.log("you get 15% off this product");
} else {
  console.log("No discount for you, loser!");
}

// Ternary
// if basketSize is over 250 console log "Free shipping", otherwise console log "$15 fee".

basketSize = 300;
let shippingCost = basketSize > 250 ? "Free shipping" : "$15 fee";

console.log(shippingCost);

// Switch statement: Display messages based on the product category.

let category = "audio";

switch (category) {
  case "audio":
    console.log("This product is in our Audio department.");
    break;
  case "accessories":
    console.log("This is in our Accessories section");
    break;
  case "gadget":
    console.log("This is in the gadgets collection");
    break;
  default:
    console.log("This product must be uncategorised");
}

// Rule of Thumb

// Use if/else for complex logic and range checks.

// Use switch when you’re testing one variable against many exact options — it keeps code tidy.

// ------------------------------
// Section 3: typeof Operator and Truthy/Falsey Values
// ------------------------------

// Using the typeof operator to check data types:
console.log(typeof storeName);
console.log(typeof productPrice);
console.log(typeof isInStock);
console.log(typeof productTags);

// Why It Works This Way

// When JavaScript was first created, typeof was implemented in a very simple way:

// Primitive types (string, number, boolean, undefined, symbol, bigint) got their own categories.

// Everything else was lumped into "object".

// Demonstrating Truthy and Falsey values:

const dataType = "test";
if (dataType) {
  console.log("This came back true");
} else {
  console.log("This came back false");
}

// --------------------------------------------------
// Section 4: Template Literals // Template String Recap
// --------------------------------------------------

// "welcome" + " " + userName + " " + "to my site"

const firstName = "Harry";
const lastName = "Miller";
const city = "London";
const country = "England";

const welcomeMessage = `Welcome ${firstName} ${lastName} from ${city}, ${country}! We hope you enjoy shopping with us!`;

console.log(welcomeMessage);

// We currently have 5 wireless headphones in stock. The department tags for this product are: audio, wireless, accessory.
const productInfo = `We currently have ${productQuantity} ${productName} in stock. The department tags for this product are: ${productTags.join(
  ", "
)}`;

console.log(productInfo);

// Mixing ternary and template strings.

// basketSize > 250 ? "are" : "aren't";

basketSize = 10;

const basketMessage = `You ${
  basketSize > 250 ? "are" : "aren't"
} eligible for free delivery`;

console.log(basketMessage);
