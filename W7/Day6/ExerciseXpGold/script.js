// Exercise 1: Sum Elements
// Instructions
// Write a JavaScript program to find the sum of all elements in an array.

// const array = [1, 2, 3, 4, 5, 6];
// const sum = (x) => {
//     let total = 0;
//     for (let i = 0; i < x.length; i++) {
//         total += x[i]
//     }
//     return total
// }

// console.log(sum(array));
// Exercise 2 : Remove Duplicates
// Instructions
// Write a JavaScript program to remove duplicate items in an array.

// const array = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4];
// const removeDuplicates = (x) => {
//     let newArray = [];
//     for (let i = 0; i < x.length; i++) {
//         if (!newArray.includes(x[i])) {
//             newArray.push(x[i])
//         }
//     }
//     return newArray
// }

// console.log(removeDuplicates(array));


// Exercise 3 : Remove Certain Values
// Instructions
// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]
// const array = [NaN, 0, 15, false, -22, '', undefined, 47, null];
// const removeValues = (x) => {
//     let newArray = [];
//     for (let i = 0; i < x.length; i++) {
//         if (x[i]) {
//             newArray.push(x[i])
//         }
//     }
//     return newArray
// }

// console.log(removeValues(array));

// Exercise 4 : Repeat Please !
// Instructions
// Write a JavaScript function to concatenate a given string n times (default is 1).
// Create the repeat function yourself:
// console.log(repeat('Ha!',3));
// "Ha!Ha!Ha!"

// const repeat = (str, num) => {
//     let newStr = "";
//     for (let i = 0; i < num; i++) {
//         newStr += str
//     }
//     return newStr
// }

// console.log(repeat('Ha!', 3));

// Exercise 5 : Turtle & Rabbit
// For this exercise, look at the lesson More JS methods.

// Using this code :

const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';
// Line up the Turtle and the Rabbit at the start line.
// Expected Output:
let pad = startLine.indexOf('-');
turtle = turtle.padStart(pad);
rabbit = rabbit.padStart(pad);
turtle = turtle.trim().padEnd(9, '='); 

//     When you write:

    console.log(startLine);
    console.log(turtle);
    console.log(rabbit);

//     It should look like this:

//     '     ||<- Start line'
//     '       🐢'
//     '       🐇'





// What happens when you run turtle = turtle.trim().padEnd(9, '='); ?
// It removes the white space from the turtle and adds 6 = signs to the end of the string. The reason why the turtle has 6 equal signs after it instead of 9 is because of the padEnd() method used in the code.

// The padEnd() method is used to pad the end of a string with a specified character until it reaches a desired length. In this case, the desired length is 9 characters.