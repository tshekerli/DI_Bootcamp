/*
You are tasked with writing a function `solution` that takes a string `S` as input. 
The string consists of 'a' and/or 'b' characters. 
The function should return `true` if all occurrences 
of the letter 'a' appear before all occurrences 
of the letter 'b' in the string `S`. 
If either 'b' does not occur in `S` or 'a' does not occur in `S`, 
the function should also return `true`. 
Otherwise, it should return `false`.

aabb - true
bbaa - flase
aaa - true
bbb - true
ababa - flase
*/


function solution(S) {
    // If 'b' does not occur in `S`, return true
    if (!S.includes('b')) {
        return true;
    }

    // If 'a' does not occur in `S`, return true
    if (!S.includes('a')) {
        return true;
    }

    // Find the last occurrence of 'a' and the first occurrence of 'b'
    const lastA = S.lastIndexOf('a');
    const firstB = S.indexOf('b');

    // If the position of the last 'a' is less than or equal to the position of the first 'b', return true
    return lastA <= firstB;
}

console.log(solution("aabb")); // Expected output: true
console.log(solution("bbaa")); // Expected output: false
console.log(solution("aaa"));  // Expected output: true
console.log(solution("bbb"));  // Expected output: true
console.log(solution("ababa")); // Expected output: false
console.log(solution("aabbaa")); // Expected output: false
console.log(solution("ba")); // Expected output: false
console.log(solution("ab")); // Expected output: true
console.log(solution("a")); // Expected output: true
console.log(solution("b")); // Expected output: true