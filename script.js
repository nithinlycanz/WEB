var button = document.getElementById("myButton");
var clickCountElement = document.getElementById("clickCount");
var clickCount = 0;
var currentColorIndex = 0;
var colors = ["blue", "green", "orange"];
button.addEventListener("click", function () {
    clickCount++;
    clickCountElement.textContent = "Click count: ".concat(clickCount);
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    button.style.backgroundColor = colors[currentColorIndex];
});
