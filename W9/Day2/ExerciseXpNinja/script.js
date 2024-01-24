// Exercise 1 : Bird class
// Instructions

//     Analyze the code below, what will be the output?

class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}

const pet = new Flamingo();


//Answer I am pink, then I am bird
//Output I am pink, then I am bird