// Exercise 1 : Favorite Color
// Instructions
let sentence = ["my","favorite","color","is","blue"];
// Write some simple Javascript code that will join all the items in the array above, and console.log the result.

console.log(sentence.join(" "));


// Exercise 2 : Mixup
// Instructions
// Create 2 variables. The values should be strings. For example:
let str1 = "mix";
let str2 = "pod";


// 2. Slice out and swap the first 2 characters of the two strings from part 1.

let newStr1 = str2.slice(0, 2) + str1.slice(2);
let newStr2 = str1.slice(0, 2) + str2.slice(2);


// 3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).

let concatenatedStr = newStr1 + " " + newStr2;

// 4. Finally console.log the new concatenated string.

console.log(concatenatedStr);



// Some Examples

// let str1 = "mix";
// let str2 = "pod";
// let newWord should be equal to 'pox mid'

// let firstWord = "Hello";
// let secondWord = "World";
// let thirdWord should be equal to 'Wollo Herld'


// Exercise 3 : Calculator
// Instructions
// Make a Calculator. Follow the instructions:

// Prompt the user for the first number.
// Store the first number in a variable called num1.
// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.
// BONUS: Make a program that can subtract, multiply, and also divide!

// Exercise 3 : Calculator
// Instructions
// Make a Calculator. Follow the instructions:

// Prompt the user for the first number.
// Store the first number in a variable called num1.
let num1 = parseInt(prompt("Enter the first number"));

// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?

//Promt the user to enter if they want to subtract, multiply, divide or add

let operation = prompt("Enter the operation you want to perform: add, subtract, multiply or divide");

// Prompt the user for the second number.
// Store the second number in a variable called num2.
let num2 = parseInt(prompt("Enter the second number"));

// Create an Alert where the value is the SUM of num1 and num2.

// BONUS: Make a program that can subtract, multiply, and also divide!

if (operation == "add") 
{
    alert(num1 + num2);
} 
else if (operation == "subtract")
 {
    alert(num1 - num2);
} 
else if (operation == "multiply")
 {
    alert(num1 * num2);
} 
else if (operation == "divide")
 {
    alert(num1 / num2);
} 

