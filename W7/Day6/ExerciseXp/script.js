// // // 🌟 Exercise 1 : Scope
// // // Instructions
// // // Analyse the code below, and predict what will be the value of a in all the following functions.
// // // Write your prediction as comments in a js file. Explain your predictions.
// // // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// // // #1.1 - run in the console:
// // funcOne();
// // Guess: 3 because we are changing the value of a inside the function
// // Answer: 3 because the value of a is changed inside the function
// // // #1.2 What will happen if the variable is declared 

// //Guess: type error because we are trying to change the value of a const variable
// //Answer: type error because we are trying to change the value of a const variable

// // // with const instead of let ?

// // //#2
// // let a = 0;
// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // // #2.1 - run in the console:
// // funcThree()
// // funcTwo()
// // funcThree()
// // // #2.2 What will happen if the variable is declared 
// // Guess: 0, 5 because we are changing the value of a inside the function
// // Answer: 0, 5 because we are changing the value of a inside the function
// // // with const instead of let ?

// //guess: 0 then type error because we are trying to change the value of a const variable
// //answer: 0 then type error because we are trying to change the value of a const variable


// // //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // // #3.1 - run in the console:
// // funcFour()
// // funcFive()
// // Guess: Function 4 will alert saying hello, function five will alert saying 0
// // Answer: Function 4 did not do anything, function five alerted saying 0

// // //#4
// // let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // // #4.1 - run in the console:
// // funcSix()
// //Guess: We will get a declaration error because we already declared a
// //Answer: We did not get declaration error because a was declared inside a function and not globally

// // // #4.2 What will happen if the variable is declared 
// // // with const instead of let ?
// //Guess nothing will happen. It will say inside the funcsix function test
// //Answer: nothing happened. It said inside the funcsix function test

// // //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // // #5.1 - run the code in the console
// //Guess: in the if block 5, outside of the if block 2
// //Answer: in the if block 5, outside of the if block 2
// // // #5.2 What will happen if the variable is declared 
// // // with const instead of let ?
// //Guess: in the if block 5, outside of the if block 2
// //Answer: in the if block 5, outside of the if block 2


// 🌟 Exercise 2 : Ternary Operator
// Instructions
// Using the code below:

// function winBattle(){
//     return true;
// }
// // Transform the winBattle() function to an arrow function.
// // Create a variable called experiencePoints.
// // Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// // Console.log the experiencePoints variable.

// let experiencePoints = winBattle() ? 10 : 1;
// console.log(experiencePoints);

