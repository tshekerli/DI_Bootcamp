// Exercise 1
console.log([1, 2, 3].map(num => {
    if (typeof num === 'number') return num * 2;
    return ;
  })); // [2, 4, 6]
  
  // Exercise 2
  console.log([[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
  )); // [1, 2, 0, 1, 2, 3]
  
  // Exercise 3
  const arrayNum = [1, 2, 4, 5, 8, 9];
  const newArray = arrayNum.map((num, i) => {
      console.log(num, i); // logs each number and its index
      alert(num);
      return num * 2;
  });
  // The value of i is the index of the current element in the array. It will range from 0 to 5 in this case.
  
  // Exercise 4
  const array = [[1],[2],[3],[[[4]]],[[[5]]]];
  console.log(array.flat(2)); // [1, 2, 3, 4, 5]
  
  const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
  console.log(greeting.map(arr => arr.join(' '))); // ["Hello young grasshopper!", "you are", "learning fast!"]
  console.log(greeting.map(arr => arr.join(' ')).join(' ')); // 'Hello young grasshopper! you are learning fast!'
  
  const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
  console.log(trapped.flat(Infinity)); // [3]