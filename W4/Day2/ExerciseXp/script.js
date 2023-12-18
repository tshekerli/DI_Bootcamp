// 🌟 Exercise 1 : Information
// Instructions
// Part I : function with no parameter

// Create a function called infoAboutMe() that takes no parameter.

// function infoAboutMe(){
//     console.log("My name is Tural and I am 29 years old");
// }
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.

// infoAboutMe();


// Part II : function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.

// function infoAboutPerson(personName, personAge, personFavoriteColor){
//     console.log(`Your name is ${personName}, your age is ${personAge}, your favorite color is ${personFavoriteColor} `)
// }

// infoAboutPerson("Tural", 28, "green")
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")


// 🌟 Exercise 2 : Tips
// Instructions
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter
// Inside the function, use prompt to ask John for the amount of the bill.

// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

// Console.log the tip amount and the final bill (bill + tip).

// Call the calculateTip() function.

// function calculateTip(){
//     let bill = parseInt(prompt("How much is the bill?"))
//     let tip
//     if (bill > 200)
//     {
//         tip = bill*0.1
//     }
//     else if (bill > 50 && bill < 200){
//         tip = bill*0.15
//     }
//     else {
//         tip = bill*0.2
//     }

//     console.log(`Tip is ${tip} and total bill is ${bill+tip}`)
// }

// calculateTip()

// Exercise 3 : Find The Numbers Divisible By 23
// Instructions
// Create a function call isDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.

// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313


// Bonus: Add a parameter divisor to the function.

// isDivisible(divisor)

// function isDivisible(divisor){
//     let numbers = []
//     let sum = 0
//     for(i = 0; i <=500; i++)
//     {
//         if (i > 0 && i%divisor ==0){
//             numbers.push(i)
//         }
//     }

//     for(i = 0; i < numbers.length; i++){
//         sum += numbers[i]
//     }

//     console.log(`Your divisor was ${divisor} and the all the numbers that was divisible with your divisor are ${numbers} and finally the sum of them are ${sum}`)
// }

// isDivisible(23)
// Example:
// isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
// isDivisible(45) : Console.log all the numbers divisible by 45, and their sum


// 🌟 Exercise 4 : Shopping List
// Instructions
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

// Create a function called myBill() that takes no parameters.

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s stock by 1
