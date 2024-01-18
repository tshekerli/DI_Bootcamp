// Given n, take the sum of the digits of n.
// If that value has more than one digit,
// continue reducing in this way until a single-digit
// number is produced.
// This is only applicable to the natural numbers.
// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

const digital_root = (n) => {
  let sum = 0;
  let num = n.toString();
  for (let i = 0; i < num.length; i++) {
    sum += parseInt(num[i]);
  }
  if (sum > 9) {
    return digital_root(sum);
  } else {
    return sum;
  }
};

console.log(digital_root(1256));

const calculate = (num) =>{
    let sum = 0;
    let array = [];
    array = num.toString().split('');
    for(let i = 0; i < array.length; i++){
        sum += parseInt(array[i]);
    }
    if(sum > 9){
        return calculate(sum);
    }
    else{
        return sum;
    }

}

console.log(calculate(1256));

const multiply = (arr) =>{
  let newarr = [];
  let num = 0;
  for(let i = 0; i < arr.length; i++){
     num = arr[i] * 2;
    newarr.push(num);
  }
  return newarr;
}

console.log(multiply([1,2,3,4,5, 6]));

const greaterFive = (input) =>{
  let newarr = [];
  for(let i = 0; i < input.length; i++){
    if(input[i] > 3){
      newarr.push(input[i]);
    }
  }
  return newarr;
}

console.log(greaterFive([1,2,3,4,5,6,7,8,9,10]));

const arr = [
  {id:1 ,name:'John', email:'jjj@gmail.com'},
  {id:2 ,name:'Mor', email:'mmm@gmail.com'},
  {id:3 ,name:'Marry', email:'marry@gmail.com'},
  {id:4 ,name:'Or', email:'or@gmail.com'},
]

const findTheLetter = (input) =>{
  let newarr = [];
  for(let i = 0; i < input.length; i++){
    if(input[i].name.toLowerCase().includes('o')){
      newarr.push(input[i]);
    }
  }
  return newarr;
}

console.log(findTheLetter(arr));


let employees = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 27,
        joinedDate: 'December 15, 2017'
    },

    {
        firstName: 'Ana',
        lastName: 'Rosy',
        age: 25,
        joinedDate: 'January 15, 2019'
    },

    {
        firstName: 'Zion',
        lastName: 'Albert',
        age: 30,
        joinedDate: 'February 15, 2011'
    }
];

let employee = employees.filter(emp => {
    return emp.age > 26;
});


console.log(employee);

/**  Exercise
* Create an function that get an array of Numbers as input
* and return the sum of all numbers
* For example:
* Give this array [2, 5, 10,100]
* result 117
*/

function sumOfArray(arr) {
  const sum = arr.reduce((accumulator, num) => {
    return accumulator + num;
  }, 0);
  return sum;
}

console.log(sumOfArray([2, 5, 10, 100])); 