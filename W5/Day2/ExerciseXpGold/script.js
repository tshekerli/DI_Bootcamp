// // Display the value of the selected option.
// const classic = document.createElement("option");
// classic.setAttribute("value", "Classic");
// classic.innerText = "Classic";


// // Add an additional option to the select tag:
// // <option value="classic">Classic</option>
// // The newly added option should be selected by default.

// const select = document.querySelector("select");

// select.insertBefore(classic, select.firstChild);
// classic.setAttribute("selected", "selected");


// Exercise 2: Delete Colors
// Instructions


// Add a click event listener to the <input type="button">. When clicked on, it should call a function named : removecolor() that removes the selected color from the dropdown list.

// const removeColor = () => {
//     const select = document.querySelector("select");
//     select.removeChild(select[select.selectedIndex]);
// }

// const button = document.querySelector("input[type='button']");
// button.addEventListener("click", removeColor);


// Exercise 3 : Create A Shopping List
// Instructions
// For this exercise, you need to work on your js file.
// The one and only element on your HTML file should be:


// In your js file:
// Create an empty array. For example: let shoppingList=[].
let shoppingList = [];
// Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.
const addItem = () => {
    shoppingList.push(input.value);
    input.value = "";
    ul.innerHTML = "";
    shoppingList.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        ul.appendChild(li);
    })
}
const form = document.createElement("form");
const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Add item");
const button = document.createElement("button");
button.innerText = "Add Item";
button.setAttribute("type", "button");
button.addEventListener("click", addItem);
form.appendChild(input);
form.appendChild(button);
document.body.appendChild(form);


const ul = document.createElement("ul");
document.body.appendChild(ul);



// Type what you need to buy in the text input field, then add the new item to the array as soon as you click on the “AddItem” button (Hint: create a function named addItem()).



// Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() function (see below).

function clearAll() {
    shoppingList = [];
    ul.innerHTML = "";
}

// Create a function named clearAll() that should clear out all the items in the shopping list.
const clearButton = document.createElement("button");
clearButton.innerText = "Clear All";
clearButton.setAttribute("type", "button");
clearButton.addEventListener("click", clearAll);
document.body.appendChild(clearButton);
