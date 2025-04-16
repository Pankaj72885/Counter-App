// Initialize the count value from localStorage or default to 0
let count = Number(localStorage.getItem('count')) || 0;

// Select DOM elements
const value = document.getElementById("value");
const btnDecrease = document.getElementById("decrease");
const btnReset = document.getElementById("reset");
const btnIncrease = document.getElementById("increase");

// Display the initial count value
updateDisplay();

// Event listener for the "Decrease" button
btnDecrease.addEventListener("click", () => {
    if (count > -10) {
        count--; // Decrease count if it's greater than -10
    }
    updateDisplay();
});

// Event listener for the "Reset" button
btnReset.addEventListener("click", () => {
    count = 0; // Reset count to 0
    updateDisplay();
});

// Event listener for the "Increase" button
btnIncrease.addEventListener("click", () => {
    if (count < 10) {
        count++; // Increase count if it's less than 10
    }
    updateDisplay();
});

/**
 * Updates the displayed count value and applies styles based on the count.
 */
function updateDisplay() {
    // Update the displayed value
    value.innerText = count;

    // Add temporary animation classes
    value.classList.add("scale-125", "opacity-80");
    setTimeout(() => {
        value.classList.remove("scale-125", "opacity-80");
    }, 150);

    // Apply color styles based on the count value
    if (count > 0) {
        value.classList.add("text-green-600");
        value.classList.remove("text-red-600");
    } else if (count < 0) {
        value.classList.add("text-red-600");
        value.classList.remove("text-green-600");
    } else {
        value.classList.remove("text-green-600", "text-red-600");
    }

    // Persist the count value in localStorage
    localStorage.setItem('count', count);
}
