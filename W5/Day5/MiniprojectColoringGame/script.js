let selectedColor = null;
let isMouseDown = false;

let pageBody = document.body;
let colorElements = document.querySelectorAll("#sidebar > *");
let fillElements = document.querySelectorAll("#main > *");
let resetButton = document.querySelector("button");

pageBody.addEventListener("mousedown", () => isMouseDown = true);
pageBody.addEventListener("mouseup", () => isMouseDown = false);

colorElements.forEach(colorElement => {
    colorElement.addEventListener("click", (e) => {
        selectedColor = e.target.style.backgroundColor;
    });
});

fillElements.forEach(fillElement => {
    fillElement.addEventListener("mousedown", (e) => {
        if (selectedColor) e.target.style.backgroundColor = selectedColor;
    });
    fillElement.addEventListener("mouseover", (e) => {
        if (isMouseDown && selectedColor) e.target.style.backgroundColor = selectedColor;
    });
});

resetButton.addEventListener("click", () => {
    fillElements.forEach(fillElement => fillElement.style.backgroundColor = "white");
});



