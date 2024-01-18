// Exercise 1 : Nested functions

//     1-Using the code below, and before executing it, predict the outcome and explain how you came to this conclusion.

//     1-Change the code below to nested arrow functions.

// let landscape = function() {

//  let result = "";

//  let flat = function(x) {
//    for(let count = 0; count<x; count++){
//      result = result + "_";
//    }
//  }

//  let mountain = function(x) {
//    result = result + "/"
//    for(let counter = 0; counter<x; counter++){
//      result = result + "'"
//    }
//    result = result + "\\"
//  }

//  flat(4);
//  mountain(4);
//  flat(4)

//  return result;
// }

// //Answer: it creates 4 characters of flat level terrain 4 characters of mountain level terrain and 4 characters of flat level terrain inside a result object. It's basically a string of symbols. 

// landscape() //it does not work because either you need to return the result inside a console log or put the landscape inside a console log

// console.log(landscape());


// const landscape = () => {
//     let result = ''

//     const flat = (num) =>{
//         Array.from({length: num}).forEach(() => result = result + '_');
//         return result
//     }
    
//     let mountain = (num) =>{
//         result = result+ '/'
//         Array.from({length: num}).forEach(() => result = result + "'")
//         result = result+"\\"
        
//         return result
    
//     }

//     flat(4)
//     mountain(4)
//     flat(4)

//     return result

// }

// console.log(landscape());

// Exercise 2 : Closure
// Instructions

//     Analyse the code below, and before executing it, predict the outcome of the last line.

// const addTo = x => y => x + y;
// const addToTen = addTo(10);


//Answer: it's a currying function. addTo takes x and y and adds them together. addToTen runs addTo 10 times as a result it's equal to 10
//It establishes that Addtoten will add any number to inside of it. Finally addToTen(3) adds 3 to the already established 10 which makes it 13 as a result

// console.log(addToTen(3));


// Exercise 3 : Currying
// Instructions

//     Analyse the code below, and before executing it, predict the outcome of the last line.

// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1)

// //Answer: 30 means a, 1 means b. a+b is equal to 31

// console.log(curriedSum(30)(1));



// Exercise 4 : Currying

//     Analyse the code below, and before executing it, predict the outcome of the last line.

// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)


//Same with exercise 2. Same explanation Answer will be 17

// console.log(add5(12));

// Exercise 5 : Composing

//     Analyse the code below, and before executing it, predict the outcome of the last line.

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;


//it is composing two functions inside of one. First one adds 10+1, then returns 11, second one adds 5 to 11 and returns 16 in total.

console.log(compose(add1, add5)(10));


