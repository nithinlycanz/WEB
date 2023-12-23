const button = document.getElementById("myButton")!;
const clickCountElement = document.getElementById("clickCount")!;
let clickCount = 0;
let currentColorIndex = 0;
const colors = ["blue", "green", "orange"];

button.addEventListener("click", () => {
    clickCount++;
    clickCountElement.textContent = `Click count: ${clickCount}`;

    currentColorIndex = (currentColorIndex + 1) % colors.length;
    button.style.backgroundColor = colors[currentColorIndex];
});
