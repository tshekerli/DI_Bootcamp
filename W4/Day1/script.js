// functions
​
// function a() {
//   console.log("Hello student of Javascript");
// }
​
// function b() {
//   for (let i = 0; i < 10; i++) {
//     a();
//     // console.log("");
//   }
// }
​
// b();
​
// function greeting(a, b) {
//     console.log('Hello, ' + a + ' welcome to JS lesson, your email is ' + b);
// }
​
// greeting('John')
// greeting('John')
// greeting('Anna')
​
// const students = ["John","Marry","Alla","Ann","Dan"];
// const emails = ["John@gamil.com","Marry@gamil.com","Alla@gamil.com","Ann@gamil.com","Dan@gamil.com"];
​
// for(let i = 0; i < students.length; i++){
//     greeting(students[i], emails[i])
// }
​
// function whatever_you_want(a, b){
//     console.log(a + b);
// }
​
// whatever_you_want(10,15)
// whatever_you_want(100,150000)
​
// var a = 10;
​
// // ES6 - 2016
// // JS
// let b = 20;
// let b;
// b = 80
// const a;
// const COLOR_RED = 'RED'
// b = 100
// C = 'Yello'
​
// // let a = 1
// {
//     var a = 0;
// }
// console.log(a);
​
// console.log(COLOR_RED);
​
// default values
​
// function hello(a=1, b=7) {
//   console.log('Hello ' + a + " & Hello " + b);
// }
// let a;
// hello(,11)
​
// console.log(a,b);
​
// local / global varible
// let age = 15;
​
// function myAge(){
//     let age = 16;
//     console.log('myAge=>',age);
// }
​
// myAge()
​
// console.log('age=>',age);
​
// for(let i = 0; i < 5; i++) {
​
// }
​
// console.log(i);
​
// var a = 26;
// function myAge(myAge = 10) {
//     // var myAge = 26;
//     let mom = myAge * 2;
//     let dad = mom * 1.2;
//     console.log("Mom's age is: " + mom + " Dad's age is: " + dad);
//   }
//   // Call the function
//   myAge(40);
​
// function myA() {
//     return {
//         a:1,
//         b:'John'
//     }
// }
​
// let a = myA()
// console.log(a.a, a.b);
​
// function sum(a,b){
//     return a + b
// }
​
// let sumAB = sum(10,5);
// console.log(sumAB);
​
// function myAge(myAge) {
//   // var myAge = 26;
//   let mom = myAge * 2;
//   let dad = mom * 1.2;
//   // console.log("Mom's age is: " + mom + " Dad's age is: " + dad);
//   return [mom, dad];
//   // return {
//   //     mom:mom,
//   //     dad:dad
//   // }
// }
​
// function sumMomDad(age) {
//   let result = myAge(age);
//   return result[0] + result[1];
// }
​
// let result = myAge(22);
// console.log(result);
​
// let sum = sumMomDad(22);
// console.log(sum);
​
​
/*
Object Method, array.push, join
*/
​
// console.log(this);
​
let obj = {
    name:'John',
    myAge: function () {
        console.log(this.name);
    }
}
console.log(obj.myAge());