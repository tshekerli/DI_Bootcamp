// 🌟 Exercise 1 : Find the sum
// Instructions

//     Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.


const sum = (a, b) => a + b;

console.log(sum(2, 3));333

// 🌟 Exercise 2 : Kg and grams
// Instructions

// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

//     First, use function declaration and invoke it.

function kgToGr(num){
    let gr = 1000*num+'gr'
    return gr
}

console.log(kgToGr(5))

//     Then, use function expression and invoke it.

const kiloToGr = function (num){
    let gr = 1000*num+'gr'
    return gr
}

console.log(kiloToGr(5));


//This is pretty much the same as declaration method. only difference is you declare the name of the function beforehand and put the function after equal sigh


//     Write in a one line comment, the difference between function declaration and function expression.
//     Finally, use a one line arrow function and invoke it.
const kgToGram = (num) => num*1000+'gr'

console.log(kgToGram(5));

//Easier option is the arrow function and the fast one.


// 🌟 Exercise 3 : Fortune teller
// Instructions

//     Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
//     The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."


// (function(numChildren, partnerName, geoLocation, jobTitle) {
//     var message = "You will be a " + jobTitle + " in " + geoLocation + ", and married to " + partnerName + " with " + numChildren + " kids.";
//     document.body.innerHTML = message;
// })(3, 'Alex', 'New York', 'Software Developer');


// 🌟 Exercise 4 : Welcome
// Instructions

// John has just signed in to your website and you want to welcome him.

//     Create a Bootstrap Navbar in your HTML file.
//     In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
//     The function should add a div in the nabvar, displaying the name of the user and his profile picture.

// (function(name,picture){
//     let nav = document.querySelector("header")
//     div = document.createElement("div")
//     let userName = document.createElement('p')
//     userName.innerText = name
//     let pic = document.createElement("img")
//     pic.src = picture
//     pic.height = 50
//     pic.width = 50
//     div.appendChild(userName)
//     div.appendChild(pic)
//     nav.appendChild(div)
    

// })("John", 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D')


// 🌟 Exercise 5 : Juice Bar
// Instructions

// You will use nested functions, to open a new juice bar.
// Part I:

//     The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

//     The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

//     Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


// Part II:

//     In the makeJuice function, create an empty array named ingredients.

//     The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

//     Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

//     The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

function makeJuice(size) {
    let ingredients = [];

    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
    }

    function displayJuice() {
        let message = "The client wants a " + size + " juice, containing " + ingredients.join(", ") + ".";
        document.body.innerHTML = message;
    }

 
    addIngredients('apple', 'orange', 'banana');

    // Part II: 
    addIngredients('pineapple', 'mango', 'strawberry');
    displayJuice();
}


makeJuice('large');
