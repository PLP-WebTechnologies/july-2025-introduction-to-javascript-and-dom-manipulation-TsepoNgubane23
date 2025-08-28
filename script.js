// =========================================
// 🚀 JavaScript Fundamentals Assignment
// =========================================

// -----------------------------
// Part 1: Basics (Variables, Conditionals)
// -----------------------------
let userAge = 18;
let message = "";

if (userAge >= 18) {
  message = "✅ You are an adult!";
} else {
  message = "❌ You are not an adult.";
}

console.log("Part 1:", message);
document.getElementById("part1-output").textContent = message;

// -----------------------------
// Part 2: Functions
// -----------------------------
function greetUser(name) {
  let greeting = `Hello, ${name}! 👋`;
  console.log(greeting);
  document.getElementById("part2-output").textContent = greeting;
}

function calculateTotal(quantity, price) {
  let total = quantity * price;
  let result = `Total price: $${total}`;
  console.log(result);
  document.getElementById("part2-output").textContent = result;
}

// -----------------------------
// Part 3: Loops
// -----------------------------
function countdown(start) {
  let output = document.getElementById("part3-output");
  output.innerHTML = ""; // clear old list

  for (let i = start; i >= 0; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    output.appendChild(li);
  }
}

// Example using while loop
let numbers = [1, 2, 3, 4, 5];
let index = 0;
while (index < numbers.length) {
  console.log("Number:", numbers[index]);
  index++;
}

// -----------------------------
// Part 4: DOM Manipulation
// -----------------------------
const changeTextBtn = document.getElementById("changeTextBtn");
const toggleColorBtn = document.getElementById("toggleColorBtn");
const createItemBtn = document.getElementById("createItemBtn");
const domText = document.getElementById("domText");
const domList = document.getElementById("domList");

// 1. Change text content
changeTextBtn.addEventListener("click", () => {
  domText.textContent = "✨ The text has changed!";
});

// 2. Toggle CSS class
toggleColorBtn.addEventListener("click", () => {
  domText.classList.toggle("highlight");
});

// 3. Create new list item dynamically
createItemBtn.addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = "New Item added!";
  domList.appendChild(li);
});
