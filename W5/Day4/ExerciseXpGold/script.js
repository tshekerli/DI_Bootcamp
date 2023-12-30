// // Exercise 1 : Animation With The Alphabet
// // Instructions
// // Create multiple squares/boxes with letters inside. There should be 26 squares/boxes for all the letters (A to Z) next to each other.
// // Make all the squares draggable.
// // You should be able to drag and drop the letters depending on their coordinates x and y.

// let alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N", "O", "P","Q","R","S","T","U","V","W","X","Y","Z"]
// let div = document.createElement("div")
// div.setAttribute("id","container")
// div.style.display = "flex"

// function dragover(event) {
//     event.preventDefault();
// }

// function drop(event) {
//     const id = event.dataTransfer.getData("text/plain");
//     event.target.appendChild(document.getElementById(id));
// }

// let child = document.createElement("div");
// child.addEventListener("dragover", dragover);
// child.addEventListener("drop", drop);
// child.setAttribute("id","child");
// child.style.display = "flex";
// child.style.flexWrap = "wrap";
// child.style.gap = "10px";
// document.body.appendChild(div);
// document.body.appendChild(child) // Append child instead of div
// for (let i = 0; i < alphabet.length; i++) {
    
//     let div = document.createElement("div");
//     div.setAttribute("class","square");
//     div.setAttribute("id",alphabet[i]);
//     div.innerHTML = alphabet[i];
//     div.setAttribute("draggable","true");
//     div.style.backgroundColor = "gray";
//     div.style.color = "yellow";
//     div.style.border = "1px solid black";
//     div.style.width = "100px";
//     div.style.height = "100px";
//     div.style.textAlign = "center";
//     div.style.display = "flex";
//     div.style.justifyContent = "center";
//     div.style.alignItems = "center";
    
//     child.appendChild(div);
// }

// let squares = document.querySelectorAll(".square");
// for (let i = 0; i < squares.length; i++) {
//     squares[i].addEventListener("dragstart", ondragstart);
//     squares[i].addEventListener("dragend", ondragend);
// }

// function ondragstart(event) {
//     event.dataTransfer.setData("text/plain", event.target.id);
//     event.currentTarget.style.backgroundColor = "yellow";
//     event.currentTarget.style.color = "gray";
// }

// function ondragend(event) {
//     event.currentTarget.style.backgroundColor = "gray";
//     event.currentTarget.style.color = "yellow";
// }

// Exercise 2 : Animation With A Paragraph
// Instructions
// Create a paragraph and make it draggable.
// You should be able to drag and drop the paragraph.
// Change the font size of the paragraph according to the screen coordinates.

let paragraph = document.createElement("p")

paragraph.setAttribute("id","paragraph")
paragraph.innerHTML = "This is a paragraph"
paragraph.style.backgroundColor = "gray";
paragraph.style.color = "yellow";
paragraph.style.border = "1px solid black";
paragraph.style.width = "400px";
paragraph.style.height = "200px";
paragraph.style.textAlign = "center";
paragraph.style.display = "flex";
paragraph.style.justifyContent = "center";
paragraph.style.alignItems = "center";
paragraph.style.position = "absolute";
document.body.appendChild(paragraph)

let isDown = false;
let offset = [0, 0];
let intervalId;

document.addEventListener('mousedown', function (e) {
    isDown = true;
    offset = [
        paragraph.offsetLeft - e.clientX,
        paragraph.offsetTop - e.clientY
    ];
    clearInterval(intervalId);
    intervalId = setInterval(function() {
        paragraph.style.fontSize = Math.random() * 100 + "px";
    }, 500);
}, true);

document.addEventListener('mouseup', function () {
    isDown = false;
    clearInterval(intervalId);
}, true);

document.addEventListener('mousemove', function (event) {
    event.preventDefault();
    if (isDown) {
        paragraph.style.left = (event.clientX + offset[0]) + 'px';
        paragraph.style.top  = (event.clientY + offset[1]) + 'px';
    }
}, true);