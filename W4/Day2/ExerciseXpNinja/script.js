// Exercise 1: Random Number
// Instructions
// Get a random number between 1 and 100.
// Console.log all even numbers from 0 to the random number.

// const randNum = Math.ceil(Math.random() * 101)
// for(i = 0; i<=randNum; i++){
//     if(i%2 == 0){
//         console.log(i)
//     }
// }

// Exercise 2: Capitalized Letters
// Instructions
// Create a function that takes a string as an argument.
// Have the function return:
// The string but all letters in even indexes should be capitalized.
// The string but all letters in odd indexes should be capitalized.
// Note:

// let odd = [], even = []
// function capitalize(x){
    
//     for(i = 0; i<x.length; i++){
//         if(i%2==0){
//             even.push(x[i].toUpperCase())
//         }
//         else{
//             even.push(x[i])
//         }
//     }
//     even = even.join("")
//     for(i = 0; i<x.length; i++){
//         if(i%2!=0){
//             odd.push(x[i].toUpperCase())
//         }
//         else{
//             odd.push(x[i])
//         }
//     }
//     odd = odd.join("")

//     console.log(even, odd)
// }
// capitalize("abcdef")
// Index 0 will be considered even.
// The argument of the function should be a lowercase string with no spaces.
// For example,

// capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']


// Exercise 3 : Is Palindrome?
// Instructions
// Write a JavaScript function that checks whether a string is a palindrome or not.
// Note A palindrome is a word, phrase or sequence that is spelled the same both backwards and forward, e.g., madam, bob or kayak.

// function palindrome(x){
//     let y = x.split("").reverse().join("")
//     if(x == y){
//         console.log("palindrome")
//     }
//     else{
//         console.log("not palindrome")
//     }
// }

// palindrome("madam")

// Exercise 4 : Biggest Number
// Instructions
// Create a function called biggestNumberInArray(arrayNumber) that takes an array as a parameter and returns the biggest number.
// Note : This function should work with any array;
// Example:

// function biggestNumberInArray(array){
//     let biggestNumber = 0
//     if(array.lenght === 0){
//         return 0
//     }
//     else{
//         for (value of array){
//             if(value>biggestNumber){
//                 biggestNumber=value
//             }
//         }
//     }
//     return console.log(biggestNumber)
// }
// const array = [-1,0,3,100, 99, 2, 99] ;// should return 100 
// const array2 = ['a', 3, 4, 2]; // should return 4 
// const array3 = []; // should return 0

// biggestNumberInArray(array)
// biggestNumberInArray(array2)
// biggestNumberInArray(array3)

// Exercise 5: Unique Elements
// Instructions
// Write a JS function that takes an array and returns a new array with only unique elements.

// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]
// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]

// function unique(array){
//     uniqeList = []
//     for(value of array){
//         if (uniqeList.includes(value) != true){
//             uniqeList.push(value)
//         }
//     }

//     console.log(uniqeList)
// }

// let list1=[1,2,3,3,3,3,4,5]
// let list2=[1,2,3,3,3,3,4,5]
// unique(list1)
// unique(list2)