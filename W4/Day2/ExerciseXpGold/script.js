// Exercise 1 : Is_Blank
// Instructions
// Write a program to check whether a string is blank or not.

// function isBlank(x){
//     if(x == ""){
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(isBlank(''))
// console.log(isBlank('abc'))
// console.log(isBlank('')); --> true
// console.log(isBlank('abc')); --> false


// Exercise 2 : Abbrev_name
// Instructions
// Write a JavaScript function to convert a string into an abbreviated form.

// function abbrevName(x){
//     var y = x.split(" ")
//     return y[0] + " " + y[1][0] + "."
// }
// console.log(abbrevName("Robin Singh"))
// console.log(abbrevName("Robin Singh")); --> "Robin S."

// Exercise 3 : SwapCase
// Instructions
// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example :

// function SwapCase(x){
//     const y = x.split("")
//     for(i=0; i<y.length; i++){
//         if(y[i] == y[i].toUpperCase()){
//             y[i] = y[i].toLowerCase()
//         }
//         else{
//             y[i] = y[i].toUpperCase()
//         }
//     }
//     return y.join("")
// }
// console.log(SwapCase('The Quick Brown Fox'))

// if you input 'The Quick Brown Fox' 
// the output should be 'tHE qUICK bROWN fOX'.

// Exercise 4 : Omnipresent Value
// Instructions
// Create a function that determines whether an argument is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.
// To illustrate:
// function isOmnipresent(x, y){
//     for(i=0; i<x.length; i++){
//         if(x[i].includes(y) == false){
//             return false
//         }
//     }
//     return true
// }

// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1))
// // [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// // // 3 exists in every element inside this array, so is omnipresent.
// // Examples

// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)) //➞ true
// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)) // false

