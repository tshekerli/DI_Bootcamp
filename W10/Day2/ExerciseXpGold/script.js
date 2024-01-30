
// Exercise 1 : Promise.all()
// Instructions

//     Use the Promise.all that will accept the 3 promises below.
//     The method should accept an array of promises and return an array of resolved values.
//     If any of the promises are rejected, the function should catch them.

// Explain in a comment how Promise.all work and why you receive this output.

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, 'foo');
// });
// // expected output: Array [3, 42, "foo"]


// promisAll works by taking an array of promises and returning an array of resolved values. If any of the promises are rejected, the function should catch them. In this case, all promises are resolved, so the output is an array of the resolved values. 



// Exercise 2 : Analyse Promise.all()
// Instructions

// Analyse the code below - what will be the output ?

function timesTwoAsync(x) {
  return new Promise(resolve => resolve(x * 2));
}

const arr = [1, 2, 3];
const promiseArr = arr.map(timesTwoAsync);

Promise.all(promiseArr)
  .then(result => {
    console.log(result);
  });

//Guess: [2, 4, 6] because the promiseArr is an array of promises that will resolve to [2, 4, 6] when they are all resolved. 
//Answer: [2, 4, 6] because the promiseArr is an array of promises that will resolve to [2, 4, 6] when they are all resolved.