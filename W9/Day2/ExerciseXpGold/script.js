// Exercise 1: print Full Name

function printFullName({first, last}) {
    return `Your full name is ${first} ${last}`;
  }
  console.log(printFullName({first: 'Elie', last:'Schoppik'})); 

// Exercise 2: keys and values

function keysAndValues(obj) {
    let keys = Object.keys(obj).sort();
    let values = keys.map(key => obj[key]);
    return [keys, values];
  }
  console.log(keysAndValues({ a: 1, b: 2, c: 3 })); 

// Exercise 3: Counter class

class Counter {
    constructor() {
      this.count = 0;
    }
  
    increment() {
      this.count++;
    }
  }
  
  const counterOne = new Counter();
  counterOne.increment();
  counterOne.increment();
  
  const counterTwo = counterOne;
  counterTwo.increment();
  
  console.log(counterOne.count); 

