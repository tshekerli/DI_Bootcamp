let button = document.createElement("button");
button.innerText = "+";
button.addEventListener("click", addBox);
document.body.appendChild(button);
function addBox() {
    let box = document.createElement("div");
    box.classList.add("box");
    document.body.appendChild(box);
}


