// Exercise 1 : Evaluation
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// Evaluate the comparisons found below:

// Look at this link for help

//     5 >= 1 
//True 5 is greater than or equal to 1
//     0 === 1
//False 0 is not equal to 1
//     4 <= 1
//False 4 is not less than or equal to 1
//     1 != 1
//False 1 is equal to 1
//     "A" > "B"
//False A is not greater than B
//     "B" < "C"
//True B is less than C
//     "a" > "A"
//True a is greater than A
//     "b" < "A"
//No idea. Answer was false because b is not less than A
//     true === false
//False true is not equal to false
//     true != true
//False true is equal to true


// Exercise 2 : Ask For Numbers
// Instructions
// Ask the user for a string of numbers separated by commas
// Ask the user for a string of numbers separated by commas
// let userInput = prompt("Enter a string of numbers separated by commas:");

// // Convert the string into an array of numbers
// let numbersArray = userInput.split(",").map(Number);

// // Calculate the sum of the numbers
// let sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// // Console.log the sum of the numbers
// console.log("The sum of the numbers is:", sum);



// Hint: use some string methods



// Exercise 3 : Find Nemo
// Instructions
// Hint: if statement (tomorrow’s lesson)

// Ask the user to give you a sentence containing the word “Nemo”. For example "I love the movie named Nemo"

// let userInput = prompt("Enter a sentence containing the word Nemo:");

// // Find the word “Nemo”

// let nemoIndex = userInput.indexOf("Nemo");
// // Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".

// console.log(`I found Nemo at ${nemoIndex}`);
// // If you can’t find Nemo, console.log “I can’t find Nemo”.

// if (nemoIndex === -1) {
//     console.log("I can't find Nemo");
// }



// Exercise 4 : Boom
// Instructions
// Hint: if statement (tomorrow’s lesson)

// Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:

// Convert the input to a number
let userNumber = parseInt(prompt("Enter a number:"));

let result = "";

// If the number given is less than 2 : return “boom”
if (userNumber < 2) {
    result = "boom";
}

// If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
else {
    result = "b" + "o".repeat(userNumber) + "m";
}

// If the number given is evenly divisible by 2, add a exclamation mark to the end.
if (userNumber % 2 === 0) {
    result += "!";
}

// If the number given is evenly divisible by 5, return the string in ALL CAPS.
if (userNumber % 5 === 0) {
    result = result.toUpperCase();
}

// If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.
if (userNumber % 2 === 0 && userNumber % 5 === 0) {
    result += "!";
}

console.log(result);