//Part 2: JavaScript Functions
// Global variable
let globalMessage = "Hello from global scope!";

// Function to calculate sum
function calculateSum(a, b) {
  return a + b;
}

// Event listener for sum calculation
document.getElementById("calculate-btn").addEventListener("click", function() {
  // Get values from input fields
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  // Check if inputs are numbers
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("result").textContent = "Please enter valid numbers!";
    return;
  }

  const result = calculateSum(num1, num2);
  document.getElementById("result").textContent = "Sum is: " + result;
});

//Part 3: CSS + JS Interaction
// Animate box
function toggleAnimation(elementId) {
  const el = document.getElementById(elementId);
  el.classList.toggle("animate");
  return el.classList.contains("animate");
}

document.getElementById("animate-btn").addEventListener("click", function() {
  toggleAnimation("interactive-box");
});

// Card flip
document.getElementById("flip-btn").addEventListener("click", function() {
  const card = document.getElementById("card");
  card.classList.toggle("flip");
});

// Trigger pulse animation on click
const pulseBox = document.querySelector(".pulse-box");
pulseBox.addEventListener("click", () => {
  pulseBox.classList.toggle("animate");
});
