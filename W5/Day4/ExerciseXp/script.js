// // Part I
// // In your Javascript file, using setTimeout, call a function after 2 seconds.
// // The function will alert “Hello World”.

// function helloWorld() {
//     alert("Hello World");
//     let container = document.getElementById("container");
//     let paragraph = document.createElement("p");
//     paragraph.innerText = "Hello World";
//     container.appendChild(paragraph);
//     if (container.childElementCount == 5) {
//         clearInterval(intervalid);
//     }
// }

// // setTimeout(helloWorld, 2000);


// // Part II
// // In your Javascript file, using setTimeout, call a function after 2 seconds.
// // The function will add a new paragraph <p>Hello World</p> to the <div id="container">.


// // Part III
// // In your Javascript file, using setInterval, call a function every 2 seconds.
// // The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// // The interval will be cleared (ie. clearInterval), when the user will click on the button.
// // Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

// let intervalid = setInterval(helloWorld, 2000);
// let button = document.getElementById("clear");
// button.addEventListener("click", function() {
//     clearInterval(intervalid);
//     container.innerText = "";
// });


// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.

let button = document.getElementById("animate");
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.

function myMove() {
    let animate = document.getElementById("animate");
    let container = document.getElementById("container");
    let position = 0;
    let id = setInterval(frame, 1);

    function frame() {
        if (position == 350) {
            clearInterval(id);
        } else {
            position++;
            animate.style.left = position + "px";
        }
    }
}
// Hint : use clearInterval as soon as the box reaches the right end side of the container


// Hint : check out the demonstration in the Course Noted named JS Functions