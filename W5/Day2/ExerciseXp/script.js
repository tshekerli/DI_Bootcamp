// // Using a DOM property, retrieve the h1 and console.log it.

// const h1 = document.querySelector("h1")
// console.log(h1.innerText)

// // Using DOM methods, remove the last paragraph in the <article> tag.

// let lastPar = document.querySelector("article p:last-child")
// lastPar.remove()

// // Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
// const h2 = document.querySelector("h2")
// function change()
// {
// h2.style.backgroundColor = "red"
// }
// h2.addEventListener("click", change)


// // Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

// const h3 = document.querySelector("h3")
// function hide(){
//     h3.style.display = "none"
// }
// h3.addEventListener("click", hide)

// // Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
// let allPar = document.querySelectorAll("p")
// let button = document.createElement("button")
// button.innerText = "This will bolden your text"
// function bolden(){
//     for (pars of allPar){
//         pars.style.fontWeight = "bold";
//     }
// }
// button.addEventListener("click", bolden)

// const article = document.querySelector("article")

// article.appendChild(button)

// // BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

// // BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

// let style = document.createElement('style');
// style.innerHTML = `
// @keyframes fadeOut {
//     from {opacity: 1;}
//     to {opacity: 0;}
// }`;
// document.head.appendChild(style);

// let secondPar = document.querySelector("article p:nth-of-type(2)");

// secondPar.addEventListener("mouseover", function() {
//     secondPar.style.animation = "fadeOut 1s";
// });

// secondPar.addEventListener("mouseout", function() {
//     secondPar.style.animation = "";
// });


// Exercise2

// Retrieve the form and console.log it.



// Retrieve the inputs by their id and console.log them.


// Retrieve the inputs by their name attribute and console.log them.


// When the user submits the form (ie. submit event listener)


// use event.preventDefault(), why ?


// get the values of the input tags,


// make sure that they are not empty,


// create an li per input value,

// let ul = document.createElement("ul")

// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :
// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>

// let form = document.querySelector("form");
// let firstName = document.querySelector("#fname");
// let lastName = document.querySelector("#lname");
// let firstName2 = document.querySelector("input[name='firstname']");
// let lastName2 = document.querySelector("input[name='lastname']");
// let submit = document.querySelector("input[type='submit']");
// let usersAnswer = document.querySelector(".usersAnswer");

// submit.addEventListener("click", function(event){
//     event.preventDefault();

//     let inputs = document.querySelectorAll("input");
//     for (let input of inputs){
//         if (input.value == ""){
//             input.style.backgroundColor = "red";
//         }
//     }

//     let ul = document.createElement("ul");
//     let li = document.createElement("li");
//     ul.appendChild(li);
//     li.innerText = firstName.value;
//     let li2 = document.createElement("li");
//     ul.appendChild(li2);
//     li2.innerText = lastName.value;
//     usersAnswer.appendChild(ul);
// });

// In the JS file:

// Declare a global variable named allBoldItems.

// let allBoldItems

// // Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

// function getBoldItems(){
//     allBoldItems = document.querySelectorAll("strong")
// }

// getBoldItems()

// // Create a function called highlight() that changes the color of all the bold text to blue.

// function highlight(){
//     for (let bold of allBoldItems){
//         bold.style.color = "blue"
//     }
// }

// // Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

// function returnItemsToDefault(){
//     for (let bold of allBoldItems){
//         bold.style.color = "black"
//     }
// }

// // Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

// let paragraph = document.querySelector("p")
// paragraph.addEventListener("mouseover", highlight)
// paragraph.addEventListener("mouseout", returnItemsToDefault)

// Write a JavaScript program to calculate the volume of a sphere.

// <!doctype html> 
// <html lang="en"> 
//     <head> 
//         <meta charset="utf-8"> 
//         <title>Volume of a Sphere</title> 
//         <style>  
//             body {
//                 padding-top:30px;
//             } 

//             label,input {
//                 display:block;
//             }  
//         </style> 
//     </head> 
//     <body> 
//         <p>Input radius value and get the volume of a sphere.</p> 
//         <form  id="MyForm"> 
//             <label for="radius">Radius</label><input type="text" name="radius" id="radius" required> 
//             <label for="volume">Volume</label><input type="text" name="volume" id="volume"> 
//             <input type="submit" value="Calculate" id="submit">    
//         </form> 
//     </body> 
// </html> 

let form = document.querySelector("form")
let radius = document.querySelector("#radius")
let volume = document.querySelector("#volume")
let submit = document.querySelector("#submit")

submit.addEventListener("click", function(event){
    event.preventDefault()
    let volumeValue = ((4/3) * Math.PI * Math.pow(radius.value, 3));
    volume.value = volumeValue.toFixed(2);
}
)

